import React from 'react';
import { SeriesCard } from 'character-journey-map';
import { AvailableSeries, DATA } from '../../data';
import './Home.css';

const Home = () => {
  return (
    <div className='Home'>
      <header>
        <h1>Cosmere Maps</h1>
        <p className='alt'>An Interactive Journey Map</p>
        <p>Follow along with the primary characters in various Cosmere series and see where they are at specific parts of these stories. You can select character and books individually and are able to specify which chapters you’d like to see visible.</p>
        <label className='desktop-warning'>For the best experience, use a tablet or desktop.</label>
      </header>
      <div className='series-list'>
        {
          Object.keys(DATA)
            .map((key: string) => (
              <SeriesCard key={`series-card-${ key }`} series={DATA[key as AvailableSeries]} />
            ))
        }
      </div>
      <footer>
        <a href='https://github.com/altonchaney/cosmere-maps/issues' target='_blank' rel='noreferrer noopener'>
          <p className='alt'>
            Having issues? Submit them here.
          </p>
        </a>
      </footer>
      <div className='background'/>
    </div>
  );
}

export default Home;
