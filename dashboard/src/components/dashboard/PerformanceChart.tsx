import { Card } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const performanceData = [
  { time: '00:00', efficiency: 85, coverage: 75 },
  { time: '04:00', efficiency: 88, coverage: 82 },
  { time: '08:00', efficiency: 92, coverage: 89 },
  { time: '12:00', efficiency: 89, coverage: 85 },
  { time: '16:00', efficiency: 94, coverage: 91 },
  { time: '20:00', efficiency: 87, coverage: 88 },
  { time: '24:00', efficiency: 90, coverage: 86 },
];

export function PerformanceChart() {
  return (
    <Card className="glass-card p-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Performance Analytics</h3>
          <p className="text-sm text-muted-foreground">24-hour operational efficiency</p>
        </div>
        
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={performanceData}>
              <defs>
                <linearGradient id="efficiency" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="coverage" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="time" 
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                axisLine={{ stroke: 'hsl(var(--border))' }}
              />
              <YAxis 
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                axisLine={{ stroke: 'hsl(var(--border))' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  color: 'hsl(var(--card-foreground))'
                }}
              />
              <Area
                type="monotone"
                dataKey="efficiency"
                stroke="hsl(var(--primary))"
                fillOpacity={1}
                fill="url(#efficiency)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="coverage"
                stroke="hsl(var(--accent))"
                fillOpacity={1}
                fill="url(#coverage)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex justify-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full" />
            <span className="text-sm text-muted-foreground">Efficiency %</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-accent rounded-full" />
            <span className="text-sm text-muted-foreground">Field Coverage %</span>
          </div>
        </div>
      </div>
    </Card>
  );
}