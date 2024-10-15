import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.scss';
import Card from '../components/card';

const Home: React.FC = () => {
  const [ip, setIp] = useState<string | null>(null);

  // Fetch the user's IP address (example)
  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => setIp(data.ip));
  }, []);

  return (
    <div className={styles.home}>
      <h1>Welcome to GG Dashboard!</h1>
      <p>Your IP address: {ip ? ip : '...'}</p>

      {/* Placeholder for a chart */}
      <div className={styles.chartPlaceholder}>
       <h2>Chart Placeholder</h2>
        <p>(A chart will go here)</p>
      </div>

    </div>
  );
};

export default Home;
