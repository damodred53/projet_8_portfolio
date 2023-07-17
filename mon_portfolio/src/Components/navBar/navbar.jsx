import React from "react";
import {Link} from 'react-router-dom';
import './navbar.css';

const NavBar = () => {



    return (

        <div className="banner_navBar">
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
        </div>
    )


}
export default NavBar;