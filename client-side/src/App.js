import React from 'react';
import { BrowserRouter,Route, Routes} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './pages/Navbar/Navbar.jsx'
import Login from './pages/LoginPage/Login.jsx';
import Register from './pages/RegisterPage/Register.jsx'
import Retrieve from './pages/RetrievePage/Retrieve.jsx';
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/login' exact Component={Login}></Route>
      <Route path='/register' exact Component={Register}></Route>
      <Route path='/retrieve' exact Component={Retrieve}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
