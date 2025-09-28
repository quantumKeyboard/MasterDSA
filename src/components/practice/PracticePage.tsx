import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Filter, 
  ChevronRight, 
  Play, 
  BookOpen, 
  Timer,
  CheckCircle,
  Circle,
  Clock,
  Code
} from 'lucide-react';

const categories = [
  { name: 'Arrays', count: 45, progress: 0 },
  { name: 'Strings', count: 32, progress: 0 },
  { name: 'Linked Lists', count: 28, progress: 0 },
  { name: 'Trees', count: 38, progress: 0 },
  { name: 'Graphs', count: 25, progress: 0 },
  { name: 'Dynamic Programming', count: 42, progress: 0 },
  { name: 'Sorting', count: 18, progress: 0 },
  { name: 'Searching', count: 22, progress: 0 },
];

export function PracticePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-success/20 text-success';
      case 'Medium': return 'bg-warning/20 text-warning';
      case 'Hard': return 'bg-destructive/20 text-destructive';
      default: return 'bg-muted/20 text-muted-foreground';
    }
  };

  return (
    <div className="flex h-[calc(100vh-120px)] gap-6">
      {/* Sidebar */}
      <div className="w-80 space-y-6 overflow-y-auto">
        {/* Search */}
        <Card>
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search problems..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Categories */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Topics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button
              variant={selectedCategory === null ? "secondary" : "ghost"}
              className="w-full justify-between"
              onClick={() => setSelectedCategory(null)}
            >
              All Topics
              <Badge variant="outline">0</Badge>
            </Button>
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "secondary" : "ghost"}
                className="w-full justify-between"
                onClick={() => setSelectedCategory(category.name)}
              >
                <span>{category.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{category.progress}%</span>
                  <Badge variant="outline">{category.count}</Badge>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Difficulty Filter */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Difficulty</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {['Easy', 'Medium', 'Hard'].map((difficulty) => (
              <Button key={difficulty} variant="ghost" className="w-full justify-start">
                <div className={`w-3 h-3 rounded-full mr-3 ${getDifficultyColor(difficulty).split(' ')[0]}`}></div>
                {difficulty}
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-6">
        <Card>
          <CardContent className="p-8">
            <div className="text-center text-muted-foreground py-12">
              <Code className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-medium mb-2">Welcome to DSA Practice</h3>
              <p className="text-sm mb-6">Choose a topic from the sidebar to start your coding journey</p>
              <div className="space-y-2">
                <p className="text-xs">Problems database will be available soon</p>
                <p className="text-xs">Start with Arrays to learn fundamental concepts</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}