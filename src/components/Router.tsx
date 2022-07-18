import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home';
import NotFoundPage from '../pages/NotFoundPage';
import ProductDetail from '../pages/ProductDetail';
import Products from '../pages/Products';
import Register from '../pages/Register';


const Router = () => {
  return (
    <>
      <Routes>        
        <Route element={<Home />}>
            <Route path="/" element={<Products />} />
            <Route path="/product-detail/:id" element={<ProductDetail />} />  
            <Route path="/add-product" element={<Register />} />  
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Router