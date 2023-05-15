import React,{useContext} from 'react';
import Product from './product';
import { ProductsContext } from './productContextProvider';





const Store = () => {
 const products = useContext(ProductsContext)
    return (
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
            {
                products.map(product => <Product key={product.id} productData={product} />)
            }
     
        </div>
    );
};

export default Store;