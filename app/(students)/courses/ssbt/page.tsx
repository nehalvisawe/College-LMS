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
  Settings, 
  FlaskConical, 
  Code, 
  BarChart3, 
  Briefcase, 
  Microscope, 
  ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

const departments = [
  {
    id: 'eng',
    title: 'Engineering',
    description: 'Technical curriculum covering CSE, Mechanical, Civil, and more with integrated lab resources.',
    icon: <Settings className="w-5 h-5 text-blue-600" />,
    tag: 'Technical',
    color: 'bg-blue-50',
    link: '/courses/ssbt/engineering'
  },
  {
    id: 'pharm',
    title: 'Pharmacy',
    description: 'Comprehensive study materials for B.Pharm and M.Pharm students including drug chemistry and pharmacology.',
    icon: <FlaskConical className="w-5 h-5 text-emerald-600" />,
    tag: 'Medical',
    color: 'bg-emerald-50',
    link: '/courses/ssbt/pharmacy'
  },
  {
    id: 'bca',
    title: 'BCA',
    description: 'Focusing on computer applications, software development, and database management systems.',
    icon: <Code className="w-5 h-5 text-indigo-600" />,
    tag: 'Technical',
    color: 'bg-indigo-50',
    link: '/courses/ssbt/bca'
  },
  {
    id: 'bba',
    title: 'BBA',
    description: 'Foundational business administration courses covering marketing, HR, and finance.',
    icon: <BarChart3 className="w-5 h-5 text-orange-600" />,
    tag: 'Management',
    color: 'bg-orange-50',
    link: '/courses/ssbt/bba'
  },
  {
    id: 'mba',
    title: 'MBA',
    description: 'Advanced management strategies, leadership modules, and case study resources.',
    icon: <Briefcase className="w-5 h-5 text-rose-600" />,
    tag: 'Management',
    color: 'bg-rose-50',
    link: '/courses/ssbt/mba'
  },
  {
    id: 'bsc',
    title: 'B.Sc',
    description: 'Pure science resources for Physics, Chemistry, and Mathematics streams.',
    icon: <Microscope className="w-5 h-5 text-amber-600" />,
    tag: 'Science',
    color: 'bg-amber-50',
    link: '/courses/ssbt/bsc'
  }
];

const DepartmentPage = () => {
  return (
    <div className="p-6 lg:p-10 space-y-8  min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-white">Academic Departments</h1>
          <p className="text-slate-500 text-lg max-w-xl">
            Access specialized course content, research papers, and faculty announcements for your specific stream.
          </p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" size="sm">Filter by Faculty</Button>
        </div>
      </div>

      {/* 2x3 or 3x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept) => (
          <Card key={dept.id} className="group border-none shadow-sm hover:shadow-md transition-all duration-300 ring-1 ring-slate-200">
            <Link href={dept.link}>
            
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <div className={`p-2.5 rounded-xl ${dept.color} group-hover:scale-110 transition-transform duration-300`}>
                  {dept.icon}
                </div>
                <Badge variant="outline" className="text-[10px] uppercase tracking-wider font-bold opacity-70">
                  {dept.tag}
                </Badge>
              </div>
              <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                {dept.title}
              </CardTitle>
              <CardDescription className="text-slate-500 line-clamp-2 pt-1">
                {dept.description}
              </CardDescription>
            </CardHeader>
            
            <CardFooter className="pt-2">
              <Button variant="ghost" className="w-full justify-between text-blue-600 hover:text-blue-700 hover:bg-blue-50 group/btn">
                Browse Courses
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

export default DepartmentPage;