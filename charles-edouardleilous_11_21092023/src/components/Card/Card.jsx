import "./Card.scss"

function Card(logement){
    return (
        <article>
            <img src={logement.cover} alt={logement.title} />
            <div></div>
            <h2>{logement.title}</h2>
        </article>
    )
}

export default Card