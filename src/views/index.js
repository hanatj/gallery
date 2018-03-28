import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from './configure-store.js';
import Home from './components/home';
import Category from './components/gallery';
import Profile from './components/header';
import PageNotFound from './components/pageNotFound';
import 'antd/dist/antd.css';
import './index.css';

const store = configureStore();
ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <div className='app'>
        <Profile />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/category/:id' component={Category} />
          <Route path='/' component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
