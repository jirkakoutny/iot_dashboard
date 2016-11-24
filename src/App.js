import React, { Component } from 'react';
import './App.css';

// import ReactDOM from 'react-dom';

import { Image } from 'semantic-ui-react'

import Room from './Components/Room'

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
        var actuators = [
            {
                name: 'Světla',
                actions: []
            },
            {
                name: 'Klimatizace',
                actions: [
                    {
                        name: 'Teplota',
                        left: 'Chladněií',
                        right: 'Tepleji'
                    }
                ]
            },
            {
                name: 'Projektor',
                actions: []
            }
        ];
        var currentState = {
            temperature: 22,
            humidity: 50,
            light: 20,
            move: false,
            timestamp: '14 minutes ago'
        };
        var room = {
            name: 'Zasedačka IT',
            state: currentState,
            actuators: actuators
        };
        return (
            <div className="ui one column center aligned grid">
                <div className="column ten wide form-holder">
                    <Image src={logo} centered />
                    <Room data={room}></Room>
                </div>
            </div>
        );
    }
}

export default App;
