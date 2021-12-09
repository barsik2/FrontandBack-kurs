import React, {useState} from 'react';

import Content from './components/Content/Content.js';
import './App.css';
import Header from './components/Header/Header.js';


function App() {
  return (
    <div className='App'>
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
