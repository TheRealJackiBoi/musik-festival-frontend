import React, {Component, useState, useEffect} from 'react';

import {Login} from './Login';


import socketIOClient from "socket.io-client";
import firebase from '../firebase.js'


const ENDPOINT = "https://musik-festival-backend-2dqkf.ondigitalocean.app:8080";

const socket = socketIOClient("https://musik-festival-backend-2dqkf.ondigitalocean.app:8080");



export function Chat(props) {
    
    let number = 0

    //let {chat} = useState(0);

    const [response, setResponse] = useState([]);
    useEffect(() => {
        socket.on("NewMessage", data => {
            setResponse(response => response.concat(data));
        });
   }, []);



        return(
            <div id="chat">
                <div id="chat-messages">
                {response.map((msg) => 
                    <div className={props.user && props.user.displayName === msg.sender ? "user-message" : "incomeing-message" }>
                        <h2>{msg.sender}</h2>
                        <p>{msg.message}</p>
                    </div>
                    )}
                </div>
                <div id="chat-input">

                {
                    props.user ? 
                    <input id="text" placeholder="Chat here..." autoComplete="off">
                    </input>
                    :
                    <Login auth={props.auth} user={props.user}/>
                }

                <button id="send" onClick={() => {
                    const textBox = document.getElementById('text');
                    const newMessage = {sender: props.user.displayName, message: textBox.value}
                    textBox.value = "";
                    socket.emit("addMessage", newMessage);
                    setResponse(response => response.concat(newMessage));
               }}>Send</button>
            </div>
                    
              
            </div>
        );
}

  