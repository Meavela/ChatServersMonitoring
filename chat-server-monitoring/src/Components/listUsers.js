import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(server, userId, name, status) {
  return { server, userId, name, status };
}

const rows = [
  createData('http://127.0.0.1:4567', 0, 'Lou', 'ACTIVE'),
  createData('http://127.0.0.1:2435', 1, 'Marc-Antoine', 'INACTIVE'),
];

export default function ListUsers() {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ textAlign : 'center' }}>
        <CardHeader title="Users" style={{ color : 'blue', paddingBottom : 0 }}/>
        <CardContent style={{ paddingTop: 0 }}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Server</TableCell>
                        <TableCell align="right">User ID</TableCell>
                        <TableCell align="right">Username</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.server}>
                        <TableCell component="th" scope="row">
                            {row.server}
                        </TableCell>
                        <TableCell align="right">{row.userId}</TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.status}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </CardContent>
    </Card>
    
  );
}