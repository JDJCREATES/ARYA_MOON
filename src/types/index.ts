// Core type definitions for the gallery marketplace

export interface User {
  id: string;
  email: string;
  name: string;
  role: "creator" | "buyer" | "admin";
  createdAt: Date;
  updatedAt: Date;
}

export interface Gallery {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  creatorId: string;
  creator?: User;
  coverImage: string;
  mediaCount: number;
  category: string;
  tags: string[];
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Media {
  id: string;
  galleryId: string;
  type: "image" | "video";
  url: string;
  thumbnailUrl?: string;
  title?: string;
  description?: string;
  order: number;
  uploadedAt: Date;
}

export interface Purchase {
  id: string;
  userId: string;
  galleryId: string;
  amount: number;
  currency: string;
  status: "pending" | "completed" | "failed" | "refunded";
  paymentMethod: string;
  transactionId?: string;
  purchasedAt: Date;
}

export interface Session {
  user: User;
  accessToken: string;
  refreshToken?: string;
  expiresAt: Date;
}
