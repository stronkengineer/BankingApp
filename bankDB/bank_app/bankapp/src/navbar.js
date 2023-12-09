import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/signin" style={styles.navLink}>
            Sign In
          </Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: 'black',  // Background color
    padding: '10px',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
  },
  navItem: {
    marginRight: '15px',
    fontFamily: 'Times New Roman',  // Font family
  },
  navLink: {
    color: 'white',  // Font color
    textDecoration: 'none',
    fontSize: '16px',
  },
};

export default Navbar;
