import React, {Component, useState, useEffect} from 'react';



export function Voting() {
    const [buttons, setButtons] = useState([]);

    //setButtons(buttons => buttons.concat({videoName: "Hello"}));

    
    // async function getVotingButtons() {
    //     const snapshot = await chatRef.get();
    //     let votingButtons = [];
    //         snapshot.forEach(songData => {
    //             const song = songData.data(); 
    //             console.log(songData.id, '=>', songData.data());
    //                 votingButtons.push(song);
    //                 console.log(song);
    //         });
        
    // }


    useEffect(() => {
        fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=RDQMoQMC86NzF38&key=AIzaSyABQyO1Hrn0HCqGgRJFZm-Wm4fqNRFcjO4")
          .then(res => res.json())
          .then(
            (result) => {
              //console.log(result);
                let i = 0; 
                let newButtons = [];
                result.items.forEach(video => {
                    newButtons.push({videoName: video.snippet.title.replace("(Official Video)", "").replace("(Official Music Video)", "").replace("(Music Video)", "")});
                    console.log(video.snippet.title);
                });

                setButtons(newButtons);
            },
          )
      }, [])

    return (
        <div id="voting">
            {buttons.map(button => {
                return <VotingButton song={button} />
            })}
        </div>
    )
}



// mini button component, so that it is possible to give the event handler the song object to process and add to votings
const VotingButton = props => {
const handleClick = () => {
    if (props.onClick) {
        props.onClick(props.item);
    }
}
return (
<button onClick={handleClick} className=""> 
    <p>{props.song.videoName}</p>
</button>)
}