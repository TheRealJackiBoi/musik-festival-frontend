import React, {Component, useState, useEffect} from 'react';



export function Voting(props) {
    const [buttons, setButtons] = useState([ {videoName: "Loading..."}, {videoName: "Loading..."}, {videoName: "Loading..."}, {videoName: "Loading..."}, {videoName: "Loading..."}]);


      function getVotingButtons() {
        props.db.collection("voting").onSnapshot(snapshot => {
             snapshot.docChanges().forEach(change => {
                let song = change.doc.data();
                console.log(song);

                let b = buttons;
                b[song.index].videoName = song.title
                b[song.index].votes = song.votes
                console.log(b);
                setButtons([...b]);
            })
        })
     }

     async function countVote(number){
        console.log(number);
        const snapshot = await props.db.collection("voting").get();
        let votingInfo;
    
        snapshot.forEach((element) => {
           // console.log(element.data());
            if (element.data().index == number)
                votingInfo = element.data();
        });

        votingInfo.votes++;

        props.db.collection("voting").doc("song"+number).set(votingInfo);

     }


    useEffect(() => {
        getVotingButtons();
      }, [])


    return (
        <div id="voting" class={props.votingShowClass}>
            <button id="hideButton" onClick={props.toggleVoting}>Hide voting</button>
            {buttons.map((button, index) => {
                return <VotingButton song={button} onClick={() => {countVote(index); props.setHasVoted();}} hasVoted={props.hasVoted}/>
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
    <div>
        <button onClick={handleClick} className="" disabled={props.hasVoted}> 
            <p>{props.song.videoName}</p>
        </button>
        <p>{props.song.votes}{props.song.votes > 1 || props.song.votes === 0? " votes" : " vote"}</p>
    </div>
    )
}