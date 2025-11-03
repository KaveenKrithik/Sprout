import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatusCardProps {
  title: string;
  status: "online" | "offline" | "warning" | "maintenance";
  lastUpdate?: string;
  details?: string[];
  className?: string;
}

export function StatusCard({ title, status, lastUpdate, details, className }: StatusCardProps) {
  const getStatusConfig = () => {
    switch (status) {
      case "online":
        return { label: "Online", className: "status-online" };
      case "warning":
        return { label: "Warning", className: "status-warning" };
      case "offline":
        return { label: "Offline", className: "status-offline" };
      case "maintenance":
        return { label: "Maintenance", className: "bg-accent text-accent-foreground" };
      default:
        return { label: "Unknown", className: "bg-muted text-muted-foreground" };
    }
  };

  const statusConfig = getStatusConfig();

  return (
    <Card className={cn("glass-card p-6 smooth-transition", className)}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-foreground">{title}</h3>
          <Badge className={statusConfig.className}>
            <div className="w-2 h-2 bg-current rounded-full mr-2 animate-pulse" />
            {statusConfig.label}
          </Badge>
        </div>
        
        {lastUpdate && (
          <p className="text-sm text-muted-foreground">
            Last update: {lastUpdate}
          </p>
        )}
        
        {details && details.length > 0 && (
          <div className="space-y-2">
            {details.map((detail, index) => (
              <div key={index} className="flex items-center text-sm">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                <span className="text-muted-foreground">{detail}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}