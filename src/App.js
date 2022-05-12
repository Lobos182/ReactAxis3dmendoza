import './App.css';
import Button from './components/Button/Button';
import CountClass from './components/CountClass/CountClass';
import CountFunction from './components/CountFunction/CountFunction';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CountFunction color='red'>
        contador frutas
        <Button label='BOTON hijo'></Button>
      </CountFunction>

      <CountFunction color='red'>
        contador verduras
        <Button label='BOTON2 hijo'></Button>
      </CountFunction>
    </div>
  );
}

export default App;
