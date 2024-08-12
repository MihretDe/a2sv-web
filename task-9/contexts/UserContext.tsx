"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';


interface UserContextType {
  user: { email: string } | null;
  isLoggedIn: boolean;
  setUser: React.Dispatch<React.SetStateAction<{ email: string } | null>>;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  
  // useEffect(() => {
  //   const savedUser = localStorage.getItem('user');
  //   if (savedUser) {
  //     setUser(JSON.parse(savedUser));
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (user) {
  //     localStorage.setItem('user', JSON.stringify(user));
  //     setIsLoggedIn(true);
  //   } else {
  //     localStorage.removeItem('user');
  //     setIsLoggedIn(false);
  //   }
  // }, [user]);

  return (
    <UserContext.Provider value={{ user, isLoggedIn, setUser , setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
