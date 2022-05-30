import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos Axis3DMendoza mi E-commerse" />
      <ItemCount color='blue' stock='10' inicial='0' />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
