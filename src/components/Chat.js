import React, {Component, useState, useEffect} from 'react';

import {Login} from './Login';

import firebase from '../firebase.js'




export function Chat(props) {
        
    const [chat, setChat] = useState([]);

    const chatRef = props.db.collection("chat");
    async function getMessages() {
        const snapshot = await chatRef.get();
        let messages = [];
            snapshot.forEach(msg => {
                const messageObject = msg.data(); 
               // console.log(msg.id, '=>', msg.data());
                messages.push(messageObject);
               // console.log(msg);
            });
        
        setChat(messages.reverse());
    }

    function handleKeyPress(e){
        if (e.key == "Enter"){
           sendMessage();
        }
    }

    function sendMessage(){
        const textBox = document.getElementById('text');
        if (textBox.value != ""){
            const newMessage = {name: props.user.displayName, value: textBox.value, time: Date.now()};
            chatRef.doc().set(newMessage).then(ref => console.log('added new msg'));
            textBox.value = "";
            getMessages();
        }
    }

    useEffect(() => {
        getMessages();
        
   }, []);



        return(
            <div id="chat">
                <div id="chat-messages">
                    {chat.sort((a, b) => (a.time > b.time) ? 1 : -1).map((msg) => 
                    <div className={props.user && props.user.displayName === msg.name ? "user-message" : "incomeing-message" }>
                        <h2>{msg.name}</h2>
                        <p>{msg.value}</p>
                    </div>
                    )}
                </div>
                <div id="chat-input">

                    {
                        props.user ? 
                        <textarea id="text" placeholder="Chat here..." autoComplete="off" onKeyDown={handleKeyPress}>
                        </textarea>
                        :
                        <Login auth={props.auth} user={props.user}/>
                    }

                    <button id="send" onClick={sendMessage}>Send</button>
                </div>
            </div>
        );
}

  
