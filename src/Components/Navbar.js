import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../Styles/Navbar.css"

const Navbar = () => {


    let location = useLocation();

    return (
        <>
            <nav className="navbar  navbar-expand-lg navbar-light">
                {/* <!-- navbar brand --> */}
                <a href="/" className="navbar-brand navbar__brand" > Notes
                </a>

                {/* <!-- hamburger menu --> */}
                <button className="navbar-toggler me-1" id="nbtn" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navtoggle" aria-controls="navtoggle" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* <!-- navbar er baaki shob jinish --> */}
                <div className="collapse navbar-collapse" id="navtoggle">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/notes" ? "active" : ""}`} aria-current="page" to="/notes">My notes</Link>
                        </li>

                        <li className="nav-item">
                            <Link className={`nav-link navbar__link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>

                        {/* <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/">About</Link>
                        </li> */}

                    </ul>
                </div>
                {/* <!-- end of navbar --> */}
            </nav>
        </>
    )
}

export default Navbar
