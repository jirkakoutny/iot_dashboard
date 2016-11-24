import React, { Component } from 'react';

import SimpleActuator from './Actuators/SimpleActuator'
import RoomState from './Status/RoomState'
import GeneralOnOff from './Actuators/GeneralOnOff'

class Room extends Component {
    render() {
        var actuators = [];
        this.props.data.actuators.forEach(x => {
            actuators.push(<SimpleActuator data={x} key={x.name}></SimpleActuator>);
        });
        return (
            <div>
                <h2 className="center aligned header form-head">{this.props.data.name}</h2>
                <RoomState data={this.props.data.state}></RoomState>
                {actuators}
                <GeneralOnOff data={actuators}></GeneralOnOff>
            </div>
        );
    }
}

export default Room;