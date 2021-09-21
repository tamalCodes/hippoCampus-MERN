import React from 'react'

const Notes = () => {
    return (
        <>
            <div className="container my-3">

                <div className="accordion add_notes" >

                    <div className="accordion-item">

                        <h1 classname="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <h5>Add notes</h5>
                            </button>
                        </h1>

                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">

                                <form className="my-3">

                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                    </div>

                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" />
                                    </div>

                                    <div className="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>

                                    </div>

                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>

                            </div>
                        </div>
                    </div>

                </div>


                <h3 className="my-3">Your notes</h3>
            </div>

        </>
    )
}

export default Notes
