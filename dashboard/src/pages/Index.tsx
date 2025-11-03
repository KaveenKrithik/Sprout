import { MetricsCard } from "@/components/dashboard/MetricsCard";
import { StatusCard } from "@/components/dashboard/StatusCard";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";
import { OperationsLog } from "@/components/dashboard/OperationsLog";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RobotStatus } from "@/components/dashboard/RobotStatus";
import { Sprout, Activity, Zap, Clock, MapPin, TrendingUp } from "lucide-react";
import sproutHero from "@/assets/sprout-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <div className="relative h-64 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${sproutHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-4">
              <div className="p-4 rounded-2xl gradient-primary">
                <Sprout className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-5xl font-bold text-foreground">SPROUT</h1>
            </div>
            <p className="text-xl text-muted-foreground">Agricultural Robotics Dashboard</p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-muted-foreground">System Online</span>
              </div>
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Field A-1 Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Key Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricsCard
            title="Total Coverage"
            value="847.2"
            suffix="acres"
            change="+12.3%"
            trend="up"
            icon={<MapPin className="w-5 h-5" />}
          />
          <MetricsCard
            title="Efficiency Rate"
            value="94"
            suffix="%"
            change="+2.1%"
            trend="up"
            icon={<TrendingUp className="w-5 h-5" />}
          />
          <MetricsCard
            title="Active Time"
            value="12.4"
            suffix="hrs"
            change="Today"
            trend="neutral"
            icon={<Clock className="w-5 h-5" />}
          />
          <MetricsCard
            title="Energy Usage"
            value="87"
            suffix="kWh"
            change="-8.2%"
            trend="down"
            icon={<Zap className="w-5 h-5" />}
          />
        </div>

        {/* Status and Controls Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RobotStatus />
          </div>
          <QuickActions />
        </div>

        {/* Analytics and Operations */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <PerformanceChart />
          </div>
          <div className="space-y-6">
            <StatusCard
              title="System Health"
              status="online"
              lastUpdate="2 minutes ago"
              details={[
                "All sensors operational",
                "GPS signal strong",
                "Weather conditions optimal"
              ]}
            />
          </div>
        </div>

        {/* Operations Log */}
        <OperationsLog />
      </div>
    </div>
  );
};

export default Index;
