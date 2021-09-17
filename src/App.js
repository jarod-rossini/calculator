import React from 'react';
import './App.css';
import TheTitle from './components/TheTitle.js';
import Calculator from './components/Calculator';

function display(){
  return(
    <React.Fragment>
      <TheTitle />
      <Calculator />
    </React.Fragment>
  )
}

export default display;
