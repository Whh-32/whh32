"use client"

import { useEffect, useState } from "react"
import { getCurrentUser } from "@/services/auth.service"
import { Button } from "@/components/ui/button"
import Cookies from "js-cookie"

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUser() {
      setLoading(true)
      const currentUser = await getCurrentUser()
      setUser(currentUser)
      setLoading(false)
    }
    fetchUser()
  }, [])

  if (loading)
    return <div className="text-center mt-10 text-muted-foreground">Loading...</div>
  if (!user)
    return <div className="text-center mt-10 text-red-500">Not authenticated</div>

  return (
    <div className="max-w-3xl mx-auto mt-16 p-8 bg-card/30 rounded-2xl shadow-lg backdrop-blur-md">
      <h1 className="text-4xl font-bold mb-4 text-center text-foreground">
        Welcome, {user.first_name}!
      </h1>
      <p className="text-center text-muted-foreground mb-6">
        Here’s your account information:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-secondary rounded-lg">
          <h2 className="font-semibold text-foreground">Username</h2>
          <p className="text-foreground">{user.username}</p>
        </div>
        <div className="p-4 bg-secondary rounded-lg">
          <h2 className="font-semibold text-foreground">Email</h2>
          <p className="text-foreground">{user.email}</p>
        </div>
        <div className="p-4 bg-secondary rounded-lg">
          <h2 className="font-semibold text-foreground">First Name</h2>
          <p className="text-foreground">{user.first_name}</p>
        </div>
        <div className="p-4 bg-secondary rounded-lg">
          <h2 className="font-semibold text-foreground">Last Name</h2>
          <p className="text-foreground">{user.last_name}</p>
        </div>
      </div>

      <div className="text-center mt-8">
        <Button
          className="bg-red-500 text-white hover:bg-red-400"
          onClick={() => {
            Cookies.remove("token")
            window.location.href = "/auth/login"
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  )
}
