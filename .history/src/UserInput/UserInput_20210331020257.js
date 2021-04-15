import React from 'react';

const userInput = (props => {
    return(
        <div className="UserInput">
            <input type="text" onchange={props.changed} value></input>
        </div>
    )
})

export default userInput;