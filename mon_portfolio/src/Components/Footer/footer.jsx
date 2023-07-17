
import React from "react"
import logoFacebook from '../../assets/logo_facebook.png';
import logoLinkedin from '../../assets/logo_linkedin.webp';
import logoGitHub from '../../assets/logo_github.png';
import './footer.css';

const Footer = () => {


    return (
        <div className="footer">
            <div className="logo_footer">
                <img className="logo_facebook" src={logoFacebook} alt="lien vers mon profil facebook"/>
                <img className="logo_github" src={logoGitHub} alt="lien vers mon profil github"/>
                <img className="logo_linkedin" src={logoLinkedin} alt="lien vers mon profil linkedin"/>
            </div>
            <p>© 2023 Florent Guyard, Tous droits réservés. </p>
        </div>
    )
}
export default Footer