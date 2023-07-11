import React from 'react';
import { BrowserRouter,Route, Routes} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './pages/Navbar/Navbar.jsx'
// import Login from './pages/LoginPage/Login.jsx';
// import Register from './pages/RegisterPage/Register.jsx'
import Store from './pages/StorePage/Store.jsx';
import Home from './pages/LandingPage/Home.jsx'
import Generate from './pages/GeneratePage/Generate.jsx';
import Main from './pages/MainPage/Main.jsx';
export default function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
      <Routes>
      <Route path='/' exact Component={Main}/>
      {/* <Route path='/login' exact Component={Login}></Route>
      <Route path='/register' exact Component={Register}></Route> */}
      <Route path='/home' exact Component={Home}></Route>
      <Route path='/generate' exact Component={Generate}></Route>
      <Route path='/Store' exact Component={Store}/>
      </Routes>
      </BrowserRouter>
      {/* <Store /> */}
    </div>
  )
}