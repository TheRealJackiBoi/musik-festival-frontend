import React, {Component, useState, useEffect} from 'react';
import socketIOClient from "socket.io-client";
import ReactPlayer from "react-player";

export function VideoPlayer(props) {
    let videoUrl = "/watch?v=" + props.videoId;
    let time = "?t=" + props.videoTime;
    let url = "https://www.youtube.com" + videoUrl + time;
    return (
        <div id="video-player">
            <ReactPlayer
                url={url}
                playing={true}
                config={{
                    youtube: {
                      playerVars: { showinfo: 1, modestbranding: 1, controls: 0, autoplay:1, disablekb: 1, rel:0,}
                    },
                }}
            />
        </div>
    )
}