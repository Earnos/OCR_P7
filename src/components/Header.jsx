import { Link } from "react-router-dom"
import "../sass/layout/_header.scss"


function Header({logo}) {
    return  (
        <nav className="header-link" >
            <Link to="/" >
            <img src={logo} alt='logo Kaza'/>
            </Link>
            <Link to="/">Accueil</Link>
        </nav>
    )
        
}

export default Header