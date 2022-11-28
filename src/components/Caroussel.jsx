import PropTypes from 'prop-types'
import { useState } from 'react'



function Caroussel({pictures}) {
    const [index, setIndex] = useState(0)

    function next() {
        setIndex (index + 1)
    }

    function previous() {
        setIndex (index - 1)
    }

    return (
        <div className="logement-caroussel" >
            <img src={pictures[index]} alt="logement caroussel" className="logement-pictures" />
            <button onClick={previous} >Previous</button>
            <button  onClick={next}>Next</button>
        </div>
    )}




Caroussel.propTypes = {
    pictures: PropTypes.string,
    id: PropTypes.string,
}

export default Caroussel