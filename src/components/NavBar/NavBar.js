import './NavBar.css'


const NavBar = () => {


    return (
        <nav class="navbar">
            <a class="navbar-logo" href="#!">
                <img src="" alt='logo empresa'/>
            </a>
            <ul class="menu">
                <li><a href="#!">Productos</a></li>
                <li><a href="#!">Nosotros</a></li>
                <li><a href="#!">Carrito</a></li>
                {/* <li><a href="#!"></a></li> */}
            </ul>
        </nav>
    )
}

export default NavBar