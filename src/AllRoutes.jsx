import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/pages/Home';
import Signin from './components/pages/Signin';
import Register from './components/pages/Register';
import Shop from './components/pages/Shop';
import Product from './components/pages/Product';
import Tshirt from './components/products/Tshirt';
import Bags from './components/products/Bags';
import Jense from './components/products/Jense';
import Shirt from './components/products/Shirt';
import Jacket from './components/products/Jacket';
import Profile from './components/pages/Profile';
import MyWish from './components/pages/MyWish';
import Address from './components/After-proceed/Address';
import Payment from './components/After-proceed/Payment';
import About from './components/pages/About';
import Contacts from './components/pages/Contacts';
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
          <Route path='/shop' element={<Shop />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/tshirt' element={<Tshirt />} />
          <Route path='/bag' element={<Bags />} />
          <Route path='/jense' element={<Jense />} />
          <Route path='/shirt' element={<Shirt />} />
          <Route path='/jacket' element={<Jacket />} />
          <Route path='/mywish' element={<MyWish />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/address' element={<Address/>} />
          <Route path='/payment' element={<Payment/>}/>
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
