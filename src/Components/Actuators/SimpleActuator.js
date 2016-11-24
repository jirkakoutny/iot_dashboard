import React, { Component } from 'react';

import { Card } from 'semantic-ui-react'

import Action from './Action'
import OnOff from './OnOff'

class SimpleActuator extends Component {
    render() {
        var actions = [];
        this.props.data.actions.forEach(x => {
            actions.push(<Action data={x} key={x.name}></Action>);
        });
        return (
            <Card centered>
                <Card.Content>
                    <Card.Header>
                        {this.props.data.name}
                    </Card.Header>
                </Card.Content>
                {actions}
                <Card.Content extra>
                    <OnOff></OnOff>
                </Card.Content>
            </Card>
        );
    }
}

export default SimpleActuator;