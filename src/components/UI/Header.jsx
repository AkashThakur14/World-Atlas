import { GiHamburgerMenu } from "react-icons/gi"
import { NavLink } from "react-router-dom"
import { useState } from "react";

export const Header = () => {
    const [show,setShow] = useState(false);

const handleButtonToggle = () =>{
return(
    setShow(!show)
)
}

    return (

        <header>
            <div className="container">
                <div className="flex navbar-flex">
                    <div className="logo">
                        <NavLink to="/">
                            <h1>WorldAtlas</h1>
                        </NavLink>
                    </div>

                    <nav className={show ? "menu-mobile" : "menu-web"}>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/country">Country</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
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