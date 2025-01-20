import { useState } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Simulated authentication
    if (email && password) {
      setUser({ email, isAuthenticated: true });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return { user, login, logout };
};