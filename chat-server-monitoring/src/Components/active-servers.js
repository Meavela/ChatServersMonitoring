import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function ListUsers(){
    return (
        <List>
            {['http://127.0.0.1:4567', 'http://127.0.0.1:2435'].map((text, index) => (
                <ListItem button key={text} style={{ textAlign : 'center', padding:0 }}>
                    <ListItemText primary={text} style={{ color : 'grey' }}/>
                </ListItem>
            ))}
        </List>
    )
}
