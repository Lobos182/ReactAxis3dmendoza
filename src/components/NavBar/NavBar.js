import './NavBar.css'
import logo from '../../../src/logo.svg';


const NavBar = () => {


    return (
        <nav className="navbar">
            <a className="navbar-logo" href="#!">
                <img src={logo} alt='logo empresa'/>
            </a>
            <ul className="menu">
                <li><a href="#!" onClick={()=>console.log('hice click en Productos')}>Productos</a></li>
                <li><a href="#!" onClick={()=>console.log('hice click en Nosotros')}>Nosotros</a></li>
                <li><a href="#!" onClick={()=>console.log('hice click en Carrito')}>Carrito</a></li>
                {/* <li><a href="#!"></a></li> */}
            </ul>
        </nav>
    )
}

export default NavBar