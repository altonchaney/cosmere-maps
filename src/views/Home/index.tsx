import React from 'react';
import SeriesCard from '../../components/SeriesCard';
import { seriesData as StormlightSeries } from '../../data/stormlight';
import './Home.css';

const AVAILABLE_SERIES = [
  StormlightSeries
];

const Home = () => {
  return (
    <div className='Home'>
      <header>
        <h1>Cosmere Maps</h1>
        <p>Follow along the character journeys in your favorite Cosmere series and see exactly where they were at specific parts of these stories. You can select character and books individually and are able to specify which chapters you’d like to see visible. For the best experience, use a tablet or desktop.</p>
      </header>
      <div className='series-list'>
        {
          AVAILABLE_SERIES.map(series => (<SeriesCard key={series.title} series={series} />))
        }
      </div>
    </div>
  );
}

export default Home;
