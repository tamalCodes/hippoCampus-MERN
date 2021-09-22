import React, { useState } from 'react'
import NoteContext from './NoteContext'


const NoteState = (props) => {

    const host = "http://localhost:5000"
    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)

    // Get all Notes
    const getNotes = async () => {
        // API Call 
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzOWJiODlhMzg1ZmI1OTI2YzRiMzg2In0sImlhdCI6MTYzMTI1NDkxNn0.LvZyU_spN0jK6iFGxYPKyhBZIKlQdVBNQxrLHs9HUn4"
            }
        });
        const json = await response.json()
        console.log(json)
        setNotes(json)
    }


    // adds a note
    // the details are from the front end page of Notes.js
    const addNote = async (title, description, tag) => {

        // API Call 
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzOWJiODlhMzg1ZmI1OTI2YzRiMzg2In0sImlhdCI6MTYzMTI1NDkxNn0.LvZyU_spN0jK6iFGxYPKyhBZIKlQdVBNQxrLHs9HUn4"
            },
            body: JSON.stringify({ title, description, tag })
        });


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
    const editNote = async (id, title, description, tag) => {

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzOWJiODlhMzg1ZmI1OTI2YzRiMzg2In0sImlhdCI6MTYzMTI1NDkxNn0.LvZyU_spN0jK6iFGxYPKyhBZIKlQdVBNQxrLHs9HUn4"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();

        let newNotes = JSON.parse(JSON.stringify(notes))


        // Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }

        }
        setNotes(newNotes);
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
