import React from 'react';
import Addcart from './Addtocarticon.png';
import './Productcard.css';

class Productcard extends React.Component {
    constructor() {
        super()
        this.state = {
            isMouseInside : false,
            borderColor : 'white'
        }
    }

    mouseEnter = () => {
        this.setState({isMouseInside : true,borderColor : 'black'})
    }
    
    mouseLeave = () => {
        this.setState({isMouseInside : false, borderColor : 'white'})
    }

    onAddToCartClick = (event) => {
        if(event.target.className === 'addToCart'){
            alert('Added to cart');
            event.stopPropagation();
        }
    }

    render(){
        const {pName , price , pURL} = this.props;
        return (
            <div className = 'card pdiv dib pa3 ma3 grow ba bw1' onMouseEnter = {this.mouseEnter} onMouseLeave = {this.mouseLeave}>
                <img className = 'pimg' src = {pURL} alt = ''/>
                <div className='addToCart fr ma3 ba' style={{borderColor : `${this.state.borderColor}`}}>
                    {this.state.isMouseInside ? <button onClick={this.onAddToCartClick}><img src = {Addcart} alt = ''/></button> : null}
                </div>
                <div className = 'restdiv tc'>
                    <h3 className='pName'>{pName}</h3>
                    <p>$ {price}</p>
                </div>
            </div>
        );
    }
}

export default Productcard;