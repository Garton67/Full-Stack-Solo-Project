import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/index.css';
import HomePage from './pages/HomePage';
import VideoSearch from './pages/VideoSearch';
import Weather from './pages/Weather';
import BaseLayout from './components/BaseLayout';
import { Provider } from 'react-redux'
import Login from './pages/Login';
import store from './redux/store';
import Register from './pages/Register';
import Game from './pages/Game';






ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/weather' component={Weather} />
          <Route path='/videosearch' component={VideoSearch} />
          <Route path='/game' component={Game} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);