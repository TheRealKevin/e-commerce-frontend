import React from 'react';
import './Navbar.css';
import home from '../Productcard/home.png';
import Carticon from '../Productcard/Carticon.png';
import Cart from '../../Containers/Cart/Cart';
import Productdata from '../ProductList/Productdata'; 
import {BrowserRouter as Router, Route } from 'react-router-dom';

// Anchor Tag Image -->  <a className = 'fr pr2' href = ''><img src = {Carticon} alt = ''/></a>

const Navbar = () => {
    return(
        <Router>
            <div>
                <nav className = 'pa2 bb bw2'>
                    <a href = '/'><img src = {home} alt = ''/></a>
                    <a href = '/products' className='product'>Products</a>
                    <a href ='/cart'><img className = 'cartImage pt2 pr2 ' src = {Carticon} alt = ''/></a>
                </nav>
            </div>
        </Router>
    );
}

export default Navbar;