import React, { Component } from 'react';
import './App.css';

// import ReactDOM from 'react-dom';

import { Image } from 'semantic-ui-react'

import Light from './Components/Actuators/Light'
import AirConditioner from './Components/Actuators/AirConditioner'
import Presenter from './Components/Actuators/Presenter'
import RoomState from './Components/Status/RoomState'

import logo from '../public/img/logo.png'

import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyB5EegdfZkuVB3d4nrZjc7-e5Xkz_a3Auw",
  authDomain: "jkiot-b21dd.firebaseapp.com",
  databaseURL: "https://jkiot-b21dd.firebaseio.com",
  storageBucket: "jkiot-b21dd.appspot.com",
  messagingSenderId: "777387298764"
};
firebase.initializeApp(config);

class App extends Component {

  constructor() {
    super();
    this.state = {
      messages: []
    };
  }

  // componentDidMount() {
  //   const msgRef = firebase.database().ref().child('messages');
  //   var initialDataLoaded = false;

  //   msgRef.on('child_added', snap => {
  //     if (initialDataLoaded) {
  //       this.setState({
  //         messages: this.state.messages.concat([snap.val()])
  //       });
  //     }
  //     else {

  //     }
  //   });

  //   msgRef.on('value', snap => {
  //     var arr = [];
  //     var data = snap.val();
  //     for (var prop in data) {
  //       arr.push(data[prop]);
  //     }
  //     this.setState({
  //       messages: arr
  //     });
  //     initialDataLoaded = true;
  //   });
  // }

  render() {
    return (
      <div className="ui one column center aligned grid">
        <div className="column ten wide form-holder">
          <Image src={logo} centered />
          <h2 className="center aligned header form-head">Zasedačka IT</h2>
          <RoomState></RoomState>
          <Light></Light>
          <AirConditioner></AirConditioner>
          <Presenter></Presenter>
        </div>
      </div>
    );
  }
}

export default App;
