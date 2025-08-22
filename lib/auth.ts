// Simple authentication utilities for demo purposes
// In production, this would integrate with a proper authentication service

export interface User {
  id: string
  email: string
  name: string
  role: "admin"
}

// Demo admin credentials
const DEMO_ADMIN = {
  email: "admin@primerealty.com",
  password: "admin123",
  user: {
    id: "1",
    email: "admin@primerealty.com",
    name: "Admin User",
    role: "admin" as const,
  },
}

export async function signIn(email: string, password: string): Promise<{ user: User } | { error: string }> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  if (email === DEMO_ADMIN.email && password === DEMO_ADMIN.password) {
    // Store user in localStorage for demo
    localStorage.setItem("admin_user", JSON.stringify(DEMO_ADMIN.user))
    return { user: DEMO_ADMIN.user }
  }

  return { error: "Invalid email or password" }
}

export function signOut(): void {
  localStorage.removeItem("admin_user")
}

export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null

  try {
    const stored = localStorage.getItem("admin_user")
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

export function isAuthenticated(): boolean {
  return getCurrentUser() !== null
}
