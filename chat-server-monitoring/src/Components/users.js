import React from 'react';
import ActiveUsers from './activeUsers';
import ListUsers from './listUsers';

class Users extends React.Component {

    render() {
        return (
            <div>
                <ActiveUsers />
                <br />
                <ListUsers />
            </div>
        )
    }
}

export default Users