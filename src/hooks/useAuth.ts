"use client";

import { useState, useEffect } from "react";
import { User } from "@/types";
import { authService } from "@/services/auth/authService";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    checkAuth();
  }, []);
  
  const checkAuth = async () => {
    try {
      const response = await authService.getCurrentUser();
      if (response.success && response.data) {
        setUser(response.data);
      }
    } catch (error) {
      console.error("Auth check failed:", error);
    } finally {
      setLoading(false);
    }
  };
  
  const signIn = async (email: string, password: string) => {
    const response = await authService.signIn(email, password);
    if (response.success && response.data) {
      setUser(response.data.user);
      return true;
    }
    return false;
  };
  
  const signOut = async () => {
    await authService.signOut();
    setUser(null);
  };
  
  return {
    user,
    loading,
    signIn,
    signOut,
    isAuthenticated: !!user,
  };
}
