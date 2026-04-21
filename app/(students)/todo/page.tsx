"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
};

const STORAGE_KEY = "todo-list";

function loadTodos(): Todo[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveTodos(todos: Todo[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch {
    console.error("Failed to save todos");
  }
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "done">("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTodos(loadTodos());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) saveTodos(todos);
  }, [todos, mounted]);

  function addTodo() {
    const text = input.trim();
    if (!text) return;
    setTodos((prev) => [
      {
        id: crypto.randomUUID(),
        text,
        completed: false,
        createdAt: Date.now(),
      },
      ...prev,
    ]);
    setInput("");
  }

  function toggleTodo(id: string) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function deleteTodo(id: string) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  function clearCompleted() {
    setTodos((prev) => prev.filter((t) => !t.completed));
  }

  const filtered = todos.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "done") return t.completed;
    return true;
  });

  const activeCount = todos.filter((t) => !t.completed).length;
  const doneCount = todos.filter((t) => t.completed).length;

  if (!mounted) return null;

  return (
    <div className="max-w-2xl p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-medium">Todo</h1>
          <p className="text-sm text-muted-foreground">
            {activeCount} remaining
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          {(["all", "active", "done"] as const).map((f) => (
            <Button
              key={f}
              variant={filter === f ? "secondary" : "ghost"}
              size="sm"
              className="text-xs capitalize h-7 px-2.5"
              onClick={() => setFilter(f)}
            >
              {f}
              {f === "active" && activeCount > 0 && (
                <Badge variant="secondary" className="ml-1.5 h-4 px-1 text-xs">
                  {activeCount}
                </Badge>
              )}
              {f === "done" && doneCount > 0 && (
                <Badge variant="secondary" className="ml-1.5 h-4 px-1 text-xs">
                  {doneCount}
                </Badge>
              )}
            </Button>
          ))}
        </div>
      </div>

      <Separator />

      <div className="flex gap-2">
        <Input
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          className="h-9 text-sm"
        />
        <Button onClick={addTodo} size="sm" className="h-9 px-3 shrink-0">
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-1">
        {filtered.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-8">
            {filter === "done"
              ? "No completed tasks yet"
              : filter === "active"
              ? "Nothing left to do!"
              : "Add your first task above"}
          </p>
        )}

        {filtered.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted/50 transition-colors group"
          >
            <Checkbox
              checked={todo.completed}
              onCheckedChange={() => toggleTodo(todo.id)}
              className="shrink-0"
            />
            <span
              className={cn(
                "flex-1 text-sm",
                todo.completed && "line-through text-muted-foreground"
              )}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {doneCount > 0 && (
        <>
          <Separator />
          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-muted-foreground h-7"
              onClick={clearCompleted}
            >
              Clear {doneCount} completed
            </Button>
          </div>
        </>
      )}
    </div>
  );
}