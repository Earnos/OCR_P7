import PropTypes from 'prop-types'


function Caroussel({pictures, id}) {
    return   (
        <div className="logement-caroussel" >
                <img src={pictures} alt="logement caroussel" className="logement-pictures" />
        </div>    
    )
}

Caroussel.propTypes = {
    pictures: PropTypes.string,
}

export default Caroussel