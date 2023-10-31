import "./Error404.scss"
import { Link } from "react-router-dom"

function Error404() {
    return (
        <section className="page404">
            <h4>404</h4>
            <p>Oups! La page que vous demandez n`existe pas</p>
            <Link to="/" className="backToHomeLink" >
            Retourer sur la page d`accueil
            </Link>
        </section>
    )
}

export default Error404