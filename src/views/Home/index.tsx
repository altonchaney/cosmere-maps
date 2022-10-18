import React from 'react';
import SeriesCard from '../../components/SeriesCard';
import { DATA} from '../../data';
import { AvailableSeries } from '../../models';
import './Home.css';

const Home = () => {
  return (
    <div className='Home'>
      <header>
        <h1>Cosmere Maps</h1>
        <p>Follow along the character journeys in your favorite Cosmere series and see exactly where they were at specific parts of these stories. You can select character and books individually and are able to specify which chapters you’d like to see visible. For the best experience, use a tablet or desktop.</p>
      </header>
      <div className='series-list'>
        {
          Object.keys(DATA)
            .map((key: string) => (
              <SeriesCard key={(DATA[key as AvailableSeries]).title} series={DATA[key as AvailableSeries]} />
            ))
        }
      </div>
    </div>
  );
}

export default Home;
