import React from 'react'
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import AuthButton from './components/AuthButton';

export default function App() {
  // isLoading is true when waiting for data from auth0
  const { isAuthenticated, isLoading } = useAuth0();

  if(isLoading)
    return <h1>Loading...</h1>

  return(
    <div>
      <AuthButton/>
      {isAuthenticated && <Profile/>}
    </div>
  );
}
