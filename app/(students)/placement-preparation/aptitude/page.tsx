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
import { IconBrandYoutube } from "@tabler/icons-react";

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
        label: "Quantitative Aptitude Full Course – Freshersworld",
        url: "https://www.youtube.com/playlist?list=PLjLhUHPsqNYnM1HCBMDsElEP5HQ1RLXL1",
        type: "video",
      },
      {
        label: "Number System – CareerRide",
        url: "https://www.youtube.com/playlist?list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5EXjK",
        type: "video",
      },
      {
        label: "Quantitative Aptitude – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/quantitative-aptitude/",
        type: "notes",
      },
      {
        label: "Number System Notes – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/number-system-aptitude/",
        type: "notes",
      },
    ],
  },
  {
    name: "Logical Reasoning",
    tag: "LR",
    resources: [
      {
        label: "Logical Reasoning Full Playlist – Freshersworld",
        url: "https://www.youtube.com/playlist?list=PLjLhUHPsqNYkjpoBTFPSHNBFAUqCi_MpQ",
        type: "video",
      },
      {
        label: "Puzzles & Seating Arrangement – Study IQ",
        url: "https://www.youtube.com/playlist?list=PLrCMGUhLk_DtAJ3CaGWKGNqKqJO9i5yaz",
        type: "video",
      },
      {
        label: "Logical Reasoning – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/logical-reasoning/",
        type: "notes",
      },
      {
        label: "Blood Relations & Direction Sense – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/blood-relation-reasoning/",
        type: "notes",
      },
    ],
  },
  {
    name: "Verbal Ability",
    tag: "VA",
    resources: [
      {
        label: "Verbal Ability Full Playlist – Freshersworld",
        url: "https://www.youtube.com/playlist?list=PLjLhUHPsqNYkMJVkI_N0QkBxfmGNLaTSE",
        type: "video",
      },
      {
        label: "Reading Comprehension & Grammar – Study IQ",
        url: "https://www.youtube.com/playlist?list=PLrCMGUhLk_DtV5AJM_ZfaEHCmmf3FY7ZX",
        type: "video",
      },
      {
        label: "Verbal Ability – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/verbal-ability/",
        type: "notes",
      },
      {
        label: "Synonyms, Antonyms & Vocabulary – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/synonyms-antonyms/",
        type: "notes",
      },
    ],
  },
  {
    name: "Percentage & Profit/Loss",
    tag: "PPL",
    resources: [
      {
        label: "Percentages Tricks & Shortcuts – Amar Sir",
        url: "https://www.youtube.com/playlist?list=PLpyc33gOcbVBkMONKQTpSHH0UpJNHG7rQ",
        type: "video",
      },
      {
        label: "Profit & Loss – CareerRide",
        url: "https://www.youtube.com/playlist?list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5EXjK",
        type: "video",
      },
      {
        label: "Percentage Notes – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/percentage-aptitude/",
        type: "notes",
      },
      {
        label: "Profit & Loss Notes – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/profit-and-loss-aptitude/",
        type: "notes",
      },
    ],
  },
  {
    name: "Time, Speed & Distance",
    tag: "TSD",
    resources: [
      {
        label: "Time Speed Distance – Amar Sir",
        url: "https://www.youtube.com/playlist?list=PLpyc33gOcbVDq7RFXKrH-p8yHVsS3i3U9",
        type: "video",
      },
      {
        label: "Trains, Boats & Streams – CareerRide",
        url: "https://www.youtube.com/playlist?list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5EXjK",
        type: "video",
      },
      {
        label: "Time & Distance Notes – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/time-speed-distance/",
        type: "notes",
      },
      {
        label: "Boats & Streams – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/boats-and-streams-aptitude/",
        type: "notes",
      },
    ],
  },
  {
    name: "Time & Work",
    tag: "TW",
    resources: [
      {
        label: "Time & Work Full Playlist – Freshersworld",
        url: "https://www.youtube.com/playlist?list=PLjLhUHPsqNYnwJCXi5oCBFjqMxkB4UXBF",
        type: "video",
      },
      {
        label: "Pipes & Cisterns – CareerRide",
        url: "https://www.youtube.com/playlist?list=PLpyc33gOcbVCHgFNFuAFLM7rsFCVBkFH8",
        type: "video",
      },
      {
        label: "Time & Work Notes – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/time-and-work-aptitude/",
        type: "notes",
      },
      {
        label: "Pipes & Cisterns – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/pipes-and-cisterns-aptitude/",
        type: "notes",
      },
    ],
  },
  {
    name: "Ratio, Proportion & Mixtures",
    tag: "RPM",
    resources: [
      {
        label: "Ratio & Proportion – Amar Sir",
        url: "https://www.youtube.com/playlist?list=PLpyc33gOcbVBkMONKQTpSHH0UpJNHG7rQ",
        type: "video",
      },
      {
        label: "Mixtures & Alligation – CareerRide",
        url: "https://www.youtube.com/playlist?list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5EXjK",
        type: "video",
      },
      {
        label: "Ratio & Proportion – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/ratio-and-proportion-aptitude/",
        type: "notes",
      },
      {
        label: "Mixtures & Alligation – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/mixtures-and-alligation/",
        type: "notes",
      },
    ],
  },
  {
    name: "Permutation & Combination",
    tag: "PNC",
    resources: [
      {
        label: "P&C Complete Playlist – Freshersworld",
        url: "https://www.youtube.com/playlist?list=PLjLhUHPsqNYkXomkuOKNWHfgXmFP9VKYK",
        type: "video",
      },
      {
        label: "Probability – CareerRide",
        url: "https://www.youtube.com/playlist?list=PLpyc33gOcbVDpGHKpJlqN4GlHJlDOoWmu",
        type: "video",
      },
      {
        label: "Permutation & Combination – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/permutation-and-combination/",
        type: "notes",
      },
      {
        label: "Probability Notes – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/probability-aptitude/",
        type: "notes",
      },
    ],
  },
  {
    name: "Data Interpretation",
    tag: "DI",
    resources: [
      {
        label: "Data Interpretation Full Course – Study IQ",
        url: "https://www.youtube.com/playlist?list=PLrCMGUhLk_DtI3xS_JRRMoX7bFUO6Y3yB",
        type: "video",
      },
      {
        label: "Charts, Tables & Graphs – Freshersworld",
        url: "https://www.youtube.com/playlist?list=PLjLhUHPsqNYlq5OlbZGJreMNSmfwJvWMZ",
        type: "video",
      },
      {
        label: "Data Interpretation Notes – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/data-interpretation/",
        type: "notes",
      },
    ],
  },
  {
    name: "Geometry & Mensuration",
    tag: "GEO",
    resources: [
      {
        label: "Geometry Shortcuts – Amar Sir",
        url: "https://www.youtube.com/playlist?list=PLpyc33gOcbVBkMONKQTpSHH0UpJNHG7rQ",
        type: "video",
      },
      {
        label: "Mensuration 2D & 3D – CareerRide",
        url: "https://www.youtube.com/playlist?list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5EXjK",
        type: "video",
      },
      {
        label: "Geometry Notes – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/geometry-aptitude/",
        type: "notes",
      },
      {
        label: "Mensuration Formulas – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/mensuration-aptitude/",
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

export default function AptitudeResourcePage() {
  return (
    <div className="max-w-4xl  p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-medium">Aptitude Resources</h1>
          <p className="text-sm text-muted-foreground">
            Freshersworld, CareerRide & Study IQ lectures + GeeksforGeeks notes
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <IconBrandYoutube className="w-4 h-4 text-red-400" /> Video
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="w-4 h-4 text-blue-400" /> Notes
          </span>
        </div>
      </div>

      <Separator />

      <div className="divide-y divide-border rounded-lg border p-4">
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