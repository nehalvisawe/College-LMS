import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Megaphone, Calendar, Bell } from 'lucide-react';

// Mock data structure - this would eventually come from your MongoDB 'Announcements' collection
const announcements = [
  {
    id: 1,
    title: "End Semester Exam Schedule Out",
    content: "The timetable for the May 2026 End-Sem examinations has been uploaded to the official portal. Please check your respective department sections.",
    sender: { name: "Exam Cell", image: "" },
    date: "2 hours ago",
    type: "Exam",
    priority: "high"
  },
  
];

const AnnouncementSection = () => {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-50 rounded-lg text-gray-600">
            <Bell size={20} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Announcements</h2>
            <p className="text-sm text-slate-500">Stay updated with the latest college news</p>
          </div>
        </div>
        <Badge variant="outline" className="text-slate-500 font-normal">
          {announcements.length} Updates
        </Badge>
      </div>

      {/* Announcements List */}
      <div className="grid gap-4">
        {announcements.map((item) => (
          <Card key={item.id} className="border-none shadow-sm ring-1 ring-slate-200 hover:ring-blue-200 transition-all">
            <CardHeader className="p-4 pb-2">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9 border">
                    <AvatarImage src={item.sender.image} />
                    <AvatarFallback className="bg-slate-100 text-xs font-bold text-slate-600">
                      {item.sender.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base font-semibold leading-none mb-1">
                      {item.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="font-medium text-slate-600">{item.sender.name}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        {item.date}
                      </div>
                    </div>
                  </div>
                </div>
                <Badge 
                  variant="secondary" 
                  className={`text-[10px] uppercase tracking-wider ${
                    item.type === 'Exam' ? 'bg-red-50 text-red-700' : 
                    item.type === 'Event' ? 'bg-blue-50 text-blue-700' : 
                    'bg-slate-100 text-slate-600'
                  }`}
                >
                  {item.type}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.content}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <button className="w-full py-3 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors bg-slate-50 rounded-lg border border-dashed border-slate-300">
        View Past Announcements
      </button>
    </div>
  );
};

export default AnnouncementSection;