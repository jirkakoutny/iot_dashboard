import React, { Component } from 'react';

import { Button } from 'semantic-ui-react'

class OnOff extends Component {
    render() {
        if (this.props.data !== 'Vše') {
            return (
                <div className='ui two buttons'>
                    <Button basic color='green'>Zapnout</Button>
                    <Button basic color='red'>Vypnout</Button>
                </div>
            );
        }
        else 
        {
            return (
                <div className='ui two buttons'>
                    <Button color='green'>Zapnout</Button>
                    <Button color='red'>Vypnout</Button>
                </div>
            );
        }
    }
}

export default OnOff;