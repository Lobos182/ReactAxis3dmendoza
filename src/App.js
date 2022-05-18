import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>      
      <ItemListContainer color='Black' greeting="Bienvenidos Axis3DMendoza mi E-commerse"/>      
    </div>
  );
}

export default App;
