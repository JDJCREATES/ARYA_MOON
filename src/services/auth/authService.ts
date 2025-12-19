import { apiClient } from "../api/client";
import { User, Session } from "@/types";
import { ApiResponse } from "@/types/api";

export const authService = {
  async signIn(email: string, password: string): Promise<ApiResponse<Session>> {
    return apiClient.post<Session>("/auth/signin", { email, password });
  },
  
  async signUp(email: string, password: string, name: string): Promise<ApiResponse<Session>> {
    return apiClient.post<Session>("/auth/signup", { email, password, name });
  },
  
  async signOut(): Promise<ApiResponse<void>> {
    return apiClient.post<void>("/auth/signout");
  },
  
  async getCurrentUser(): Promise<ApiResponse<User>> {
    return apiClient.get<User>("/auth/me");
  },
  
  async refreshToken(): Promise<ApiResponse<Session>> {
    return apiClient.post<Session>("/auth/refresh");
  },
};
