import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Servers from './servers.json'

export default function ActiveServers(){
    return (
        <List>
            {Servers.names.map((text) => (
                <ListItem button key={text} className="servers-items">
                    <ListItemText primary={text}/>
                </ListItem>
            ))}
        </List>
    )
}
