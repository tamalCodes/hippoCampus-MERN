// this is basically the notes page where all the notes will be visible to you
// for every single note we are using a NotesItem component

import React, { useContext, useState } from 'react'
import noteContext from '../Context/Notes/NoteContext';
import NotesItem from './NotesItem';
const Notes = () => {

    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const context = useContext(noteContext);
    const { addNote } = context;

    const createNote = () => {
        addNote(note.title, note.description, note.tag)
    }

    // this is so that whenever we add a note and fill the fields for example title
    // the state of title gets updated
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })

    }

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
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} />

                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="tag" className="form-label">Tag</label>
                                        <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Description</label>
                                        <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
                                    </div>

                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>

                                    </div>

                                    <button type="submit" className="btn btn-primary" onClick={createNote}>Submit</button>
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
