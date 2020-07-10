import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import MiComponente from './components/MiComponente';
import DisplayImageFromServer from './components/displayImageFromServer/displayImageFromServer'
import DisplayName from './components/displayName/DisplayName';

function imprimir(nombre,edad){
  var presentacion =<div>
    <h1>mi nombre es{nombre}</h1>
    <h2> mi edad {edad}</h2>
</div>;
return presentacion
}
function App() {
  var nombre = "martin"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {imprimir('martin',33)}
        </p>
        <h1> Hola soy martin!</h1>
     
     <section className="componentes">
    <DisplayName />
     </section>
      </header>
    </div>
  );
}

export default App;
