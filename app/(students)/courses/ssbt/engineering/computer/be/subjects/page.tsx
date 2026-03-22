import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  FileText, 
  Video, 
  History, 
  Download, 
  PlayCircle, 
  Clock, 
  Calendar,
  MessageCircle
} from 'lucide-react';

const CourseViewPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 lg:p-10 space-y-8">
      {/* 1. Course Header & Meta */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
          <span>Engineering</span>
          <span>/</span>
          <span>Computer</span>
          <span>/</span>
          <span className="text-gray-200">Computer Networks</span>
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight text-gray-100">
          Computer Networks & Security
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>Last updated: Jan 28, 2026</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>Total: 45 Hours</span>
          </div>
          <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-none">
            Core Subject
          </Badge>
        </div>
      </div>

      {/* 2. Teacher Info & Description */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-y py-8">
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xl font-semibold">About this course</h3>
          <p className="text-slate-600 leading-relaxed">
            This course covers the fundamentals of computer networking, focusing on the OSI and TCP/IP models. 
            Students will learn about data transmission, routing algorithms, and network security protocols 
            essential for modern software engineering.
          </p>
        </div>
        
        <div className=" p-6 rounded-2xl space-y-4 ring-1 ring-slate-100">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">Instructor</h4>
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>DR</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-bold text-white">Dr. Rajesh Patil</p>
              <p className="text-xs text-slate-500">Dept. of Computer Engineering</p>
            </div>
          </div>
          <Button variant="outline" className="w-full bg-white gap-2 shadow-sm">
            <MessageCircle className="w-4 h-4" /> Chat with Teacher
          </Button>
        </div>
      </div>

      {/* 3. The Collapsibles (Notes, Videos, PYQs) */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold mb-4">Course Content</h3>
        <Accordion type="single" collapsible className="w-full space-y-4">
          
          {/* Section 1: Notes */}
          <AccordionItem value="notes" className="border rounded-xl px-4  shadow-sm">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg"><FileText className="w-5 h-5 text-blue-600" /></div>
                <span className="font-semibold text-lg">Unit-wise Notes & PDFs</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4 space-y-2">
              <ResourceItem title="Unit 1: Introduction to OSI Model" type="PDF" size="2.4 MB" />
              <ResourceItem title="Unit 2: Physical & Data Link Layer" type="PDF" size="1.8 MB" />
              <ResourceItem title="Short Notes: Subnetting Cheat Sheet" type="DOC" size="450 KB" />
            </AccordionContent>
          </AccordionItem>

          {/* Section 2: Video Lectures */}
          <AccordionItem value="videos" className="border rounded-xl px-4  shadow-sm">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-rose-50 rounded-lg"><Video className="w-5 h-5 text-rose-600" /></div>
                <span className="font-semibold text-lg">Recorded Video Lectures</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4 space-y-2">
              <VideoItem title="Lecture 1: Intro to Networking" duration="45:20" />
              <VideoItem title="Lecture 2: Understanding IP Addressing" duration="52:10" />
              <VideoItem title="Lecture 3: Router Configurations" duration="38:15" />
            </AccordionContent>
          </AccordionItem>

          {/* Section 3: PYQs */}
          <AccordionItem value="pyqs" className="border rounded-xl px-4  shadow-sm">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-50 rounded-lg"><History className="w-5 h-5 text-amber-600" /></div>
                <span className="font-semibold text-lg">Previous Year Questions (PYQs)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4 space-y-2">
              <ResourceItem title="End-Sem Question Paper May 2025" type="PDF" size="1.2 MB" />
              <ResourceItem title="In-Sem Question Paper Oct 2024" type="PDF" size="890 KB" />
              <ResourceItem title="Most Important Questions for Viva" type="PDF" size="300 KB" />
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </div>
  );
};

// --- Small Helper Components for the List Items ---

const ResourceItem = ({ title, type, size }: { title: string, type: string, size: string }) => (
  <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group">
    <div className="flex items-center gap-3">
      <div className="text-slate-400 group-hover:text-blue-600 transition-colors"><FileText size={18} /></div>
      <div>
        <p className="text-sm font-medium text-slate-700">{title}</p>
        <p className="text-[10px] text-slate-400 uppercase font-bold">{type} • {size}</p>
      </div>
    </div>
    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-blue-600">
      <Download size={16} />
    </Button>
  </div>
);

const VideoItem = ({ title, duration }: { title: string, duration: string }) => (
  <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group">
    <div className="flex items-center gap-3">
      <div className="text-slate-400 group-hover:text-rose-600 transition-colors"><PlayCircle size={18} /></div>
      <div>
        <p className="text-sm font-medium text-slate-700">{title}</p>
        <p className="text-xs text-slate-400">{duration}</p>
      </div>
    </div>
    <Button variant="ghost" size="sm" className="text-xs text-rose-600 hover:text-rose-700 hover:bg-rose-50 font-semibold">
      Watch Now
    </Button>
  </div>
);

export default CourseViewPage;