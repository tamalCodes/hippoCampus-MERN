import React, { useContext } from 'react'
import noteContext from '../Context/Notes/NoteContext'
import Navbar from "./Navbar"

const About = () => {

    const a = useContext(noteContext)
    return (
        <>
            <Navbar></Navbar>
            Well hello from {a.name}
        </>
    )
}

export default About
