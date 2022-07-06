import React from 'react';
import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up';

import { auth } from './firebase/firebase.utils';

import { BrowserRouter as Router, Route, Routes}  from 'react-router-dom';
class App extends React.Component {

  constructor(){
    super();

    this.state={
      currentUser:null
    };
  }

  unSubscribeFromAuth=null;

  componentDidMount(){
    this.unSubscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
    });
  }
  render(){
    return (
      <Router>
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Routes>
          <Route  path='/' element={<Homepage/>}/>
          <Route  path='/shop' element={<ShopPage/>}/>
          <Route  path='/signIn' element={<SignInAndSignUp/>}/>
        </Routes>
      </div>
      </Router>
    );
  }
  
}

export default App;
