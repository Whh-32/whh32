"use client"

import { Button } from "@/components/ui/button"
import BlurFade from "@/components/ui/blur-fade"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from "./register.schema"
import { registerUser } from "@/services/auth.service"

type RegisterForm = {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
}

export default function SignUpPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterForm>({
        resolver: yupResolver(registerSchema),
    })

    const onSubmit = async (data: RegisterForm) => {
        try {
            const result = await registerUser(data)
            console.log("Registered:", result)
        } catch (err: any) {
            console.error(err.message)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-5">
            <BlurFade
                inView
                delay={0.25}
                className="w-full max-w-md rounded-2xl border bg-background/80 p-8 shadow-lg backdrop-blur"
            >
                <h1 className="font-heading text-3xl text-center mb-2">
                    Create account
                </h1>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-3"
                >
                    <input {...register("firstName")} placeholder="First Name" className="input" />
                    <p className="text-xs text-red-500">{errors.firstName?.message}</p>

                    <input {...register("lastName")} placeholder="Last Name" className="input" />
                    <p className="text-xs text-red-500">{errors.lastName?.message}</p>

                    <input {...register("username")} placeholder="Username" className="input" />
                    <p className="text-xs text-red-500">{errors.username?.message}</p>

                    <input {...register("email")} placeholder="Email" className="input" />
                    <p className="text-xs text-red-500">{errors.email?.message}</p>

                    <input
                        type="password"
                        {...register("password")}
                        placeholder="Password"
                        className="input"
                    />
                    <p className="text-xs text-red-500">{errors.password?.message}</p>

                    <Button disabled={isSubmitting} className="mt-2 h-11">
                        {isSubmitting ? "Creating..." : "Create account"}
                    </Button>
                </form>

                <div className="flex items-center gap-3 my-5">
                    <div className="flex-1 h-px bg-muted-foreground/50" />
                    <span className="text-sm text-muted-foreground">or</span>
                    <div className="flex-1 h-px bg-muted-foreground/50" />
                </div>

                {/* Social login buttons with icons (inactive) */}
                <div className="mt-4 flex flex-col gap-3">
                    <Button variant="outline" className="h-11 flex items-center justify-center gap-2" disabled>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="prepend-icon htb-mr-4"><g><path fillRule="evenodd" clipRule="evenodd" d="M16.8426 6.54769C15.6036 5.36599 13.9501 4.72223 12.2392 4.74868C9.10863 4.74868 6.44981 6.86074 5.5018 9.70474V9.7048C4.99913 11.1952 4.99913 12.809 5.50179 14.2993H5.50619C6.45861 17.1389 9.11303 19.251 12.2437 19.251C13.8597 19.251 15.247 18.8376 16.3223 18.1076V18.1046C17.5878 17.2668 18.452 15.9484 18.721 14.4581H12.2393V9.8371H23.558C23.6991 10.6396 23.7653 11.4597 23.7653 12.2755C23.7653 15.9253 22.4609 19.0111 20.1913 21.1011L20.1937 21.1029C18.2051 22.9372 15.4757 23.9998 12.2392 23.9998C7.70204 23.9998 3.55286 21.4424 1.51575 17.3903V17.3902C-0.186243 13.9995 -0.186239 10.0046 1.51576 6.61386H1.51579L1.51575 6.61383C3.55286 2.55725 7.70204 -0.000167897 12.2392 -0.000167897C15.22 -0.0354426 18.0992 1.08453 20.2686 3.12164L16.8426 6.54769Z" fill="currentColor" className="-fill"></path></g><defs><clipPath><rect width="18" height="18" fill="white"></rect></clipPath></defs></svg>
                        Continue with Google
                    </Button>
                    <Button variant="secondary" className="h-11 flex items-center justify-center gap-2 bor" disabled>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="prepend-icon htb-mr-4"><g><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.3724 0 0 5.3808 0 12.0204C0 17.3304 3.438 21.8364 8.2068 23.4252C8.8068 23.5356 9.0252 23.1648 9.0252 22.8456C9.0252 22.5612 9.0156 21.804 9.0096 20.802C5.6712 21.528 4.9668 19.1904 4.9668 19.1904C4.422 17.8008 3.6348 17.4312 3.6348 17.4312C2.5452 16.6872 3.7176 16.7016 3.7176 16.7016C4.9212 16.7856 5.5548 17.94 5.5548 17.94C6.6252 19.776 8.364 19.2456 9.0468 18.9384C9.1572 18.162 9.4668 17.6328 9.81 17.3328C7.146 17.0292 4.344 15.9972 4.344 11.3916C4.344 10.08 4.812 9.006 5.5788 8.166C5.4552 7.8624 5.0436 6.6396 5.6964 4.986C5.6964 4.986 6.7044 4.662 8.9964 6.2172C9.97532 5.95022 10.9853 5.81423 12 5.8128C13.02 5.8176 14.046 5.9508 15.0048 6.2172C17.2956 4.662 18.3012 4.9848 18.3012 4.9848C18.9564 6.6396 18.5436 7.8624 18.4212 8.166C19.1892 9.006 19.6548 10.08 19.6548 11.3916C19.6548 16.0092 16.848 17.0256 14.1756 17.3232C14.6064 17.694 14.9892 18.4272 14.9892 19.5492C14.9892 21.1548 14.9748 22.452 14.9748 22.8456C14.9748 23.1672 15.1908 23.5416 15.8004 23.424C18.19 22.6225 20.2672 21.0904 21.7386 19.0441C23.2099 16.9977 24.001 14.5408 24 12.0204C24 5.3808 18.6264 0 12 0Z" fill="currentColor" className="-fill"></path></g><defs><clipPath><rect width="18" height="18" fill="white"></rect></clipPath></defs></svg>
                        Continue with GitHub
                    </Button>
                </div>

                <p className="mt-6 text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link href="login" className="text-primary">
                        Sign in
                    </Link>
                </p>
            </BlurFade>
        </div>
    )
}
