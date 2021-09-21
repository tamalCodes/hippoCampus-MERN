import React from 'react'
import NoteContext from './NoteContext'


const NoteState = (props) => {

    return (

        // when we wrap anything inside the NoteContext the value becomes available to all of it's children
        // this is done with the help of react context api
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState
