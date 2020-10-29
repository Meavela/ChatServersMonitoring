import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ActiveServers from './active-servers'

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
                    <CardContent>
                        <Typography className="title">
                            Chatrooms
                        </Typography>
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