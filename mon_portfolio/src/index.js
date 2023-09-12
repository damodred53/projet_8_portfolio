import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/navBar/navbar';
import Illustration from './Components/illustration/illustration';
import Home from './pages/Home/Home.jsx';
import About from './pages/A propos/A propos.jsx';
import Competences from './pages/Competences/Competences.jsx';
import Projets from './pages/Projets/Projet.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Footer from '../src/Components/Footer/footer.jsx';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router>
    <NavBar/>
        <Illustration/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/*' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Competences/>}/>
        <Route path='/projets' element={<Projets/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
