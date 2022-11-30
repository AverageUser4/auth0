import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function AuthButton() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  console.log(useAuth0())
  
  return (
    <button
      onClick={() => isAuthenticated ? logout() : loginWithRedirect()}
    >
      {isAuthenticated ? 'Log out' : 'Log in'}
    </button>
  );
}