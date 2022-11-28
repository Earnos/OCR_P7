import { useParams } from "react-router-dom"
import Caroussel from "../components/Caroussel"
import PropTypes  from "prop-types"
import { useFetch } from "../utils/hooks/useFetch"

function Logement() {
    const { id } = useParams()
    const { data, isLoading, error } = useFetch("../../data/data.json")

    console.log(data);
    if (isLoading) return <h1>Chargement...</h1>
    
    if (error) console.log(error)

    const logement = data.find(element => element.id === id)
    console.log(logement);
    return (
        <>
        <div className="logement-container">
                <Caroussel
                pictures={logement.pictures}
                />
        </div>
        </>    
    )
}


Logement.propTypes = {
    pictures: PropTypes.string,
    id: PropTypes.string,
}

export default Logement