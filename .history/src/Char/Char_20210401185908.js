import React from 'react';

const char =(props) => {
    const style = {
        display: 'inline-block',
        Padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'
    };

    return (
        <div style={style} onClick>
            {props.character}
        </div>
    )
};

export default char;