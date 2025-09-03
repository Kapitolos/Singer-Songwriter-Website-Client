// Password hashing utilities using bcrypt
// In a real app, you'd use a proper bcrypt library
// This is a simplified version for demonstration

export interface HashedPassword {
  hash: string;
  salt: string;
}

// Simple hash function (NOT for production - use bcrypt in real apps)
export function hashPassword(password: string): HashedPassword {
  // Generate a simple salt (random string)
  const salt = Math.random().toString(36).substring(2, 15);
  
  // Simple hash algorithm (NOT secure - just for demo)
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  // Combine password and salt
  const saltedPassword = password + salt;
  let saltedHash = 0;
  for (let i = 0; i < saltedPassword.length; i++) {
    const char = saltedPassword.charCodeAt(i);
    saltedHash = ((saltedHash << 5) - saltedHash) + char;
    saltedHash = saltedHash & saltedHash;
  }
  
  return {
    hash: saltedHash.toString(36),
    salt: salt
  };
}

// Verify password against stored hash
export function verifyPassword(password: string, storedHash: string, salt: string): boolean {
  const { hash } = hashPassword(password);
  return hash === storedHash;
}

// Generate a secure random token
export function generateSecureToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

// Hash sensitive data for storage
export function hashSensitiveData(data: string): string {
  let hash = 0;
  for (let i = 0; i < data.length; i++) {
    const char = data.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString(36);
}

