import { apiClient } from "../api/client";
import { Media } from "@/types";
import { ApiResponse } from "@/types/api";

export const mediaService = {
  async getGalleryMedia(galleryId: string): Promise<ApiResponse<Media[]>> {
    return apiClient.get<Media[]>(`/galleries/${galleryId}/media`);
  },
  
  async uploadMedia(galleryId: string, file: File): Promise<ApiResponse<Media>> {
    const formData = new FormData();
    formData.append("file", file);
    
    // Note: This would need special handling for multipart/form-data
    return apiClient.post<Media>(`/galleries/${galleryId}/media`, formData);
  },
  
  async deleteMedia(galleryId: string, mediaId: string): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(`/galleries/${galleryId}/media/${mediaId}`);
  },
  
  async updateMediaOrder(galleryId: string, mediaOrder: { id: string; order: number }[]): Promise<ApiResponse<void>> {
    return apiClient.put<void>(`/galleries/${galleryId}/media/order`, { mediaOrder });
  },
};
