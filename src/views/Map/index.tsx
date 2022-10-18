import React, { useCallback, useMemo, useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MapContainer, ImageOverlay, Marker, Polyline, useMapEvents, ZoomControl, LayerGroup, FeatureGroup, Tooltip } from 'react-leaflet';
import L, { DivIcon } from 'leaflet';
// import {
//   GiBookPile, //books
//   GiExitDoor, //exit
// } from 'react-icons/gi';

import { DATA } from '../../data';
import map from '../../assets/stormlight.webp';
import { AvailableSeries } from '../../models';
import './Map.css';
import MapPanel from '../../components/MapPanel';
import { characters, books } from '../../data/stormlight';
import MapTimeline from '../../components/MapTimeline';
import MapMarker from '../../components/MapMarker';


const Coordinates = () => {
  const [position, setPosition] = useState<L.LatLng>();
  const map = useMapEvents({
    click(e) {
      console.log([e.latlng.lat, e.latlng.lng])
    }
  });
  return position ? (
    <Marker position={[position.lat, position.lng]}>
      {position.lat}, {position.lng}
    </Marker>
  ) : <></>
};

const Map = (props: {name: AvailableSeries}) => {
  const { name } = props;
  const data = useMemo(() => DATA[name], [name]);
  const [visibleCharacters, setVisibleCharacters] = useState<string[]>([]);
  const [visibleBooks, setVisibleBooks] = useState<string[]>([books[0].title]);
  const [visibleRange, setVisibleRange] = useState<number[]>([0, 0]);

  const toggleVisibleCharacters = (name: string) => {
    if (visibleCharacters.includes(name)) {
      setVisibleCharacters(visibleCharacters.filter(n => (n !== name)));
    } else {
      setVisibleCharacters([...visibleCharacters, name]);
    }
  };

  const toggleVisibleBooks = (title: string) => {
    if (visibleBooks.includes(title)) {
      setVisibleBooks(visibleBooks.filter(t => (t !== title)));
    } else {
      setVisibleBooks([...visibleBooks, title]);
    }
  };

  const renderMarkers = useCallback(() => {
    var visibleRangeArray = [];
    for (let i = visibleRange[0]; i <= visibleRange[1]; i++) { visibleRangeArray.push(i); }
    const visibleChapters = visibleRangeArray.map((i) => (data.books[0].chapters[i].chapter));
    return data.markers
      .filter(marker => (
        marker.chapters.some(value => visibleChapters.includes(value.chapter))
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
              iconAnchor: [11, 20],
            })
          }
          position={marker.coordinates}
        >
          <Tooltip>
            <div className='tooltip'>
              {marker.image && <img src={marker.image} />}
              <p className='alt'>{ marker.type }</p>
              <h2>{ marker.title }</h2>
              {marker.description && <p>{ marker.description }</p>}
            </div>
          </Tooltip>
        </Marker>
      ))
  }, [visibleRange]);

  const renderPaths = useCallback(() => {
    return data.paths
      .filter(path => (
        visibleCharacters.includes(path.character.name) &&
        data.books[0].chapters[visibleRange[0]].chapter <= path.chapter.chapter &&
        data.books[0].chapters[visibleRange[1]].chapter >= path.chapter.chapter
        // visibleBooks.includes
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
            opacity: path.confirmed ? 1 : 0.7
          }}
        />
      ))
  }, [visibleCharacters, visibleRange, visibleBooks]);

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
        { renderMarkers() }
        { renderPaths() }
        <Coordinates />
        
      </MapContainer>
      <MapPanel
        title={data.title}
        characters={characters}
        books={books}
        selectCharacter={toggleVisibleCharacters}
        selectBook={toggleVisibleBooks}
        selectedCharacters={visibleCharacters}
        selectedBooks={visibleBooks}
      />
      <MapTimeline
        book={data.books[0]}
        callback={(range) => setVisibleRange(range)}
      />
    </div>
  );
}

export default Map;
