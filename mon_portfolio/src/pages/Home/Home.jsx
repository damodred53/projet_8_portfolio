import './Home.css';
import ordinateur from '../../assets/ordinateurs.webp';

const Home = () => {

    return (
        <div className='page_home'>
            <h2 className='title_home'>Bonjour à tous</h2>
            <p className='paragraph_home'>Après presque 10 ans passés dans le monde des langues et <br/> de l'enseignement, j'ai décidé de me reconvertir professionnellement afin de donner une suite <br/>à ma passion pour l'informatique qui m'anime depuis ma plus tendre enfance.</p>
            
            <div className='block_second_home'>
            <img className='img_home' src={ordinateur} alt='ordinateur et réseau'/>
            <blockquote className='quote_home'>"L'ère du numérique a crée un nouveau monde qui boulverse l'ensemble de l'industrie<br/> médiatique, son économie comme son usage" Serge July</blockquote>
            </div>
        </div>
    )
}
export default Home;


