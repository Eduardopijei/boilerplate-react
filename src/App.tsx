import React, { useState } from 'react';
import logo from './logo.svg';
import { AppBar } from '@mui/material';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

function App() {
  const [user, setUser] = useState(null)
  return (
      user ? (
        <AuthenticatedApp />
      ) : (
        <UnauthenticatedApp />
      )
  );
}

export default App;
