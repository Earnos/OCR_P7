import { useState } from "react"
import starFill from "../assets/star.svg"
import emptyStar from "../assets/emptyStar.svg"
import PropTypes from "prop-types"


function Rating({rating}) {
    const [stars, setStars] = useState([1, 2, 3, 4, 5])
    console.log(`variable stars = ${stars}`);
    // methode n°1 switch case
    // switch(rating) {
    //     case 1:
    //         if (rating === "0") {
    //         return (
    //             <>
    //             <img src={emptyStar} alt="note étoile" />
    //             <img src={emptyStar} alt="note étoile" />
    //             <img src={emptyStar} alt="note étoile" />
    //             <img src={emptyStar} alt="note étoile" />
    //             <img src={emptyStar} alt="note étoile" />
    //             </>    
    //         )
    //     }
    //     break
    //     case 2:
    //         if (rating === "5") {
    //         return (
    //             <>
    //             <img src={starFill} alt="note étoile" />
    //             <img src={starFill} alt="note étoile" />
    //             <img src={starFill} alt="note étoile" />
    //             <img src={starFill} alt="note étoile" />
    //             <img src={starFill} alt="note étoile" />
    //             </>
    //             )
    //         }
    //         break
    //     default:
    //         if (rating) {
    //         return (
    //             <>
    //             <img src={emptyStar} alt="note étoile" />
    //             <img src={emptyStar} alt="note étoile" />
    //             <img src={emptyStar} alt="note étoile" />
    //             <img src={emptyStar} alt="note étoile" />
    //             <img src={emptyStar} alt="note étoile" />
    //             </>    
    //         )
    //     }
    // }

    // Methode N°2 map()
    // setStars(stars.length === parseInt(rating))
    if (parseInt(rating) === 5) {
        console.log(rating);
    return (
        <>
            {stars.map(star => {
                return (
                    <img src={starFill} alt="note étoile" />
                )
            })}
        </>
        )  
    }
    if (parseInt(rating) === 3) {
    return (
        <>
            {stars.map(star => {
                return (
                    <img src={starFill} alt="note étoile" />
                )
            })}
        </>
    )
    }
} 

Rating.propTypes = {
    rating: PropTypes.string
}

export default Rating