import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ActiveServers from './active-servers';


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

export default function ActiveUsers() {
  return (
    <Card className="count-card">
        <CardHeader title="Active users" className="title"/>
        <CardContent>
            <Typography variant="h2">
              1
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
