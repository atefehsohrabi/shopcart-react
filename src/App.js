import { Switch, Redirect,switchCase, Route } from 'react-router-dom';
import './App.css';
import Store from './store';
import ProductContextProvider from "./productContextProvider";
import DetailProduct from './DetailProduct';



function App() {
  return (
  <ProductContextProvider>
    <switch>
        <Route path="/products" component={Store}/>
        <Route path="/products:id" component={DetailProduct}/>
        <Redirect to="/products"/>
    </switch>

  </ProductContextProvider>
  );
}

export default App;