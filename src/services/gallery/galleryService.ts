import { apiClient } from "../api/client";
import { Gallery } from "@/types";
import { ApiResponse, GalleryFilters } from "@/types/api";

export const galleryService = {
  async getGalleries(filters?: GalleryFilters): Promise<ApiResponse<Gallery[]>> {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined) {
          params.append(key, String(value));
        }
      });
    }
    
    return apiClient.get<Gallery[]>(`/galleries?${params.toString()}`);
  },
  
  async getGalleryById(id: string): Promise<ApiResponse<Gallery>> {
    return apiClient.get<Gallery>(`/galleries/${id}`);
  },
  
  async createGallery(data: Partial<Gallery>): Promise<ApiResponse<Gallery>> {
    return apiClient.post<Gallery>("/galleries", data);
  },
  
  async updateGallery(id: string, data: Partial<Gallery>): Promise<ApiResponse<Gallery>> {
    return apiClient.put<Gallery>(`/galleries/${id}`, data);
  },
  
  async deleteGallery(id: string): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(`/galleries/${id}`);
  },
  
  async publishGallery(id: string): Promise<ApiResponse<Gallery>> {
    return apiClient.post<Gallery>(`/galleries/${id}/publish`);
  },
};
