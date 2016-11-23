import React, { Component } from 'react';

import { Button, Card } from 'semantic-ui-react'

import OnOff from './OnOff'

class AirConditioner extends Component {
    render() {
        return (
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
                    <OnOff></OnOff>
                </Card.Content>
            </Card>
        );
    }
}

export default AirConditioner;