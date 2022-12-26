import { useState } from 'react'
import PropTypes from 'prop-types'
import bottomArrow from '../assets/bottomArrow.svg'
import upArrow from '../assets/upArrow.svg'
      
    
function DropDownMenu({text, title, index}) {
    const [menu, setMenu] = useState(false)
    const toggleMenu = () => { setMenu(!menu) } 

    return (
      
            <div className='dropdown-container dropdown-component-div'>
                <button key={index} className="drop-btn">
                    <span>{title}</span>
                    <span onClick={toggleMenu}><img src={menu === true ? bottomArrow : upArrow} alt="flèche de description" /></span>
                </button>
                {menu === true ? <div className='dropdown-text'><span>{text}</span></div> : false}
                
            </div>
     
    )
}

DropDownMenu.propTypes = {
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    title: PropTypes.string
}


export default DropDownMenu