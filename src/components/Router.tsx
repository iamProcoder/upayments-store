import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home';
import NotFoundPage from '../pages/NotFoundPage';
import ProductDetail from '../pages/ProductDetail';
import ProductInsert from '../pages/ProductInsert';
import Products from '../pages/Products';
import Register from '../pages/Register';
import ProtectedRoutes from './ProtectedRoutes';


const Router = () => {
  return (
    <>
      <Routes>        
        <Route path='/register' element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route element={<Home />}>
              <Route path="/" element={<Products />} />
              <Route path="/product-detail/:id" element={<ProductDetail />} />  
              <Route path="/add-product" element={<ProductInsert />} />  
          </Route>
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Router