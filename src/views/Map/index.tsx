import React, { useCallback, useMemo, useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MapContainer, ImageOverlay, Marker, Polyline, useMapEvents, ZoomControl, Tooltip } from 'react-leaflet';
import L, { DivIcon } from 'leaflet';

import { DATA } from '../../data';
import map from '../../assets/stormlight.webp';
import { AvailableSeries } from '../../models';
import './Map.css';
import MapPanel from '../../components/MapPanel';
import MapTimeline from '../../components/MapTimeline';
import MapMarker from '../../components/MapMarker';


const Coordinates = () => {
  const map = useMapEvents({
    click(e) {
      console.log([e.latlng.lat, e.latlng.lng])
    }
  });
  return <></>
};

const Map = (props: {name: AvailableSeries}) => {
  const { name } = props;
  const data = useMemo(() => DATA[name], [name]);
  const [visibleCharacters, setVisibleCharacters] = useState<string[]>(data.characters.map(c => c.name));
  const [visibleBooks, setVisibleBooks] = useState<number[]>([0]);
  const [visibleRange, setVisibleRange] = useState<number[]>([0, 0]);

  const toggleVisibleCharacters = (name: string) => {
    if (visibleCharacters.includes(name)) {
      setVisibleCharacters(visibleCharacters.filter(n => (n !== name)));
    } else {
      setVisibleCharacters([...visibleCharacters, name]);
    }
  };

  const toggleVisibleBooks = (index: number) => {
    if (visibleBooks.includes(index)) {
      setVisibleBooks(visibleBooks.filter(i => (i !== index)));
    } else {
      setVisibleBooks([...visibleBooks, index]);
    }
  };

  const renderMarkers = useCallback((bookIndex: number) => {
    const latestVisibleBook = Math.max(...visibleBooks);
    var visibleRangeArray = [];
    for (let i = visibleRange[0]; i <= visibleRange[1]; i++) { visibleRangeArray.push(i); }
    const visibleChapters = visibleRangeArray.map((i) => (data.books[0].chapters[i].chapter));
    return data.markers
      .filter(marker => (
        latestVisibleBook !== bookIndex ||
        (
          marker.appearances[bookIndex + 1] &&
          marker.appearances[bookIndex + 1]
            .some(chapter => visibleChapters.includes(chapter.chapter))
        )
      ))
      .map(marker => (
        <Marker
          key={marker.title}
          icon={
            new DivIcon({
              html: renderToStaticMarkup(
                <MapMarker marker={marker} />
              ),
              iconSize: [22, 22],
              iconAnchor: [11, 16],
            })
          }
          opacity={latestVisibleBook === bookIndex ? 1 : 0.7}
          position={marker.coordinates}
        >
          <Tooltip>
            <div className='tooltip'>
              {marker.image && <img src={marker.image} alt={marker.type} />}
              <p className='alt'>{ marker.type }</p>
              <h2>{ marker.title }</h2>
              {marker.description && <p>{ marker.description }</p>}
            </div>
          </Tooltip>
        </Marker>
      ))
  }, [visibleRange, visibleBooks, data.books, data.markers]);

  const renderPaths = useCallback((bookIndex: number) => {
    const latestVisibleBook = Math.max(...visibleBooks);
    return data.paths
      .filter(path => (
        visibleCharacters.includes(path.character.name) &&
        (
          (
            latestVisibleBook !== bookIndex
          ) || (
            data.books[bookIndex].title === path.book.title &&
            data.books[bookIndex].chapters[visibleRange[0]].chapter <= path.chapter.chapter &&
            data.books[bookIndex].chapters[visibleRange[1]].chapter >= path.chapter.chapter
          )
        )
      ))
      .map(path => (
        <Polyline
          stroke
          key={path.coordinates.join(',')}
          positions={path.coordinates}
          pathOptions={{
            color: path.character.color, 
            weight: 4,
            dashArray: path.confirmed ? [0] : [10, 10, 1, 10],
            opacity: latestVisibleBook === bookIndex ? 1 : 0.7
          }}
        />
      ))
  }, [visibleCharacters, visibleBooks, visibleRange, data.books, data.paths]);

  return (
    <div className='map'>
      <MapContainer
        crs={L.CRS.Simple}
        style={{width: '100vw', height: '100%', overflow: 'hidden', backgroundColor: data.backgroundColor, zIndex: 0}}
        maxBounds={[[0,0], [1000,1720]]}
        center={[500,860]}
        zoom={0}
        minZoom={-1} maxZoom={1}
        attributionControl={false}
        zoomControl={false}
      >
        <ZoomControl position='topright' />
        <ImageOverlay
          url={map}
          zIndex={-1}
          bounds={[[0,0], [1000,1720]]}
          className='map'
        />
        { visibleBooks.map(i => renderMarkers(i)) }
        { visibleBooks.map(i => renderPaths(i)) }
        <Coordinates />
      </MapContainer>
      <MapPanel
        title={data.title}
        characters={data.characters}
        books={data.books}
        selectCharacter={toggleVisibleCharacters}
        selectBook={toggleVisibleBooks}
        selectedCharacters={visibleCharacters}
        selectedBooks={visibleBooks}
      />
      {
        visibleBooks.length &&
        <MapTimeline
          book={data.books[Math.max(...visibleBooks)]}
          callback={(range) => setVisibleRange(range)}
        />
      }
      
    </div>
  );
}

export default Map;
