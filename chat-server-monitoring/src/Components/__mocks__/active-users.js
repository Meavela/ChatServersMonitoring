import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ActiveServers from './active-servers';

class ActiveUsers extends React.Component {
  render() {
    return (
        <div>
            <Card className="count-card">
                <CardHeader className="title" title="Active users"></CardHeader>
                <CardContent>
                    <Typography variant="h2">
                        2
                    </Typography>
                    <div className="servers">
                      <Typography>
                          On servers :
                      </Typography>
                      <ActiveServers />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
  }
}

export default ActiveUsers
