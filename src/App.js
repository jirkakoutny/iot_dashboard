import React, { Component } from 'react';
import './App.css';

import moment from 'moment';

import ReactDOM from 'react-dom';
import { Image, Button, Card, Icon, Statistic, Grid } from 'semantic-ui-react'

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
var lastValues = moment([2016, 10, 23, 14, 23, 21]).fromNow();
console.log(lastValues);
    return (
      <div className="ui one column center aligned grid">
        <div className="column ten wide form-holder">
          <Image src={logo} centered />
          <h2 className="center aligned header form-head">Zasedačka IT</h2>
          <Card centered>
            <Card.Content>
              <Card.Header>
                Aktuální stav
      </Card.Header>
              <Card.Description>

                <Grid>
                  <Grid.Row>
                    <Grid.Column width={8}>
                      <Statistic size='tiny' value='22 °C' label='Teplota' />
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <Statistic size='tiny' value='50 %' label='Vlkhost' />
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column width={8}>
                      <Statistic size='tiny' value='20 %' label='Světla' />
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <Statistic size='tiny' value='NE' label='Pohyb' />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>

              </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='wait' />
                {lastValues}
            </Card.Content>
          </Card>

          <Card centered>
            <Card.Content>
              <Card.Header>
                Světla
        </Card.Header>

            </Card.Content>

            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>Zapnout</Button>
                <Button basic color='red'>Vypnout</Button>
              </div>
            </Card.Content>
          </Card>
          <Card centered>
            <Card.Content>
              <Card.Header>
                Klimatizace
        </Card.Header>
            </Card.Content>
            <Card.Content extra>

              <Card.Content extra>

                <div className='ui two buttons'>
                  <Button content='Chladněji' icon='minus' labelPosition='right' color="blue" />
                  <Button content='Tepleji' icon='plus' labelPosition='left' color="orange" />
                </div>
              </Card.Content>
            </Card.Content>
            <Card.Content extra>

              <div className='ui two buttons'>
                <Button basic color='green'>Zapnout</Button>
                <Button basic color='red'>Vypnout</Button>
              </div>
            </Card.Content>
          </Card>
          <Card centered>
            <Card.Content>
              <Card.Header>
                Projektor
        </Card.Header>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>Zapnout</Button>
                <Button basic color='red'>Vypnout</Button>
              </div>
            </Card.Content>
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
