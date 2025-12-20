/**
 * Environment configuration with validation
 * Throws error if required variables are missing in production
 */

function getEnvVar(key: string, defaultValue: string = '', required: boolean = false): string {
  const value = process.env[key] || defaultValue;
  
  if (required && !value && process.env.NODE_ENV === 'production') {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  
  return value;
}

export const env = {
  // API Configuration
  apiUrl: getEnvVar('NEXT_PUBLIC_API_URL', '/api'),
  
  // Authentication
  authSecret: getEnvVar('AUTH_SECRET', '', true),
  sessionMaxAge: parseInt(getEnvVar('SESSION_MAX_AGE', '86400')), // 24 hours
  
  // Payment (Stripe example)
  stripePublicKey: getEnvVar('NEXT_PUBLIC_STRIPE_PUBLIC_KEY'),
  stripeSecretKey: getEnvVar('STRIPE_SECRET_KEY'),
  
  // File Storage
  storageProvider: getEnvVar('STORAGE_PROVIDER', 'local'),
  s3Bucket: getEnvVar('S3_BUCKET'),
  s3Region: getEnvVar('S3_REGION'),
  awsAccessKeyId: getEnvVar('AWS_ACCESS_KEY_ID'),
  awsSecretAccessKey: getEnvVar('AWS_SECRET_ACCESS_KEY'),
  
  // Database
  databaseUrl: getEnvVar('DATABASE_URL', '', true),
  
  // Environment
  nodeEnv: getEnvVar('NODE_ENV', 'development'),
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  
  // Security
  corsOrigins: getEnvVar('CORS_ORIGINS', '*').split(','),
  
  // Features
  enableRegistration: getEnvVar('ENABLE_REGISTRATION', 'true') === 'true',
  enablePayments: getEnvVar('ENABLE_PAYMENTS', 'false') === 'true',
} as const;
