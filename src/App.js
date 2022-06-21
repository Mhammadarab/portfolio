import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './pages/home';
import Cv from './pages/cv';
import Contact from './pages/contact';
import Link from './pages/about';
import Git from './pages/git';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home></Home>}/>
        <Route path='/cv' exact element={<Cv></Cv>}/>
        <Route path='/contact' exact element={<Contact></Contact>}/>
        <Route path='/about' exact element={<Link></Link>}/>
        <Route path='/git' exact element={<Git></Git>}/>
      </Routes>
    </Router>
  );
}

export default App;
