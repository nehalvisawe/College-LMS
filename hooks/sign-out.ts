"use client"

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function signOut() {

    const router = useRouter();
    const handleSignOut = async function signOut() {
    await authClient.signOut({
      fetchOptions: {
      onSuccess: () => {
        router.push("/"); // redirect to login page
        toast.success('logged out successfully')
    },
    onError: () => {
      toast.error("Failed to Signed Out")
    }
  },
});
  }

  return handleSignOut
}