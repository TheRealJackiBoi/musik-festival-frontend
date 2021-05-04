import React, {Component, useState, useEffect} from 'react';



export function Voting(props) {
    const [buttons, setButtons] = useState([
    {videoName: "Loading..."},
    {videoName: "Loading..."},
    {videoName: "Loading..."},
    {videoName: "Loading..."},
    {videoName: "Loading..."}]);


    const votingRef = props.db.collection("voting");

    //setButtons(buttons => buttons.concat({videoName: "Hello"}));

    
      function getVotingButtons() {
         //let votingButtons = []
        props.db.collection("voting").onSnapshot(snapshot => {
             snapshot.docChanges().forEach(change => {
                let song = change.doc.data();
                console.log(song);

                let b = buttons;
                b[song.index].videoName = song.title
                console.log(b);
                setButtons([...b]);
                //votingButtons.push({videoName: change.doc.data().title })
            })
        })
       // setButtons(votingButtons);
        
     }


    useEffect(() => {
        getVotingButtons();
      }, [])


    return (
        <div id="voting" class={props.votingShowClass}>
            <button id="hideButton" onClick={props.toggleVoting}>Hide voting</button>
            {buttons.map(button => {
                return <VotingButton song={button} />
            })}
        </div>
    )
}



// mini button component, so that it is possible to give the event handler the song object to process and add to votings
const VotingButton = props => {
    const handleClick = () => {
        if (props.onClick) 
            props.onClick(props.item);
    }
return (
<button onClick={handleClick} className=""> 
    <p>{props.song.videoName}</p>
</button>)
}


function updateButton(change, context, doc){

}