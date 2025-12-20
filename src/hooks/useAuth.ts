"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";

/**
 * Custom hook for authentication using Zustand store
 * Provides backward compatibility with the previous useState-based implementation
 * 
 * @returns Authentication state and methods
 */
export function useAuth() {
  const { 
    user, 
    loading, 
    error,
    signIn, 
    signOut, 
    checkAuth,
    clearError 
  } = useAuthStore();
  
  useEffect(() => {
    // Check authentication on mount
    checkAuth();
  }, [checkAuth]);
  
  return {
    user,
    loading,
    error,
    signIn,
    signOut,
    clearError,
    isAuthenticated: !!user,
  };
}
