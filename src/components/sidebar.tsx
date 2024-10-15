import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import styles from '../styles/Sidebar.module.scss';

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

export default Sidebar;
