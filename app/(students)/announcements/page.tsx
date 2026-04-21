import React from 'react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bell, Calendar, Megaphone, Info } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: 'Update',
    title: 'New Notes Uploaded',
    desc: 'Unit 3 notes for Computer Networks are now available.',
    time: '10m ago',
    icon: <Info className="w-4 h-4 text-blue-500" />,
    color: 'border-l-blue-500'
  },
  {
    id: 2,
    type: 'Event',
    title: 'DevOps Workshop',
    desc: 'Register for the upcoming hands-on workshop this Saturday.',
    time: '2h ago',
    icon: <Megaphone className="w-4 h-4 text-purple-500" />,
    color: 'border-l-purple-500'
  },
  {
    id: 3,
    type: 'Deadline',
    title: 'Submission Reminder',
    desc: 'DBMS Micro-project submission deadline is tomorrow.',
    time: '5h ago',
    icon: <Calendar className="w-4 h-4 text-rose-500" />,
    color: 'border-l-rose-500'
  }
];

export default function AnnouncementFeed() {
  return (
    <Card className="border-none shadow-sm ring-1 ring-slate-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-slate-500" />
          <CardTitle className="text-lg font-bold">Announcements</CardTitle>
        </div>
        <button className="text-xs font-medium text-blue-600 hover:underline">
          Mark all as read
        </button>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[400px] px-4 pb-4">
          <div className="space-y-3">
            {notifications.map((note) => (
              <div 
                key={note.id} 
                className={`p-3  border border-slate-100 rounded-lg border-l-4 ${note.color} hover:bg-slate-25 transition-colors cursor-pointer`}
              >
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center gap-2">
                    {note.icon}
                    <span className="text-sm font-semibold text-white">{note.title}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">
                    {note.time}
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed pl-6">
                  {note.desc}
                </p>
                <div className="pl-6 mt-2">
                  <Badge variant="secondary" className="text-[9px] px-1.5 py-0 uppercase tracking-tighter">
                    {note.type}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}