import React, { useContext } from 'react';
import { ProductsContext } from './productContextProvider';
import { Link } from 'react-router-dom';

const DetailProduct = (props) => {
    const id = props.match.params.id;
    const data = useContext(ProductsContext);
    const product = data[id-1];
    const {image, title, description, price,category} = product;
    return (
        <div>
            <img src={image}/>
            <div>  
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>category:</span>{category}</p>
                <div>
                    <span>{price} $</span>
                    <link to="/products">Back to shop</link>
                    </div>
          
            </div>
        </div>
    );
};

export default DetailProduct;