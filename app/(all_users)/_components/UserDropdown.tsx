"use client"
import {
  BookOpen,
  Home,
  LayoutDashboard,
  LogOutIcon,
  UserPenIcon,
} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import router from "next/router";
import { toast } from "sonner";

interface iAppProps {
    name: string;
    email: string;
    image: string;
}
export function UserDropDown({ name, email, image }: iAppProps) {
   async function signOut() {
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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-auto p-0 hover:bg-transparent" variant="ghost">
          <Avatar>
            <AvatarImage alt="Profile image" src={image} />
            <AvatarFallback>{name[0].toUpperCase()}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="max-w-64">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="truncate font-medium text-foreground text-sm">
            {name}
          </span>
          <span className="truncate font-normal text-muted-foreground text-xs">
           {email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/" >
               <Home aria-hidden="true" className="opacity-60" size={16} />
               <span>Home</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/courses">
              <BookOpen aria-hidden="true" className="opacity-60" size={16} />
              <span>Courses</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/dashboard">
              <LayoutDashboard aria-hidden="true" className="opacity-60" size={16} />
              <span>DashBoard</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/profile-edit">
              <UserPenIcon aria-hidden="true" className="opacity-60" size={16} />
              <span>Edit Profile</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signOut}>
          <LogOutIcon aria-hidden="true" className="opacity-60" size={16} />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}