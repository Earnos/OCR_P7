import { Link } from "react-router-dom"
import "../sass/layout/_header.scss"
import logo from "../assets/logo.svg"


function Header() {
    return  (
        <>
        <div className="header" >
            <Link to="/" >
            <img src={logo} alt='logo Kaza' className="header-logo" />
            </Link>
        <nav className="header-link">
            <Link to="/" className="header-nav header-accueil" >Accueil</Link>
            <Link to="/apropos" className="header-nav" >À propos</Link>
        </nav>
        </div>
        </>
    )
        
}



export default Header
