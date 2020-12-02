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

class ListChatRooms extends React.Component {
    render() {
        return (
            <div>
                <Card className="list-card">
                    <CardHeader title="Chatrooms" className="title"/>
                    <CardContent className="list-card-content">
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Server</TableCell>
                                        <TableCell align="left">Chatroom</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell component="th" scope="row">
                                            http://127.0.0.1:7419/unittest
                                        </TableCell>
                                        <TableCell align="left">Best</TableCell>
                                    </TableRow>
                                    <TableRow key="2">
                                        <TableCell component="th" scope="row">
                                            http://127.0.0.1:6592/unitest2
                                        </TableCell>
                                        <TableCell align="left">Looser</TableCell>
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

export default ListChatRooms