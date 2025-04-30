// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Service from './components/pages/Service';
import Support from './components/pages/Support';
import About from './components/pages/About';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Cart from './components/pages/Cart';


import Footer from './components/Footer';
import LoggedOut from './components/pages/LoggedOut';
import AddressForm from './components/pages/AddressForm';
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
<<<<<<< HEAD
    <>
=======

>>>>>>> feature/students
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/usersupport" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path='logged' element={<LoggedOut />} />
        <Route path='/Cart' element={<Cart />} />

        <Route path='/address' element={<AddressForm/>} />
        <Route path="/*" element={<NotFound />} />

      </Routes>
<<<<<<< HEAD
        
      <Footer />
    </Router>

    </>
=======
      <Footer />
    </Router>

>>>>>>> feature/students
  );
};

export default App;
