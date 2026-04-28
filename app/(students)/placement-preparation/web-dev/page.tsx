"use client";

import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, YoutubeIcon, BookOpen, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Resource = {
  label: string;
  url: string;
  type: "video" | "notes";
};

type Subject = {
  name: string;
  tag: string;
  resources: Resource[];
};

const subjects: Subject[] = [
  {
    name: "HTML & CSS Fundamentals",
    tag: "HTML",
    resources: [
      {
        label: "HTML Full Course – Chai aur Code",
        url: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBGs4dBSn12ESe3tifXFL0B",
        type: "video",
      },
      {
        label: "CSS Full Course – Chai aur Code",
        url: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBGs4dBSn12ESe3tifXFL0B",
        type: "video",
      },
      {
        label: "HTML Cheatsheet – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/html-cheat-sheet/",
        type: "notes",
      },
      {
        label: "CSS Flexbox & Grid – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/css-flexbox/",
        type: "notes",
      },
    ],
  },
  {
    name: "JavaScript",
    tag: "JS",
    resources: [
      {
        label: "JavaScript Full Course – Chai aur Code",
        url: "https://www.youtube.com/playlist?list=PLu71SKxNbfoI2i5YXPkHRMnLOdmOmL_UX",
        type: "video",
      },
      {
        label: "JS DOM Manipulation – Chai aur Code",
        url: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5kr1",
        type: "video",
      },
      {
        label: "Namaste JavaScript – Akshay Saini",
        url: "https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP",
        type: "video",
      },
      {
        label: "JavaScript Concepts – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/javascript/",
        type: "notes",
      },
      {
        label: "JS Interview Questions – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/javascript-interview-questions-and-answers/",
        type: "notes",
      },
    ],
  },
  {
    name: "React.js",
    tag: "REACT",
    resources: [
      {
        label: "React Full Course – Chai aur Code",
        url: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5kr1",
        type: "video",
      },
      {
        label: "React with Projects – Hitesh Choudhary",
        url: "https://www.youtube.com/playlist?list=PLRAV69dS1uWSqLxX-8-T1LoAXnuYPBtHX",
        type: "video",
      },
      {
        label: "React Hooks Deep Dive – Chai aur Code",
        url: "https://www.youtube.com/playlist?list=PLu71SKxNbfoI2i5YXPkHRMnLOdmOmL_UX",
        type: "video",
      },
      {
        label: "React.js Notes – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/reactjs/",
        type: "notes",
      },
      {
        label: "React Interview Questions – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/reactjs-interview-questions-and-answers/",
        type: "notes",
      },
    ],
  },
  {
    name: "Node.js & Express",
    tag: "NODE",
    resources: [
      {
        label: "Node.js Full Course – Chai aur Code",
        url: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6Wz9qfKRm",
        type: "video",
      },
      {
        label: "Express.js & REST API – Hitesh Choudhary",
        url: "https://www.youtube.com/playlist?list=PLRAV69dS1uWQGDQoBYMZWKjzuhCaOnBpa",
        type: "video",
      },
      {
        label: "Node.js Notes – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/nodejs/",
        type: "notes",
      },
      {
        label: "Express.js Interview Questions – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/express-js-interview-questions-answers/",
        type: "notes",
      },
    ],
  },
  {
    name: "MongoDB & Databases",
    tag: "DB",
    resources: [
      {
        label: "MongoDB Full Course – Chai aur Code",
        url: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6Wz9qfKRm",
        type: "video",
      },
      {
        label: "MongoDB with Node.js – Hitesh Choudhary",
        url: "https://www.youtube.com/playlist?list=PLRAV69dS1uWQGDQoBYMZWKjzuhCaOnBpa",
        type: "video",
      },
      {
        label: "MongoDB Notes – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/mongodb-tutorial/",
        type: "notes",
      },
      {
        label: "MongoDB Interview Questions – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/mongodb-interview-questions/",
        type: "notes",
      },
    ],
  },
  {
    name: "TypeScript",
    tag: "TS",
    resources: [
      {
        label: "TypeScript Full Course – Chai aur Code",
        url: "https://www.youtube.com/playlist?list=PLu71SKxNbfoADIGZIBqSRYRRD6kzQwHqY",
        type: "video",
      },
      {
        label: "TypeScript for Beginners – Hitesh Choudhary",
        url: "https://www.youtube.com/playlist?list=PLRAV69dS1uWRPSfKzwZsIm-Axxq-LxqhW",
        type: "video",
      },
      {
        label: "TypeScript Notes – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/typescript/",
        type: "notes",
      },
      {
        label: "TypeScript Interview Questions – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/typescript-interview-questions/",
        type: "notes",
      },
    ],
  },
  {
    name: "Next.js",
    tag: "NEXT",
    resources: [
      {
        label: "Next.js Full Course – Chai aur Code",
        url: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5kr1",
        type: "video",
      },
      {
        label: "Next.js Projects – Hitesh Choudhary",
        url: "https://www.youtube.com/playlist?list=PLRAV69dS1uWSXLpTnE-E8jXVd2KK-dAkL",
        type: "video",
      },
      {
        label: "Next.js Notes – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/nextjs/",
        type: "notes",
      },
      {
        label: "Next.js Interview Questions – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/next-js-interview-questions-and-answers/",
        type: "notes",
      },
    ],
  },
  {
    name: "Tailwind CSS",
    tag: "TW",
    resources: [
      {
        label: "Tailwind CSS Full Course – Chai aur Code",
        url: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBGs4dBSn12ESe3tifXFL0B",
        type: "video",
      },
      {
        label: "Tailwind with Projects – Hitesh Choudhary",
        url: "https://www.youtube.com/playlist?list=PLRAV69dS1uWSXLpTnE-E8jXVd2KK-dAkL",
        type: "video",
      },
      {
        label: "Tailwind CSS Notes – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/tailwind-css/",
        type: "notes",
      },
      {
        label: "Tailwind CSS Cheatsheet – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/tailwind-css-cheat-sheet/",
        type: "notes",
      },
    ],
  },
  {
    name: "Git & Version Control",
    tag: "GIT", 
    resources: [
      {
        label: "Git & GitHub Full Course – Chai aur Code",
        url: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5kr1",
        type: "video",
      },
      {
        label: "Git Complete Guide – Hitesh Choudhary",
        url: "https://www.youtube.com/playlist?list=PLRAV69dS1uWQGDQoBYMZWKjzuhCaOnBpa",
        type: "video",
      },
      {
        label: "Git & GitHub Notes – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/git-tutorial/",
        type: "notes",
      },
      {
        label: "Git Interview Questions – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/git-interview-questions-and-answers/",
        type: "notes",
      },
    ],
  },
  {
    name: "Web Security & Auth",
    tag: "SEC",
    resources: [
      {
        label: "JWT & Auth – Chai aur Code",
        url: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6Wz9qfKRm",
        type: "video",
      },
      {
        label: "Web Security Concepts – Hitesh Choudhary",
        url: "https://www.youtube.com/playlist?list=PLRAV69dS1uWQGDQoBYMZWKjzuhCaOnBpa",
        type: "video",
      },
      {
        label: "Web Security Notes – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/web-security/",
        type: "notes",
      },
      {
        label: "JWT Interview Questions – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/json-web-token-jwt/",
        type: "notes",
      },
    ],
  },
  {
    name: "DevOps & Deployment",
    tag: "DEV",
    resources: [
      {
        label: "Docker for Developers – Hitesh Choudhary",
        url: "https://www.youtube.com/playlist?list=PLRAV69dS1uWQGDQoBYMZWKjzuhCaOnBpa",
        type: "video",
      },
      {
        label: "Deployment & DevOps – Chai aur Code",
        url: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6Wz9qfKRm",
        type: "video",
      },
      {
        label: "Docker Notes – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/docker-tutorial/",
        type: "notes",
      },
      {
        label: "DevOps Interview Questions – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/devops-interview-questions/",
        type: "notes",
      },
    ],
  },
];

