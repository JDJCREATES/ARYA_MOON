export const GALLERY_CATEGORIES = [
  "Photography",
  "Art",
  "Fashion",
  "Fitness",
  "Lifestyle",
  "Travel",
  "Nature",
  "Other",
] as const;

export const MEDIA_TYPES = {
  IMAGE: "image",
  VIDEO: "video",
} as const;

export const USER_ROLES = {
  CREATOR: "creator",
  BUYER: "buyer",
  ADMIN: "admin",
} as const;

export const PURCHASE_STATUS = {
  PENDING: "pending",
  COMPLETED: "completed",
  FAILED: "failed",
  REFUNDED: "refunded",
} as const;

export const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB
export const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
export const ALLOWED_VIDEO_TYPES = ["video/mp4", "video/webm", "video/quicktime"];

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 12,
  MAX_LIMIT: 100,
} as const;
