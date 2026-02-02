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
    throw new Error(error.message || "Login failed")
  }

  return res.json()
}
