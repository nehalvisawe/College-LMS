import ContentSection from "@/components/ContentLayout";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const myCourses = [
  { id: 'cs101', title: 'Data Structures', description: 'Advanced algorithms and complexity analysis.', footer: '12 Lectures', tag: 'Core' },
  { id: 'cs102', title: 'Cloud Computing', description: 'AWS, Azure, and Google Cloud Fundamentals.', footer: '8 Lectures', tag: 'Elective' },
  // ... more cards
];


export default function CoursesPage() {
    return (
      <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold ">Your Courses</h1>

        <Link href={"/admin/courses/create"} className={buttonVariants()}>Create Course</Link>
  
      </div>
       <h1>Here You will see all your courses</h1>
      </>
    )
}