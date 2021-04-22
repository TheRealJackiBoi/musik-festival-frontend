import React, {  } from "react";

export const VideoInfo = props => {
    return (
        <div id="VideoInfo">
            <h1 id="video-title">{props.video.title}</h1>
            <h3 id="viewers">{props.viewers}</h3>
            <h3 id="vote-below">Vote for next song below!</h3>
        </div>
    )
}