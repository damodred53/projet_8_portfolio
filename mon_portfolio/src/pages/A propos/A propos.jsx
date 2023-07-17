import './A propos.css';
import Resume from './CV_Florent_Guyard.jpg';
import Florent from '../../assets/florent_guyard.jpeg';


const About = () => {

    return (
        <div>
            <h2 className='title_about'>Qui suis-je ?</h2>
            <div className='paragraph_about'>
            <p className="c"> Développeur junior mais passionné dans le domaine du web depuis 2 ans,
                actuellement développeur Web.<br/>
                Je conçois et réalise des sites web du cahier des charges à la mise en ligne.<br/>
                Je developpe aussi bien en front-end (partie visible de votre site) qu'en back-end 
                (Gestion des serveurs et des accès aux données de votre site) </p>
                <img src={Florent} className='moi' alt="l\'auteur du site"></img>
                </div>
            <a href={Resume} download className='link_about'>Si vous souhaitez voir mon CV, vous pouvez cliquer ici</a>
        </div>
    )
}
export default About;