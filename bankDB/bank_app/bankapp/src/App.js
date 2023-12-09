import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './navbar';
import Home from './home';
import SignIn from './signUp';

// Footer component
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.footerText}>BUE SENIORS: Adam, Mazen, Nour, Omar</p>
    </footer>
  );
};

// Styles for the footer
const styles = {
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerText: {
    margin: 0,
  },
};

// Styles for the main content area
const contentStyles = {
  minHeight: 'calc(100vh - 50px)', // Adjust the height based on your navbar's height
  position: 'relative',
};

// App component
const App = () => {
  return (
    <Router>
      <div style={contentStyles}>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
