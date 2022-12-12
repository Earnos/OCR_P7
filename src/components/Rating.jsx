import starFill from "../assets/star.svg"
import emptyStar from "../assets/emptyStar.svg"
import PropTypes from "prop-types"


function Rating({rating}) {
    const stars = [1, 2, 3, 4, 5]
 
    return (
        <>
            {stars.map((star, index) => {
                console.log(index, rating);
                if (index < rating) {
                    return (
                        <img src={starFill} alt="note étoile" />
                    )
                }
                return  <img src={emptyStar} alt="note étoile" />
            })}
        </>
        )  
} 

Rating.propTypes = {
    rating: PropTypes.string
}

export default Rating