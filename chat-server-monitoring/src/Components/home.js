import React from 'react';
import ActiveUsers from './active-users';
import ActiveChatrooms from './count-chatrooms';
import ListUsers from './list-users';
import ListChatrooms from './list-chatrooms';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

class Home extends React.Component {

    render() {
        return (
            <Box>
                <Grid container>
                    <Grid item xs={6}>
                        <ActiveUsers flexGrow={1} className="homeActive"/>
                    </Grid>
                    <Grid item xs={6}>
                        <ActiveChatrooms flexGrow={1} className="homeActive"/>
                    </Grid>
                </Grid>
                <br />
                <ListUsers />
                <br />
                <ListChatrooms />
            </Box>
        )
    }
}

export default Home