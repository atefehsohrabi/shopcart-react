import React from 'react';
import { Link } from 'react-router-dom';
import { shorten } from './function';

const Product = ({productData}) => {
    return (
        <div>
            <img src={productData.image} style={{width:"200px"}} alt="product"/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div>
                    <button>Add to cart</button>
                </div>
            </div>

        </div>
    );
};

export default Product;