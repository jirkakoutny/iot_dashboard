import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


class MessageRow extends React.Component {
  render() {
    return (
      <TableRow>
        <TableRowColumn>{this.props.message.deviceId}</TableRowColumn>
        <TableRowColumn>{this.props.message.windSpeed}</TableRowColumn>
      </TableRow>
    );
  }
}

export default MessageRow; 