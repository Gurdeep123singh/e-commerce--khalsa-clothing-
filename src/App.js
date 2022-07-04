import React from 'react';
import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import { BrowserRouter as Router, Route, Routes}  from 'react-router-dom';
function App() {
  return (
    <Router>
    <div >
      <Routes>
        <Route  path='/' element={<Homepage/>}/>
        <Route  path='/shop' element={<ShopPage/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
