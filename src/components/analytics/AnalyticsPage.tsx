import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Calendar,
  Clock,
  Trophy,
  Brain,
  Zap
} from 'lucide-react';

export function AnalyticsPage() {
  const skillsData = [
    { skill: 'Arrays & Strings', proficiency: 85, problems: 42, recentGrowth: 12 },
    { skill: 'Trees & Graphs', proficiency: 65, problems: 28, recentGrowth: 8 },
    { skill: 'Dynamic Programming', proficiency: 45, problems: 18, recentGrowth: 15 },
    { skill: 'Sorting & Searching', proficiency: 78, problems: 35, recentGrowth: 5 },
    { skill: 'Linked Lists', proficiency: 72, problems: 25, recentGrowth: 7 },
    { skill: 'Hash Tables', proficiency: 88, problems: 30, recentGrowth: 3 },
  ];

  const weeklyData = [
    { day: 'Mon', problems: 3, time: 45 },
    { day: 'Tue', problems: 2, time: 30 },
    { day: 'Wed', problems: 4, time: 65 },
    { day: 'Thu', problems: 1, time: 20 },
    { day: 'Fri', problems: 5, time: 80 },
    { day: 'Sat', problems: 3, time: 50 },
    { day: 'Sun', problems: 2, time: 35 },
  ];

  return (
    <div className="space-y-8">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-card to-secondary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Problems</CardTitle>
            <Trophy className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="w-3 h-3 mr-1 text-success" />
              +18 this month
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-secondary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <Target className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="w-3 h-3 mr-1 text-success" />
              +5% improvement
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-secondary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Solve Time</CardTitle>
            <Clock className="h-4 w-4 text-info" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24m</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="w-3 h-3 mr-1 text-success" />
              -3m faster
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-secondary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Level</CardTitle>
            <Brain className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <div className="flex items-center text-xs text-muted-foreground">
              2,400 / 3,000 XP
            </div>
            <Progress value={80} className="h-1 mt-2" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Skills Radar */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5" />
              Skills Analysis
            </CardTitle>
            <CardDescription>Your proficiency across different DSA topics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {skillsData.map((skill) => (
              <div key={skill.skill} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.skill}</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {skill.problems} solved
                    </Badge>
                    <span className="text-sm font-medium">{skill.proficiency}%</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={skill.proficiency} className="flex-1 h-2" />
                  {skill.recentGrowth > 0 && (
                    <Badge variant="outline" className="text-xs text-success">
                      +{skill.recentGrowth}%
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Weekly Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Weekly Activity
            </CardTitle>
            <CardDescription>Your practice consistency this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weeklyData.map((day) => (
                <div key={day.day} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                  <div className="flex items-center gap-3">
                    <span className="font-medium w-8">{day.day}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{day.problems} problems</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {day.time}m
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gradient-primary rounded-lg text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Weekly Goal Progress</p>
                  <p className="text-sm text-blue-100">20/25 problems completed</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">80%</p>
                  <Progress value={80} className="w-24 h-2 mt-1" />
                </div>
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
            Performance Insights
          </CardTitle>
          <CardDescription>AI-powered recommendations for improvement</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-warning" />
                <span className="font-medium text-warning">Focus Area</span>
              </div>
              <p className="text-sm">
                Your Dynamic Programming skills need attention. Consider practicing 
                more problems in this area to improve your overall performance.
              </p>
            </div>

            <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-4 h-4 text-success" />
                <span className="font-medium text-success">Strength</span>
              </div>
              <p className="text-sm">
                Excellent work on Hash Tables! You're solving problems 15% faster 
                than average in this category.
              </p>
            </div>

            <div className="p-4 bg-info/10 border border-info/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="w-4 h-4 text-info" />
                <span className="font-medium text-info">Recommendation</span>
              </div>
              <p className="text-sm">
                Try solving 2-3 medium difficulty tree problems this week to 
                boost your confidence in graph algorithms.
              </p>
            </div>

            <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="font-medium text-primary">Progress</span>
              </div>
              <p className="text-sm">
                You're on track to reach Level 8 next week! Keep up the 
                consistent practice routine.
              </p>
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
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-success rounded-sm"></div>
                <span>Easy</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">128 solved</span>
                <div className="w-32">
                  <Progress value={85} className="h-2" />
                </div>
                <span className="text-sm font-medium">85%</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-warning rounded-sm"></div>
                <span>Medium</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">89 solved</span>
                <div className="w-32">
                  <Progress value={65} className="h-2" />
                </div>
                <span className="text-sm font-medium">65%</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-destructive rounded-sm"></div>
                <span>Hard</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">30 solved</span>
                <div className="w-32">
                  <Progress value={35} className="h-2" />
                </div>
                <span className="text-sm font-medium">35%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}