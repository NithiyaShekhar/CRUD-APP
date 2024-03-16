import './App.scss';
import { useState } from 'react';
import { Header } from './layout';
import { BrowserRouter as Router, Route, Routes, BrowserRouter,Navigate } from 'react-router-dom';
import LoginForm from './components/user/LoginForm/LoginForm';
import Log from './components/user/LoginForm/LoginForm';
import { UserForm } from './components/user/userForm';
import LogoutForm from './components/user/LoginForm/Logout';
import { UserPage } from './pages/user';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <div className='container mt-5'>
          <Routes>
            <Route path="/" element={isLoggedIn ? <Navigate to="/user" /> : <LoginForm onLogin={handleLogin} />} />
            <Route path="/user" element={isLoggedIn ? <UserPage /> : <Navigate to="/" />} />
            <Route path="/logout" element={<LogoutForm onLogout={handleLogout} />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
