import React from 'react';
import ListChatRooms from './list-chatrooms'
import CountChatRooms from './count-chatrooms'

class ChatRooms extends React.Component {

    render() {
        return (
            <div>
                <CountChatRooms />
                <ListChatRooms />
            </div>
        )
    }
}

export default ChatRooms