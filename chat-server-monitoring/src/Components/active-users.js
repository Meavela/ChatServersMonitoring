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
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ textAlign : 'center' }}>
        <CardHeader title="Active users" style={{ color : 'blue', paddingBottom : 0 }}/>
        <CardContent style={{ paddingTop: 0 }}>
            <h1 style={{ fontSize : 40 }}>
                1
            </h1>
            <Typography style={{ color: 'grey' }}>
                On servers :
            </Typography>
            <ActiveServers />
        </CardContent>
    </Card>
  );
}
