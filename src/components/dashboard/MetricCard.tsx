
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  gradient?: boolean;
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon, 
  gradient = false 
}: MetricCardProps) {
  const changeColor = {
    positive: "text-success",
    negative: "text-destructive",
    neutral: "text-muted-foreground"
  }[changeType];

  return (
    <Card className={`transition-all duration-200 hover:shadow-lg ${
      gradient ? 'gradient-primary text-white border-0' : 'hover:scale-105'
    }`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className={`text-sm font-medium ${
          gradient ? 'text-white/90' : 'text-muted-foreground'
        }`}>
          {title}
        </CardTitle>
        <Icon className={`h-4 w-4 ${
          gradient ? 'text-white/80' : 'text-muted-foreground'
        }`} />
      </CardHeader>
      <CardContent>
        <div className={`text-2xl font-bold ${
          gradient ? 'text-white' : 'text-foreground'
        }`}>
          {value}
        </div>
        <p className={`text-xs ${
          gradient ? 'text-white/70' : changeColor
        }`}>
          {change}
        </p>
      </CardContent>
    </Card>
  );
}
