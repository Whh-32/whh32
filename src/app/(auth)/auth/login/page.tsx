"use client"

import { Button } from "@/components/ui/button"
import BlurFade from "@/components/ui/blur-fade"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "./login.schema"
import { loginUser } from "@/services/auth.service"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"

type LoginForm = {
  username: string
  password: string
}

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
  })
  const router = useRouter()
  const onSubmit = async (data: LoginForm) => {
    try {
      const result = await loginUser(data)
      if (result) {
        Cookies.set("token", result.data.token, { expires: 1 })
        router.push('/dashboard')
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-5">
      <BlurFade
        inView
        delay={0.2}
        className="w-full max-w-md rounded-2xl border bg-background/80 p-8 shadow-lg backdrop-blur"
      >
        <h1 className="font-heading text-3xl text-center mb-2">
          Welcome back
        </h1>
        <p className="text-muted-foreground text-center mb-6">
          Sign in to continue
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3"
        >
          <input
            {...register("username")}
            placeholder="Username"
            autoComplete="username"
            className="input"
          />
          <p className="text-xs text-red-500">
            {errors.username?.message}
          </p>

          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            autoComplete="current-password"
            className="input"
          />
          <p className="text-xs text-red-500">
            {errors.password?.message}
          </p>

          <Button disabled={isSubmitting} className="mt-2 h-11">
            {isSubmitting ? "Signing in..." : "Sign in"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don’t have an account?{" "}
          <Link href="register" className="text-primary">
            Sign up
          </Link>
        </p>
      </BlurFade>
    </div>
  )
}
