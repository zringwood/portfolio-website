import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss"

function Header() {
    const [isShowingSidebar, setIsShowingSidebar] = useState(false)
    return <div className="sidebar">
        <button className={`sidebar__activate ${isShowingSidebar && "sidebar__activate--open"}`} onClick={() => setIsShowingSidebar(!isShowingSidebar)}></button>
        {isShowingSidebar && <div className="sidebar__panel">
            <Link className="sidebar__link" to="/">Home</Link>
            <Link className="sidebar__link" to="/tactics">Tactics DB</Link>
        </div>}
    </div>
}

export default Header;