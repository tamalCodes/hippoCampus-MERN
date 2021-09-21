// this is basically the notes page where all the notes will be visible to you
// for every single note we are using a NotesItem component

import React from 'react'
import NotesItem from './NotesItem';
const Notes = () => {

    // const context = useContext(noteContext);
    // const { notes, setNotes } = context;


    return (
        <>
            <div className="container my-3">

                <div className="accordion add_notes" >

                    <div className="accordion-item">

                        <h1 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <h5>Add notes</h5>
                            </button>
                        </h1>

                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">

                                <form className="my-3">

                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>

                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>

                                    </div>

                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>

                            </div>
                        </div>
                    </div>

                </div>

                <NotesItem />

            </div>

        </>
    )
}

export default Notes
