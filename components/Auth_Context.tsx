'use client';

import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  user: any | null;
  loading: boolean;
  setUser: (user: any | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hydrateAuth = async () => {
      try {
        const res = await fetch("https://recyco-backend.onrender.com/auth/me", {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          setUser(null);
        } else {
          const data = await res.json();
          setUser(data);
          console.log("Hydrated user:", data);
        }
      } catch(error) {
        console.error("Hydrate auth error:", error);
        setUser(null);
      } finally {
        setLoading(false);
       
      }
    };

    hydrateAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
