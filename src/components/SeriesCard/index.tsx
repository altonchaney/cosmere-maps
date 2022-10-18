import React, { useState } from 'react';

import { Series } from '../../models';
import './SeriesCard.css';
import { Link } from 'react-router-dom';
import Title from '../Title';


const SeriesCard = (props: { series: Series }) => {
  const { series } = props;
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <Link
      to={series.stub} 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`content-container series-tile ${ hovered ? 'hovered' : '' }`}
        style={{
          backgroundImage: `url(${ series.image })`
        }}
      >
        <Title title={series.title} subtitle='Series'/>
        <div className='overlay'></div>
      </div>
    </Link>
  );
}

export default SeriesCard;
