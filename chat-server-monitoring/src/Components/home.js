import React from 'react';
import ActiveUsers from './active-users';
import ActiveChatrooms from './count-chatrooms';
import ListUsers from './list-users';
import ListChatrooms from './list-chatrooms';

class Home extends React.Component {

    render() {
        return (
            <div>
                <ActiveUsers />
                <ActiveChatrooms />
                <br />
                <ListUsers />
                <ListChatrooms />
            </div>
        )
    }
}

export default Home