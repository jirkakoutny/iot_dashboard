import React, { Component } from 'react';

import { Card } from 'semantic-ui-react'

import OnOff from './OnOff'

class Light extends Component {
    render() {
        return (
            <Card centered>
                <Card.Content>
                    <Card.Header>
                        Světla
                    </Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <OnOff></OnOff>
                </Card.Content>
            </Card>
        );
    }
}

export default Light;