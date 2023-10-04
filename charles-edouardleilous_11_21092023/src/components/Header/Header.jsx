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
                    {/* <a href="/">Accueil</a> */}
                    <Link to="/"> Accueil</Link>
                    

                </li>
                <li>
                    {/* <a href="/about">A propos</a> */}
                    <Link to="/about">A propos</Link>
                        
                    
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header