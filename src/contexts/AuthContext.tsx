import React, { createContext, useContext, useMemo, useState } from "react";
import { User } from "../types/User";

interface AuthContextType {
  user: User;
  createSession: (userObj: User) => Promise<void>;
  removeSession: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  //@ts-ignore
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const createSession = async (userObj: User) => {
    if (userObj) {
      setUser(userObj);
      localStorage.setItem("user", JSON.stringify(userObj));
      return;
    }
    removeSession();
  };

  const removeSession = async () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value = {
    user,
    createSession,
    removeSession,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
