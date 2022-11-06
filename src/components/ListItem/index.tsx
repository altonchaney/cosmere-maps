import React, { useState } from 'react';
import {
  GiSemiClosedEye, //visible
} from 'react-icons/gi';
import colors from '../../assets/colors';

import './ListItem.css';


const ListItem = (props: { selected: boolean, image: string, title?: string, color?: string, callback?: () => void }) => {
  const { selected, image, title, color, callback } = props;
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      className={`ListItem ${ hovered ? 'hovered' : '' } ${ selected ? 'selected' : '' }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={callback}
    >
      {
        selected &&
        <div className='selected-indicator'>
          <GiSemiClosedEye color={colors.primary.black} size={16} />
        </div>
      }
      <div
        className='icon'
        style={
          color ?
          {
            border: `4px solid ${ color }`,
            borderRadius: '50%',
            height: 50
          } : undefined
        }
      >
        <img src={image} />
      </div>
      { title }
    </div>
  );
}

export default ListItem;
