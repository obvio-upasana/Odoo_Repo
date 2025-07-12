import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  TrendingUp, 
  Star, 
  Bookmark, 
  Users, 
  Settings,
  HelpCircle,
  Code,
  Cpu,
  Database,
  Globe,
  Smartphone,
  Gamepad2
} from "lucide-react";

interface NavigationItem {
  icon: any;
  label: string;
  active?: boolean;
  disabled?: boolean;
  count?: number;
}

interface SidebarProps {
  userType?: 'guest' | 'user' | 'admin';
}

export const Sidebar = ({ userType = 'guest' }: SidebarProps) => {
  const navigationItems: NavigationItem[] = [
    { icon: Home, label: 'Home', active: true },
    { icon: TrendingUp, label: 'Trending', count: 42 },
    { icon: Star, label: 'Featured' },
    { icon: Bookmark, label: 'Saved', disabled: userType === 'guest' },
    { icon: Users, label: 'Following', disabled: userType === 'guest' },
  ];

  const adminItems: NavigationItem[] = userType === 'admin' ? [
    { icon: Settings, label: 'Admin Panel' },
    { icon: Users, label: 'Manage Users' },
  ] : [];

  const popularTags = [
    { name: 'javascript', count: 1234, color: 'bg-yellow-500' },
    { name: 'react', count: 987, color: 'bg-blue-500' },
    { name: 'python', count: 856, color: 'bg-green-500' },
    { name: 'css', count: 743, color: 'bg-purple-500' },
    { name: 'nodejs', count: 652, color: 'bg-emerald-500' },
  ];

  const categoryIcons = [
    { icon: Code, name: 'Web Dev' },
    { icon: Smartphone, name: 'Mobile' },
    { icon: Database, name: 'Backend' },
    { icon: Cpu, name: 'AI/ML' },
    { icon: Globe, name: 'DevOps' },
    { icon: Gamepad2, name: 'Game Dev' },
  ];

  return (
    <aside className="w-80 min-h-screen bg-muted/30 border-r p-6 space-y-6">
      {/* Navigation */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-4 text-foreground">Navigation</h3>
          <nav className="space-y-2">
            {[...navigationItems, ...adminItems].map((item, index) => {
              const Icon = item.icon;
              return (
                <Button
                  key={index}
                  variant={item.active ? "default" : "ghost"}
                  className={`w-full justify-start transition-all duration-200 ${
                    item.disabled ? 'opacity-50 cursor-not-allowed' : ''
                  } ${item.active ? 'bg-gradient-primary text-primary-foreground shadow-glow' : ''}`}
                  disabled={item.disabled}
                >
                  <Icon className="mr-3 h-4 w-4" />
                  {item.label}
                  {item.count && (
                    <Badge variant="secondary" className="ml-auto">
                      {item.count}
                    </Badge>
                  )}
                </Button>
              );
            })}
          </nav>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-4 text-foreground">Categories</h3>
          <div className="grid grid-cols-2 gap-2">
            {categoryIcons.map((category, index) => {
              const Icon = category.icon;
              return (
                <Button
                  key={index}
                  variant="ghost"
                  className="flex flex-col items-center p-3 h-auto hover:bg-primary/10 hover:text-primary transition-all duration-200"
                >
                  <Icon className="h-5 w-5 mb-1" />
                  <span className="text-xs">{category.name}</span>
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-4 text-foreground">Popular Tags</h3>
          <div className="space-y-3">
            {popularTags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-all duration-200 group"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${tag.color}`} />
                  <span className="font-medium group-hover:text-primary transition-colors">
                    {tag.name}
                  </span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {tag.count}
                </Badge>
              </div>
            ))}
          </div>
          <Button variant="ghost" className="w-full mt-3 text-primary hover:bg-primary/10">
            View all tags
          </Button>
        </CardContent>
      </Card>

      {/* Help Section */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-2 mb-3">
            <HelpCircle className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground">Need Help?</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            New to StackIT? Check out our community guidelines and getting started guide.
          </p>
          <div className="space-y-2">
            <Button variant="outline" size="sm" className="w-full justify-start">
              How to ask a good question
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              Community guidelines
            </Button>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};
