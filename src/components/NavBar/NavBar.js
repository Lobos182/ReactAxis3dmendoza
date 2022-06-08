import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';
import React, { useState } from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar
                color="dark"
                dark
                expand="md"
                fixed=""
                
            ><Link className='Link' to='/'>
                    <NavbarBrand>
                        <img src='./images/axis3d.jpg' width="80" height="auto" className=" d-inline-block align-text-center" alt='logo' />
                        Axis3DMendoza
                    </NavbarBrand>
                </Link>
                <NavbarToggler onClick={toggleNavbar} className="me-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav className="mx-auto" navbar>
                        <NavItem className='navitem' href="#!">
                            <UncontrolledDropdown
                                inNavbar
                                nav
                                >
                                <DropdownToggle
                                    caret
                                    nav>
                                    Productos
                                </DropdownToggle>
                                <DropdownMenu end>
                                    <DropdownItem>
                                        <Link className='Link' to='/categoria/animales'>
                                            Animales
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                    <Link className='Link' to='/categoria/accesorios'>
                                            Accesorios
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                    <Link className='Link' to='/categoria/figuras'>
                                            Figuras
                                        </Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </NavItem>
                        <NavItem>
                        <Link className='Link' to='/about'>
                                <NavLink className='navitem' href="#!">
                                    Nosotros
                                </NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <NavLink className='navitem' href="#!">
                                Contacto
                            </NavLink>
                        </NavItem>                        
                    </Nav>
                </Collapse>
                <NavbarText>
                    <CartWidget cart='6' />
                </NavbarText>
            </Navbar>
        </div>
    );
}

export default NavBar