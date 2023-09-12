import React from "react";
import {Link} from 'react-router-dom';
import './navbar.css';
import { useState } from "react";
import { Squash as Hamburger } from 'hamburger-react'

const NavBar = () => {
    const [isOpen, setOpen] = useState(false)
    
    return (

        <div className="banner_navBar" >
            <div className="welcome_navBar"><h1>Bienvenue sur le site de Florent Guyard</h1></div>
            <nav className="menu_navBar">
                <ul className="list_navBar">
                    <li><Link to="/"  className="list_element">Menu principal</Link></li>
                    <li><Link to="/skills" className="list_element">Compétences</Link></li>
                    <li><Link to="/projets" className="list_element">Réalisations</Link></li>
                    <li><Link to="/about" className="list_element">À propos</Link></li>
                    <li><Link to="/contact" className="list_element">Contact</Link></li>
                </ul>
            </nav>
            <div className="hidden_div">
                <div className="first_div_navBar">
                
                <Hamburger toggled={isOpen} toggle={setOpen} />
                    <h2>Florent Guyard - développeur web</h2>
                </div>
                {isOpen ? 
                <div className={`${isOpen ? "hidden_div_navBar" : ""}`} >
                    <li><Link to="/"  className="list_element_hidden"><p className="paragraphe_navBar">Menu principal</p></Link></li>
                    <li><Link to="/skills" className="list_element_hidden"><p className="paragraphe_navBar">Compétences</p></Link></li>
                    <li><Link to="/projets" className="list_element_hidden"><p className="paragraphe_navBar">Réalisations</p></Link></li>
                    <li><Link to="/about" className="list_element_hidden"><p className="paragraphe_navBar">À propos</p></Link></li>
                    <li><Link to="/contact" className="list_element_hidden"><p className="paragraphe_navBar">Contact</p></Link></li>
                </div>
                : ""}
            </div>
        </div>
    )


}
export default NavBar;