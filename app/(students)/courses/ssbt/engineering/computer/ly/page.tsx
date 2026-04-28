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
  BookOpen, 
  Code2, 
  Database, 
  Network, 
  Cpu, 
  Globe,
  ArrowRight,
  FileText,
  ComputerIcon,
  DatabaseIcon
} from 'lucide-react';
import { IconDashboard, IconMath } from '@tabler/icons-react';
import Link from 'next/link';

const semesterData = {
  sem1: {
    title: "Semester 1",
    subjects: [
      { id: 'cd', title: 'Compiler Design', desc: 'Study of basic compiler designing.', icon: <Network className="text-blue-600" />, tag: 'Core', link: '/courses/ssbt/engineering/computer/ly/cd' },
      { id: 'qrps', title: 'QRPS', desc: 'Basics of apptitude', icon: <IconMath className="text-emerald-600" />, tag: 'Core', link: '/courses/ssbt/engineering/computer/ly/qrps' },
      { id: 'ml', title: 'Machine Learing', desc: 'Machine learning algorithims and theory', icon: <ComputerIcon className="text-orange-600" />, tag: 'Theory', link: '/courses/ssbt/engineering/computer/ly/ml' },
      { id: 'dm', title: 'Data Mining', desc: 'Basics of data minig and mining algorithm', icon: <DatabaseIcon className="text-orange-600" />, tag: 'Theory', link: '/courses/ssbt/engineering/computer/ly/dm' },
    ]
  },
  sem2: {
    title: "Semester 2",
    subjects: [
      { id: 'cs', title: 'Cyber Security', desc: 'Basic Introduction to cyber security', icon: <Cpu className="text-purple-600" />, tag: 'Core', link: '/courses/ssbt/engineering/computer/ly/cs' },
      { id: 'lrps', title: 'LRPS', desc: 'Advance logical reasoning', icon: <Globe className="text-indigo-600" />, tag: 'Practical', link: '/courses/ssbt/engineering/computer/ly/lrps' },
      { id: 'sc', title: 'Soft Computing', desc: 'high level problem solving for computer science', icon: <Code2 className="text-rose-600" />, tag: 'Elective', link: '/courses/ssbt/engineering/computer/ly/sc' },
      { id: 'da', title: 'Data Analytics', desc: 'Advance data analytics and visualization', icon: <BookOpen className="text-yellow-600" />, tag: 'Elective', link: '/courses/ssbt/engineering/computer/ly/da' },
    ]
  }
};

const SubjectListPage = () => {
  return (
    <div className="p-6 lg:p-10 space-y-12 min-h-screen">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-white">Final Year Subjects</h1>
        <p className="text-slate-500 text-lg">Computer Engineering • Academic Session 2025-26</p>
      </div>

      {/* Semester 1 Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold text-slate-800">{semesterData.sem1.title}</h2>
          <div className="h-[1] flex-1 bg-slate-200" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {semesterData.sem1.subjects.map((subject) => (
            <SubjectCard key={subject.id} {...subject} />
          ))}
        </div>
      </section>

      {/* Semester 2 Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold text-slate-800">{semesterData.sem2.title}</h2>
          <div className="h-[1] flex-1 bg-slate-200" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {semesterData.sem2.subjects.map((subject) => (
            <SubjectCard key={subject.id} {...subject} />
          ))}
        </div>
      </section>
    </div>
  );
};

// Reusable Subject Card Component
const SubjectCard = ({ title, desc, icon, tag , link}: any) => (
  <Card className="group border-none shadow-sm hover:shadow-md transition-all duration-300 ring-1 ring-slate-200">
        <Link href={link}>
    <CardHeader>
      <div className="flex justify-between items-start mb-2">
        <div className="p-2.5 rounded-xl bg-white border border-slate-100 group-hover:scale-110 transition-transform duration-300 shadow-sm">
          {React.cloneElement(icon as React.ReactElement, )}
        </div>
        <Badge variant="secondary" className="text-[10px] uppercase font-bold tracking-wider">
          {tag}
        </Badge>
      </div>
      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
        {title}
      </CardTitle>
      <CardDescription className="text-slate-500 line-clamp-2 pt-1">
        {desc}
      </CardDescription>
    </CardHeader>
    <CardFooter className="pt-2">
      <Button variant="ghost" className="w-full justify-between text-blue-600 hover:text-blue-700 hover:bg-blue-50 group/btn">
        Start Learning
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </Button>
    </CardFooter>
    </Link>
  </Card>
);

export default SubjectListPage;