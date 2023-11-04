import '../style/About.css';
import bannerAbout from '../assets/banner_about.png';
import Banner from '../components/Banner/Banner';
import Collapse from '../components/Collapse/Collapse';

function About() {
    return (
        <div className='about'>
            <div className='about_banner'>
                <Banner 
                    img={bannerAbout}
                    imgDescription={"Paysage de montagne"}/>
            </div>
            
            <section className='about_collapse'>
                <Collapse title ="Fiabilité" text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"/>
                <Collapse title ="Respect" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <Collapse title ="Service" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"/>
                <Collapse title ="Sécurité" text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurté domestique pour nos hôtes."/>
            </section>
        </div>
    )
}

export default About