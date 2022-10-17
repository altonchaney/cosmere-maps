import React, { useMemo, useState } from 'react';
import { MapContainer, ImageOverlay, Marker, Polyline, useMapEvents, useMap, Rectangle } from 'react-leaflet';
import L, { Icon } from 'leaflet';

import { DATA } from '../../data';
import map from '../../assets/stormlight.webp';
import { AvailableSeries, Chapter } from '../../models';
import './Map.css';
import MapPanel from '../../components/MapPanel';
import { characters, books } from '../../data/stormlight';
import MapTimeline, { ChapterRange } from '../../components/MapTimeline';


const Coordinates = () => {
  const [position, setPosition] = useState<L.LatLng>();
  const map = useMapEvents({
    click(e) {
      console.log(e.latlng)
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
  const [visibleRange, setVisibleRange] = useState<ChapterRange>({ start: data.books[0].chapters[0], end: data.books[0].chapters[0] });

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
      >
        <ImageOverlay
          url={map}
          zIndex={-1}
          bounds={[[0,0], [1000,1720]]}
          className='map'
        />
        {
          data.markers
            .map(marker => (
              <Marker icon={new Icon({ iconUrl: marker.image, iconSize: [24, 24] })} position={marker.coordinates} />
            ))
        }
        {
          data.paths
            .filter(path => (
              visibleCharacters.includes(path.character.name) &&
              visibleRange.start.chapter <= path.chapter.chapter &&
              visibleRange.end.chapter >= path.chapter.chapter
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
        }
        <Coordinates />
        
      </MapContainer>
      <MapPanel
        title={data.title}
        characters={characters}
        selectCharacter={toggleVisibleCharacters}
        books={books}
        selectBook={toggleVisibleBooks}
      />
      <MapTimeline
        chapters={data.books[0].chapters}
        callback={(range) => setVisibleRange(range)}
      />
    </div>
  );
}

export default Map;
