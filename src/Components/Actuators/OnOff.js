import React, { Component } from 'react';

import { Button } from 'semantic-ui-react'

class OnOff extends Component {
    render() {
        return (
            <div className='ui two buttons'>
                <Button basic color='green'>Zapnout</Button>
                <Button basic color='red'>Vypnout</Button>
            </div>
        );
    }
}

export default OnOff;