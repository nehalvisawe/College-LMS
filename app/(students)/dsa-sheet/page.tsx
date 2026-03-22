"use client"
import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Difficulty = "Easy" | "Medium" | "Hard";
type Status = "todo" | "inprogress" | "done";
type FilterOption = "All" | "Todo" | "In Progress" | "Done" | Difficulty;

interface Problem {
  id: number;
  title: string;
  difficulty: Difficulty;
  leetcode: string;
  video: string;
  notes: string;
}

interface Topic {
  topic: string;
  icon: string;
  color: string;
  problems: Problem[];
}

type StatusMap = Record<number, Status>;
type BoolMap = Record<number | string, boolean>;

// ─── Data ─────────────────────────────────────────────────────────────────────

const dsaData: Topic[] = [
  {
    topic: "Arrays & Hashing",
    icon: "▦",
    color: "#6366f1",
    problems: [
      {
        id: 1, title: "Two Sum", difficulty: "Easy",
        leetcode: "https://leetcode.com/problems/two-sum/",
        video: "https://www.youtube.com/watch?v=KLlXCFG5TnA",
        notes: "https://takeuforward.org/data-structure/two-sum-check-if-a-pair-with-given-sum-exists-in-array/",
      },
      {
        id: 2, title: "Best Time to Buy and Sell Stock", difficulty: "Easy",
        leetcode: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        video: "https://www.youtube.com/watch?v=excAOvwF_Wk",
        notes: "https://takeuforward.org/data-structure/stock-buy-and-sell/",
      },
      {
        id: 3, title: "Contains Duplicate", difficulty: "Easy",
        leetcode: "https://leetcode.com/problems/contains-duplicate/",
        video: "https://www.youtube.com/watch?v=3OamzN90kPg",
        notes: "https://takeuforward.org/data-structure/contains-duplicate/",
      },
      {
        id: 4, title: "Product of Array Except Self", difficulty: "Medium",
        leetcode: "https://leetcode.com/problems/product-of-array-except-self/",
        video: "https://www.youtube.com/watch?v=bNvIQI2wAjk",
        notes: "https://takeuforward.org/data-structure/product-of-array-except-self/",
      },
      {
        id: 5, title: "Maximum Subarray", difficulty: "Medium",
        leetcode: "https://leetcode.com/problems/maximum-subarray/",
        video: "https://www.youtube.com/watch?v=5WZl3MMT0Eg",
        notes: "https://takeuforward.org/data-structure/kadanes-algorithm-maximum-subarray-sum/",
      },
    ],
  },
  {
    topic: "Two Pointers",
    icon: "⇄",
    color: "#8b5cf6",
    problems: [
      {
        id: 6, title: "Valid Palindrome", difficulty: "Easy",
        leetcode: "https://leetcode.com/problems/valid-palindrome/",
        video: "https://www.youtube.com/watch?v=jn9LHFZlBHs",
        notes: "https://takeuforward.org/data-structure/valid-palindrome/",
      },
      {
        id: 7, title: "3Sum", difficulty: "Medium",
        leetcode: "https://leetcode.com/problems/3sum/",
        video: "https://www.youtube.com/watch?v=jzZsG8n2R9A",
        notes: "https://takeuforward.org/data-structure/3-sum-find-triplets-that-add-up-to-a-zero/",
      },
      {
        id: 8, title: "Container With Most Water", difficulty: "Medium",
        leetcode: "https://leetcode.com/problems/container-with-most-water/",
        video: "https://www.youtube.com/watch?v=UuiTKBwPgAo",
        notes: "https://takeuforward.org/data-structure/container-with-most-water/",
      },
      {
        id: 9, title: "Trapping Rain Water", difficulty: "Hard",
        leetcode: "https://leetcode.com/problems/trapping-rain-water/",
        video: "https://www.youtube.com/watch?v=m18Hntz4go8",
        notes: "https://takeuforward.org/data-structure/trapping-rainwater/",
      },
    ],
  },
  {
    topic: "Sliding Window",
    icon: "⬜",
    color: "#06b6d4",
    problems: [
      {
        id: 10, title: "Longest Substring Without Repeating Characters", difficulty: "Medium",
        leetcode: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        video: "https://www.youtube.com/watch?v=qtVh-XEpsJo",
        notes: "https://takeuforward.org/data-structure/length-of-longest-substring-without-any-repeating-character/",
      },
      {
        id: 11, title: "Minimum Window Substring", difficulty: "Hard",
        leetcode: "https://leetcode.com/problems/minimum-window-substring/",
        video: "https://www.youtube.com/watch?v=jSto0O4AJbM",
        notes: "https://takeuforward.org/data-structure/minimum-window-substring/",
      },
      {
        id: 12, title: "Sliding Window Maximum", difficulty: "Hard",
        leetcode: "https://leetcode.com/problems/sliding-window-maximum/",
        video: "https://www.youtube.com/watch?v=CZl2Y0Oy8s0",
        notes: "https://takeuforward.org/data-structure/sliding-window-maximum/",
      },
    ],
  },
  {
    topic: "Binary Search",
    icon: "⌖",
    color: "#10b981",
    problems: [
      {
        id: 13, title: "Binary Search", difficulty: "Easy",
        leetcode: "https://leetcode.com/problems/binary-search/",
        video: "https://www.youtube.com/watch?v=MHf6awe89xw",
        notes: "https://takeuforward.org/arrays/binary-search-explained/",
      },
      {
        id: 14, title: "Search in Rotated Sorted Array", difficulty: "Medium",
        leetcode: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        video: "https://www.youtube.com/watch?v=5qGrJbHhqFs",
        notes: "https://takeuforward.org/data-structure/search-element-in-a-rotated-sorted-array/",
      },
      {
        id: 15, title: "Find Minimum in Rotated Sorted Array", difficulty: "Medium",
        leetcode: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
        video: "https://www.youtube.com/watch?v=nIVW4P8b1VA",
        notes: "https://takeuforward.org/data-structure/minimum-in-rotated-sorted-array/",
      },
      {
        id: 16, title: "Median of Two Sorted Arrays", difficulty: "Hard",
        leetcode: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        video: "https://www.youtube.com/watch?v=q6IEA26hvXc",
        notes: "https://takeuforward.org/data-structure/median-of-two-sorted-arrays-of-different-sizes/",
      },
    ],
  },
  {
    topic: "Linked List",
    icon: "⬡",
    color: "#f59e0b",
    problems: [
      {
        id: 17, title: "Reverse Linked List", difficulty: "Easy",
        leetcode: "https://leetcode.com/problems/reverse-linked-list/",
        video: "https://www.youtube.com/watch?v=iRtLEoL-r-g",
        notes: "https://takeuforward.org/data-structure/reverse-a-linked-list/",
      },
      {
        id: 18, title: "Merge Two Sorted Lists", difficulty: "Easy",
        leetcode: "https://leetcode.com/problems/merge-two-sorted-lists/",
        video: "https://www.youtube.com/watch?v=XIdigk956u0",
        notes: "https://takeuforward.org/data-structure/merge-two-sorted-linked-lists/",
      },
      {
        id: 19, title: "Linked List Cycle", difficulty: "Easy",
        leetcode: "https://leetcode.com/problems/linked-list-cycle/",
        video: "https://www.youtube.com/watch?v=gBTe7lFR3vc",
        notes: "https://takeuforward.org/data-structure/detect-a-cycle-in-a-linked-list/",
      },
      {
        id: 20, title: "LRU Cache", difficulty: "Medium",
        leetcode: "https://leetcode.com/problems/lru-cache/",
        video: "https://www.youtube.com/watch?v=Xc4sICC8m4M",
        notes: "https://takeuforward.org/data-structure/lru-cache-implementation/",
      },
      {
        id: 21, title: "Merge K Sorted Lists", difficulty: "Hard",
        leetcode: "https://leetcode.com/problems/merge-k-sorted-lists/",
        video: "https://www.youtube.com/watch?v=q5a5OiGbT6Q",
        notes: "https://takeuforward.org/data-structure/merge-k-sorted-lists/",
      },
    ],
  },
  {
    topic: "Trees",
    icon: "⬆",
    color: "#ef4444",
    problems: [
      {
        id: 22, title: "Invert Binary Tree", difficulty: "Easy",
        leetcode: "https://leetcode.com/problems/invert-binary-tree/",
        video: "https://www.youtube.com/watch?v=OnSn2XEQ4MY",
        notes: "https://takeuforward.org/data-structure/invert-a-binary-tree/",
      },
      {
        id: 23, title: "Maximum Depth of Binary Tree", difficulty: "Easy",
        leetcode: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        video: "https://www.youtube.com/watch?v=hTM3phVI6YQ",
        notes: "https://takeuforward.org/data-structure/find-maximum-depth-of-binary-tree/",
      },
      {
        id: 24, title: "Binary Tree Level Order Traversal", difficulty: "Medium",
        leetcode: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        video: "https://www.youtube.com/watch?v=EoAsWbO7sqg",
        notes: "https://takeuforward.org/data-structure/level-order-traversal-of-a-binary-tree/",
      },
      {
        id: 25, title: "Lowest Common Ancestor of BST", difficulty: "Medium",
        leetcode: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
        video: "https://www.youtube.com/watch?v=gs2LMfuOR9k",
        notes: "https://takeuforward.org/data-structure/lowest-common-ancestor-for-two-given-nodes/",
      },
      {
        id: 26, title: "Binary Tree Maximum Path Sum", difficulty: "Hard",
        leetcode: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        video: "https://www.youtube.com/watch?v=Hr5cWUld4vU",
        notes: "https://takeuforward.org/data-structure/maximum-sum-path-in-binary-tree/",
      },
    ],
  },
  {
    topic: "Dynamic Programming",
    icon: "◈",
    color: "#ec4899",
    problems: [
      {
        id: 27, title: "Climbing Stairs", difficulty: "Easy",
        leetcode: "https://leetcode.com/problems/climbing-stairs/",
        video: "https://www.youtube.com/watch?v=mLfjzJsN8us",
        notes: "https://takeuforward.org/data-structure/climbing-stairs/",
      },
      {
        id: 28, title: "House Robber", difficulty: "Medium",
        leetcode: "https://leetcode.com/problems/house-robber/",
        video: "https://www.youtube.com/watch?v=73r3KWiEvyk",
        notes: "https://takeuforward.org/data-structure/house-robber-dp-6/",
      },
      {
        id: 29, title: "Coin Change", difficulty: "Medium",
        leetcode: "https://leetcode.com/problems/coin-change/",
        video: "https://www.youtube.com/watch?v=H9bfqozjoqs",
        notes: "https://takeuforward.org/data-structure/minimum-coins-dp-20/",
      },
      {
        id: 30, title: "Longest Increasing Subsequence", difficulty: "Medium",
        leetcode: "https://leetcode.com/problems/longest-increasing-subsequence/",
        video: "https://www.youtube.com/watch?v=ekcwMsSIzVc",
        notes: "https://takeuforward.org/data-structure/printing-longest-increasing-subsequence-dp-42/",
      },
      {
        id: 31, title: "Edit Distance", difficulty: "Hard",
        leetcode: "https://leetcode.com/problems/edit-distance/",
        video: "https://www.youtube.com/watch?v=fJaKO8FbDdo",
        notes: "https://takeuforward.org/data-structure/edit-distance-dp-33/",
      },
    ],
  },
  {
    topic: "Graphs",
    icon: "◎",
    color: "#14b8a6",
    problems: [
      {
        id: 32, title: "Number of Islands", difficulty: "Medium",
        leetcode: "https://leetcode.com/problems/number-of-islands/",
        video: "https://www.youtube.com/watch?v=muncqlKJrH0",
        notes: "https://takeuforward.org/graph/number-of-islands/",
      },
      {
        id: 33, title: "Clone Graph", difficulty: "Medium",
        leetcode: "https://leetcode.com/problems/clone-graph/",
        video: "https://www.youtube.com/watch?v=mQeF6bN8hMk",
        notes: "https://takeuforward.org/graph/clone-graph/",
      },
      {
        id: 34, title: "Course Schedule", difficulty: "Medium",
        leetcode: "https://leetcode.com/problems/course-schedule/",
        video: "https://www.youtube.com/watch?v=EgI5nU9etnU",
        notes: "https://takeuforward.org/graph/course-schedule-i-and-ii/",
      },
      {
        id: 35, title: "Word Ladder", difficulty: "Hard",
        leetcode: "https://leetcode.com/problems/word-ladder/",
        video: "https://www.youtube.com/watch?v=tRPda0rcf8E",
        notes: "https://takeuforward.org/graph/word-ladder-1/",
      },
    ],
  },
];

