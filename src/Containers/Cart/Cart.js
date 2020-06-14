import React from 'react';
// import addedToCart from '../../Components/ProductList/addedToCart';
import './Cart.css';
// import {BrowserRouter as Router, Route } from 'react-router-dom';

const renderTableData = (addedToCart,removeItemFromCart) => {
    return addedToCart.map((item) => {
        return(
            <tr>
                <td className='tableImage'><img src={item.pURL} alt=''/></td>
                <td>{item.pName}</td>
                <td>{item.price}</td>
                <td><button onClick={() => removeItemFromCart(item.pName)}>Remove Item</button></td>
            </tr>
            )
        }
    )
}

const renderFinalDetails = (addedToCart) => {
    const sum = addedToCart.reduce((a,b) => {return a + b.price},0);    
    return(
        <tr>
            <td></td>
            <td>Quantity : {addedToCart.length}</td>
            <td>Total Cost : {sum}</td>
            <td></td>
        </tr>
    );
}

const Cart = (props) => {
    const {addedToCart,removeItemFromCart} = props;
    return (
        <div className='cartDiv dib mt4'>
            <div className='cartSummary tc'>
                <table className='cartTable'>
                    <tbody>
                        {renderTableData(addedToCart,removeItemFromCart)}
                        {renderFinalDetails(addedToCart)}
                    </tbody>
                </table>
            </div>
        </div>
    );
} 

export default Cart;