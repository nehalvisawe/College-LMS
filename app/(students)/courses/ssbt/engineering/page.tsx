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
  Monitor, 
  Settings, 
  Building2, 
  Zap, 
  Radio, 
  Beaker, 
  ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

const engineeringBranches = [
  {
    id: 'computer',
    title: 'Computer Engineering',
    description: 'Software development, AI, Data Structures, and Cloud Computing modules.',
    icon: <Monitor className="w-5 h-5 text-blue-600" />,
    tag: 'Software',
    color: 'bg-blue-50',
    link: '/courses/ssbt/engineering/computer'
  },
  {
    id: 'mechanical',
    title: 'Mechanical Engineering',
    description: 'Thermodynamics, Robotics, Manufacturing, and Fluid Mechanics resources.',
    icon: <Settings className="w-5 h-5 text-slate-600" />,
    tag: 'Core',
    color: 'bg-slate-50',
    link: '/courses/ssbt/engineering/mech'
  },
  {
    id: 'civil',
    title: 'Civil Engineering',
    description: 'Structural Analysis, Surveying, and Smart City infrastructure design.',
    icon: <Building2 className="w-5 h-5 text-orange-600" />,
    tag: 'Core',
    color: 'bg-orange-50',
    link: '/courses/ssbt/engineering/civil'
  },
  {
    id: 'electrical',
    title: 'Electrical Engineering',
    description: 'Power Systems, Control Engineering, and Renewable Energy modules.',
    icon: <Zap className="w-5 h-5 text-yellow-600" />,
    tag: 'Power',
    color: 'bg-yellow-50',
    link: '/courses/ssbt/engineering/electrical'
  },
  {
    id: 'entc',
    title: 'ENTC',
    description: 'Digital Communication, Microcontrollers, and Signal Processing studies.',
    icon: <Radio className="w-5 h-5 text-indigo-600" />,
    tag: 'Telecom',
    color: 'bg-indigo-50',
    link: '/courses/ssbt/engineering/entc'
  },
  {
    id: 'chemical',
    title: 'Chemical Engineering',
    description: 'Process Design, Thermodynamics, and Industrial Chemistry materials.',
    icon: <Beaker className="w-5 h-5 text-emerald-600" />,
    tag: 'Process',
    color: 'bg-emerald-50',
    link: '/courses/ssbt/engineering/chemical'
  }
];

const EngineeringBranchesPage = () => {
  return (
    <div className="p-6 lg:p-10 space-y-8 min-h-screen">
      {/* Header - Consistent with previous pages */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-white">Engineering Branches</h1>
          <p className="text-slate-500 text-lg max-w-xl">
            Choose your specialized branch to view the semester-wise curriculum and faculty notes.
          </p>
        </div>
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {engineeringBranches.map((branch) => (
          <Card key={branch.id} className="group border-none shadow-sm hover:shadow-md transition-all duration-300 ring-1 ring-slate-200">
            <Link href={branch.link}>
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <div className={`p-2.5 rounded-xl ${branch.color} group-hover:scale-110 transition-transform duration-300`}>
                  {branch.icon}
                </div>
                <Badge variant="outline" className="text-[10px] uppercase tracking-wider font-bold opacity-70">
                  {branch.tag}
                </Badge>
              </div>
              <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                {branch.title}
              </CardTitle>
              <CardDescription className="text-slate-500 line-clamp-2 pt-1">
                {branch.description}
              </CardDescription>
            </CardHeader>
            
            <CardFooter className="pt-2">
              <Button variant="ghost" className="w-full justify-between text-blue-600 hover:text-blue-700 hover:bg-blue-50 group/btn">
                Browse Years
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

export default EngineeringBranchesPage;