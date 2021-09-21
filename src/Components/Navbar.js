import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Navbar.css"

const Navbar = () => {
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

                        <Link to="/" className="navbar__link">
                            <div className="page__home">
                                Home
                            </div>
                        </Link>

                        <Link to="/about" className="navbar__link">
                            <div className="page__about">
                                About
                            </div>
                        </Link>

                        <Link to="/contact" className="navbar__link">
                            <div className="page__contact">
                                Contact
                            </div>
                        </Link>


                    </ul>
                </div>
                {/* <!-- end of navbar --> */}
            </nav>
        </>
    )
}

export default Navbar
