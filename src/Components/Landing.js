// login and register buttons here
import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Landing.css"


const Landing = () => {
    return (
        <div className="container my-3">

            <div className="row">

                <div className="col-lg-3">
                    <img className="logo" src="/Images/landing_img.png" alt="" />
                </div>

                <div className="col-lg-9" style={{ textAlign: "center" }}>

                    <div className="welcome__sec">
                        <h1>Welcome to NoteBook </h1>
                        <h3 className="my-3">A safe place to store all of your notes </h3>
                        <Link to="/login"><button type="button" class="btn btn-primary btn-lg my-3 mx-3">Login</button></Link>
                        <Link to="/signup"><button type="button" class="btn btn-primary btn-lg my-3 mx-3">Register</button></Link>
                    </div>
                </div>
            </div>

            <footer>
                Made with ❤ by Tamal
            </footer>
        </div>
    )
}

export default Landing
