import React from "react"
//Link Provides declarative, accessible navigation around your application.
//NavLink A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.
import {Link, withRouter} from "react-router-dom"

const Navbar = () => {
    return(
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
            <a href="" className="brand-logo left">Tom's Spell Checker</a>
            <ul className="right">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/spellcheck">Spell Check</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)