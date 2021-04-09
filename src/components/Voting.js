import React, {Component, useState, useEffect} from 'react';

export function Voting() {
    const [buttons, setButtons] = useState([]);

    //setButtons(buttons => buttons.concat({videoName: "Hello"}));

    return (
        <div id="voting">
            {buttons.map(button => {
                <button>{button.videoName}</button>
            })}

            <button>Hej</button>
            <button>Hej</button>
            <button>Hej</button>
            <button>Hej</button>
        </div>
    )
}