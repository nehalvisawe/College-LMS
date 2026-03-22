import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Trophy, LayoutGrid, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const courseCategories = [
  {
    id: 'ssbt-internal',
    title: 'SSBT Courses',
    description: 'Access your university curriculum, including semester-wise subjects, lab manuals, and faculty notes.',
    icon: <BookOpen className="w-5 h-5 text-blue-600" />,
    footer: 'University Syllabus',
    tag: 'Academic',
    color: 'bg-blue-50',
    link: '/courses/ssbt'
  },
  {
    id: 'competitive-prep',
    title: 'Competitive Courses',
    description: 'Prepare for GATE, GRE, or placements with curated mock tests and advanced problem-solving modules.',
    icon: <Trophy className="w-5 h-5 text-orange-600" />,
    footer: 'Exam Prep',
    tag: 'Career',
    color: 'bg-orange-50',
    link: '/courses/competitive'
  },
  {
    id: 'other-resources',
    title: 'Other Resources',
    description: 'Explore supplementary learning materials, including open-source projects and soft skills training.',
    icon: <LayoutGrid className="w-5 h-5 text-purple-600" />,
    footer: 'General Learning',
    tag: 'Self-Paced',
    color: 'bg-purple-50',
    link: '/courses/other'
  }
];

const CoursesPage = () => {
  return (
    <div className="p-6 lg:p-10 space-y-8">
      {/* Header Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Course Categories</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Select a category to explore available subjects tailored for your academic and professional growth.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courseCategories.map((category) => (
          <Card key={category.id} className="flex flex-col hover:shadow-md transition-shadow">
            <Link href={category.link}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className={`p-2 rounded-lg ${category.color}`}>
                  {category.icon}
                </div>
                <Badge variant="secondary" className="font-medium">
                  {category.tag}
                </Badge>
              </div>
              <CardTitle className="mt-4 text-xl">{category.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {category.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="flex-1">
              {/* You can add extra details here like "12 Courses Available" */}
            </CardContent>

            <CardFooter className="border-t pt-4 flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {category.footer}
              </span>
              <Button variant="ghost" size="sm" className="gap-2 group">
                View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardFooter>
            </Link>
          </Card>

        ))}
      </div>
    </div>
  );
};

export default CoursesPage;