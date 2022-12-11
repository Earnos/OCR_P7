import { useParams } from "react-router-dom"
import Caroussel from "../components/Caroussel"
import PropTypes  from "prop-types"
import { useFetch } from "../utils/hooks/useFetch"
import emptyStar from "../assets/emptyStar.svg"
import star from "../assets/star.svg"
import Rating from "../components/Rating"
import Tags from "../components/Tags"
import DropDownMenu from "../components/DropDownMenu"

function Logement() {
    const { id } = useParams()
    const { data, isLoading, error } = useFetch("../../data/data.json")
    console.log(data);
    if (isLoading) return <h1>Chargement...</h1>
    
    if (error) console.log(error)
    
    const logement = data.find(element => element.id === id)
    console.log(logement);
    console.log(logement.rating);
    return (
        <main className="logement-main" >
            <div className="logement-container">
                <Caroussel
                pictures={logement.pictures}
                />
            </div>
            <div className="logement-infos-container">
                <div className="logement-info1" >
                    <h1 className="logement-info1-title" >{logement.title}</h1>
                    <p className="logement-info1-location" >{logement.location}</p>
                    {logement.tags.map(tag => (
                    <Tags tags={logement.tags} />
                    ))}
                </div>
                <div className="logement-info2">
                    <div className="logement-info2-profil">
                        <p className="logement-info2-name" >{logement.host.name}</p>
                        <img src={logement.host.picture} alt="profil" className="logement-info2-profil-image"/>
                    </div>
                    <div className="logement-info2-stars">
                        <Rating rating={logement.rating} />
                    </div>
                </div>
            </div>
            <div>
                <DropDownMenu  description={logement.description} />
            </div>
        </main>    
    )
}


Logement.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string,
}

export default Logement