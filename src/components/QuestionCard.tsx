import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowUp, 
  ArrowDown, 
  MessageSquare, 
  Share, 
  Bookmark, 
  MoreHorizontal,
  Clock,
  User
} from "lucide-react";

interface QuestionCardProps {
  title: string;
  content: string;
  author: string;
  timestamp: string;
  votes: number;
  answers: number;
  views: number;
  tags: string[];
  isUpvoted?: boolean;
  isDownvoted?: boolean;
  isBookmarked?: boolean;
}

export const QuestionCard = ({
  title,
  content,
  author,
  timestamp,
  votes,
  answers,
  views,
  tags,
  isUpvoted = false,
  isDownvoted = false,
  isBookmarked = false
}: QuestionCardProps) => {
  const [currentVotes, setCurrentVotes] = useState(votes);
  const [upvoted, setUpvoted] = useState(isUpvoted);
  const [downvoted, setDownvoted] = useState(isDownvoted);
  const [bookmarked, setBookmarked] = useState(isBookmarked);

  const handleUpvote = () => {
    if (upvoted) {
      setCurrentVotes(prev => prev - 1);
      setUpvoted(false);
    } else {
      setCurrentVotes(prev => prev + (downvoted ? 2 : 1));
      setUpvoted(true);
      setDownvoted(false);
    }
  };

  const handleDownvote = () => {
    if (downvoted) {
      setCurrentVotes(prev => prev + 1);
      setDownvoted(false);
    } else {
      setCurrentVotes(prev => prev - (upvoted ? 2 : 1));
      setDownvoted(true);
      setUpvoted(false);
    }
  };

  return (
    <Card className="group hover:shadow-hover transition-all duration-300 bg-gradient-card border-0">
      <CardContent className="p-6">
        <div className="flex gap-4">
          {/* Vote Section */}
          <div className="flex flex-col items-center space-y-2 min-w-[60px]">
            <Button
              variant="ghost"
              size="sm"
              className={`p-2 hover:bg-vote-hover transition-all duration-200 ${
                upvoted ? 'text-upvote hover:text-upvote' : 'text-muted-foreground'
              }`}
              onClick={handleUpvote}
            >
              <ArrowUp className={`h-5 w-5 ${upvoted ? 'animate-vote-bounce' : ''}`} />
            </Button>
            
            <span className={`text-lg font-semibold transition-colors duration-200 ${
              upvoted ? 'text-upvote' : downvoted ? 'text-downvote' : 'text-foreground'
            }`}>
              {currentVotes}
            </span>
            
            <Button
              variant="ghost"
              size="sm"
              className={`p-2 hover:bg-vote-hover transition-all duration-200 ${
                downvoted ? 'text-downvote hover:text-downvote' : 'text-muted-foreground'
              }`}
              onClick={handleDownvote}
            >
              <ArrowDown className={`h-5 w-5 ${downvoted ? 'animate-vote-bounce' : ''}`} />
            </Button>
          </div>

          {/* Content Section */}
          <div className="flex-1 space-y-3">
            {/* Title */}
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200 cursor-pointer">
              {title}
            </h3>

            {/* Content Preview */}
            <p className="text-muted-foreground leading-relaxed line-clamp-3">
              {content}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Stats and Actions */}
            <div className="flex items-center justify-between pt-2">
              {/* Stats */}
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>{answers} answers</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>{views} views</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`p-2 transition-all duration-200 ${
                    bookmarked ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setBookmarked(!bookmarked)}
                >
                  <Bookmark className={`h-4 w-4 ${bookmarked ? 'fill-current' : ''}`} />
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Share className="h-4 w-4" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Author and Timestamp */}
            <div className="flex items-center justify-between pt-2 border-t">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>Asked by <span className="font-medium text-foreground">{author}</span></span>
              </div>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{timestamp}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
