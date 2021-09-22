// this is the component for the notes so that all the notes can be placed in a card format

import React, { useContext } from 'react'
import noteContext from '../Context/Notes/NoteContext';
import "../Styles/NotesItem.css"

const NotesItem = () => {

    const context = useContext(noteContext);
    const { notes, deleteNote } = context;

    // const deleteHandler = () => {
    //     deleteNote(note._id);
    // }

    return (
        <>
            <h3 className="my-3">Your notes</h3>

            {notes.map((note) => {
                return (

                    <div div className="card" style={{ width: "18rem" }
                    } key={note._id}>

                        <div className="card-body">
                            <h5 className="card-title">{note.title}</h5>
                            <span style={{ backgroundColor: "green" }} class="badge badge-pill ">{note.tag} </span>
                            <p className="card-text my-3">{note.description}</p>
                            <i className="fas fa-trash mx-2" onClick={() => { deleteNote(note._id) }}></i>
                            <i className="far fa-edit mx-2"></i>
                        </div>
                    </div>
                )

            })}

        </>
    )
}

export default NotesItem
