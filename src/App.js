import React, { Component } from 'react';
import './App.css';

import ReactDOM from 'react-dom';
import MessageRow from './MessageRow';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyB5EegdfZkuVB3d4nrZjc7-e5Xkz_a3Auw",
  authDomain: "jkiot-b21dd.firebaseapp.com",
  databaseURL: "https://jkiot-b21dd.firebaseio.com",
  storageBucket: "jkiot-b21dd.appspot.com",
  messagingSenderId: "777387298764"
};
firebase.initializeApp(config);

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {

  constructor() {
    super();
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    const msgRef = firebase.database().ref().child('messages');
    var initialDataLoaded = false;

    msgRef.on('child_added', snap => {
      if (initialDataLoaded) {
        this.setState({
          messages: this.state.messages.concat([snap.val()])
        });
      }
      else {

      }
    });

    msgRef.on('value', snap => {
      var arr = [];
      var data = snap.val();
      for (var prop in data) {
        arr.push(data[prop]);
      }
      this.setState({
        messages: arr
      });
      initialDataLoaded = true;
    });
  }

  render() {
    var rows = [];
    this.state.messages.forEach(function (message) {
      rows.push(<MessageRow message={message} />);
    });


    return (
      <div className="App">

        <MuiThemeProvider>
          <AppBar
            title="JirKa IoT Dashboard"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        </MuiThemeProvider>
        <MuiThemeProvider>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>DeviceId</TableHeaderColumn>
                <TableHeaderColumn>EventTime</TableHeaderColumn>
                <TableHeaderColumn>Humidity</TableHeaderColumn>
                <TableHeaderColumn>MTemperature</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>{rows}</TableBody>
          </Table>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
