import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { User, Session } from '@/types';
import { authService } from '@/services/auth/authService';

interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
  error: string | null;
  
  // Actions
  setUser: (user: User | null) => void;
  setSession: (session: Session | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
  checkAuth: () => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      session: null,
      loading: false,
      error: null,

      setUser: (user) => set({ user }),
      
      setSession: (session) => set({ session }),
      
      setLoading: (loading) => set({ loading }),
      
      setError: (error) => set({ error }),
      
      clearError: () => set({ error: null }),

      signIn: async (email: string, password: string) => {
        set({ loading: true, error: null });
        
        try {
          const response = await authService.signIn(email, password);
          
          if (response.success && response.data) {
            set({ 
              user: response.data.user,
              session: response.data,
              loading: false,
              error: null
            });
            return true;
          } else {
            set({ 
              loading: false,
              error: response.error?.message || 'Sign in failed'
            });
            return false;
          }
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'An error occurred';
          set({ loading: false, error: errorMessage });
          return false;
        }
      },

      signOut: async () => {
        set({ loading: true });
        
        try {
          await authService.signOut();
          set({ user: null, session: null, loading: false, error: null });
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Sign out failed';
          set({ loading: false, error: errorMessage });
        }
      },

      checkAuth: async () => {
        set({ loading: true });
        
        try {
          const response = await authService.getCurrentUser();
          
          if (response.success && response.data) {
            set({ user: response.data, loading: false });
          } else {
            set({ user: null, session: null, loading: false });
          }
        } catch (error) {
          set({ user: null, session: null, loading: false });
        }
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ 
        user: state.user,
        session: state.session 
      }),
    }
  )
);
