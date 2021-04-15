import React from 'react';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>A paragraph is a series of related sentences
                thematic unity: {props.name}</p>
            <p>a paragraph is a sentence or a group of
            sentences that supports one central,
            unified idea. Paragraphs add one idea at
                a time to your broader argument.</p>
        </div>
    )
};

export default userOutput;