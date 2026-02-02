// app/dashboard/layout.tsx
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const cookie = await cookies()
  const token = cookie.get("token")?.value

  if (token) {
    redirect("/dashboard") // redirect if not logged in
  }

  return <>{children}</>
}