import React, { useState } from 'react'
import NoteContext from './NoteContext'


const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "613afaf6f40ee42dbc3f3391",
            "user": "6139bb89a385fb5926c4b386",
            "title": "Note 1",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ",
            "tag": "N-1",
            "date": "2021-09-10T06:28:06.312Z",
            "__v": 0
        },
        {
            "_id": "6149ff7485ce5a05268217f1",
            "user": "6139bb89a385fb5926c4b386",
            "title": "Note 2",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ",
            "tag": "N-2",
            "date": "2021-09-21T15:51:16.423Z",
            "__v": 0
        }
        ,
        {
            "_id": "6149ff7485ce5a05268d217f1",
            "user": "6139bb89a385fb5926c4b386",
            "title": "Note 3",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ",
            "tag": "N-3",
            "date": "2021-09-21T15:51:16.423Z",
            "__v": 0
        }
        ,
        {
            "_id": "6149ff74d85ce5a05268217f1",
            "user": "6139bb89a385fb5926c4b386",
            "title": "Note 4",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ",
            "tag": "N-4",
            "date": "2021-09-21T15:51:16.423Z",
            "__v": 0
        }
        ,
        {
            "_id": "6149ffd7485ce5a05268217f1",
            "user": "6139bb89a385fb5926c4b386",
            "title": "Note 5",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ",
            "tag": "N-5",
            "date": "2021-09-21T15:51:16.423Z",
            "__v": 0
        }

    ]

    const [notes, setNotes] = useState(notesInitial)


    // adds a note
    // the details are from the front end page of Notes.js
    const addNote = (title, description, tag) => {
        const note = {
            "_id": "6149ffd7485ce5a05268217f1",
            "user": "6139bb89a385fb5926c4b386",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2021-09-21T15:51:16.423Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }



    // edit a note
    const editNote = (id, title, description, tag) => {

    }



    // delete a note
    // we get the id of the note that we want to delete from the frontend and then filter it
    const deleteNote = (id) => {
        console.log("Deleted the note with id: " + id);
        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
    }



    return (

        // when we wrap anything inside the NoteContext the value becomes available to all of it's children
        // this is done with the help of react context api
        <NoteContext.Provider value={{ notes, setNotes, addNote, editNote, deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState
