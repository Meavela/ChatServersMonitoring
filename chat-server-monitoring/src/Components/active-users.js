import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ActiveServers from './active-servers';
import Servers from '../servers.json'


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

var errorMessage = "";

function getUsers(){
  var allUsers = [{server : 'http://127.0.0.1:4567', userId : 0, name : 'Lou', status : 'ACTIVE'},
               {server : 'http://127.0.0.1:2435', userId : 1, name : 'Marc-Antoine', status : 'INACTIVE'}];

  Servers.names.map((text) => (
    fetch(text)
      .then(res => res.json())
      .then(
        (result) => {allUsers += result.items},
        (error) => {errorMessage = error}
      )
  ))

  var activeUsers = [];
  for (let index = 0; index < allUsers.length; index++) {
    const element = allUsers[index];
    if (element.status == "ACTIVE") {
      activeUsers.push(element);
    }
  }

  return activeUsers.length;
}

export default function ActiveUsers() {
  return (
    <Card className="count-card">
        <CardHeader title="Active users" className="title"/>
        <CardContent>
            <Typography variant="h2">
              {getUsers()}
            </Typography>
            <div className="servers">
              <Typography>
                  On servers :
              </Typography>
              <ActiveServers />
            </div>
        </CardContent>
    </Card>
  );
}
