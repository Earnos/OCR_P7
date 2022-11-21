import { Link } from "react-router-dom"
import PropTypes from 'prop-types'


function Card(cover, title) {
    return (
        <Link to='/logement'className="card-link">
            <div className="card" >
            <img src={cover} alt="Logement" className="card-img"/>
            <p className="card-title">{title}</p>
            </div>
        </Link>
    )
}

Card.propTypes = {
    cover: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
  }


export default Card