"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/ui/Button";
import { useAuthStore } from "@/store/authStore";
import { isValidEmail } from "@/lib/utils/validators";

/**
 * SignInForm component with input validation and error handling
 * Uses Zustand store for state management
 */
export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState<string | null>(null);
  
  const { signIn, loading: isLoading, error, clearError } = useAuthStore();
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setValidationError(null);
    clearError();
    
    // Client-side validation
    if (!email || !password) {
      setValidationError("Email and password are required");
      return;
    }
    
    if (!isValidEmail(email)) {
      setValidationError("Please enter a valid email address");
      return;
    }
    
    if (password.length < 6) {
      setValidationError("Password must be at least 6 characters");
      return;
    }
    
    // Attempt sign in
    const success = await signIn(email, password);
    
    if (success) {
      // Clear form on success
      setEmail("");
      setPassword("");
    }
  };
  
  const displayError = validationError || error;
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {displayError && (
        <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm">
          {displayError}
        </div>
      )}
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          aria-required="true"
          aria-invalid={!!validationError}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800"
        />
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
          aria-required="true"
          aria-invalid={!!validationError}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800"
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full"
        disabled={isLoading}
        aria-busy={isLoading}
      >
        {isLoading ? "Signing in..." : "Sign In"}
      </Button>
    </form>
  );
}
