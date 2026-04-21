import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Wrench } from "lucide-react";

export default function UnderMaintenance() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background">
      <div className="max-w-md w-full text-center space-y-6">

        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center border">
            <Wrench className="w-9 h-9 text-muted-foreground" />
          </div>
        </div>

        <div className="flex justify-center">
          <Badge variant="outline" className="text-yellow-600 border-yellow-300 bg-yellow-50 dark:bg-yellow-950 dark:text-yellow-400 dark:border-yellow-800 gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 inline-block" />
            Scheduled maintenance
          </Badge>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-medium tracking-tight">We'll be right back</h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            Our team is performing scheduled maintenance to improve your experience.
            We expect to be back online shortly.
          </p>
        </div>

        <Card>
          <CardHeader className="pb-2 pt-4 px-5">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
              Estimated timeline
            </p>
          </CardHeader>
          <CardContent className="px-5 pb-5 space-y-3">
            <TimelineItem
              status="done"
              label="Maintenance started"
              time="2:00 PM UTC"
            />
            <Separator />
            <TimelineItem
              status="active"
              label="In progress"
              time="Now"
              bold
            />
            <Separator />
            <TimelineItem
              status="pending"
              label="Back online"
              time="~4:00 PM UTC"
            />
          </CardContent>
        </Card>

        <div className="flex gap-3 justify-center flex-wrap">
          <Button variant="outline" asChild>
            <a href="/status">Check status page</a>
          </Button>
          <Button variant="outline">
            Notify me when back
          </Button>
        </div>

      </div>
    </div>
  );
}

function TimelineItem({
  status,
  label,
  time,
  bold = false,
}: {
  status: "done" | "active" | "pending";
  label: string;
  time: string;
  bold?: boolean;
}) {
  const dotClass = {
    done: "bg-green-100 border-green-500 dark:bg-green-900 dark:border-green-400",
    active: "bg-yellow-100 border-yellow-500 dark:bg-yellow-900 dark:border-yellow-400",
    pending: "bg-muted border-border",
  }[status];

  return (
    <div className="flex items-center gap-3">
      <span className={`w-2.5 h-2.5 rounded-full border-2 shrink-0 ${dotClass}`} />
      <span className={`text-sm flex-1 text-left ${bold ? "font-medium text-foreground" : "text-muted-foreground"}`}>
        {label}
      </span>
      <span className="text-xs text-muted-foreground">{time}</span>
    </div>
  );
}