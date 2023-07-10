import React from 'react';
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './pages/Navbar/Navbar.jsx';
import Main from './pages/MainPage/Main.jsx';
import Login from './pages/LoginPage/Login.jsx';
// import Register from './pages/RegisterPage/Register.jsx';
import Home from './pages/LandingPage/Home.jsx';
import Store from './pages/StorePage/Store.jsx';
import Retrieve from './pages/RetrievePage/Retrieve.jsx';
import Generate from './pages/GeneratePage/Generate.jsx';

export default function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
      <Routes>
      <Route path='/' exact Component={Main}></Route>
      {/* <Route path='/login' exact Component={Login}></Route> */}
      {/* <Route path='/register' exact Component={Register}></Route> */}
      <Route path='/home' exact Component={Home}></Route>
      <Route path='/store' exact Component={Store}></Route>
      {/* <Route path='/retrieve' exact Component={Retrieve}></Route> */}
      <Route path='/generate' exact Component={Generate}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}