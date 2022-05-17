import { useState } from "react"
import './App.css';
import Button from './components/Button/Button';
import CountClass from './components/CountClass/CountClass';
import CountFunction from './components/CountFunction/CountFunction';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [show,setShow]=useState(true)
  return (
    <div className="App">
      <button onClick={()=>setShow(!show)}>mostrar o no mostrar</button>
      {/*<NavBar />*/}
      {/* <CountFunction color='red'>
        contador frutas
        <Button label='BOTON hijo'></Button>
      </CountFunction> */}
      {show ?<CountFunction /> : null}
      {/* <CountFunction color='red'>
        contador verduras
        <Button label='BOTON2 hijo'></Button>
      </CountFunction> */}
    </div>
  );
}

export default App;
