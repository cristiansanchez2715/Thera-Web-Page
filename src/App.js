import logo from './logo.svg';
import './App.css';
import React from 'react';
import Inicio from './components/Inicio';
import Utilidad from './components/Utilidad';
import TiposDeServicio from './components/TiposDeServicio';
import Precios from './components/Precios';
import Contactame from './components/Contactame';

function App() {
  return (
    <div className="App">
      <React.Fragment>
      <nav className='barnav'>
          <a className='barnav-item' href='#inicio'>Inicio</a>
          <a className='barnav-item' href='#utilidad'>Utilidad</a>
          <a className='barnav-item' href='#tiposDeServicio'>Servicios</a>
          <a className='barnav-item' href='#precios'>Precios</a>
          <a className='barnav-item' href='#contactame'>Contactame</a>
          </nav>

       <div id='inicio'>
      <Inicio />
        </div>

        <div id='utilidad'>
          <Utilidad />
          </div>

          <div id='tiposDeServicio'>
          <TiposDeServicio />
          </div>

          <div id='precios'>
          <Precios />
          </div>

          <div id='contactame'> 
          <Contactame />
          </div>
      </React.Fragment>
     
    </div>
  );
}

export default App;
