import { NavLink } from "react-router-dom";
import "./Header.scss"

function Header(){
    return <>
    <header className="navbar">
        <ul className="navlist">
            <li className="navlist__link navlist__link--logo">ZR</li>
            <li className="navlist__link"><NavLink to = "/">Home</NavLink></li>
            <li className="navlist__link"><NavLink to = "/tactics" >Tactics DB</NavLink></li>
        </ul>
    </header>
    </>
}

export default Header;