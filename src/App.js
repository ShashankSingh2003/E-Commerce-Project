import './App.css';
import Home from './components/pages/Home';
import Product from './components/products/Product';
import Privacy from './components/Footer/Privacy';
import Shipping from './components/Footer/Shipping';
import Termsandconditions from './components/Footer/Termsandconditions';
import CancellationPolicy from './components/Footer/CancellationPolicy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product/>}/>
          <Route path='/termsandconditions' element={<Termsandconditions />} />
          <Route path='/shipping' element={<Shipping />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/cancellationpolicy' element={<CancellationPolicy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
