import logo_footer from '../../assets/logo_footer.png'
import './Footer.css'

const Footer = () => {//Create a footer frame
  return (
    <footer>
        <img src={logo_footer} alt="logo footer Kasa" />
        <p>2021 Kasa. Tous droits réservés</p>
    </footer>
  )
}

export default Footer