import './App.css';
import React, {Component, useState, useEffect} from 'react';
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
  const [video, setVideo] = useState({});
  const [videoIndex, setVideoIndex] = useState(0);


  useEffect(() => {
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=dQw4w9WgXcQ&key=AIzaSyABQyO1Hrn0HCqGgRJFZm-Wm4fqNRFcjO4&index=" + videoIndex)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          result.items[0].snippet.title = result.items[0].snippet.title.replace("(Video)", "");
          setVideo(result.items[0].snippet)
        },
      )
  }, [])


    return (
      <div className="App">
          
          <div id="video-vote">
            <VideoPlayer />
            <VideoInfo video={video} viewers={"127.099.233"} />
          </div>
          <Voting />

        
          <Chat user={user} auth={auth} db={db} />
      </div>
    )
}


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user);
  }
});