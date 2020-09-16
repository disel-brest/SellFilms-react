import React from 'react';
import './App.scss';

import Header from './components/Header';
import Films from './pages/Films';
import Cart from './pages/Cart';
import Film from './pages/Film';

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