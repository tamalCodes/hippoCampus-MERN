import React from 'react'
import "../Styles/Navbar.css"

const Navbar = () => {
    return (
        <>
            <section id="Navbarrr">

                <div class="container-fluid">


                    <nav class="navbar  navbar-expand-lg navbar-light">
                        {/* <!-- navbar brand --> */}
                        <a href="/" class="navbar-brand navbar__brand" > Notes
                        </a>

                        {/* <!-- hamburger menu --> */}
                        <button class="navbar-toggler me-1" id="nbtn" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navtoggle" aria-controls="navtoggle" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        {/* <!-- navbar er baaki shob jinish --> */}
                        <div class="collapse navbar-collapse" id="navtoggle">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link active" href="/"> Home</a>
                                </li>

                                <li class="nav-item" id="lg">
                                    <a class="nav-link" href="edu.html"> About </a>
                                </li>

                                <li class="nav-item" id="lg">
                                    <a class="nav-link" href="contact.html"> Contact Me </a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- end of navbar --> */}
                    </nav>
                </div>
            </section>
        </>
    )
}

export default Navbar
