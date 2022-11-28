import PropTypes from 'prop-types'
import { NextArrow, PreviousArrow } from '../utils/caroussel'


function Caroussel({pictures, id}) {
    pictures.map( img => {
    return   (
        
        <div className="logement-caroussel" >
            <PreviousArrow />
            <img  key={id} src={pictures} alt="logement caroussel" className="logement-pictures" />
            <NextArrow />
            {console.log(pictures)}
        </div>
         
    )})
}

Caroussel.propTypes = {
    pictures: PropTypes.string,
    id: PropTypes.string,
}

export default Caroussel