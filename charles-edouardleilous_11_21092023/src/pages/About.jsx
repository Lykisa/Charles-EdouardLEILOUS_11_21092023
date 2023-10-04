import '../style/About.scss';
import bannerAbout from '../assets/banner_about.png';
import Banner from '../components/Banner/Banner';

function About() {
    return (
        <div>
            <Banner 
                img={bannerAbout}
                imgDescription={"Paysage de montagne"}/>
        </div>
    )
}

export default About