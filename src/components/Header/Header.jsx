import logo from "../../assets/logo.png"
import "./Header.scss"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
        <img src={logo} alt="logo Kasa"/>

        <nav>
            <ul>
                <li>
                    <Link to="/"> Accueil</Link>
                </li>
                <li>
                    <Link to="/about">A propos</Link> 
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header