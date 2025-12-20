"use client";

import { FormEvent, useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { isValidEmail } from "@/lib/utils/validators";

/**
 * SignInForm component with DaisyUI styling
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
        <div className="alert alert-error">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{displayError}</span>
        </div>
      )}
      
      <div className="form-control">
        <label className="label" htmlFor="email">
          <span className="label-text">Email</span>
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          placeholder="your@email.com"
          className={`input input-bordered w-full ${displayError ? "input-error" : ""}`}
          aria-required="true"
          aria-invalid={!!validationError}
        />
      </div>
      
      <div className="form-control">
        <label className="label" htmlFor="password">
          <span className="label-text">Password</span>
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
          placeholder="••••••••"
          className={`input input-bordered w-full ${displayError ? "input-error" : ""}`}
          aria-required="true"
          aria-invalid={!!validationError}
        />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
      </div>
      
      <button 
        type="submit" 
        className={`btn btn-primary w-full ${isLoading ? "loading" : ""}`}
        disabled={isLoading}
        aria-busy={isLoading}
      >
        {isLoading ? (
          <>
            <span className="loading loading-spinner"></span>
            Signing in...
          </>
        ) : (
          "Sign In"
        )}
      </button>
    </form>
  );
}
