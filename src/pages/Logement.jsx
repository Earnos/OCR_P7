// import { useFetch } from "../utils/hooks/useFetch"
import { useParams } from "react-router-dom"
import Caroussel from "../components/Caroussel"
import PropTypes  from "prop-types"

function Logement(pictures) {
    const { id } = useParams()
    // const { data, isLoading, error } = useFetch("data/data.json")

    //     if (isLoading) return <h1>Chargement...</h1>

    //     if (error) console.log(error)

        return (
        <div className="logement-container">
            
            <Caroussel key={id} id={id} pictures={pictures} />
              
        </div>    
    )
}


Logement.propTypes = {
    pictures: PropTypes.string,
}

export default Logement