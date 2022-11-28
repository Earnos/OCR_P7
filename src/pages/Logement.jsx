// import { useFetch } from "../utils/hooks/useFetch"
import { useParams } from "react-router-dom"
import Caroussel from "../components/Caroussel"
import PropTypes  from "prop-types"
import { useFetch } from "../utils/hooks/useFetch"

function Logement() {
    const { id } = useParams()
    const { data, isLoading, error } = useFetch("data/data.json")
    const pictures = [data.pictures]

    console.log(data);
    if (isLoading) return <h1>Chargement...</h1>
    
    if (error) console.log(error)

    return (
        <>
        <div className="logement-container">
                {data.map(items =>  
                    <Caroussel 
                    key={id} 
                    id={id} 
                    pictures={items?.pictures} 
                    />
                )}
                 
                
            {console.log(id)}
            {console.log(pictures)}
        </div>
        </>    
    )
}


Logement.propTypes = {
    pictures: PropTypes.string,
    id: PropTypes.string,
}

export default Logement