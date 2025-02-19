
import { useState } from 'react';
import Calendar from '@/components/Calendar';
import { Button } from '@/components/ui/button';
import { SignIn } from '@/components/SignIn';

const Index = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  if (!isSignedIn) {
    return <SignIn onSignIn={() => setIsSignedIn(true)} />;
  }

  return (
    <div className="min-h-screen bg-background p-2 sm:p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Calendar />
      </div>
    </div>
  );
};

export default Index;
