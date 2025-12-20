import { ApiResponse } from "@/types/api";

/**
 * API Client for making HTTP requests
 * Handles authentication tokens, error responses, and request configuration
 */
class ApiClient {
  private baseUrl: string;
  
  constructor(baseUrl: string = "/api") {
    this.baseUrl = baseUrl;
  }
  
  /**
   * Get authentication token from storage
   * @returns Auth token or null
   */
  private getAuthToken(): string | null {
    if (typeof window === 'undefined') return null;
    
    try {
      const authStorage = localStorage.getItem('auth-storage');
      if (authStorage) {
        const parsed = JSON.parse(authStorage);
        return parsed.state?.session?.accessToken || null;
      }
    } catch (error) {
      // Silently fail if storage is unavailable
      return null;
    }
    
    return null;
  }
  
  /**
   * Make an HTTP request with proper error handling
   * @param endpoint - API endpoint path
   * @param options - Fetch options
   * @returns Typed API response
   */
  private async request<T>(
    endpoint: string, 
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    try {
      const token = this.getAuthToken();
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      
      // Merge with provided headers
      if (options?.headers) {
        const optHeaders = options.headers as Record<string, string>;
        Object.assign(headers, optHeaders);
      }
      
      // Add authorization header if token exists
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
      
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers,
        credentials: 'same-origin', // CSRF protection
      });
      
      // Handle non-JSON responses
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid response format");
      }
      
      const data = await response.json();
      
      if (!response.ok) {
        return {
          success: false,
          error: {
            code: data.code || `HTTP_${response.status}`,
            message: data.message || `Request failed with status ${response.status}`,
            details: data.details,
          },
        };
      }
      
      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        error: {
          code: "NETWORK_ERROR",
          message: error instanceof Error ? error.message : "Network error occurred",
        },
      };
    }
  }
  
  /**
   * Make a GET request
   * @param endpoint - API endpoint
   * @returns Typed response
   */
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: "GET" });
  }
  
  /**
   * Make a POST request
   * @param endpoint - API endpoint
   * @param data - Request body data
   * @returns Typed response
   */
  async post<T>(endpoint: string, data?: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    });
  }
  
  /**
   * Make a PUT request
   * @param endpoint - API endpoint
   * @param data - Request body data
   * @returns Typed response
   */
  async put<T>(endpoint: string, data?: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
    });
  }
  
  /**
   * Make a DELETE request
   * @param endpoint - API endpoint
   * @returns Typed response
   */
  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: "DELETE" });
  }
}

export const apiClient = new ApiClient();
