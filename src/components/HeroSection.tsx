import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, Zap, Users, Trophy } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-24 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Stack
              <span className="relative">
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  IT
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 to-orange-300 animate-glow rounded-full" />
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100 sm:text-2xl">
              Where developers come to learn, share knowledge, and build their careers.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mx-auto mb-10 max-w-2xl">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search for questions, topics, or tags..."
                className="h-14 pl-12 pr-32 text-lg bg-white/90 backdrop-blur border-0 focus-visible:ring-2 focus-visible:ring-white/50 shadow-xl"
              />
              <Button 
                size="lg" 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                Search
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:shadow-hover transition-all duration-300 px-8"
            >
              <Zap className="mr-2 h-5 w-5" />
              Ask Your First Question
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur px-8"
            >
              Browse Questions
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="group cursor-pointer">
              <div className="rounded-lg bg-white/10 backdrop-blur p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105">
                <div className="flex items-center justify-center mb-3">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-blue-200">Active Developers</div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="rounded-lg bg-white/10 backdrop-blur p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105">
                <div className="flex items-center justify-center mb-3">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white">1M+</div>
                <div className="text-blue-200">Questions Asked</div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="rounded-lg bg-white/10 backdrop-blur p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105">
                <div className="flex items-center justify-center mb-3">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-blue-200">Questions Answered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 animate-float">
        <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur" />
      </div>
      <div className="absolute top-40 right-32 animate-float" style={{animationDelay: '1s'}}>
        <div className="h-12 w-12 rounded-full bg-yellow-300/30 backdrop-blur" />
      </div>
      <div className="absolute bottom-32 left-1/4 animate-float" style={{animationDelay: '2s'}}>
        <div className="h-20 w-20 rounded-full bg-orange-300/20 backdrop-blur" />
      </div>
    </section>
  );
};
