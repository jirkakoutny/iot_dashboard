import React, { Component } from 'react';

import { Card, Grid, Statistic, Icon } from 'semantic-ui-react'

class RoomState extends Component {
    render() {
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
                                    <Statistic size='tiny' value='22 °C' label='Teplota' />
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Statistic size='tiny' value='50 %' label='Vlkhost' />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Statistic size='tiny' value='20 %' label='Světla' />
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Statistic size='tiny' value='NE' label='Pohyb' />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='wait' />
                    14 minutes ago
                </Card.Content>
            </Card>
        );
    }
}

export default RoomState;