export const env = {
  // API Configuration
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "/api",
  
  // Authentication
  authSecret: process.env.AUTH_SECRET || "",
  sessionMaxAge: parseInt(process.env.SESSION_MAX_AGE || "86400"), // 24 hours
  
  // Payment (Stripe example)
  stripePublicKey: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || "",
  stripeSecretKey: process.env.STRIPE_SECRET_KEY || "",
  
  // File Storage
  storageProvider: process.env.STORAGE_PROVIDER || "local",
  s3Bucket: process.env.S3_BUCKET || "",
  s3Region: process.env.S3_REGION || "",
  
  // Database
  databaseUrl: process.env.DATABASE_URL || "",
  
  // Environment
  nodeEnv: process.env.NODE_ENV || "development",
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
} as const;
