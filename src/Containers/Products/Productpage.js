import React , {Component} from 'react';
import Detailedpages from '../DetailedPages/Detailedpages';
import Productlist from '../../Components/ProductList/Productlist';
import {BrowserRouter as Router, Route } from 'react-router-dom';

const Productpage = (props) => {
    const {products,addItemToCart} = props;
    return(
        <Router>
            <div className='Homescreen'>
                <div className = 'list tc'>
                    <Route path='/products' exact render={(props) => <Productlist items={products} {...props} />}/>
                    <Route path='/products/:id' exact render={(props) => <Detailedpages products={products} addItemToCart={addItemToCart} {...props}/>}/>
                </div>
            </div>
        </Router>
    );
}

export default Productpage;