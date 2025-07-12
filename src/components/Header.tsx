import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, LogIn, UserPlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  isAuthenticated?: boolean;
  userType?: 'guest' | 'user' | 'admin';
}

export const Header = ({ isAuthenticated = false, userType = 'guest' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
            <span className="text-lg font-bold text-primary-foreground">S</span>
          </div>
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            StackIT
          </span>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-lg mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search questions..."
              className="pl-10 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          {!isAuthenticated ? (
            <>
              <Button variant="ghost" size="sm">
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
              <Button variant="default" size="sm" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <UserPlus className="h-4 w-4 mr-2" />
                Sign Up
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm">
                Ask Question
              </Button>
              <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-sm font-medium text-primary-foreground">
                  {userType === 'admin' ? 'A' : 'U'}
                </span>
              </div>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <div className="container px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search questions..."
                className="pl-10 bg-muted/50 border-0"
              />
            </div>
            
            {/* Mobile Navigation */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Theme</span>
                <ThemeToggle />
              </div>
              {!isAuthenticated ? (
                <>
                  <Button variant="ghost" className="justify-start">
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                  <Button variant="default" className="justify-start bg-gradient-primary">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Sign Up
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" className="justify-start">
                    Ask Question
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    Profile
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
