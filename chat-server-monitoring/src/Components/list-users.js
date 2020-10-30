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

const styles = {
  table: {
      minWidth: 650,
  },
}

class ListUsers extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          users: [{
              ip: "",
              id: "",
              name: "",
              status: "",
          }],
      }
  }

  async componentDidMount() {
      this.setState({ users: [] })
      var users = []
      Servers.names.forEach(element => {
          axios.get(element + "/users")
              .then(res => {
                  var response = res.data
                  response.forEach(val => {
                      let item = {
                          ip: element,
                          id: val.account.id,
                          name: val.account.username,
                          status: val.currentStatus
                      }
                      users.push(item)
                  });
                  this.setState({users: users})
              })
      });
  }

  render() {
      return (
          <div>
              <Card className="list-card">
                <CardHeader title="Users" className="title"/>
                <CardContent className="list-card-content">
                    <TableContainer component={Paper}>
                        <Table className={styles.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Server</TableCell>
                                <TableCell align="right">User ID</TableCell>
                                <TableCell align="right">Username</TableCell>
                                <TableCell align="right">Status</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {Object.keys(this.state.users).map((key, index) => (
                                <TableRow key={index}>
                                <TableCell component="th" scope="row">{this.state.users[key].ip}</TableCell>
                                <TableCell align="right">{this.state.users[key].id}</TableCell>
                                <TableCell align="right">{this.state.users[key].username}</TableCell>
                                <TableCell align="right">{this.state.users[key].status}</TableCell>
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

export default ListUsers