import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ActiveServers from './active-servers'
import { CardHeader } from '@material-ui/core';

class CountChatRooms extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chatrooms: [],
        }
    }

    componentDidMount() {
        this.setState({
            chatrooms: ["chatroomMock1", "chatroomMock2"],
        })
    }

    render() {
        return (
            <div>
                <Card className="count-card">
                    <CardHeader className="title" title="Chatrooms"></CardHeader>
                    <CardContent>
                        <Typography variant="h2">
                            {this.state.chatrooms.length}
                        </Typography>
                        <Typography style={{ color: 'grey' }}>
                            On servers :
                        </Typography>
                        <ActiveServers />
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default CountChatRooms