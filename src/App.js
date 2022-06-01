import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <div className="App">
      {/* <ItemCount color='blue' stock='10' inicial='0' /> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos Axis3DMendoza mi E-commerse" />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting="Productos Filtrados" />} />
          <Route path='/detalle/:productoId' element={<ItemDetailContainer />} />
          <Route path='/about' element={<h1>Nosotros</h1>} />
          <Route path='*' element={<h1>No se encuentra la Pagina</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