function ResourceLink({ resource }: { resource: Resource }) {
  const isVideo = resource.type === "video";
  return (
      <Link
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 py-2 px-3 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors group"
    >
      {isVideo ? (
        <YoutubeIcon className="w-3.5 h-3.5 shrink-0 text-red-500" />
      ) : (
        <BookOpen className="w-3.5 h-3.5 shrink-0 text-blue-500" />
      )}
      <span className="flex-1 truncate">{resource.label}</span>
      <ExternalLink className="w-3 h-3 shrink-0 opacity-0 group-hover:opacity-50 transition-opacity" />
    </Link>
  );
}

function SubjectCard({ subject }: { subject: Subject }) {
  const [open, setOpen] = useState(false);
  const videoCount = subject.resources.filter((r) => r.type === "video").length;
  const notesCount = subject.resources.filter((r) => r.type === "notes").length;

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger asChild>
        <button className="w-full flex items-center justify-between px-4 py-3 hover:bg-muted/50 transition-colors rounded-lg group">
          <div className="flex items-center gap-3 min-w-0">
            <Badge
              variant="outline"
              className="text-xs font-mono px-2 py-0 shrink-0"
            >
              {subject.tag}
            </Badge>
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">{subject.name}</p>
            
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0 ml-3">
            <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <YoutubeIcon className="w-3 h-3 text-red-400" />
                {videoCount}
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-3 h-3 text-blue-400" />
                {notesCount}
              </span>
            </div>
            <ChevronDown
              className={cn(
                "w-4 h-4 text-muted-foreground transition-transform duration-200",
                open && "rotate-180"
              )}
            />
          </div>
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="pb-3 px-3 space-y-1">
          {subject.resources.map((resource, i) => (
            <ResourceLink key={i} resource={resource} />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default function WebDevResourcePage() {
  return (
    <div className="max-w-4xl p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-medium">Web Dev Resources</h1>
          <p className="text-sm text-muted-foreground">
            Hitesh Choudhary & Chai aur Code lectures + GeeksforGeeks notes
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <YoutubeIcon className="w-4 h-4 text-red-400" /> Video
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="w-4 h-4 text-blue-400" /> Notes
          </span>
        </div>
      </div>

      <Separator />

      <div className="divide-y divide-border rounded-lg border p-3">
        {subjects.map((subject) => (
          <SubjectCard key={subject.tag} subject={subject} />
        ))}
      </div>

      <p className="text-xs text-muted-foreground text-center pt-1">
        {subjects.length} topics ·{" "}
        {subjects.reduce((a, s) => a + s.resources.length, 0)} resources
      </p>
    </div>
  );
}