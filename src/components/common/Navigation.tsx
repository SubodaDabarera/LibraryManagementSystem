import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Navigation: React.FC = () => {
  const { user, removeSession } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        {user ? (
          <Button color="inherit" onClick={removeSession}>Logout</Button>
        ) : (
          <Button color="inherit" component={Link} to="/login">Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;