import React from 'react';
import ActiveUsers from './active-users';
import ListUsers from './list-users';

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