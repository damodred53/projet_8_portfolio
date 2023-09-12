
import React from "react"
import logoFacebook from '../../assets/logo_facebook.webp';
import logoLinkedin from '../../assets/logo_linkedin.webp';
import logoGitHub from '../../assets/logo_github.png';
import './footer.css';

const Footer = () => {


    return (
        <div className="footer">
            <div className="logo_footer">
               <a href="https://www.facebook.com/florent.guyard" target="_blank" rel="noopener noreferrer"> <img className="logo_facebook" src={logoFacebook} alt="lien vers mon profil facebook"/> </a>
               <a href="https://github.com/damodred53" target="_blank" rel="noopener noreferrer"> <img className="logo_github" src={logoGitHub} alt="lien vers mon profil github"/></a>
               <a href="https://www.linkedin.com/in/florent-guyard-8063b4167/" target="_blank" rel="noopener noreferrer"> <img className="logo_linkedin" src={logoLinkedin} alt="lien vers mon profil linkedin"/></a>
            </div>
            <p>© 2023 Florent Guyard, Tous droits réservés. </p>
        </div>
    )
}
export default Footer