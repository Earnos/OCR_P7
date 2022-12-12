import PropTypes from "prop-types"

function Tags({tags}) { 
        return (
        <>
        { tags.map(tag =>(
        <span className="logement-info1-tags" >{tag}</span>
        ))}
        </>
    )     
}

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string)
}

export default Tags