import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import VideoSearch from './pages/VideoSearch';
import Weather from './pages/Weather';
import BaseLayout from './components/BaseLayout';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/Weather' component={Weather} />
          <Route path='/videosearch' component={VideoSearch} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);