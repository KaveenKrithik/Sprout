import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricsCardProps {
  title: string;
  value: string | number;
  change?: string;
  trend?: "up" | "down" | "neutral";
  icon?: React.ReactNode;
  className?: string;
  suffix?: string;
}

export function MetricsCard({ 
  title, 
  value, 
  change, 
  trend, 
  icon, 
  className,
  suffix 
}: MetricsCardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case "up": return "text-success";
      case "down": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  return (
    <Card className={cn("glass-card p-6 smooth-transition hover:shadow-lg", className)}>
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="flex items-baseline space-x-2">
            <p className="text-2xl font-bold text-foreground">
              {value}
              {suffix && <span className="text-lg text-muted-foreground ml-1">{suffix}</span>}
            </p>
            {change && (
              <span className={cn("text-xs font-medium", getTrendColor())}>
                {change}
              </span>
            )}
          </div>
        </div>
        {icon && (
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
}