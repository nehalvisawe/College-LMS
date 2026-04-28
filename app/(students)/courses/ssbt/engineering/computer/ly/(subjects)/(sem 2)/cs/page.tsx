"use client";

import { useState } from "react";
import {
  ChevronDown,
  Download,
  FileText,
  PlayCircle,
  BookOpen,
  Mail,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Unit {
  id: number;
  title: string;
  notesPath: string;
  pyqPath: string;
  videoUrl: string;
}

interface Teacher {
  name: string;
  department: string;
  email: string;
  avatar: string;
}

interface Course {
  title: string;
  subtitle: string;
  semester: string;
  category: string;
  description: string;
  lastUpdated: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const course: Course = {
  title: "Data Structures & Algorithms",
  subtitle: "Master the fundamentals of CS problem solving",
  semester: "Semester V",
  category: "Computer Science",
  description:
    "A comprehensive course covering core data structures like arrays, linked lists, trees, graphs, and advanced algorithms including sorting, searching, dynamic programming, and greedy approaches.",
  lastUpdated: "April 2025",
};

const teacher: Teacher = {
  name: "Dr. Ananya Sharma",
  department: "Dept. of Computer Science & Engineering",
  email: "ananya.sharma@university.ac.in",
  avatar: "",
};

const units: Unit[] = [
  {
    id: 1,
    title: "Unit 1 — Arrays & Strings",
    notesPath: "/courses/computer/ly/sem2/cs/cs_unit1.pdf",
    pyqPath: "/pyq/unit1-pyq.pdf",
    videoUrl: "https://www.youtube.com/playlist?list=unit1",
  },
  {
    id: 2,
    title: "Unit 2 — Linked Lists & Stacks/Queues",
    notesPath: "/courses/computer/ly/sem2/cs/cs_unit2.pdf",
    pyqPath: "/pyq/unit2-pyq.pdf",
    videoUrl: "https://www.youtube.com/playlist?list=unit2",
  },
  {
    id: 3,
    title: "Unit 3 — Trees & Binary Search Trees",
    notesPath: "/courses/computer/ly/sem2/cs/cs_unit3.pdf",
    pyqPath: "/pyq/unit3-pyq.pdf",
    videoUrl: "https://www.youtube.com/playlist?list=unit3",
  },
  {
    id: 4,
    title: "Unit 4 — Graphs",
    notesPath: "/courses/computer/ly/sem2/cs/cs_unit4.pdf",
    pyqPath: "/pyq/unit4-pyq.pdf",
    videoUrl: "https://www.youtube.com/playlist?list=unit4",
  },
  {
    id: 5,
    title: "Unit 5 — Dynamic Programming & Greedy",
    notesPath: "/courses/computer/ly/sem2/cs/cs_unit5.pdf",
    pyqPath: "/pyq/unit5-pyq.pdf",
    videoUrl: "https://www.youtube.com/playlist?list=unit5",
  },
];

// ─── InstructorCard ───────────────────────────────────────────────────────────

function InstructorCard() {
  return (
    <Card className="border-border shadow-sm sticky top-6">
      <CardContent className="p-4 flex flex-col items-center text-center gap-3">
        <Avatar className="h-14 w-14 rounded-xl border-2 border-amber-400/40 mt-1">
          <AvatarImage src={teacher.avatar} alt={teacher.name} />
          <AvatarFallback className="rounded-xl bg-linear-to-br from-amber-400 to-orange-500 text-white text-base font-bold">
            {teacher.name
              .split(" ")
              .slice(-2)
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>

        <div>
          <p className="font-semibold text-foreground text-sm leading-tight">
            {teacher.name}
          </p>
          <p className="text-xs text-muted-foreground mt-1 leading-snug">
            {teacher.department}
          </p>
        </div>

        <Separator className="w-full" />

        <a
          href={`mailto:${teacher.email}`}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors w-full justify-center"
        >
          <Mail className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{teacher.email}</span>
        </a>
      </CardContent>
    </Card>
  );
}

// ─── UnitCard ─────────────────────────────────────────────────────────────────

function UnitCard({ unit, index }: { unit: Unit; index: number }) {
  const [open, setOpen] = useState(false);

  const handleDownload = (path: string, label: string) => {
    const link = document.createElement("a");
    link.href = path;
    link.download = path.split("/").pop() || label;
    link.click();
  };

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <Card
        className={cn(
          "overflow-hidden border transition-all duration-300",
          open
            ? "border-amber-400/60 shadow-md shadow-amber-100/40 dark:shadow-amber-900/20"
            : "border-border hover:border-amber-300/50 hover:shadow-sm"
        )}
      >
        {/* Trigger */}
        <CollapsibleTrigger asChild>
          <button className="w-full text-left">
            <div className="flex items-center gap-4 px-5 py-4">
              <div
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold transition-colors",
                  open
                    ? "bg-amber-400 text-amber-900"
                    : "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400"
                )}
              >
                {index + 1}
              </div>

              <p className="flex-1 font-semibold text-foreground text-sm truncate">
                {unit.title}
              </p>

              <ChevronDown
                className={cn(
                  "h-4 w-4 text-muted-foreground transition-transform duration-300 shrink-0",
                  open && "rotate-180"
                )}
              />
            </div>
          </button>
        </CollapsibleTrigger>

        {/* Expanded */}
        <CollapsibleContent>
          <Separator />
          <CardContent className="px-5 py-4">
            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                variant="outline"
                className="gap-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950/40"
                onClick={() => handleDownload(unit.notesPath, "notes")}
              >
                <FileText className="h-3.5 w-3.5" />
                Download Notes
              </Button>

              <Button
                size="sm"
                variant="outline"
                className="gap-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 dark:border-emerald-800 dark:text-emerald-400 dark:hover:bg-emerald-950/40"
                onClick={() => handleDownload(unit.pyqPath, "pyq")}
              >
                <Download className="h-3.5 w-3.5" />
                Download PYQ
              </Button>

              <Button
                size="sm"
                variant="outline"
                className="gap-2 border-rose-200 text-rose-700 hover:bg-rose-50 hover:border-rose-300 dark:border-rose-800 dark:text-rose-400 dark:hover:bg-rose-950/40"
                onClick={() => window.open(unit.videoUrl, "_blank")}
              >
                <PlayCircle className="h-3.5 w-3.5" />
                Video Lectures
              </Button>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CourseViewPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-[0.04] [background-image:repeating-linear-gradient(0deg,#fff_0,#fff_1px,transparent_0,transparent_50%),repeating-linear-gradient(90deg,#fff_0,#fff_1px,transparent_0,transparent_50%)] [background-size:40px_40px]" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge className="bg-amber-400/20 text-amber-300 border-amber-400/30 hover:bg-amber-400/20">
              {course.category}
            </Badge>
            <Badge variant="outline" className="border-slate-600 text-slate-400">
              {course.semester}
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            {course.title}
          </h1>
          <p className="mt-2 text-slate-400 text-base sm:text-lg">
            {course.subtitle}
          </p>
          <p className="mt-4 text-slate-300/80 text-sm max-w-2xl leading-relaxed">
            {course.description}
          </p>
          <p className="mt-4 text-xs text-slate-500">
            Last updated: {course.lastUpdated}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Units */}
          <section className="flex-1 min-w-0">
            <h2 className="text-lg font-bold text-foreground mb-1 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-amber-500" />
              Course Units
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              Expand a unit to access notes, PYQs, and video lectures.
            </p>
            <div className="space-y-3">
              {units.map((unit, index) => (
                <UnitCard key={unit.id} unit={unit} index={index} />
              ))}
            </div>
          </section>

          {/* Instructor sidebar */}
          <aside className="w-full lg:w-52 shrink-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-0.5">
              Instructor
            </p>
            <InstructorCard />
          </aside>

        </div>
      </div>
    </div>
  );
}
