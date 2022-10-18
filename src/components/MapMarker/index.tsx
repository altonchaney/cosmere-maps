import React, { useCallback } from 'react';
import {
  GiTreasureMap, //region
  GiMedievalGate, //city
  GiMedievalPavilion, //town
  GiStabbedNote, //event
  GiSwordsEmblem, //battle
  GiDirectionSigns //point of interest
} from 'react-icons/gi';

import colors from '../../assets/colors';
import { Marker } from '../../models';
import './MapMarker.css';


const MapMarker = (props: { marker: Marker }) => {
  const { marker } = props;

  const markerIcon = useCallback(() => {
    switch (marker.type) {
      case 'battle':
        return <GiSwordsEmblem size={14} color={colors.primary.white}/>
      case 'region':
        return <GiTreasureMap size={14} color={colors.primary.white}/>
      case 'city':
        return <GiMedievalGate size={14} color={colors.primary.white}/>
      case 'town':
        return <GiMedievalPavilion size={14} color={colors.primary.white}/>
      case 'event':
        return <GiStabbedNote size={14} color={colors.primary.white}/>
      case 'point of interest':
        return <GiDirectionSigns size={14} color={colors.primary.white}/>
      default:
        return <GiDirectionSigns size={14} color={colors.primary.white}/>
    }
  }, [marker]);

  const markerColor = useCallback(() => {
    switch (marker.type) {
      case 'battle':
        return colors.tertiary.red;
      case 'region':
        return colors.tertiary.green;
      case 'city':
        return colors.tertiary.orange;
      case 'town':
        return colors.tertiary.yellow;
      case 'event':
        return colors.tertiary.blue;
      case 'point of interest':
        return colors.tertiary.teal;
      default:
        return colors.tertiary.teal;
    }
  }, [marker]);

  return (
    <div className='Marker' style={{ backgroundColor: markerColor() }}>
      { markerIcon() }
    </div>
  );
}

export default MapMarker;
