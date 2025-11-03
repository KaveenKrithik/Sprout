import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sprout, Tractor, Wheat } from "lucide-react";

const operations = [
  {
    id: 1,
    type: "seeding",
    area: "Field A-1",
    status: "completed",
    time: "2 hours ago",
    details: "Corn seeds planted in 12.5 acres",
    icon: Sprout
  },
  {
    id: 2,
    type: "ploughing",
    area: "Field B-2",
    status: "in-progress",
    time: "30 minutes ago",
    details: "Deep tillage operation ongoing",
    icon: Tractor
  },
  {
    id: 3,
    type: "harvesting",
    area: "Field C-3",
    status: "scheduled",
    time: "In 4 hours",
    details: "Wheat harvest scheduled for optimal moisture",
    icon: Wheat
  },
  {
    id: 4,
    type: "seeding",
    area: "Field A-2",
    status: "completed",
    time: "6 hours ago",
    details: "Soybean seeds planted in 8.2 acres",
    icon: Sprout
  }
];

export function OperationsLog() {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case "completed":
        return { label: "Completed", className: "status-online" };
      case "in-progress":
        return { label: "In Progress", className: "status-warning" };
      case "scheduled":
        return { label: "Scheduled", className: "bg-accent text-accent-foreground" };
      default:
        return { label: "Unknown", className: "bg-muted text-muted-foreground" };
    }
  };

  return (
    <Card className="glass-card p-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Recent Operations</h3>
          <p className="text-sm text-muted-foreground">Latest SPROUT activities</p>
        </div>
        
        <div className="space-y-4">
          {operations.map((operation) => {
            const statusConfig = getStatusConfig(operation.status);
            const IconComponent = operation.icon;
            
            return (
              <div key={operation.id} className="flex items-start space-x-4 p-4 rounded-lg bg-muted/20 smooth-transition hover:bg-muted/30">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <IconComponent className="w-4 h-4" />
                </div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-foreground capitalize">{operation.type}</h4>
                    <Badge className={statusConfig.className}>
                      {statusConfig.label}
                    </Badge>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-accent">{operation.area}</p>
                    <p className="text-sm text-muted-foreground">{operation.details}</p>
                    <p className="text-xs text-muted-foreground">{operation.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}