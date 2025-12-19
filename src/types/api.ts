// API request and response types

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
  };
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface GalleryFilters extends PaginationParams {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  tags?: string[];
  creatorId?: string;
  search?: string;
}
