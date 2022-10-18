import React, { useState } from 'react';
import { GiBookPile } from 'react-icons/gi';

import { Series } from '../../models';
import './SeriesCard.css';
import { Link } from 'react-router-dom';
import Title from '../Title';
import colors from '../../assets/colors';


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
        className={`series-tile ${ hovered ? 'hovered' : '' }`}
        style={{
          backgroundImage: `url(${ series.image })`
        }}
      >
        <div className='content-container'>
          <Title title={series.title} subtitle='Series'/>
          <div className='details book-count'>
            <GiBookPile size={16} color={colors.primary.lightGray}/>
            <p>{ series.books.length } Book{ series.books.length > 1 ? 's' : '' }</p>
          </div>
        </div>
        
        <div className='overlay'></div>
      </div>
    </Link>
  );
}

export default SeriesCard;
