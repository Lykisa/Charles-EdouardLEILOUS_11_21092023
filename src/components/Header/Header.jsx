import logo from "../../assets/logo.png"
import "./Header.css"
import { NavLink } from "react-router-dom"

function Header() {
  return (
    <header>
        <img src={logo} alt="logo Kasa"/>

        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={(homeCurrentPage) => homeCurrentPage.isActive ? "active" : ""}> Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={(aboutCurrentPage) => aboutCurrentPage.isActive ? "active" : ""}>A propos</NavLink> 
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header