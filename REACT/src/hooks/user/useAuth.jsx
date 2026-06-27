import { useEffect, useState } from "react";

const SESSION_KEY = "particularUser";

function useAuth() {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem(SESSION_KEY);

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error(error);
        setError(error);
      }
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(userData));
  };

  const logout = (userData) => {
    setUser(null);
    sessionStorage.removeItem(SESSION_KEY);
  };

  return {
    user,
    login,
    logout,
    error,
    isAuthenticated: user !== null,
  };
}

export default useAuth;
