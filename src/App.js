import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import MiComponente from './components/MiComponente'
import Peliculas from './components/Peliculas'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <MiComponente></MiComponente>
        <Peliculas></Peliculas>

      </header>

    </div>
  );
}

export default App;
