import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './routes/Home';
import logo from './assets/logo.svg';
import Users from './routes/Users';
import Sidebar from './components/sidebar'; // Import Sidebar
import styles from './styles/App.module.scss';


const App: React.FC = () => {
  return (
    <Router>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
