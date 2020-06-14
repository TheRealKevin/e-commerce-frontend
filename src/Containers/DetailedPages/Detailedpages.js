import React from 'react';
import './Detailedpages.css';
import Productdata from '../../Components/ProductList/Productdata';

const DetailedPages = (props) => {          
    const {addItemToCart,products} = props;
        const product = products.find((item)=> {        //<------ Finding thr item with pid from products in state
            if((item.pid) === Number(props.match.params.id)){
                return item;
            }
        });

        return(
        <div style={{display: 'flex',justifyContent: 'space-between'}}>
            <div className='dPageImgDiv bw1 mb4'>
                <img className='dPageImg' src={product.pURL} alt={'phone'}/>
            </div>
            <div className='infoSide tc pb4 mb4'>
                <p className className='phoneTitle fw4'>{product.pName}</p>
                <div>
                    <ul className='details'>
                        <li>90 Hz Fluid Display</li>
                        <li>Qualcomm® Snapdragon™ 865 with 5G</li>
                        <li>Slim and Sleek Curved Design</li>
                        <li>48 MP Triple Camera</li>
                    </ul>
                </div>
                <div className='overview dib fw3'>
                    <p>
                    The OnePlus 8 Pro is the biggest, meanest, and best smartphone OnePlus has put out thus far. At least that’s what it aims to be. It features a fantastic set of cameras, a big, gorgeous, 120 Hz AMOLED screen, the fastest possible hardware on an Android phone, and an impressive battery.
                    But do you need to spend $900 for it, when the OnePlus 8 delivers a similar experience for $700? Well, the 8 Pro’s camera is definitely an improvement over its cheaper sibling, but it also has a bunch of quirks that you may or may not like.
                    </p>
                </div>
                <div>
                    <button className='addToCartButton' onClick={() => addItemToCart(product.pid)} type='button'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default DetailedPages;