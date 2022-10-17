import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { seriesData as StormlightSeries } from '../../data/stormlight';
import './Home.css';

const AVAILABLE_SERIES = [
  StormlightSeries
];

const Home = () => {
  return (
    <div className='Home'>
      <header>
        
      </header>
      <div className=''>
        {
          AVAILABLE_SERIES.map(series => (
            <Link to={series.stub}>{ series.title }</Link>
          ))
        }
      </div>
    </div>
  );
}

export default Home;
