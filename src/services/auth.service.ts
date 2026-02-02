// services/auth.ts
import Cookies from "js-cookie"

export async function loginUser(data: {
  username: string
  password: string
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(data),
    }
  )

  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.message || "Login failed")
  }

  return res.json()
}

export async function registerUser(data: {
  username: string
  email: string
  password: string
  firstName: string
  lastName: string
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/auth/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(data),
    }
  )

  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.message || "Register failed")
  }

  return res.json()
}

// fetch user info using token from cookie
export async function getCurrentUser() {
  const token = Cookies.get("token")
  if (!token) return null

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/auth/me`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
    }
  )

  if (!res.ok) return null

  const result = await res.json()
  return result.data.user
}