// ─── Config maps ──────────────────────────────────────────────────────────────

const difficultyConfig: Record<Difficulty, { bg: string; text: string; border: string }> = {
  Easy:   { bg: "bg-emerald-950/60", text: "text-emerald-400", border: "border-emerald-800/40" },
  Medium: { bg: "bg-amber-950/60",   text: "text-amber-400",   border: "border-amber-800/40"   },
  Hard:   { bg: "bg-red-950/60",     text: "text-red-400",     border: "border-red-800/40"     },
};

const statusCycle: Status[] = ["todo", "inprogress", "done"];

const statusConfig: Record<Status, { label: string; title: string; color: string }> = {
  todo:       { label: "·", title: "Not Started", color: "text-zinc-600"  },
  inprogress: { label: "◑", title: "In Progress", color: "text-amber-400" },
  done:       { label: "✓", title: "Completed",   color: "text-emerald-400" },
};

const FILTERS: FilterOption[] = ["All", "Todo", "In Progress", "Done", "Easy", "Medium", "Hard"];

// ─── Component ────────────────────────────────────────────────────────────────

export default function DSASheet() {
  const [statuses, setStatuses] = useState<StatusMap>(() => {
    const init: StatusMap = {};
    dsaData.forEach((t) => t.problems.forEach((p) => (init[p.id] = "todo")));
    return init;
  });

  const [expanded, setExpanded] = useState<BoolMap>({});

  const [openTopics, setOpenTopics] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    dsaData.forEach((t) => (init[t.topic] = true));
    return init;
  });

  const [filter, setFilter] = useState<FilterOption>("All");

  const toggleStatus = (id: number): void => {
    setStatuses((prev) => {
      const cur: Status = prev[id];
      const next: Status = statusCycle[(statusCycle.indexOf(cur) + 1) % statusCycle.length];
      return { ...prev, [id]: next };
    });
  };

  const toggleExpand = (id: number): void =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  const toggleTopic = (topic: string): void =>
    setOpenTopics((prev) => ({ ...prev, [topic]: !prev[topic] }));

  const totalProblems = dsaData.reduce((a, t) => a + t.problems.length, 0);
  const doneCount      = Object.values(statuses).filter((s) => s === "done").length;
  const inprogressCount = Object.values(statuses).filter((s) => s === "inprogress").length;
  const progressPct    = Math.round((doneCount / totalProblems) * 100);

  const filteredData = dsaData
    .map((topic) => ({
      ...topic,
      problems: topic.problems.filter((p): boolean => {
        const s = statuses[p.id];
        if (filter === "All")         return true;
        if (filter === "Done")        return s === "done";
        if (filter === "In Progress") return s === "inprogress";
        if (filter === "Todo")        return s === "todo";
        return p.difficulty === filter;
      }),
    }))
    .filter((t) => t.problems.length > 0);

  return (
    <div
      style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
      className="min-h-screen  text-zinc-200 p-2 md:p-5"
    >
      {/* ── Header ── */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="flex items-baseline gap-3 mb-1">
          <h1 className="text-2xl font-bold tracking-tight text-white">DSA Sheet</h1>
          <span className="text-xs text-zinc-500 tracking-widest uppercase">Practice Tracker</span>
        </div>

       

        {/* Filters */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-2.5 py-1 text-xs rounded border transition-colors ${
                filter === f
                  ? "bg-zinc-700 border-zinc-500 text-white"
                  : "bg-transparent border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* ── Topics ── */}
      <div className="max-w-3xl mx-auto space-y-3">
        {filteredData.map((topic) => {
          const topicDone = topic.problems.filter((p) => statuses[p.id] === "done").length;
          const isTopicOpen = openTopics[topic.topic] ?? true;

          return (
            <div
              key={topic.topic}
              className="border border-zinc-800/70 rounded-lg overflow-hidden"
            >
              {/* Topic header */}
              <button
                onClick={() => toggleTopic(topic.topic)}
                className="w-full flex items-center justify-between px-4 py-3 bg-zinc-900/80 hover:bg-zinc-900 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <span style={{ color: topic.color }} className="text-base font-bold">
                    {topic.icon}
                  </span>
                  <span className="text-sm font-semibold text-zinc-200">{topic.topic}</span>
                  <span className="text-xs text-zinc-600">
                    {topicDone}/{topic.problems.length}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-0.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${(topicDone / topic.problems.length) * 100}%`,
                        backgroundColor: topic.color,
                      }}
                    />
                  </div>
                  <span className="text-zinc-600 text-xs">{isTopicOpen ? "▲" : "▼"}</span>
                </div>
              </button>

              {/* Problems */}
              {isTopicOpen && (
                <div className="divide-y divide-zinc-800/50">
                  {topic.problems.map((problem) => {
                    const diff   = difficultyConfig[problem.difficulty];
                    const stat   = statusConfig[statuses[problem.id]];
                    const isOpen = expanded[problem.id] ?? false;

                    return (
                      <div key={problem.id} className="bg-zinc-950/50">
                        <div className="flex items-center px-4 py-2.5 gap-3">
                          {/* Status toggle */}
                          <button
                            onClick={() => toggleStatus(problem.id)}
                            title={stat.title}
                            className={`text-base w-5 flex-shrink-0 transition-all hover:scale-110 ${stat.color}`}
                          >
                            {stat.label}
                          </button>

                          {/* Title */}
                          <button
                            onClick={() => toggleExpand(problem.id)}
                            className="flex-1 text-left flex items-center gap-2 group"
                          >
                            <span
                              className={`text-sm transition-colors ${
                                statuses[problem.id] === "done"
                                  ? "text-zinc-500 line-through"
                                  : "text-zinc-300 group-hover:text-white"
                              }`}
                            >
                              {problem.title}
                            </span>
                          </button>

                          {/* Difficulty badge */}
                          <span
                            className={`text-[10px] px-1.5 py-0.5 rounded border font-medium flex-shrink-0 ${diff.bg} ${diff.text} ${diff.border}`}
                          >
                            {problem.difficulty}
                          </span>

                          {/* Expand toggle */}
                          <button
                            onClick={() => toggleExpand(problem.id)}
                            className="text-zinc-600 hover:text-zinc-400 text-xs flex-shrink-0 w-4"
                          >
                            {isOpen ? "▲" : "▼"}
                          </button>
                        </div>

                        {/* Collapsible links */}
                        {isOpen && (
                          <div className="px-4 pb-3 flex gap-2 flex-wrap ml-8">
                            <a
                              href={problem.leetcode}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded border border-orange-900/50 bg-orange-950/30 text-orange-400 hover:bg-orange-950/60 hover:border-orange-700/60 transition-colors"
                            >
                              <span>⚡</span> LeetCode
                            </a>
                            <a
                              href={problem.video}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded border border-red-900/50 bg-red-950/30 text-red-400 hover:bg-red-950/60 hover:border-red-700/60 transition-colors"
                            >
                              <span>▶</span> Video
                            </a>
                            <a
                              href={problem.notes}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded border border-blue-900/50 bg-blue-950/30 text-blue-400 hover:bg-blue-950/60 hover:border-blue-700/60 transition-colors"
                            >
                              <span>📄</span> Notes
                            </a>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="max-w-3xl mx-auto mt-6 text-center text-xs text-zinc-700">
        click status icon to cycle · click row to expand links
      </div>
    </div>
  );
}