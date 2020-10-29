import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Servers from '../servers.json'

const rows = Servers.names;

export default function ActiveServers(){
    return (
        <List>
            {rows.map((text) => (
                <ListItem button key={text} className="servers-items">
                    <ListItemText primary={text}/>
                </ListItem>
            ))}
        </List>
    )
}
