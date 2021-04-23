import React, {  } from "react";

export const VideoInfo = props => {
    return (
        <div id="VideoInfo">
            <h1 id="video-title">{props.video.title}</h1>
            <div id="viewers">
                <svg id="Lag_1" data-name="Lag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 527.44 238.75">
                    <defs></defs>
                    <path class="cls-1" d="M151.28,400.62a350,350,0,0,1,497.44-2.48" transform="translate(-136.28 -280.63)"/>
                    <path class="cls-1" d="M648.72,399.38a350,350,0,0,1-497.44,2.48" transform="translate(-136.28 -280.63)"/>
                    <circle class="cls-1" cx="263.72" cy="119.37" r="89.5"/>
                </svg>
                <h3>{props.viewers}</h3>
            </div>
            <div id="vote-below">
                <h3>Vote for next song below!</h3>
                <svg id="Lag_1" data-name="Lag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 730 780">
                    <defs></defs>
                    <polyline class="cls-2" points="715 365 715 765 15 765 15 365"/><line class="cls-1" x1="15" y1="364" x2="365.46" y2="714.46"/>
                    <line class="cls-2" x1="715" y1="364" x2="365.46" y2="714.46"/><line class="cls-1" x1="15" y1="758" x2="212" y2="561"/>
                    <line class="cls-2" x1="715" y1="758" x2="518.26" y2="561.26"/>
                    <polyline class="cls-2" points="616.63 462.5 616.63 173.71 113.5 173.71 113.5 462.5"/>
                    <line class="cls-2" x1="259.06" y1="413.77" x2="361.36" y2="516.07"/>
                    <line class="cls-2" x1="365" y1="512.16" x2="538.6" y2="338.56"/>
                    <line class="cls-2" x1="206.29" y1="173.71" x2="365" y2="15"/>
                    <line class="cls-2" x1="15" y1="365" x2="113.5" y2="266.5"/>
                    <line class="cls-2" x1="523.71" y1="173.71" x2="365" y2="15"/>
                    <line class="cls-2" x1="715" y1="365" x2="616.63" y2="266.63"/>
                </svg>
            </div>
        </div>
    )
}