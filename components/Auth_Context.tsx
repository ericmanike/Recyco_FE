'use client';
import { createContext,useState } from "react";


interface AuthContextType {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);


export function AuthProvider({ children }:{ children: React.ReactNode; }) {
const [isLogin, setIsLogin] = useState(false);



  return <AuthContext.Provider value={{ isLogin, setIsLogin }}>
    {children}
    </AuthContext.Provider>;
}