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
import Servers from '../servers.json'
import axios from 'axios';

class ListChatRooms extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chatrooms: [{
                ip: "",
                name: "",
            }],
        }
    }

    async componentDidMount() {
        this.setState({ chatrooms: [] })
        var chatrooms = []
        Servers.names.forEach(element => {
            axios.get(element + "/chatrooms")
                .then(res => {
                    var response = res.data
                    response.forEach(val => {
                        let item = {
                            ip: element,
                            name: val,
                        }
                        chatrooms.push(item)
                    });
                    this.setState({chatrooms: chatrooms})
                }).catch(error => {
                    // console.log(error)
                })
        });
    }

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
                                    {Object.keys(this.state.chatrooms).map((key, index) => (
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row">
                                                {this.state.chatrooms[key].ip}
                                            </TableCell>
                                            <TableCell align="left">{this.state.chatrooms[key].name}</TableCell>
                                        </TableRow>
                                    ))}
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