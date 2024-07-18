import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/login/Login';
import SignupClient from './components/signuptoclient/SignupClient';
import Selectuser from './components/selectuser/Selectuser';
import SignupFreelancer from './components/signuptofreelancer/SignupFreelancer';
import AfterLogin from './components/afterlogin/AfterLogin';
import Home from './components/home/Home';
import ExamPage from './components/Exampage/ExamPage';
import DashBoard from './components/dashboard/DashBoard';
import UserProfile from './components/userProfile/UserProfile';
import DashboardHome from './components/dash home/DashboardHome';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/selectuser' element={<Selectuser/>}></Route>
      <Route path='/signupclient' element={<SignupClient/>}></Route>
      {/* <Route path='/signupfreelancer' element={<SignupFreelancer/>}></Route> */}
      <Route path='/loginafter' element={<AfterLogin/>}></Route>
      <Route path='/exampage' element={<ExamPage/>}></Route>
      <Route path='/dashboard' element={<DashBoard/>}>
       
        <Route index element={<DashboardHome />} /> {/* Default dashboard home route */}
        <Route path='home' element={<DashboardHome />} /> {/* Explicit home route */}
        
        <Route path='userprofile' element={<UserProfile/>}></Route>
      </Route>
      <Route path='/user' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
