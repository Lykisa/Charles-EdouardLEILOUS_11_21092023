import "../style/Home.css"
import banner from "../assets/banner.png"
import Banner from "../components/Banner/Banner.jsx"
import Card from "../components/Card/Card.jsx"
import logements from "../data/logements.json";

function Home() {
    return (
        <div className="home">
            <Banner 
                text={"Chez vous, partout et ailleurs"}
                img={banner}
                imgDescription={"Paysage d'une côte rocheuse"}/>

            <section className="locations">
                {logements.map((logement, index) => 
                    <Card 
                        key={index}
                        id={logement.id}
                        title={logement.title}
                        cover={logement.cover}/>
                        )}
            </section>
        </div>
    )
}

export default Home