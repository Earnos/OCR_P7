import { Link } from "react-router-dom"
import PropTypes from 'prop-types'


function Card({cover, title, id}) {
    return (
        <Link to= {{pathname: `/logement/${id}`}} className="card-link">
            <div className="card" >
            <img src={cover} alt="Logement" className="card-img"/>
            <div className="card-title"><p>{title}</p></div>
            </div>
        </Link>
    )
}

Card.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }


export default Card