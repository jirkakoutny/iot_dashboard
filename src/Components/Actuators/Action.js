import React, { Component } from 'react';

import { Button, Card } from 'semantic-ui-react'

class Action extends Component {
    render() {
        return (
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button content={this.props.data.left} icon='minus' labelPosition='right' color="blue" />
                        <Button content={this.props.data.right} icon='plus' labelPosition='left' color="orange" />
                    </div>
                </Card.Content>
        );
    }
}

export default Action;