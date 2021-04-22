import './App.css';
import React, {Component} from 'react';
import {Chat} from './components/Chat';
import {VideoPlayer} from './components/VideoPlayer';
import {Voting} from './components/Voting';
import {Login} from './components/Login';
import {VideoInfo} from './components/VideoInfo';

import firebase from './firebase.js'
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const db = firebase.firestore();
const auth = firebase.auth();

export function App() {    
  const [user] = useAuthState(auth);
    return (
      <div className="App">
          
        <div id="video-vote">
          <VideoPlayer />
          <VideoInfo video={{title: "Never gonna give you up"}} viewers={"127.099.233"} />
          <Voting />
        </div>

        
          <Chat user={user} auth={auth} db={db} />
      </div>
    )
}


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user);
  }
});