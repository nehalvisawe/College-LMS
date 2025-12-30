"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader, Loader2, Send } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {
     const router = useRouter();
     const [googlePending, startGoogleTransition] = useTransition();
     const [emailPending, startEmailTransition] = useTransition();
     const [email, setEmail] = useState('')
  async function signInWithGoogle() {
    startGoogleTransition(async () => {
        await authClient.signIn.social({
        provider: 'google',
        callbackURL: "/",
        fetchOptions: {
            onSuccess: () => {
                toast.success('Redirecting to Google')
            },
            onError: (error) => {
                toast.error(error.error.message)
            }
        }
    })
    })
  }

    function signInWithEmail() {
    startEmailTransition( async () => {
        await authClient.emailOtp.sendVerificationOtp({
            email: email,
            type: 'sign-in',
            fetchOptions: {
                onSuccess: () => {
                    toast.success("Email send")
                    router.push(`/verify-request?email=${email}`)
                },
                onError: () => {
                    toast.error("Error sending email")
                }
            }

        })
    })
  }
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl">Welcome Back</CardTitle>
                <CardDescription> Login with you github or email</CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-4">

            <Button className="w-full" onClick={signInWithGoogle} disabled={googlePending}>
               {googlePending ? (
                <>
                    <Loader className="size-4 animate-spin"/>
                    <span>Loading...</span>
                </>
               ) : (
                <>
                     Sign in with Google
                </>
               ) }
            </Button>

            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-card px-2 text-muted-foreground ">Or Continue with</span>
            </div>

            <div className="grid gap-3">
                <div className="grid gap-2">
                    <Label>Email</Label>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} required type= "email" placeholder="abc@gmail.com"/>
                </div>
                <Button onClick={signInWithEmail} disabled={emailPending} >
                 {emailPending ? (
                 <>
                 <Loader className="size-4 animate-spin"/>
                 <span>Loading...</span>
                 </>) : (
                 <>
                 <Send className="size-4 " />
                 <span>Continue with Email</span>
                 </>)}
                </Button>
            </div>

            
            </CardContent>
        </Card>
  );
}
