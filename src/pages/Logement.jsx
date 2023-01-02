import { useParams } from "react-router-dom"
import Caroussel from "../components/Caroussel"
import PropTypes  from "prop-types"
import { useFetch } from "../utils/hooks/useFetch"
import Rating from "../components/Rating"
import Tags from "../components/Tags"
import DropDownMenu from "../components/DropDownMenu"
import Error from "../components/Error"

function Logement() {
    const { id } = useParams()
    const { data, isLoading, error } = useFetch("../../data/data.json")
    
    if (isLoading) return <div className="spinner-container" ><div className="spinonediv-1"></div></div>
    
    if (error) console.log(error)
    
    const logement = data.find(element => element.id === id)

    if (!logement) {
        return <Error />
    }

    const equips = logement.equipments.map((item, index) => (<ul  key={'equip' + index} className="dropdown-text-liste" ><li>{item}</li></ul>))

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
                    
                    <Tags tags={logement.tags} />
                    
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
            <div className="drop-container-btn" >
                <DropDownMenu text={logement.description}  title='Description' />
                <DropDownMenu text={equips}  title='Equipements' />
            </div>
        </main>    
    )
}


Logement.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string.isRequired),
    id: PropTypes.string,
    description: PropTypes.string,
    equipments: PropTypes.arrayOf(PropTypes.string.isRequired),
}

export default Logement