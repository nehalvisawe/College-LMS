import React from 'react';
import Link from 'next/link'; // 1. Import the Link component
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
  Trophy, 
  TrendingUp, 
  MoreHorizontal, 
  ArrowRight,
  Target
} from 'lucide-react';

const examCategories = [
  {
    id: 'gate',
    title: 'GATE',
    description: 'Comprehensive preparation for Graduate Aptitude Test in Engineering. Access technical modules and PSU updates.',
    icon: <Trophy className="w-5 h-5 text-amber-600" />,
    tag: 'Engineering',
    color: 'bg-amber-50',
    path: '/courses/compititive-exam/gate' // Dynamic path
  },
  {
    id: 'cat',
    title: 'CAT',
    description: 'Logical reasoning, quantitative aptitude, and verbal ability modules for MBA aspirants.',
    icon: <TrendingUp className="w-5 h-5 text-blue-600" />,
    tag: 'Management',
    color: 'bg-blue-50',
    path: '/courses/compititive-exam/cat'
  },
  {
    id: 'others',
    title: 'Others',
    description: 'Resources for GRE, GMAT, UPSC, and specialized technical certifications.',
    icon: <MoreHorizontal className="w-5 h-5 text-slate-600" />,
    tag: 'Miscellaneous',
    color: 'bg-slate-50',
    path: '/courses/compititive-exam/others'
  }
];

const CompetitiveExamPage = () => {
  return (
    <div className="p-6 lg:p-10 space-y-8 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-600 mb-1">
            <Target size={20} />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Career Growth</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Competitive Exams</h1>
          <p className="text-slate-500 text-lg max-w-xl">
            Specialized coaching materials and mock tests to help you ace your post-graduate examinations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {examCategories.map((exam) => (
          /* 2. Wrap the Card in a Link tag */
          <Link key={exam.id} href={exam.path} className="block group">
            <Card className="h-full border-none shadow-sm hover:shadow-md transition-all duration-300 ring-1 ring-slate-200 group-hover:ring-blue-400">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className={`p-2.5 rounded-xl ${exam.color} group-hover:scale-110 transition-transform duration-300`}>
                    {exam.icon}
                  </div>
                  <Badge variant="outline" className="text-[10px] uppercase tracking-wider font-bold opacity-70">
                    {exam.tag}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {exam.title}
                </CardTitle>
                <CardDescription className="text-slate-500 line-clamp-3 pt-1">
                  {exam.description}
                </CardDescription>
              </CardHeader>
              
              <CardFooter className="pt-2">
                {/* 3. The button acts as a visual cue, but the whole card is clickable */}
                <div className="flex w-full justify-between items-center text-blue-600 font-medium text-sm px-2">
                  <span>View Resources</span>
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

export default CompetitiveExamPage;