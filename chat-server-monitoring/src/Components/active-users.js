import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ActiveServers from './active-servers';
import Servers from '../servers.json'
import axios from 'axios';

class ActiveUsers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        users: [],
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
                  users.push(val)
                });
                this.setState({ users: users })
            })
    });
  }

  render() {
    return (
        <div>
            <Card className="count-card">
                <CardHeader className="title" title="Active users"></CardHeader>
                <CardContent>
                    <Typography variant="h2">
                        {this.state.users.length}
                    </Typography>
                    <div className="servers">
                      <Typography>
                          On servers :
                      </Typography>
                      <ActiveServers />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
  }
}

export default ActiveUsers
