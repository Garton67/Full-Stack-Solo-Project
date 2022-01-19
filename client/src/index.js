import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/index.css';
import HomePage from './pages/HomePage';
import VideoSearch from './pages/VideoSearch';
import Weather from './pages/Weather';
import BaseLayout from './components/BaseLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import Game from './pages/Game';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './redux/reducers/counter'
import App from './App';



const rootReducer = combineReducers({
  counterR: counterReducer, 
  
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

 


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <app />
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