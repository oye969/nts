import React from 'react';
import './App.css';
import Slider from './Components/Slider'
import Header from './Components/Header'
import Mixtapes from './Components/Mixtapes'
import News from './Components/News'

function App() {
  return (
    <div className="App">
       <Header/>
      <img src="./h.jpg" alt="banner"/>
      <Mixtapes/>
      <Slider/>
      <News />
    </div>
  );
}

export default App;
