import React, { Component } from 'react';

import { Card } from 'semantic-ui-react'

import OnOff from './OnOff'

class Presenter extends Component {
    render() {
        return (
            <Card centered>
                <Card.Content>
                    <Card.Header>
                        Projektor
                </Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <OnOff></OnOff>
                </Card.Content>
            </Card>
        );
    }
}

export default Presenter;