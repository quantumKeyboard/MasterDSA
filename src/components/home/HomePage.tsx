import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Trophy, Target, Clock, TrendingUp, Play, BookOpen } from 'lucide-react';

export function HomePage() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-primary rounded-lg p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Developer! 👨‍💻</h1>
        <p className="text-blue-100 mb-6">Ready to level up your DSA skills today?</p>
        <div className="flex gap-4">
          <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
            <Play className="w-4 h-4 mr-2" />
            Continue Practice
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
            <Trophy className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">+12 this week</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-secondary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
            <Target className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15 days</div>
            <p className="text-xs text-muted-foreground">Personal best!</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-secondary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time Practiced</CardTitle>
            <Clock className="h-4 w-4 text-info" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24h 30m</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-secondary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Skill Level</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Intermediate</div>
            <p className="text-xs text-muted-foreground">Level 7</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Progress Section */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Progress</CardTitle>
            <CardDescription>Keep up the momentum!</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Daily Goal</span>
                <span>3/5 problems</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Arrays & Strings</span>
                <span>85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Trees & Graphs</span>
                <span>45%</span>
              </div>
              <Progress value={45} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Dynamic Programming</span>
                <span>20%</span>
              </div>
              <Progress value={20} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Continue Where You Left Off</CardTitle>
            <CardDescription>Pick up from your last session</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium">Two Sum</p>
                <p className="text-sm text-muted-foreground">Arrays • Easy • Solved</p>
              </div>
              <Button size="sm" variant="ghost">Review</Button>
            </div>
            
            <div className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer">
              <div className="w-2 h-2 bg-warning rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium">Binary Tree Inorder Traversal</p>
                <p className="text-sm text-muted-foreground">Trees • Medium • In Progress</p>
              </div>
              <Button size="sm" variant="ghost">Continue</Button>
            </div>
            
            <div className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer">
              <div className="w-2 h-2 bg-muted rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium">Longest Palindromic Substring</p>
                <p className="text-sm text-muted-foreground">Strings • Hard • Not Started</p>
              </div>
              <Button size="sm" variant="ghost">Start</Button>
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
              <BookOpen className="w-6 h-6 mb-2 text-primary" />
              <div className="text-left">
                <div className="font-medium">Random Problem</div>
                <div className="text-sm text-muted-foreground">Challenge yourself</div>
              </div>
            </Button>
            
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Target className="w-6 h-6 mb-2 text-success" />
              <div className="text-left">
                <div className="font-medium">Focus on Weak Areas</div>
                <div className="text-sm text-muted-foreground">Improve your skills</div>
              </div>
            </Button>
            
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Trophy className="w-6 h-6 mb-2 text-warning" />
              <div className="text-left">
                <div className="font-medium">Daily Challenge</div>
                <div className="text-sm text-muted-foreground">Earn bonus XP</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}