import { useState, useEffect } from "react"
import PropTypes from "prop-types"

function Tags({tags}) {
    const [index, setIndex] = useState(0)
    // const allIndex = tags.findIndex(tag => tag.length)
    // const allIndex = tags.findIndex()
    // const allIndex = tags.filter(tag => tag.length >= 0)
    // setIndex(allIndex)
    // const tagsLength = tags.length
    
    // useEffect(() => {
        // const allIndex = index === tagsLength;
        // setIndex(allIndex);
        // },[tags, index, tagsLength])

        return (
            <>
        {console.log(`Mes index : ${index}`)}
        <span className="logement-info1-tags" >{tags[index]}</span>
        </>
    )     
    
}

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string)
}

export default Tags