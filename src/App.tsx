import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './routes/Home';

import Users from './routes/Users';
import Sidebar from './components/sidebar';
//import Header from './components/header'; uggo
import styles from './styles/App.module.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	palette: {
	  primary: {
		main: '#3498db',
	  },
	},
	typography: {
	  fontFamily: 'Work Sans, sans-serif',
	},
  });

const App: React.FC = () => {
  return (
	<ThemeProvider theme={theme}>
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
	</ThemeProvider>
  );
};

export default App;
