import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.scss';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [ip, setIp] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => setIp(data.ip));
  }, []);

  return (
    <div className={styles.home}>
      <h1>Welcome to GG Dashboard!</h1>
      <p>Your IP address: {ip ? ip : '...'}</p>

      {/* Summary Cards */}
      <Box sx={{ display: 'flex', gap: 3, marginTop: 4 }}>
        <Card sx={{ flexGrow: 1 }}>
          <CardContent>
            <Typography variant="h6">Total Users</Typography>
            <Typography variant="h4">150</Typography>
          </CardContent>
        </Card>
        <Card sx={{ flexGrow: 1 }}>
          <CardContent>
            <Typography variant="h6">Active Users</Typography>
            <Typography variant="h4">120</Typography>
          </CardContent>
        </Card>
        <Card sx={{ flexGrow: 1 }}>
          <CardContent>
            <Typography variant="h6">Pending Tasks</Typography>
            <Typography variant="h4">5</Typography>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ marginTop: 4 }}>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Navigate to the users page to view, search, and manage all registered users.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/users"
            >
              Go to Users
            </Button>
      </Box>

      {/* Placeholder for a chart */}
      <Box sx={{ marginTop: 4 }}>
        <Card>
          <CardContent>
            <Typography variant="h6">User Activity</Typography>
            <Box sx={{ height: 200, backgroundColor: '#f5f5f5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant="body2" color="textSecondary">
                Chart Placeholder
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Home;
