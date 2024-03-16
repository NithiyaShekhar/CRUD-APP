import React from 'react';
import { Navigate } from 'react-router-dom';

const LogoutForm = ({ onLogout }) => {
  const handleLogout = () => {
    onLogout(); 
  };

  handleLogout();

  return <Navigate to="/" />;
};

export default LogoutForm;
