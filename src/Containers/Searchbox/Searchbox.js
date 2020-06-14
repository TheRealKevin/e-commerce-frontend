import React from 'react';
import './search-icon.png';
import './Searchbox.css';

const Searchbox = (props) => {
    const {searchChange,searchProducts} = props;
    return(
        <div className='searchboxDiv mv3 pb3 ph4' >
            <input 
                className='searchbox mb4 pa2 ph4' 
                type='search' 
                placeholder='search products'
                onChange={searchChange}
                onKeyPress={searchProducts} 
            />
            <button className='searchButton mb4 pa2 ph3 fa fa-search' type='submit'/>
        </div>
    );
}

export default Searchbox;