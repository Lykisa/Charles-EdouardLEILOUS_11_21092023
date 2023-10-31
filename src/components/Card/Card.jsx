import { Link } from "react-router-dom"
import "./Card.scss"

function Card(logement){
    return (
        <Link to={"logement/" + logement.id}>
            <article>
                <img src={logement.cover} alt={logement.title} />
                <div></div>
                <h2>{logement.title}</h2>
            </article>
        </Link>
    )
}

export default Card