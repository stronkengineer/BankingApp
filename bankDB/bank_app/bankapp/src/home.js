// Home.js
import React from 'react';
import BankImage from './download.png'; // Replace with the actual path to your bank image

const Home = () => {
  return (
    <div>
      <div style={styles.navbar}>
        <img src={BankImage} alt="Bank Logo" style={styles.bankLogo} />
      </div>
      <div style={styles.homeContent}>
        <h2>Welcome to The Online Banking Application</h2>
        <p>
          This website allows for the ability to do main functionalities of banking applications online!
        </p>
        {/* Add additional content */}
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#3366cc', // Example background color
    padding: '10px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bankLogo: {
    width: '100px', // Adjust the width as needed
    height: 'auto', // Maintain the aspect ratio
  },
  homeContent: {
    padding: '20px',
    marginTop: '50px', // Adjust as needed
    alignItems:'center',
  },
};

export default Home;
