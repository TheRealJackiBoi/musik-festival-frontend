import React, {Component, useState, useEffect} from 'react';



export function Voting() {
    const [buttons, setButtons] = useState([]);

    //setButtons(buttons => buttons.concat({videoName: "Hello"}));

    useEffect(() => {
        fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=RDQMoQMC86NzF38&key=AIzaSyABQyO1Hrn0HCqGgRJFZm-Wm4fqNRFcjO4")
          .then(res => res.json())
          .then(
            (result) => {
              //console.log(result);
                let i = 0; 
                let newButtons = [];
                result.items.forEach(video => {
                    newButtons.push({videoName: video.snippet.title});
                    console.log(video.snippet.title);
                });

                setButtons(newButtons);
            },
          )
      }, [])

    return (
        <div id="voting">
            {buttons.map(button => {
                return <button>{button.videoName}</button>
            })}
        </div>
    )
}