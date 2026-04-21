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
  description: string;
  resources: Resource[];
};

const subjects: Subject[] = [
  {
    name: "Data Structures & Algorithms",
    tag: "DSA",
    description: "Arrays, trees, graphs, sorting, dynamic programming",
    resources: [
      {
        label: "DSA Full Course – Striver (take U forward)",
        url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz",
        type: "video",
      },
      {
        label: "DSA Playlist – Apna College",
        url: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ",
        type: "video",
      },
      {
        label: "Top 75 LeetCode Patterns – NeetCode",
        url: "https://www.youtube.com/playlist?list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf",
        type: "video",
      },
      {
        label: "DSA – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/data-structures/",
        type: "notes",
      },
      {
        label: "Algorithm Analysis & Design – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/fundamentals-of-algorithms/",
        type: "notes",
      },
      {
        label: "Dynamic Programming Patterns – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/dynamic-programming/",
        type: "notes",
      },
    ],
  },
  {
    name: "Operating Systems",
    tag: "OS",
    description: "Processes, threads, memory management, scheduling",
    resources: [
      {
        label: "OS Interview Prep – Gate Smashers",
        url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p",
        type: "video",
      },
      {
        label: "OS Full Course – Neso Academy",
        url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O",
        type: "video",
      },
      {
        label: "OS Concepts – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/operating-systems/",
        type: "notes",
      },
      {
        label: "OS Interview Questions – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/operating-system-interview-questions/",
        type: "notes",
      },
    ],
  },
  {
    name: "Database Management Systems",
    tag: "DBMS",
    description: "SQL, normalization, transactions, indexing",
    resources: [
      {
        label: "DBMS Full Course – Gate Smashers",
        url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y",
        type: "video",
      },
      {
        label: "SQL for Interviews – Ankit Bansal",
        url: "https://www.youtube.com/playlist?list=PLBTZqjSKn0IeKBQDyxmZDqnObBarycuOm",
        type: "video",
      },
      {
        label: "DBMS Notes – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/dbms/",
        type: "notes",
      },
      {
        label: "SQL Interview Questions – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/sql-interview-questions/",
        type: "notes",
      },
      {
        label: "Normalization – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/normal-forms-in-dbms/",
        type: "notes",
      },
    ],
  },
  {
    name: "Computer Networks",
    tag: "CN",
    description: "TCP/IP, OSI model, routing, HTTP, DNS",
    resources: [
      {
        label: "Computer Networks – Gate Smashers",
        url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_",
        type: "video",
      },
      {
        label: "CN Full Course – Neso Academy",
        url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx",
        type: "video",
      },
      {
        label: "Computer Networks – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/computer-network-tutorials/",
        type: "notes",
      },
      {
        label: "CN Interview Questions – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/computer-network-interview-questions/",
        type: "notes",
      },
    ],
  },
  {
    name: "Object Oriented Programming",
    tag: "OOP",
    description: "Classes, inheritance, polymorphism, design patterns",
    resources: [
      {
        label: "OOP in Java – Kunal Kushwaha",
        url: "https://www.youtube.com/playlist?list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk",
        type: "video",
      },
      {
        label: "OOP Concepts – Apna College",
        url: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ",
        type: "video",
      },
      {
        label: "OOP Concepts – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/",
        type: "notes",
      },
      {
        label: "OOP Interview Questions – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/oops-interview-questions/",
        type: "notes",
      },
      {
        label: "SOLID Principles – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/solid-principle-in-programming-understand-with-real-life-examples/",
        type: "notes",
      },
    ],
  },
  {
    name: "System Design",
    tag: "SD",
    description: "Scalability, load balancing, caching, microservices",
    resources: [
      {
        label: "System Design Primer – Gaurav Sen",
        url: "https://www.youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX",
        type: "video",
      },
      {
        label: "Low Level Design – Coding Decoded",
        url: "https://www.youtube.com/playlist?list=PL6W8uoQQ2c63W58rpNFDwdrBnq5G3EfT7",
        type: "video",
      },
      {
        label: "High Level Design – Concept & Coding",
        url: "https://www.youtube.com/playlist?list=PL6W8uoQQ2c61X_9e6Net0WdYZidm7zooW",
        type: "video",
      },
      {
        label: "System Design – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/system-design-tutorial/",
        type: "notes",
      },
      {
        label: "System Design Interview Questions – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/system-design-interview-questions/",
        type: "notes",
      },
    ],
  },
  {
    name: "Computer Organization & Architecture",
    tag: "COA",
    description: "CPU design, pipelining, memory hierarchy, instruction sets",
    resources: [
      {
        label: "COA Full Course – Gate Smashers",
        url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX",
        type: "video",
      },
      {
        label: "COA – Neso Academy",
        url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgLLlzdgiTUKULKJPapWuhB",
        type: "video",
      },
      {
        label: "COA Notes – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/",
        type: "notes",
      },
      {
        label: "COA Interview Questions – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/computer-organization-and-architecture-interview-questions/",
        type: "notes",
      },
    ],
  },
  {
    name: "Compiler Design",
    tag: "CD",
    description: "Lexical analysis, parsing, code generation, optimization",
    resources: [
      {
        label: "Compiler Design – Gate Smashers",
        url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiEKtgkTLjre37AtDfF-9Pmq",
        type: "video",
      },
      {
        label: "Compiler Design – Neso Academy",
        url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjT3oJxI4YKLLCSCqPN9bKe",
        type: "video",
      },
      {
        label: "Compiler Design – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/compiler-design-tutorials/",
        type: "notes",
      },
      {
        label: "Compiler Interview Questions – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/compiler-design-interview-questions/",
        type: "notes",
      },
    ],
  },
  {
    name: "Software Engineering",
    tag: "SE",
    description: "SDLC, Agile, design patterns, testing",
    resources: [
      {
        label: "Software Engineering – Simple Snippets",
        url: "https://www.youtube.com/playlist?list=PLIY8eNdw5tW_uaJgi-FL9QwINS9JxKKg2",
        type: "video",
      },
      {
        label: "Design Patterns – Derek Banas",
        url: "https://www.youtube.com/playlist?list=PLF206E906175C7E07",
        type: "video",
      },
      {
        label: "Software Engineering – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/software-engineering/",
        type: "notes",
      },
      {
        label: "SE Interview Questions – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/software-engineering-interview-questions/",
        type: "notes",
      },
    ],
  },
  {
    name: "Theory of Computation",
    tag: "TOC",
    description: "Automata, Turing machines, NP-completeness",
    resources: [
      {
        label: "TOC Full Course – Neso Academy",
        url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev",
        type: "video",
      },
      {
        label: "TOC – Gate Smashers",
        url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFM9Lj5G9G_76adtypar4JF",
        type: "video",
      },
      {
        label: "Theory of Computation – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/theory-of-computation-automata-tutorials/",
        type: "notes",
      },
      {
        label: "TOC Interview Questions – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/theory-of-computation-interview-questions/",
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
            <Badge variant="outline" className="text-xs font-mono px-2 py-0 shrink-0">
              {subject.tag}
            </Badge>
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">{subject.name}</p>
              <p className="text-xs text-muted-foreground truncate hidden sm:block">
                {subject.description}
              </p>
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

export default function CoreSubjectResourcePage() {
  return (
    <div className="max-w-4xl p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-medium">Core Subject Resources</h1>
          <p className="text-sm text-muted-foreground">
            Striver, Gate Smashers & Neso Academy lectures + GeeksforGeeks notes
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
        {subjects.length} subjects ·{" "}
        {subjects.reduce((a, s) => a + s.resources.length, 0)} resources
      </p>
    </div>
  );
}