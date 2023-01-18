import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import ContactUs from './ContactUs';
import Custom from './Custom';
import Home from './Home';
import Shop from './Shop';
import image from './icon.png'

function App() {
  return (<Router>
    <nav>
      <div className='left'>
      <Link to ="/" className='link'>Home</Link>
      <Link to ="/shop" className='link'>Shop</Link>
      </div>
      <div className='center'>
      <Link to ="/home" ><img src={image} alt="icon" width="100px" className='icon-img'/></Link>
      </div>
      <div className='right'>
      <Link to ="/custom" className='link'>Custom cake</Link>
      <Link to ="/contactUs" className='link'>Contact</Link>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/custom" element={<Custom/>}/>
      <Route path="/contactUs" element={<ContactUs/>}/>
    </Routes>
  </Router>
  );
}

export default App;
