import React, { Component } from 'react';

import { Card, Grid, Statistic, Icon } from 'semantic-ui-react'

class RoomState extends Component {
    render() {
        var temperature = this.props.data.temperature + ' °C';
        var humidity = this.props.data.humidity + '%';
        var light = this.props.data.light + '%';
        var move = this.props.data.move ? 'Ano' : 'Ne';
        var timestamp = this.props.data.timestamp;
        return (
            <Card centered>
                <Card.Content>
                    <Card.Header>
                        Aktuální stav
                    </Card.Header>
                    <Card.Description>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Statistic size='tiny' value={temperature} label='Teplota' />
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Statistic size='tiny' value={humidity} label='Vlkhost' />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Statistic size='tiny' value={light} label='Světla' />
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Statistic size='tiny' value={move} label='Pohyb' />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='wait' />
                    {timestamp}
                </Card.Content>
            </Card>
        );
    }
}

export default RoomState;