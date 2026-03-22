import React from 'react';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  Layers, 
  BookMarked, 
  GraduationCap, 
  ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

const academicYears = [
  {
    id: 'year-1',
    title: '1st Year',
    description: 'Foundation courses including Engineering Mathematics, Physics, and Basic Programming.',
    icon: <Sparkles className="w-5 h-5 text-yellow-600" />,
    tag: 'Foundation',
    color: 'bg-yellow-50',
    link: '/courses/ssbt/engineering/computer/fe'
    
  },
  {
    id: 'year-2',
    title: '2nd Year',
    description: 'Core departmental subjects, Data Structures, and Object Oriented Programming.',
    icon: <Layers className="w-5 h-5 text-blue-600" />,
    tag: 'Core',
    color: 'bg-blue-50',
    link: '/courses/ssbt/engineering/computer/se'
  },
  {
    id: 'year-3',
    title: '3rd Year',
    description: 'Advanced technical modules, System Design, and specialization electives.',
    icon: <BookMarked className="w-5 h-5 text-purple-600" />,
    tag: 'Advanced',
    color: 'bg-purple-50',
    link: '/courses/ssbt/engineering/computer/te'
  },
  {
    id: 'year-4',
    title: '4th Year',
    description: 'Final year projects, Internship preparation, and Cloud/DevOps specializations.',
    icon: <GraduationCap className="w-5 h-5 text-emerald-600" />,
    tag: 'Professional',
    color: 'bg-emerald-50',
    link: '/courses/ssbt/engineering/computer/be'
  }
];

const YearSelectionPage = () => {
  return (
    <div className="p-6 lg:p-10 space-y-8 min-h-screen">
      {/* Header - Matching DepartmentPage */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-white">Academic Year</h1>
          <p className="text-slate-500 text-lg max-w-xl">
            Select your current year of study to access the specific curriculum and resources assigned to you.
          </p>
        </div>
      </div>

      {/* Grid - Consistent with DepartmentPage */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {academicYears.map((year) => (
          <Card key={year.id} className="group border-none shadow-sm hover:shadow-md transition-all duration-300 ring-1 ring-slate-200">
            <Link href={year.link}>
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <div className={`p-2.5 rounded-xl ${year.color} group-hover:scale-110 transition-transform duration-300`}>
                  {year.icon}
                </div>
                <Badge variant="outline" className="text-[10px] uppercase tracking-wider font-bold opacity-70">
                  {year.tag}
                </Badge>
              </div>
              <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                {year.title}
              </CardTitle>
              <CardDescription className="text-slate-500 line-clamp-2 pt-1">
                {year.description}
              </CardDescription>
            </CardHeader>
            
            <CardFooter className="pt-2">
              <Button variant="ghost" className="w-full justify-between text-blue-600 hover:text-blue-700 hover:bg-blue-50 group/btn">
                View Subjects
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </CardFooter>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default YearSelectionPage;