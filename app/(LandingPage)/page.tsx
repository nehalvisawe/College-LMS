import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

import { toast } from "sonner";

const features = [
  {
    title: "Adaptive Learning Paths",
    description:
      "Our AI-driven engine tailors your curriculum in real-time based on your progress, strengths, and areas for improvement.",
    icon: "🛣️",
  },
  {
    title: "Collaborative Cloud Labs",
    description:
      "Spin up virtual environments directly in your browser to practice coding, design, or data analysis without local setup.",
    icon: "💻",
  },
  {
    title: "Interactive Video Quizzes",
    description:
      "Engage deeply with content through integrated knowledge checks that pause lessons to ensure concept mastery.",
    icon: "🎥",
  },
  {
    title: "Skill-Based Certifications",
    description:
      "Earn industry-recognized credentials that are verifiable on the blockchain and shareable directly to your professional profiles.",
    icon: "🏆",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant={"outline"}>The Future of Education</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight ">
            {" "}
            Elevate Your Learning Experiance{" "}
          </h1>
          <p className="max-w-[700] text-muted-foreground md:text-xl">
            Discover a New Way to learn with our modern, interactive learing
            management system. Access our high-quality courses anytime anywhere
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href={"/courses"}
              className={buttonVariants({
                size: "lg",
              })}
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-5">
        {features.map((features, index) => (
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

      <section className="py-20 bg-muted">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant={"outline"}> Testimonials </Badge>
          <h2 className="text-3xl font-bold">What Our Users Say</h2>
          <p className="max-w-[700] text-muted-foreground">
            Don't just take our word for it. Here's what students and teachers
            have to say about their experience with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card>
            <CardContent>
              <p className="text-muted-foreground">
                "This platform has completely transformed how I learn. The
                adaptive learning paths ensure I'm always challenged at the
                right level."
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="text-muted-foreground">
                "I love the collaborative cloud labs. They make practicing
                coding so much easier without the hassle of setting up
                environments locally."
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="text-muted-foreground">
                "The interactive video quizzes are a game-changer. They keep me
                engaged and help reinforce the concepts I'm learning."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant={"outline"}> Our Partners </Badge>
          <h2 className="text-3xl font-bold">Collaborating with the Best</h2>
          <p className="max-w-[700] text-muted-foreground">
            We are proud to collaborate with leading educational institutions
            and organizations to bring you the best learning experience
            possible.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 ">
          <div></div>
          <Card className="">
            <CardHeader>
              <CardTitle>SSBT College of Engineering and Technology</CardTitle>
              <CardDescription>
                A prestigious institution known for its commitment to excellence
                in engineering education and research.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <img
                src="/ssbt_logo.jpg"
                alt="SSBT College Logo"
                className="h-auto"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant={"outline"}> About Us </Badge>
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="max-w-[700] text-muted-foreground">
            Our mission is to revolutionize education by providing an
            innovative, engaging, and personalized learning experience for
            students and educators worldwide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <Card className="rounded-lg">
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide innovative and accessible education to learners
                  worldwide.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-lg">
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the leading platform for personalized and engaging
                  learning experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant={"outline"}> Contact Us </Badge>
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="max-w-[700] text-muted-foreground">
            Have questions or want to learn more about our platform? Reach out
            to us!
          </p>
        </div>
        <div className="flex items-center justify-center mt-12">
          <Card className="w-full max-w-lg">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-muted-foreground"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      placeholder="Jane"
                      className="mt-1 block w-full border border-input bg-background py-2 px-3 shadow-sm focus:outline-none focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-muted-foreground"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      placeholder="Doe"
                      className="mt-1 block w-full border border-input bg-background py-2 px-3 shadow-sm focus:outline-none focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="jane@example.com"
                    className="mt-1 block w-full border border-input bg-background py-2 px-3 shadow-sm focus:outline-none focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your message here..."
                    rows={4}
                    className="mt-1 block w-full border border-input bg-background py-2 px-3 shadow-sm focus:outline-none focus:ring-primary"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground hover:bg-primary/80 py-2 px-4 rounded transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      
        <footer className="py-6 bg-muted mt-20">
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-900/50 gap-4">
          <p className="text-slate-600 text-xs">
            © 2026 All rights reserved.
          </p>
          
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Built with <span className="text-red-500 text-lg">❤️</span> using 
            <span className="text-slate-400 font-semibold">Next.js</span> & 
            <span className="text-slate-400 font-semibold">Tailwind</span>
          </p>
        </div>
        </footer>
    </>
  );
}
