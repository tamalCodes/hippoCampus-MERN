import React from 'react'

const Register = () => {
    return (
        <>

            <div className="container my-3">

                <div className="row">

                    <div className="col-lg-3">
                        <img className="login__img" src="/Images/logo.png" alt="" />
                    </div>

                    <div className="col-lg-9" >

                        <div className="login__sec">
                            <form>
                                <h1>Login</h1>
                                <div class="form-group my-3">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group my-3">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" class="btn btn-primary my-3">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

                <footer>
                    Made with ❤ by Tamal
                </footer>
            </div>
        </>
    )
}

export default Register
