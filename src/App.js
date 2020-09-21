import React from 'react';
import './App.scss';

import Header from './containers/Header';
import Films from './containers/Films';
import Cart from './containers/Cart';
import Film from './containers/Film';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Switch>
        <Route exact path='/' component={Films} />
        <Route path='/cart' component={Cart} />
        <Route path='/films/:filmId' component={Film} />
      </Switch>
    </div>
  );
}

export default App;