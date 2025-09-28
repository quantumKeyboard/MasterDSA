import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Calendar,
  Clock,
  Trophy,
  Brain,
  Zap,
  CheckCircle,
  Lightbulb
} from 'lucide-react';

export function AnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-card to-secondary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Problems</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <div className="flex items-center text-xs text-muted-foreground">
              Start solving to track progress
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-secondary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <Target className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">--</div>
            <div className="flex items-center text-xs text-muted-foreground">
              Practice to see accuracy
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-secondary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Solve Time</CardTitle>
            <Clock className="h-4 w-4 text-info" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">--</div>
            <div className="flex items-center text-xs text-muted-foreground">
              Time tracking coming soon
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-secondary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Level</CardTitle>
            <Brain className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <div className="flex items-center text-xs text-muted-foreground">
              Beginner
            </div>
            <Progress value={0} className="h-1 mt-2" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Skills Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5" />
              Skills Analysis
            </CardTitle>
            <CardDescription>Your proficiency across different DSA topics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium mb-2">Skills Assessment</p>
                <p className="text-sm">Start practicing to see your skill breakdown</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Weekly Activity
            </CardTitle>
            <CardDescription>Your practice consistency will appear here</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium mb-2">Practice Activity</p>
                <p className="text-sm">Start practicing to see your activity patterns</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            AI-Powered Insights
          </CardTitle>
          <CardDescription>Personalized recommendations for improvement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <Lightbulb className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium mb-2">AI Insights</p>
              <p className="text-sm">Practice more to receive personalized insights</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Difficulty Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Problem Difficulty Distribution</CardTitle>
          <CardDescription>Your solving pattern across different difficulty levels</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium mb-2">Difficulty Distribution</p>
              <p className="text-sm">Start solving problems to see difficulty breakdown</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}