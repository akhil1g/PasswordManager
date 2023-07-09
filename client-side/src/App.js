import React from 'react';
import { BrowserRouter,Route, Routes} from 'react-router-dom'
import Navbar from './pages/Navbar/Navbar.jsx'
import Login from './pages/LoginPage/Login.jsx';
import Register from './pages/RegisterPage/Register.jsx'
import Store from './pages/StorePage/Store.jsx';
export default function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <BrowserRouter>
      <Routes>
      <Route path='/login' exact Component={Login}></Route>
      <Route path='/register' exact Component={Register}></Route>
      </Routes>
      </BrowserRouter>
      {/* <Store /> */}
    </div>
  )
}
