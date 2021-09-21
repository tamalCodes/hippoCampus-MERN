import React from 'react'

const Alert = (props) => {
    return (
        <>
            <div class="alert alert-danger" role="alert">
                {props.message}
            </div>
        </>
    )
}

export default Alert
