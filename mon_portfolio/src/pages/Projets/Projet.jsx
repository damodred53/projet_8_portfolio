import Card from "../../Components/Cards/cards";
import './Projets.css';

const Projets = () => {

    return (
        <div className="page_projet">
            <h2 className="title_projet">Mes réalisations</h2>
            <div className="grid_card" >
                <Card/>
            </div>
            <blockquote className="paragraph_projet">"Jamais réalisé ne veut pas dire irréalisable." Louis Fortin</blockquote>
        </div>
    )
}
export default Projets;