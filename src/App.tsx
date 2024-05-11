import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/login/Login';
import SignupClient from './components/signuptoclient/SignupClient';
import Selectuser from './components/selectuser/Selectuser';
import SignupFreelancer from './components/signuptofreelancer/SignupFreelancer';
import AfterLogin from './components/afterlogin/AfterLogin';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/selectuser' element={<Selectuser/>}></Route>
      <Route path='/signupclient' element={<SignupClient/>}></Route>
      <Route path='/signupfreelancer' element={<SignupFreelancer/>}></Route>
      <Route path='/loginafter' element={<AfterLogin/>}></Route>
    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
