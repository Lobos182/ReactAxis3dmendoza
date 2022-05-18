import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <ItemListContainer color='white' greeting="Bienvenidos Axis3DMendoza mi E-commerse"/>
           
    </div>
  );
}

export default App;
