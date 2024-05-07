import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/pages/Home';
import Signin from './components/pages/Signin';
import Register from './components/pages/Register';
import Product from './components/products/Product';
import Profile from './components/pages/Profile';
import MyWish from './components/pages/MyWish';
import Otp from './components/pages/Otp';
import Privacy from './components/Footer/Privacy';
import Shipping from './components/Footer/Shipping';
import Termsandconditions from './components/Footer/Termsandconditions';
import CancellationPolicy from './components/Footer/CancellationPolicy';

function ScrollToTop() {
  const { pathname } = useLocation();
  const topRef = useRef(null);

  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [pathname]);

  return <div ref={topRef} />;
}

function AllRoutes() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/product' element={<Product />} />
          <Route path='/mywish' element={<MyWish />} />
          <Route path='/otp' element={<Otp />} />
          <Route path='/termsandconditions' element={<Termsandconditions />} />
          <Route path='/shipping' element={<Shipping />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/cancellationpolicy' element={<CancellationPolicy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AllRoutes;