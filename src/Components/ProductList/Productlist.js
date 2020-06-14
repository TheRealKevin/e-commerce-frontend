import React from 'react';
import Productcard from '../Productcard/Productcard';
import { Link } from 'react-router-dom';

const Productlist = (props) => {
    const {items} = props;
    const Productlistcomponent = items.map((product) => { //<----- Rendering all the product Cards
        return(
            <Link className='' to={`/products/${product.pid}`} >
                <Productcard pName = {product.pName} price = {product.price} pURL={product.pURL}/>
            </Link>
        );         
    })
    
    return(
        <div>
            {Productlistcomponent}
        </div>
    );
}

export default Productlist;