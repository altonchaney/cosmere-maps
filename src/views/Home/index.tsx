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
        <p className='alt'>An Interactive Journey Map</p>
        <p>Follow along with the primary characters in various Cosmere series and see where they are at specific parts of these stories. You can select character and books individually and are able to specify which chapters you’d like to see visible. These selections are saved if you leave and come back.</p>
        <label className='desktop-warning'>For the best experience, use a tablet or desktop.</label>
      </header>
      <div className='series-list'>
        {
          Object.keys(DATA)
            .map((key: string) => (
              <SeriesCard key={(DATA[key as AvailableSeries]).title} series={DATA[key as AvailableSeries]} />
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
