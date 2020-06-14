import React from 'react';
import Productpage from './Containers/Products/Productpage';
import Searchbox from './Containers/Searchbox/Searchbox';
import Productdata from './Components/ProductList/Productdata';
import Homepage from './Containers/Homepage';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Containers/Cart/Cart';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(){
      super()
      this.state = {
          searchField : '', 
          products: Productdata,    //<-------- Entire Products Catalogue 
          addedToCart: []           //<-------- Items in Cart
      }
  }

  //<---------------- NOTE : DON'T DO the following ---> ((item) => {item.pName !== name});
  removeItemFromCart = (name) => {                   
    const filteredItems = this.state.addedToCart.filter((item) => item.pName !== name); //Filtering items except the one mentioned in arguments
    this.setState({addedToCart: filteredItems});
  }

  addItemToCart = (id) => {
    const item = this.state.products.filter((item) => item.pid === id);
    alert('Item Added');
    this.setState({addedToCart: this.state.addedToCart.push(item)}); //<----- Push product selected from products(catalogue) and push it in the array of objects
  }

  onSearchChange = () => {
      onkeydown= (event) => {       //As Soon as we press enter, state is updated 
          this.setState({searchField: event.target.value});
      } 
  }

  onSearchProducts = (event) =>{  //event is keypress
      if(event.key === 'Enter'){  
          this.setState({
              products : Productdata.filter(phones => {
                  return phones.pName.toLowerCase().includes(this.state.searchField.toLowerCase());
          })
      })}
  }
  // HomePage -> ProductPage (ProductList and DetailedPages) 
  render(){
    return (
      <Router>
        <div className = 'App'>
          <div>
            <Navbar />
          </div>
          <div className='tc'>
            <Searchbox searchChange={this.onSearchChange} searchProducts={this.onSearchProducts}/>
          </div>
            <Route path='/' exact component={Homepage}/>
            <Route path ='/products' exact render={(props) => <Productpage addItemToCart={this.addItemToCart} products={this.state.products} {...props}/>}/>
            <Route path='/cart' exact render={(props) => <Cart removeItemFromCart={this.removeItemFromCart} addedToCart={this.state.addedToCart} {...props}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;
