
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Link from "next/link";

import { toast } from "sonner";

const features = [
  {
    "title": "Adaptive Learning Paths",
    "description": "Our AI-driven engine tailors your curriculum in real-time based on your progress, strengths, and areas for improvement.",
    "icon": "🛣️"
  },
  {
    "title": "Collaborative Cloud Labs",
    "description": "Spin up virtual environments directly in your browser to practice coding, design, or data analysis without local setup.",
    "icon": "💻"
  },
  {
    "title": "Interactive Video Quizzes",
    "description": "Engage deeply with content through integrated knowledge checks that pause lessons to ensure concept mastery.",
    "icon": "🎥"
  },
  {
    "title": "Skill-Based Certifications",
    "description": "Earn industry-recognized credentials that are verifiable on the blockchain and shareable directly to your professional profiles.",
    "icon": "🏆"
  }
]


export default function Home() {
 
  return (
    <>
        <section className="relative py-20">
            <div className="flex flex-col items-center text-center space-y-8">
                <Badge variant={"outline"}>
                    The Future of Education
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight "> Elevate Your Learning Experiance </h1>
                <p className="max-w-[700] text-muted-foreground md:text-xl">Discover a New Way to learn with our modern, interactive learing management system. Access our high-quality courses anytime anywhere</p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Link href={"/courses"} className={buttonVariants({
                        size: "lg",
                    })}>Explore Courses</Link>
                    <Link href={"/login"} className={buttonVariants({
                        size: "lg",
                        variant: "outline",
                    })}>Sign In</Link>
                </div>
            
            </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-5">
                {features.map((features,index) =>(
                    <Card key={index} className="hover:shadow-lg  transition:shadow ">
                        <CardHeader>
                            <div className="text-3xl ">{features.icon}</div>
                            <CardTitle>{features.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{features.description}</p>
                        </CardContent>
                    </Card>
                ))}
        </section>
    </>
  );
}
