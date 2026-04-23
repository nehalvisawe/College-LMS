"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Loader2, X } from "lucide-react";
import Link from "next/link";
import { DEPARTMENTS, YEARS_OF_TEACHING } from "@/lib/constants";

// Human-readable labels for the enums
const DEPARTMENT_LABELS: Record<DEPARTMENTS, string> = {
  [DEPARTMENTS.COMPUTER]: "Computer Engineering",
  [DEPARTMENTS.ENTC]: "Electronics & Telecom",
  [DEPARTMENTS.CIVIL]: "Civil Engineering",
  [DEPARTMENTS.ELECTRICAL]: "Electrical Engineering",
  [DEPARTMENTS.CHEMICAL]: "Chemical Engineering",
  [DEPARTMENTS.MECHANICAL]: "Mechanical Engineering",
  [DEPARTMENTS.MBA]: "MBA",
  [DEPARTMENTS.MCA]: "MCA",
  [DEPARTMENTS.BCA]: "BCA",
  [DEPARTMENTS.BBA]: "BBA",
};

const YEAR_LABELS: Record<YEARS_OF_TEACHING, string> = {
  [YEARS_OF_TEACHING.FIRST_YEAR]: "First Year (FY)",
  [YEARS_OF_TEACHING.SECOND_YEAR]: "Second Year (SY)",
  [YEARS_OF_TEACHING.THIRD_YEAR]: "Third Year (TY)",
  [YEARS_OF_TEACHING.FOURTH_YEAR]: "Fourth Year (LY)",
};

export default function TeacherSignUpPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [department, setDepartment] = useState<DEPARTMENTS | "">("");
  const [yearOfTeaching, setYearOfTeaching] = useState<YEARS_OF_TEACHING | "">("");
  const [courseInput, setCourseInput] = useState("");
  const [courses, setCourses] = useState<string[]>([]);

  function addCourse() {
    const trimmed = courseInput.trim();
    if (trimmed && !courses.includes(trimmed)) {
      setCourses((prev) => [...prev, trimmed]);
      setCourseInput("");
    }
  }

  function removeCourse(course: string) {
    setCourses((prev) => prev.filter((c) => c !== course));
  }

  function handleCourseKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      addCourse();
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!department) return setError("Please select a department.");
    if (!yearOfTeaching) return setError("Please select a year of teaching.");

    setLoading(true);

    const form = new FormData(e.currentTarget);

    const { error } = await authClient.signUp.email({
      name: form.get("name") as string,
      email: form.get("email") as string,
      password: form.get("password") as string,
      courses,
      department,
      year_of_teaching: yearOfTeaching,
    } as any);

    if (error) {
      setError(error.message ?? "Sign up failed. Please try again.");
      setLoading(false);
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <Card className="w-2xl max-w-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-semibold">
            Teacher Registration
          </CardTitle>
          <CardDescription>Create your account to get started</CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6 gap-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Dr. Jane Smith"
                required
                autoComplete="name"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="jane@college.edu"
                required
                autoComplete="email"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                minLength={8}
                autoComplete="new-password"
              />
              <p className="text-xs text-muted-foreground">
                Minimum 8 characters
              </p>
            </div>

            {/* Department + Year side by side on sm+ */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Department</Label>
                <Select
                  onValueChange={(val) => setDepartment(val as DEPARTMENTS)}
                  value={department}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(DEPARTMENTS).map((dept) => (
                      <SelectItem key={dept} value={dept}>
                        {DEPARTMENT_LABELS[dept]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Year of Teaching</Label>
                <Select
                  onValueChange={(val) =>
                    setYearOfTeaching(val as YEARS_OF_TEACHING)
                  }
                  value={yearOfTeaching}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(YEARS_OF_TEACHING).map((yr) => (
                      <SelectItem key={yr} value={yr}>
                        {YEAR_LABELS[yr]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Courses */}
            <div className="space-y-2">
              <Label htmlFor="course-input">Courses</Label>
              <div className="flex gap-2">
                <Input
                  id="course-input"
                  placeholder="e.g. Data Structures"
                  value={courseInput}
                  onChange={(e) => setCourseInput(e.target.value)}
                  onKeyDown={handleCourseKeyDown}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={addCourse}
                  disabled={!courseInput.trim()}
                >
                  Add
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Press Enter or click Add to add a course
              </p>

              {courses.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {courses.map((course) => (
                    <Badge
                      key={course}
                      variant="secondary"
                      className="flex items-center gap-1 pr-1"
                    >
                      {course}
                      <button
                        type="button"
                        onClick={() => removeCourse(course)}
                        className="ml-1 rounded-full hover:bg-muted p-0.5"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {loading ? "Creating account..." : "Create account"}
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary hover:underline font-medium"
              >
                Sign in
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}