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
  Clock
} from 'lucide-react';

interface Problem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  solved: boolean;
  timeComplexity?: string;
  spaceComplexity?: string;
}

const problems: Problem[] = [
  { id: '1', title: 'Two Sum', difficulty: 'Easy', category: 'Arrays', solved: true, timeComplexity: 'O(n)', spaceComplexity: 'O(n)' },
  { id: '2', title: 'Add Two Numbers', difficulty: 'Medium', category: 'Linked Lists', solved: false },
  { id: '3', title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', category: 'Strings', solved: false },
  { id: '4', title: 'Median of Two Sorted Arrays', difficulty: 'Hard', category: 'Arrays', solved: false },
  { id: '5', title: 'Reverse Integer', difficulty: 'Easy', category: 'Math', solved: true },
  { id: '6', title: 'Binary Tree Inorder Traversal', difficulty: 'Easy', category: 'Trees', solved: false },
];

const categories = [
  { name: 'Arrays', count: 45, progress: 75 },
  { name: 'Strings', count: 32, progress: 60 },
  { name: 'Linked Lists', count: 28, progress: 45 },
  { name: 'Trees', count: 38, progress: 30 },
  { name: 'Graphs', count: 25, progress: 20 },
  { name: 'Dynamic Programming', count: 42, progress: 15 },
  { name: 'Sorting', count: 18, progress: 85 },
  { name: 'Searching', count: 22, progress: 70 },
];

export function PracticePage() {
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProblems = problems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || problem.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              <Badge variant="outline">{problems.length}</Badge>
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
        {!selectedProblem ? (
          <Card>
            <CardHeader>
              <CardTitle>Problem List</CardTitle>
              <div className="flex gap-2">
                <Badge variant="outline">{filteredProblems.length} problems</Badge>
                <Badge variant="outline" className="text-success">
                  {filteredProblems.filter(p => p.solved).length} solved
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {filteredProblems.map((problem) => (
                  <div
                    key={problem.id}
                    className="flex items-center justify-between p-4 rounded-lg border hover:bg-secondary/50 transition-colors cursor-pointer"
                    onClick={() => setSelectedProblem(problem)}
                  >
                    <div className="flex items-center space-x-4">
                      {problem.solved ? (
                        <CheckCircle className="w-5 h-5 text-success" />
                      ) : (
                        <Circle className="w-5 h-5 text-muted-foreground" />
                      )}
                      <div>
                        <h3 className="font-medium">{problem.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge 
                            variant="outline" 
                            className={getDifficultyColor(problem.difficulty)}
                          >
                            {problem.difficulty}
                          </Badge>
                          <Badge variant="outline">{problem.category}</Badge>
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : (
          /* Problem Detail View */
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Button variant="ghost" onClick={() => setSelectedProblem(null)}>
                    ← Back to Problems
                  </Button>
                  <div className="flex gap-2">
                    <Badge 
                      variant="outline" 
                      className={getDifficultyColor(selectedProblem.difficulty)}
                    >
                      {selectedProblem.difficulty}
                    </Badge>
                    <Badge variant="outline">{selectedProblem.category}</Badge>
                  </div>
                </div>
                <CardTitle className="text-2xl">{selectedProblem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-invert max-w-none">
                  <p>
                    Given an array of integers <code>nums</code> and an integer <code>target</code>, 
                    return indices of the two numbers such that they add up to <code>target</code>.
                  </p>
                  <p>
                    You may assume that each input would have exactly one solution, and you may not use the same element twice.
                  </p>
                  
                  <h4>Example 1:</h4>
                  <pre className="bg-secondary p-4 rounded-lg">
                    <code>
{`Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].`}
                    </code>
                  </pre>

                  <h4>Constraints:</h4>
                  <ul>
                    <li>2 ≤ nums.length ≤ 10⁴</li>
                    <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
                    <li>-10⁹ ≤ target ≤ 10⁹</li>
                    <li>Only one valid answer exists.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Code Editor */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Code Editor</CardTitle>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Python</Button>
                      <Button size="sm" variant="outline">
                        <Play className="w-4 h-4 mr-1" />
                        Run
                      </Button>
                      <Button size="sm" className="bg-success hover:bg-success/90">
                        Submit
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-secondary/30 p-4 rounded-lg font-mono text-sm min-h-[300px]">
                    <pre className="text-foreground">
{`def twoSum(self, nums: List[int], target: int) -> List[int]:
    # Your solution here
    pass`}
                    </pre>
                  </div>
                </CardContent>
              </Card>

              {/* Analysis Panel */}
              <Card>
                <CardHeader>
                  <CardTitle>Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-info/10 border border-info/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-4 h-4 text-info" />
                      <span className="font-medium text-info">Hint</span>
                    </div>
                    <p className="text-sm">
                      Think about using a hash map to store values you've seen before.
                    </p>
                  </div>

                  {selectedProblem.solved && (
                    <div className="space-y-3">
                      <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="w-4 h-4 text-success" />
                          <span className="font-medium text-success">Solved!</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Time:</span>
                            <div className="font-mono">{selectedProblem.timeComplexity}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Space:</span>
                            <div className="font-mono">{selectedProblem.spaceComplexity}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-medium mb-2">Suggested Approach</h4>
                    <ol className="text-sm space-y-1 list-decimal list-inside text-muted-foreground">
                      <li>Create a hash map to store numbers and their indices</li>
                      <li>Iterate through the array</li>
                      <li>For each number, check if target - number exists in the map</li>
                      <li>If found, return the indices</li>
                      <li>Otherwise, add the current number to the map</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}