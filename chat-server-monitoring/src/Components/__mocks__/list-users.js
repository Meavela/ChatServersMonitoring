import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

class ListUsers extends React.Component {
  render() {
      return (
          <div>
              <Card className="list-card">
                <CardHeader title="Users" className="title"/>
                <CardContent className="list-card-content">
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Server</TableCell>
                                <TableCell align="right">User ID</TableCell>
                                <TableCell align="right">Username</TableCell>
                                <TableCell align="right">Status</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow key="0">
                                    <TableCell component="th" scope="row">151.11.52.68</TableCell>
                                    <TableCell align="right">1</TableCell>
                                    <TableCell align="right">Lou</TableCell>
                                    <TableCell align="right">ACTIVE</TableCell>
                                </TableRow>
                                <TableRow key="1">
                                    <TableCell component="th" scope="row">172.82.64.79</TableCell>
                                    <TableCell align="right">2</TableCell>
                                    <TableCell align="right">Marc-Antoine</TableCell>
                                    <TableCell align="right">ACTIVE</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
          </div>
      )
  }
}

export default ListUsers