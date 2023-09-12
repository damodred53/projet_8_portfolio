import React from "react";
import { Link } from "react-router-dom";
import data from "../../data";
import './cards.css';



const Card = ({image}) => {

    return (
        
           data.map((item, id, index) => (
            
            <div className="projet_card" key={id}>
                <h3 className="title_card" >{item.title}</h3>
                <p className="description_card">{item.description}</p>
                
            <div className="div_logo_card">  
                {item.compétences.map((imageUrl, i) => (
                <img className="logo_card" src={imageUrl} alt={`Compétence ${i + 1}`} key={i} />
                ))}
            </div>
                
                {item.lien && item.lien.trim() !== '' ? <Link className="link_card" target="_blank" to={item.lien}><p>Lien vers le projet en ligne</p></Link> : ''}
                <Link className="link_card" target="_blank" to={item.lien_repo}><p>Lien vers le repository du projet</p></Link>
            </div>
        ))
        
)
};
export default Card;