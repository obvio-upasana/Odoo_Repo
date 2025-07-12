import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Sidebar } from "@/components/Sidebar";
import { QuestionFeed } from "@/components/QuestionFeed";

const Index = () => {
  // For demo purposes, you can change this to test different user states
  const userState = {
    isAuthenticated: false,
    userType: 'guest' as const
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        isAuthenticated={userState.isAuthenticated} 
        userType={userState.userType} 
      />
      
      {/* Hero Section - Only show for guests or on home page */}
      {!userState.isAuthenticated && <HeroSection />}
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <Sidebar userType={userState.userType} />
          <QuestionFeed />
        </div>
      </div>
    </div>
  );
};

export default Index;
