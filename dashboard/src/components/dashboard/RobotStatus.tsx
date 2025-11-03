import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Battery, Wifi, Thermometer, Gauge } from "lucide-react";

export function RobotStatus() {
  return (
    <Card className="glass-card p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-foreground">SPROUT Status</h2>
            <p className="text-sm text-muted-foreground">Real-time robot diagnostics</p>
          </div>
          <Badge className="status-online">
            <div className="w-2 h-2 bg-current rounded-full mr-2 animate-pulse" />
            Active
          </Badge>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {/* Battery Level */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Battery className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Battery</span>
            </div>
            <div className="space-y-2">
              <Progress value={87} className="h-2" />
              <p className="text-sm text-muted-foreground">87% - 4h 23m remaining</p>
            </div>
          </div>
          
          {/* Signal Strength */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Wifi className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Signal</span>
            </div>
            <div className="space-y-2">
              <Progress value={95} className="h-2" />
              <p className="text-sm text-muted-foreground">Excellent connection</p>
            </div>
          </div>
          
          {/* Temperature */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Thermometer className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Engine Temp</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-foreground">72°C</span>
                <Badge className="bg-success text-success-foreground">Optimal</Badge>
              </div>
            </div>
          </div>
          
          {/* Speed */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Gauge className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Speed</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-foreground">8.5 km/h</span>
                <Badge className="bg-accent text-accent-foreground">Cruising</Badge>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-4 border-t border-border">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-primary">12.4</p>
              <p className="text-xs text-muted-foreground">Hours Today</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">847</p>
              <p className="text-xs text-muted-foreground">Acres Covered</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">99.2%</p>
              <p className="text-xs text-muted-foreground">Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}