import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Megaphone, MessageCircle, UserRound } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Navbar } from "./_components/Navbar";

const DASHBOARD_CARDS = [
  {
    title: "Courses",
    description: "Create and manage your courses and course content.",
    icon: BookOpen,
    href: "/dashboard/courses",
  },
  {
    title: "Announcements",
    description: "Post updates and announcements for your students.",
    icon: Megaphone,
    href: "/dashboard/announcements",
  },
  {
    title: "Chat",
    description: "Message your students and colleagues directly.",
    icon: MessageCircle,
    href: "/dashboard/chat",
  },
  {
    title: "Profile",
    description: "View and update your personal information.",
    icon: UserRound,
    href: "/dashboard/profile",
  },
];

export default async function DashboardPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) redirect("/teachers/login");

  const firstName = session.user.name.split(" ")[0];

  return (
    <div className="min-h-screen bg-background center">
      <Navbar />
      {/* Header */}
      <header className='p-4'>
        <div className="max-w-5xl mx-auto px-4 py-5">
          <h1 className="text-3xl font-semibold mt-0.5 ">
            Hello, {firstName} sir! Welcome to your dashboard.
          </h1>
        </div>
      </header>

      {/* Cards */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {DASHBOARD_CARDS.map(({ title, description, icon: Icon, href }) => (
            <Link key={title} href={href}>
              <Card className="h-full transition-colors hover:bg-muted/50 cursor-pointer">
                <CardHeader className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}