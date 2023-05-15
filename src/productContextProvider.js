import React, { useState, useEffect, createContext } from 'react';
import { getUrl } from './api';

export const ProductsContext = createContext();

const ProductContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchAPI = async()=>{
            setProducts(await getUrl());
        }
        fetchAPI();
    },[]);
    return (
        <ProductsContext.Provider value={products}>
           {children}
        </ProductsContext.Provider>
    );
};
export default ProductContextProvider;