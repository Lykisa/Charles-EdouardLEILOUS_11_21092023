
import "../style/Logement.scss"
import logements from "../data/logements.json";
import { useParams } from "react-router"
import Tag from "../components/Tag/Tag.jsx";
import Rating from "../components/Rating/Rating";
import Slideshow from "../components/Slideshow/Slideshow";
import Collapse from "../components/Collapse/Collapse";
import Error404 from "../components/Error404/Error404";

function Logement(){
    const { id } = useParams()
    const log = logements.filter(logement => logement.id === id)[0]
    /* console.log(log) */
    if (!log) {
        return <Error404 />
    }
    return (
        <section className="logement_section">
            <div>
                <Slideshow pictures={log.pictures} />
            </div>
            <div className="logement_first">
                <div className="logement_details">
                    <h1 className="log_title">{log.title}</h1>
                    <h2 className="log_location">{log.location}</h2>
                </div>
                <div className="logement_host">
                    <div className="host_details">
                        <h2 className="host_name">{log.host.name}</h2>
                        <img src={log.host.picture} alt={log.host.name} />
                    </div>
                </div>
            </div>

            <div className="logement_second">
                <div className="logement_tags">
                    {log.tags.map((tag => (
                        <Tag tagName={tag} key={tag} />
                    )))}
                </div>
                <div className="logement_rating">
                    <Rating rating={log.rating} />
                </div>
            </div>

            <div className="logement_collapse">
                <Collapse title="Description" text={log.description} />
                <Collapse title="Équipements" text={<ul>{log.equipments.map(equip => {return <li key={equip}>{equip}</li>})}</ul>} />
            </div>
        </section>
    )
}

export default Logement