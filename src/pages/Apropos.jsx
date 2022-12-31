import Banner from "../components/Banner"
import banner from "../assets/bannerPropos.png"
import { useFetch } from "../utils/hooks/useFetch"
import DropDownMenu from "../components/DropDownMenu"

function Apropos() {
    const { data, isLoading, error } = useFetch("data/data.json")
    
    const fiabiliteText = 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
    const respectText = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    const serviceText = 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.'
    const securiteText = 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'

    if (isLoading) return <div className="spinner-container" ><div className="spinonediv-1"></div></div>
    if (error) console.log(error)
    
    return (
        <main className="propos-container">
            <div className="propos-banner" >
                <Banner banner={banner} />
            </div>
            <div className="dropdown-apropos-container">
                <DropDownMenu data={data}  text={fiabiliteText} title='Fiabilité' />
                <DropDownMenu data={data}  text={respectText} title='Respect' />
                <DropDownMenu data={data}  text={serviceText} title='Service' />
                <DropDownMenu data={data}  text={securiteText} title='Sécurité' />
            </div>
        </main>
        
    )
}

export default Apropos