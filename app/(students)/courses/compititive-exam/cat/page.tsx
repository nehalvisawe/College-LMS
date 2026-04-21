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
    name: "Quantitative Aptitude",
    tag: "QA",
    resources: [
      {
        label: "Quantitative Aptitude Full Playlist – Handa Ka Funda",
        url: "https://www.youtube.com/playlist?list=PLbKIHBnBMFMBBs1RiMpjBbP5FQrJkJBDI",
        type: "video",
      },
      {
        label: "Number System for CAT – 2IIM",
        url: "https://www.youtube.com/playlist?list=PLzm6gAUx5jQVBctV-_kJ43rQ5k4sA7L9G",
        type: "video",
      },
      {
        label: "Arithmetic – GeeksforGeeks CAT",
        url: "https://www.geeksforgeeks.org/cat-quantitative-aptitude/",
        type: "notes",
      },
      {
        label: "Number Theory Notes – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/number-system-for-cat/",
        type: "notes",
      },
    ],
  },
  {
    name: "Verbal Ability & Reading Comprehension",
    tag: "VARC",
    resources: [
      {
        label: "VARC Strategy & RC – 2IIM CAT",
        url: "https://www.youtube.com/playlist?list=PLzm6gAUx5jQVtMrRMAnSBIAHSvMV1HNKJ",
        type: "video",
      },
      {
        label: "Para Jumbles & Para Summary – Rodha",
        url: "https://www.youtube.com/playlist?list=PLLALQuK1NDrgDLN7XJFRZuSfpEaT7HxJr",
        type: "video",
      },
      {
        label: "Reading Comprehension Tips – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/cat-verbal-ability-and-reading-comprehension/",
        type: "notes",
      },
      {
        label: "Para Jumbles Notes – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/para-jumbles-for-cat/",
        type: "notes",
      },
    ],
  },
  {
    name: "Logical Reasoning",
    tag: "LR",
    resources: [
      {
        label: "Logical Reasoning Full Course – Rodha",
        url: "https://www.youtube.com/playlist?list=PLLALQuK1NDrhCCBk_bHZOq3N_KGq_98wO",
        type: "video",
      },
      {
        label: "Arrangements & Puzzles – 2IIM",
        url: "https://www.youtube.com/playlist?list=PLzm6gAUx5jQXdRIRWxCH6EBW4aV44Hqf0",
        type: "video",
      },
      {
        label: "Logical Reasoning Notes – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/cat-logical-reasoning/",
        type: "notes",
      },
      {
        label: "Blood Relations & Coding – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/logical-reasoning-for-cat/",
        type: "notes",
      },
    ],
  },
  {
    name: "Data Interpretation",
    tag: "DI",
    resources: [
      {
        label: "Data Interpretation Playlist – Rodha",
        url: "https://www.youtube.com/playlist?list=PLLALQuK1NDrh3_K1kDlY4ueITYqMFpBIU",
        type: "video",
      },
      {
        label: "DI Tricks & Shortcuts – 2IIM",
        url: "https://www.youtube.com/playlist?list=PLzm6gAUx5jQUuBMpC7iMQzRfCU5LIhpvz",
        type: "video",
      },
      {
        label: "Data Interpretation Notes – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/data-interpretation-for-cat/",
        type: "notes",
      },
    ],
  },
  {
    name: "Algebra",
    tag: "ALG",
    resources: [
      {
        label: "Algebra for CAT – Handa Ka Funda",
        url: "https://www.youtube.com/playlist?list=PLbKIHBnBMFMCkbEyxgzLEAIZLJMVYsGBd",
        type: "video",
      },
      {
        label: "Quadratic Equations & Inequalities – 2IIM",
        url: "https://www.youtube.com/playlist?list=PLzm6gAUx5jQVFqFDkfxN2VxHFrSt1SNUE",
        type: "video",
      },
      {
        label: "Algebra Formulas & Concepts – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/algebra-for-cat/",
        type: "notes",
      },
    ],
  },
  {
    name: "Geometry & Mensuration",
    tag: "GEO",
    resources: [
      {
        label: "Geometry for CAT – 2IIM",
        url: "https://www.youtube.com/playlist?list=PLzm6gAUx5jQUoqIKyqvLTMb7RLs1q8RqG",
        type: "video",
      },
      {
        label: "Mensuration Shortcuts – Rodha",
        url: "https://www.youtube.com/playlist?list=PLLALQuK1NDrgXfaQ3X8ezxcBwPkRyFQFv",
        type: "video",
      },
      {
        label: "Geometry Notes – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/geometry-for-cat/",
        type: "notes",
      },
    ],
  },
  {
    name: "Arithmetic",
    tag: "ARITH",
    resources: [
      {
        label: "Percentages, Profit & Loss – Handa Ka Funda",
        url: "https://www.youtube.com/playlist?list=PLbKIHBnBMFMDjJROHYY4MmcKFGEzGMaU5",
        type: "video",
      },
      {
        label: "Time, Speed & Distance – 2IIM",
        url: "https://www.youtube.com/playlist?list=PLzm6gAUx5jQWD6mz8v7vBdqWtRqSX0BfC",
        type: "video",
      },
      {
        label: "Arithmetic for CAT – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/arithmetic-for-cat/",
        type: "notes",
      },
      {
        label: "Ratio, Proportion & Mixtures – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/ratio-proportion-for-cat/",
        type: "notes",
      },
    ],
  },
  {
    name: "Modern Maths",
    tag: "MOD",
    resources: [
      {
        label: "Permutation & Combination – Rodha",
        url: "https://www.youtube.com/playlist?list=PLLALQuK1NDrhYpZ9bPNwiMQQzCkPpEOxM",
        type: "video",
      },
      {
        label: "Probability & Set Theory – 2IIM",
        url: "https://www.youtube.com/playlist?list=PLzm6gAUx5jQVWIbSKkGBu7yQaFUAGdHWO",
        type: "video",
      },
      {
        label: "P&C and Probability – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/permutation-and-combination-for-cat/",
        type: "notes",
      },
    ],
  },
  {
    name: "CAT Previous Year Papers",
    tag: "PYQ",
    resources: [
      {
        label: "CAT PYQ Solutions 2023 – 2IIM",
        url: "https://www.youtube.com/playlist?list=PLzm6gAUx5jQXf7V4m4OtbKjI4BrfBnOiQ",
        type: "video",
      },
      {
        label: "CAT PYQ Discussion – Rodha",
        url: "https://www.youtube.com/playlist?list=PLLALQuK1NDrgGh3FRjUE9sYj_kIyGJUhS",
        type: "video",
      },
      {
        label: "CAT Previous Papers – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/cat-previous-year-question-papers/",
        type: "notes",
      },
      {
        label: "CAT Syllabus & Exam Pattern – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/cat-syllabus/",
        type: "notes",
      },
    ],
  },
];

function ResourceLink({ resource }: { resource: Resource }) {
  const isVideo = resource.type === "video";
  return (
      <a
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
    </a>
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
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="text-xs font-mono px-2 py-0">
              {subject.tag}
            </Badge>
            <span className="text-sm font-medium">{subject.name}</span>
          </div>
          <div className="flex items-center gap-3">
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

export default function CatResourcePage() {
  return (
    <div className="max-w-3xl p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-medium">CAT Resources</h1>
          <p className="text-sm text-muted-foreground">
            2IIM, Rodha & Handa Ka Funda lectures + GeeksforGeeks notes
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <YoutubeIcon className="w-3 h-3 text-red-400" /> Video
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="w-3 h-3 text-blue-400" /> Notes
          </span>
        </div>
      </div>

      <Separator />

      <div className="divide-y divide-border rounded-lg border">
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