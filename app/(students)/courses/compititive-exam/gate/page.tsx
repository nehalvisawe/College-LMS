"use client";

import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ChevronDown,
  YoutubeIcon,
  BookOpen,
  ExternalLink,
} from "lucide-react";
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
    name: "Data Structures & Algorithms",
    tag: "DSA",
    resources: [
      {
        label: "DSA Complete Playlist – GATE Wallah",
        url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa",
        type: "video",
      },
      {
        label: "Dynamic Programming – GATE Crash Course",
        url: "https://youtu.be/Lc6w-RRla-c",
        type: "video",
      },
      {
        label: "DSA Notes – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/data-structures/",
        type: "notes",
      },
      {
        label: "Algorithms for GATE – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/fundamentals-of-algorithms/",
        type: "notes",
      },
    ],
  },
  {
    name: "Operating Systems",
    tag: "OS",
    resources: [
      {
        label: "Operating Systems Playlist – GATE Wallah",
        url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p",
        type: "video",
      },
      {
        label: "OS Crash Course – GATE Wallah",
        url: "https://youtu.be/oq0lZwpApLo",
        type: "video",
      },
      {
        label: "Operating Systems – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/operating-systems/",
        type: "notes",
      },
    ],
  },
  {
    name: "Computer Networks",
    tag: "CN",
    resources: [
      {
        label: "Computer Networks Playlist – GATE Wallah",
        url: "https://www.youtube.com/playlist?list=PLOG_8OlGMp73hMyn-WX1M2Q4ON98DmaRq",
        type: "video",
      },
      {
        label: "Pure Aloha & Slotted Aloha – GATE Wallah",
        url: "https://youtu.be/h-b_a6KFXc4",
        type: "video",
      },
      {
        label: "Computer Networks – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/computer-network-tutorials/",
        type: "notes",
      },
    ],
  },
  {
    name: "Discrete Mathematics",
    tag: "DM",
    resources: [
      {
        label: "Discrete Mathematics Playlist – GATE Wallah",
        url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiH2wwES9vPWsqL9z5Z7IYwW",
        type: "video",
      },
      {
        label: "Basic of Graphs – GATE Crash Course",
        url: "https://youtu.be/16vursv4MX4",
        type: "video",
      },
      {
        label: "Graph Theory – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/",
        type: "notes",
      },
      {
        label: "Discrete Mathematics – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/discrete-mathematics-tutorial/",
        type: "notes",
      },
    ],
  },
  {
    name: "Theory of Computation",
    tag: "TOC",
    resources: [
      {
        label: "TOC Playlist – GATE Wallah",
        url: "https://www.youtube.com/playlist?list=PLOG_8OlGMp72SAVxAk3VwEKQNbLkpN4Vs",
        type: "video",
      },
      {
        label: "Theory of Computation – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/theory-of-computation-automata-tutorials/",
        type: "notes",
      },
    ],
  },
  {
    name: "Database Management Systems",
    tag: "DBMS",
    resources: [
      {
        label: "DBMS Playlist – GATE Wallah",
        url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y",
        type: "video",
      },
      {
        label: "DBMS Notes – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/dbms/",
        type: "notes",
      },
    ],
  },
  {
    name: "Computer Organization & Architecture",
    tag: "COA",
    resources: [
      {
        label: "COA Playlist – GATE Wallah",
        url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX",
        type: "video",
      },
      {
        label: "Computer Organization – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/",
        type: "notes",
      },
    ],
  },
  {
    name: "Engineering Mathematics",
    tag: "MATH",
    resources: [
      {
        label: "Engineering Maths Playlist – GATE Wallah",
        url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHnx-oa26fOzpOGNPCeSHMQ",
        type: "video",
      },
      {
        label: "Engineering Mathematics – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/engineering-mathematics-tutorials/",
        type: "notes",
      },
    ],
  },
  {
    name: "Compiler Design",
    tag: "CD",
    resources: [
      {
        label: "Compiler Design Playlist – GATE Wallah",
        url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiEKtgkTLjre37AtDfF-9Pmq",
        type: "video",
      },
      {
        label: "Compiler Design – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/compiler-design-tutorials/",
        type: "notes",
      },
    ],
  },
  {
    name: "Digital Logic",
    tag: "DL",
    resources: [
      {
        label: "Digital Logic Playlist – GATE Wallah",
        url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe",
        type: "video",
      },
      {
        label: "Digital Logic – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/digital-electronics-logic-design-tutorials/",
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
        <div className="pb-2 px-2 space-y-0.5">
          {subject.resources.map((resource, i) => (
            <ResourceLink key={i} resource={resource} />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default function GateResources() {
  const [allOpen, setAllOpen] = useState(false);

  return (
    <div className="max-w-3xl p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-medium">GATE CSE Resources</h1>
          <p className="text-sm text-muted-foreground">
            PW Gate Wallah lectures + GeeksforGeeks notes
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
        {subjects.length} subjects · {subjects.reduce((a, s) => a + s.resources.length, 0)} resources
      </p>
    </div>
  );
}