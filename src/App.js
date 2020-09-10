import React from 'react';
import './App.scss';

import Header from './components/Header';
import Films from './pages/Films';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      {/* <Switch> */}
        <Films />
        {/* <Basket /> */}
        {/* <Film /> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
