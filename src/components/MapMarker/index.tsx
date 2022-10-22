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


const MapMarker = (props: { marker: Marker, enlarged: boolean }) => {
  const { marker, enlarged } = props;

  const markerIcon = useCallback(() => {
    switch (marker.type) {
      case 'battle':
        return <GiSwordsEmblem size={enlarged ? 20 : 14} color={colors.primary.white}/>
      case 'region':
        return <GiTreasureMap size={enlarged ? 20 : 14} color={colors.primary.white}/>
      case 'city':
        return <GiMedievalGate size={enlarged ? 20 : 14} color={colors.primary.white}/>
      case 'town':
        return <GiMedievalPavilion size={enlarged ? 20 : 14} color={colors.primary.white}/>
      case 'event':
        return <GiStabbedNote size={enlarged ? 20 : 14} color={colors.primary.white}/>
      case 'point of interest':
        return <GiDirectionSigns size={enlarged ? 20 : 14} color={colors.primary.white}/>
      default:
        return <GiDirectionSigns size={enlarged ? 20 : 14} color={colors.primary.white}/>
    }
  }, [marker, enlarged]);

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
    <div className='Marker' style={{ backgroundColor: markerColor(), width: enlarged ? 36 : 22, height: enlarged ? 36 : 22 }}>
      { markerIcon() }
    </div>
  );
}

export default MapMarker;
