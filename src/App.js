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
  const [votingShowClass, setVotingShowClass] = useState("none");
  
  const [videoTitle, setVideoTitle] = useState("Loading...");
  const [videoId, setVideoId] = useState("dQw4w9WgXcQ")
  const [videoTime, setVideoTime] = useState(10)

  const videoInfoRef = db.collection("videoInfo");
  const timeInfoRef = db.collection("timeInfo");


  useEffect(() => {
	  getVideoInfo();
	 // getVideoInfo();
  }, [])

  	async function getVideoInfo(){
		const snapshot = await videoInfoRef.get();

		let videoInfo;

		snapshot.forEach(msg => {
			videoInfo = msg.data();
		});
		///console.log(videoInfo);
		//console.log(videoInfo.videoId);

		
		if (videoId != videoInfo.videoId){
			setVideoId(videoInfo.videoId);
			setVideoTitle(videoInfo.title);
			console.log("Video Id: " + videoInfo.videoId);
			
			
			getTimeInfo();
		}
	}

	async function getTimeInfo(){
		const snapshot = await timeInfoRef.get();

		let timeInfo;

		snapshot.forEach(msg => {
			timeInfo = msg.data();
		});

		setVideoTime(timeInfo.time);
	}


	function toggleVoting(){
		setVotingShowClass((votingShowClass == "none") ? "show" : "none");
	}


    return (
      <div className="App">
          
          <div id="video-vote">
            <VideoPlayer videoId={videoId} videoTime={videoTime} />
            <VideoInfo videoTitle={videoTitle} viewers={"127.099.233"} toggleVoting={toggleVoting} />
          </div>
          <Voting votingShowClass={votingShowClass} />

        
          <Chat user={user} auth={auth} db={db} />
      </div>
    )
}


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user);
  }
});