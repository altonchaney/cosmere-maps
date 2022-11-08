import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { Map } from 'character-journey-map';

import './index.css';
import Home from './views/Home';

import reportWebVitals from './reportWebVitals';
import { AvailableSeries, DATA } from './data';

const routes = Object.keys(DATA)
    .map((key: string) => ({
      path: `/${ DATA[key as AvailableSeries].stub }`,
      element: <Map data={DATA[key as AvailableSeries]} name={key as AvailableSeries} />
    }))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  ...routes
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
