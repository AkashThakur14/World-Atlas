import { GiHamburgerMenu } from "react-icons/gi"
import { NavLink } from "react-router-dom"
import { useState } from "react";

export const Header = () => {
    const [show, setShow] = useState(false);

    const handleButtonToggle = () => {
        return (
            setShow(!show)
        )
    }
const handleCloseMenu = () =>{
    setShow(false);
}
    return (

        <header>
            <div className="container">
                <div className="flex navbar-flex">
                    <div className="logo">
                        <NavLink to="/" onClick={handleCloseMenu}>
                            <h1>WorldAtlas</h1>
                        </NavLink>
                    </div>

                    <nav className={show ? "menu-mobile" : "menu-web"}>
                        <ul>
                            <li><NavLink to="/" onClick={handleCloseMenu}>Home</NavLink></li>
                            <li><NavLink to="/about" onClick={handleCloseMenu}>About</NavLink></li>
                            <li><NavLink to="/country" onClick={handleCloseMenu}>Country</NavLink></li>
                            <li><NavLink to="/contact" onClick={handleCloseMenu}>Contact</NavLink></li>
                        </ul>
                    </nav>
                    <div className="han-menu">
                        <button onClick={handleButtonToggle}>
                            <GiHamburgerMenu />
                        </button>
                    </div>
                </div>
            </div>
        </header>

    )
}