import { useState } from "react"
import bottomArrow from '../assets/bottomArrow.svg'
import PropTypes from 'prop-types'

function dropDown({description}) {
    
    return (
        <div>
        <p>{description}</p>
        </div>
        )
    }
    
    
function DropDownMenu() {
    //const [menu, setMenu] = useState(false)

    return (
        <div className="drop-container" >
            <button  className="drop-btn">
                <span>Description</span>
                <span onClick={dropDown}><img src={bottomArrow} alt="fléche de description" /></span>
            </button>
            <button  className="drop-btn">
                <span>Equipements</span>
                <span onClick={dropDown}><img src={bottomArrow} alt="fléche de description" /></span>
            </button>
        </div>
    )
}

DropDownMenu.propTypes = {
    description: PropTypes.string
}


export default DropDownMenu