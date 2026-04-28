import React from 'react';
import Link from 'next/link';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calculator, 
  Cpu, 
  GitBranch, 
  Globe, 
  ArrowRight,
  Briefcase 
} from 'lucide-react';

const placementCategories = [
  {
    id: 'aptitude',
    title: 'Aptitude & Reasoning',
    description: 'Master quantitative aptitude, logical reasoning, and verbal ability with timed mock tests and shortcut techniques.',
    icon: <Calculator className="w-5 h-5 text-amber-600" />,
    tag: 'Foundational',
    color: 'bg-amber-50',
    path: '/placement-preparation/aptitude'
  },
  {
    id: 'core-subjects',
    title: 'Core Subjects',
    description: 'In-depth interview preparation for CS fundamentals: Operating Systems, DBMS, Computer Networks, and OOPS.',
    icon: <Cpu className="w-5 h-5 text-blue-600" />,
    tag: 'Technical',
    color: 'bg-blue-50',
    path: '/placement-preparation/core-subjects'
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Complete roadmap for Modern Web Dev. Specialized tracks for both Java Spring Boot and the MERN stack.',
    icon: <Globe className="w-5 h-5 text-emerald-600" />,
    tag: 'Full Stack',
    color: 'bg-emerald-50',
    path: '/placement-preparation/web-dev'
  }
];

const PlacementPrepPage = () => {
  return (
    <div className="p-6 lg:p-10 space-y-8 min-h-screen">
      {/* Header - Aligned with previous pages */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-600 mb-1">
            <Briefcase size={20} />
            <span className="text-xs font-bold uppercase tracking-widest">Industry Ready</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Placement Preparation</h1>
          <p className="text-slate-500 text-lg max-w-xl">
            Everything you need to crack technical interviews and secure your dream job in top product-based companies.
          </p>
        </div>
      </div>

      {/* Grid Layout - 2x2 on Tablet, 4-column on Wide screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {placementCategories.map((category) => (
          <Link key={category.id} href={category.path} className="block group">
            <Card className="h-full border-none shadow-sm hover:shadow-md transition-all duration-300 ring-1 ring-slate-200 group-hover:ring-blue-400">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className={`p-2.5 rounded-xl ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <Badge variant="outline" className="text-[10px] uppercase tracking-wider font-bold opacity-70">
                    {category.tag}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-slate-500 line-clamp-3 pt-1">
                  {category.description}
                </CardDescription>
              </CardHeader>
              
              <CardFooter className="pt-2">
                <div className="flex w-full justify-between items-center text-blue-600 font-medium text-sm px-2">
                  <span>Explore Track</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>

      
    </div>
  );
};

export default PlacementPrepPage;