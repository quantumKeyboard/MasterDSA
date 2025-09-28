import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Trophy, Target, Clock, TrendingUp, Play, BookOpen, Code, CheckCircle, Flame } from 'lucide-react';

export function HomePage() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-primary rounded-lg p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome to DSA Practice! 👨‍💻</h1>
        <p className="text-blue-100 mb-6">Start your data structures and algorithms journey today</p>
        <div className="flex gap-4">
          <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
            <Play className="w-4 h-4 mr-2" />
            Start Practice
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
            <Target className="w-4 h-4 mr-2" />
            Set Daily Goal
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-card to-secondary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Problems Solved</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">Start solving to track progress</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-secondary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
            <Flame className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0 days</div>
            <p className="text-xs text-muted-foreground">Build your streak!</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-secondary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time Practiced</CardTitle>
            <Clock className="h-4 w-4 text-info" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0h</div>
            <p className="text-xs text-muted-foreground">Begin your journey</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-secondary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Skill Level</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Beginner</div>
            <p className="text-xs text-muted-foreground">Level 1</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Progress Section */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Progress</CardTitle>
            <CardDescription>Set your daily goals and track progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center text-muted-foreground py-8">
              <Target className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Set up your daily goals to start tracking progress</p>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Continue Where You Left Off</CardTitle>
            <CardDescription>Your recent practice sessions will appear here</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center text-muted-foreground py-8">
              <BookOpen className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Start solving problems to see your recent activity</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Start</CardTitle>
          <CardDescription>Jump into practice with these recommended topics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Code className="w-6 h-6 mb-2 text-primary" />
              <div className="text-left">
                <div className="font-medium">Start with Arrays</div>
                <div className="text-sm text-muted-foreground">Foundation concepts</div>
              </div>
            </Button>
            
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Target className="w-6 h-6 mb-2 text-success" />
              <div className="text-left">
                <div className="font-medium">Random Problem</div>
                <div className="text-sm text-muted-foreground">Challenge yourself</div>
              </div>
            </Button>
            
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Trophy className="w-6 h-6 mb-2 text-warning" />
              <div className="text-left">
                <div className="font-medium">Daily Challenge</div>
                <div className="text-sm text-muted-foreground">Coming soon</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}