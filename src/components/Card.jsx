import { Link } from "react-router-dom"

function Card() {
    return (
        <Link to='/logement'className="card-link" >
            <div className="card" >
            <p className="card-title">Titre de la location</p>
            </div>
        </Link>
    )
}

export default Card