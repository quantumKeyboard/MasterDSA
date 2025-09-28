import { useState } from 'react';
import { TabNavigation, TabType } from '@/components/TabNavigation';
import { HomePage } from '@/components/home/HomePage';
import { PracticePage } from '@/components/practice/PracticePage';
import { AnalyticsPage } from '@/components/analytics/AnalyticsPage';
import { SettingsPage } from '@/components/settings/SettingsPage';

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'practice':
        return <PracticePage />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DS</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">DSA Master</h1>
                <p className="text-sm text-muted-foreground">Level up your coding skills</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-muted-foreground">
                Level 7 • 2,400 XP
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-medium text-sm">JD</span>
              </div>
            </div>
          </div>
        </div>
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-fade-in">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Index;
