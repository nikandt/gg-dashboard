import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './routes/Home';
import logo from './assets/logo.svg';
import Users from './routes/Users';

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

const Sidebar: React.FC = () => (
	<div className={styles.sidebar}>
	  <div className={styles.logo}>
		<img src={logo} alt="Logo" />
	  </div>
	  <nav className={styles.navLinks}>
		<Link to="/" className={styles.navLink}>
		  <i className="fas fa-home"></i> Home
		</Link>
		<Link to="/users" className={styles.navLink}>
		  <i className="fas fa-users"></i> Users
		</Link>
		<Link to="/settings" className={styles.navLink}>
		  <i className="fas fa-cog"></i> Settings
		</Link>
	  </nav>
	  <footer className={styles.footer}>
		<p>Copyright: Tessa Nikander</p>
	  </footer>
	</div>
  );

export default App;
