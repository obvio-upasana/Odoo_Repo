import { QuestionCard } from "./QuestionCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, SortAsc } from "lucide-react";

const mockQuestions = [
  {
    id: 1,
    title: "How to implement authentication in React with hooks?",
    content: "I'm building a React application and need to implement user authentication. I've heard about using custom hooks for this, but I'm not sure about the best practices. Should I use context API or a state management library like Redux? Also, how do I handle JWT tokens securely?",
    author: "react_dev_123",
    timestamp: "2 hours ago",
    votes: 15,
    answers: 8,
    views: 234,
    tags: ["react", "authentication", "hooks", "jwt"],
    isUpvoted: false,
    isDownvoted: false,
    isBookmarked: true
  },
  {
    id: 2,
    title: "Python vs JavaScript for backend development in 2024",
    content: "I'm starting a new project and trying to decide between Python (Django/Flask) and JavaScript (Node.js) for the backend. What are the current pros and cons of each? Which one has better job prospects and community support?",
    author: "fullstack_ninja",
    timestamp: "4 hours ago",
    votes: 42,
    answers: 15,
    views: 567,
    tags: ["python", "javascript", "backend", "nodejs", "django"],
    isUpvoted: true,
    isDownvoted: false,
    isBookmarked: false
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to use which?",
    content: "I keep getting confused about when to use CSS Grid and when to use Flexbox. Can someone explain the fundamental differences and provide some practical examples of when each is more appropriate?",
    author: "css_learner",
    timestamp: "6 hours ago",
    votes: 28,
    answers: 12,
    views: 445,
    tags: ["css", "grid", "flexbox", "layout"],
    isUpvoted: false,
    isDownvoted: false,
    isBookmarked: false
  },
  {
    id: 4,
    title: "Best practices for API design and documentation",
    content: "I'm designing a REST API for a mobile app and want to ensure it follows best practices. What are the current standards for API design, versioning, and documentation? Should I use OpenAPI/Swagger?",
    author: "api_architect",
    timestamp: "8 hours ago",
    votes: 19,
    answers: 6,
    views: 312,
    tags: ["api", "rest", "documentation", "swagger"],
    isUpvoted: false,
    isDownvoted: false,
    isBookmarked: true
  },
  {
    id: 5,
    title: "Docker containerization for beginners - step by step guide",
    content: "I'm new to Docker and containerization. Can someone provide a beginner-friendly explanation of Docker concepts and a step-by-step guide to containerize a simple web application?",
    author: "devops_newbie",
    timestamp: "12 hours ago",
    votes: 33,
    answers: 9,
    views: 678,
    tags: ["docker", "containerization", "devops", "deployment"],
    isUpvoted: false,
    isDownvoted: false,
    isBookmarked: false
  }
];

export const QuestionFeed = () => {
  return (
    <div className="flex-1 space-y-6">
      {/* Feed Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Latest Questions</h2>
          <p className="text-muted-foreground">Fresh questions from the community</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Select defaultValue="newest">
            <SelectTrigger className="w-40">
              <SortAsc className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="votes">Most Voted</SelectItem>
              <SelectItem value="answers">Most Answered</SelectItem>
              <SelectItem value="views">Most Viewed</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {mockQuestions.map((question) => (
          <QuestionCard
            key={question.id}
            title={question.title}
            content={question.content}
            author={question.author}
            timestamp={question.timestamp}
            votes={question.votes}
            answers={question.answers}
            views={question.views}
            tags={question.tags}
            isUpvoted={question.isUpvoted}
            isDownvoted={question.isDownvoted}
            isBookmarked={question.isBookmarked}
          />
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center pt-8">
        <Button variant="outline" size="lg" className="px-8">
          Load More Questions
        </Button>
      </div>
    </div>
  );
};
