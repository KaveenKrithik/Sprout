import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, MapPin, Settings } from "lucide-react";

export function QuickActions() {
  return (
    <Card className="glass-card p-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Quick Actions</h3>
          <p className="text-sm text-muted-foreground">Control SPROUT operations</p>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <Button variant="default" className="flex items-center space-x-2 h-12">
            <Play className="w-4 h-4" />
            <span>Start Operation</span>
          </Button>
          
          <Button variant="secondary" className="flex items-center space-x-2 h-12">
            <Pause className="w-4 h-4" />
            <span>Pause</span>
          </Button>
          
          <Button variant="outline" className="flex items-center space-x-2 h-12">
            <RotateCcw className="w-4 h-4" />
            <span>Return Home</span>
          </Button>
          
          <Button variant="outline" className="flex items-center space-x-2 h-12">
            <MapPin className="w-4 h-4" />
            <span>Set Waypoint</span>
          </Button>
        </div>
        
        <div className="pt-2">
          <Button variant="ghost" className="w-full flex items-center space-x-2">
            <Settings className="w-4 h-4" />
            <span>Advanced Settings</span>
          </Button>
        </div>
      </div>
    </Card>
  );
}