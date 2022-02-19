import React , { useState } from "react";
import { Link } from 'gatsby'
import { FaAlignJustify } from 'react-icons/fa'


const Navbar = () => {

    const [show, setShow] = useState(false)

    return ( <nav className="navbar">
       <div className="nav-center">
            <div className="nav-header">
                <Link to="/">
                    <h1>Recipes</h1>
                </Link>
                <button className="nav-btn" onClick={() => (setShow(!show))}>
                    <FaAlignJustify/>
                </button>
            </div>
            <div className={show ? "nav-links show-links" : "nav-links"}>
                <Link to="/" className="nav-link" activeClassName="active-link" onClick={() => (setShow(!show))}>Home</Link>
                <Link to="/recipies" className="nav-link" activeClassName="active-link" onClick={() => (setShow(!show))}>Recipies</Link>
                <Link to="/tags" className="nav-link" activeClassName="active-link" onClick={() => (setShow(!show))}>Tags</Link>
                <Link to="/about" className="nav-link" activeClassName="active-link" onClick={() => (setShow(!show))}>About</Link>
                <div className="nav-link contact-link">
                    <Link to="/contact" className="btn">Contact</Link>
                </div>
            </div>
       </div>
    </nav> );
}

export default Navbar;