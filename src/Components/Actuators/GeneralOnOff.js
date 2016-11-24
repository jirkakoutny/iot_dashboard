import React, { Component } from 'react';

import SimpleActuator from './SimpleActuator'

class GeneralOnOff extends Component {
    render() {
        var actuator =
            {
                name: 'Vše',
                actions: []
            }
        return (
            <SimpleActuator data={actuator} key={actuator.name}></SimpleActuator>
        );
    }
}

export default GeneralOnOff;