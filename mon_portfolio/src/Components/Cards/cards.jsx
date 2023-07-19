import React from "react";
import { Link } from "react-router-dom";
import data from "../../data";
import './cards.css';



const Card = () => {


    return (
        
            data.map((item, id, index) => (
            <div className="projet_card" key={id}>
                <h3 className="title_card" >{item.title}</h3>
                <p className="description_card">{item.description}</p>
                <p className="description_card">{item.compétences}</p>
                {item.lien && item.lien.trim() !== '' ? <Link className="link_card" to={item.lien}><p>Lien vers le projet en ligne</p></Link> : ''}
                <Link className="link_card" to={item.lien_repo}><p>Lien vers le repository du projet</p></Link>
            </div>
              
        ))
        
          )
};
export default Card;