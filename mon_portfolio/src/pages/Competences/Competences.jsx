
import './Competences.css'
import HTML from '../../assets/logo_html.png';
import CSS from '../../assets/logo_css.jpeg';
import logo_react from '../../assets/logo_react.png';
import Sass from '../../assets/sas.logo.png';
import Node from '../../assets/logo_node.png';
import JavaScript from '../../assets/javascript_logo.png';

const Competences = () => {
    return (
        <div className='main_page_skills'>
        <div className='page_skills'>
                <section className='paragraphe_skills'>

                    <div className='wrapper_skills'>
                    <div className='logo_skills'>
                        <img className='icon_skills' src={HTML} alt='logo HTML5'></img>
                        <p className='text_skills'>HTML 5</p>
                    </div>
                        <div className="progress">
                            <div className="progress-value"></div>
                        </div>
                        
                    </div>

                    <div className='wrapper_skills'>
                    <div className='logo_skills'>
                        <img className='icon_skills' src={CSS} alt='logo css 3'></img>
                        <p className='text_skills'>CSS 3</p>
                    </div>
                        <div className="progress">
                            <div className="progress-value"></div>
                            
                        </div>
                        
                    </div>

                    <div className='wrapper_skills'>
                    <div className='logo_skills'>
                    <img className='icon_skills' src={Sass} alt='logo Sass'></img>
                        <p className='text_skills'>  Sass</p>
                    </div>
                        <div className="progress">
                            <div className="progress-value_sass_react"></div>   
                        </div>
                        
                    </div>

                    <div className='wrapper_skills'>
                    <div className='logo_skills'>
                    <img className='icon_skills' src={JavaScript} alt='logo Javascript'></img>
                        <p className='text_skills'>Java Script</p>
                    </div>
                        <div className="progress">
                            <div className="progress-value_javascript"></div>   
                        </div>
                        
                    </div>

                    <div className='wrapper_skills'>
                    <div className='logo_skills'>
                        <img className='icon_skills' src={logo_react} alt='logo react.js'></img>
                        <p className='text_skills'>React.js</p>
                    </div>
                        <div className="progress">
                            <div className="progress-value_sass_react"></div> 
                        </div>
                        
                    </div>

                    <div className='wrapper_skills'>
                    <div className='logo_skills'>
                    <img className='icon_skills' src={Node} alt='logo node.js'></img>
                        <p className='text_skills'>Node.js</p>
                    </div>
                        <div className="progress">
                            <div className="progress-node"></div>
                        </div>
                        
                    </div>   

                </section>
                <section className='second_section_skills'>

                    <div className='div_skills'>
                        <h3>Autres compétences</h3>
                        <p>Outre mes connaissances dans les langages de programmation indiqués à gauche. 
                            Je suis aussi capable d'utiliser d'autres technologies indispensables au 
                            métier de développeur web.
                        
                        </p>
                        <ol className='list_second_skills'>
                            <li>GitHub</li>
                            <li>Déploiement en ligne des sites Internet</li>
                            <li>Gestion agile des projets (SCRUM)</li>
                            <li>Visual Studio Code</li>
                            <li>Logiciel de maquettage Figma</li>
                        </ol>
                    </div>
                    
                </section>
                
            </div>
        <blockquote className='quote_skills'>"Il n'y a qu'une façon d'échouer, c'est d'abandonner avant d'avoir réussi" Georges Clémenceau</blockquote>
        </div>
    )
}

export default Competences;
