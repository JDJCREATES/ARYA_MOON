import { apiClient } from "../api/client";
import { Purchase } from "@/types";
import { ApiResponse } from "@/types/api";

export const paymentService = {
  async createCheckoutSession(galleryId: string): Promise<ApiResponse<{ sessionId: string; url: string }>> {
    return apiClient.post("/payments/checkout", { galleryId });
  },
  
  async verifyPurchase(sessionId: string): Promise<ApiResponse<Purchase>> {
    return apiClient.get<Purchase>(`/payments/verify/${sessionId}`);
  },
  
  async getPurchases(): Promise<ApiResponse<Purchase[]>> {
    return apiClient.get<Purchase[]>("/payments/purchases");
  },
  
  async refundPurchase(purchaseId: string): Promise<ApiResponse<Purchase>> {
    return apiClient.post<Purchase>(`/payments/refund/${purchaseId}`);
  },
};
