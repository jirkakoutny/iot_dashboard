import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import moment from 'moment';

class MessageRow extends React.Component {
  render() {
    return ( 
      <TableRow>
        <TableRowColumn>{this.props.message.DeviceId}</TableRowColumn>
        <TableRowColumn>{moment.unix(this.props.message.EventTime).format("dddd, MMMM Do YYYY, h:mm:ss a")}</TableRowColumn>
        <TableRowColumn>{this.props.message.Humidity}</TableRowColumn>
        <TableRowColumn>{this.props.message.MTemperature}</TableRowColumn>
        <TableRowColumn>{this.props.message.Utc}</TableRowColumn>
      </TableRow>
    );
  }
}

export default MessageRow; 