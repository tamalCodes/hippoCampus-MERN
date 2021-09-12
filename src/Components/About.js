import React, { useContext, useEffect } from 'react'
import noteContext from '../Context/Notes/NoteContext'
import Navbar from "./Navbar"

const About = () => {

    const a = useContext(noteContext)
    useEffect(() => {
        a.update();
    })
    return (
        <>
            <Navbar></Navbar>
            Well hello from {a.state.name}
        </>
    )
}

export default About
