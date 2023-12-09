import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    fullName: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to the backend
      const response = await axios.post('http://localhost:3000/api/userController/create', formData);
      const response1 = await axios.post('http://localhost:3000/api/accountController/create', formData);

      console.log('Server response:', response.data);
      console.log('Server1 response:', response1.data);
    } catch (error) {
      console.error('Error sending form data:', error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Type Of Account:
          <input
            type="text"
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Starting Balance:
          <input
            type="number"
            name="balance"
            value={formData.balance}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
