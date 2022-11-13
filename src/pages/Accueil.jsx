import Card from "../components/Card"
import Banner from '../components/Banner'

function Accueil() {
    return (
        <main className="main-accueil" >
            <Banner />
            <div className="accueil-container">
                <Card />
            </div>
        </main>
    )
}

export default Accueil