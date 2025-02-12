
import { Button } from "@/components/ui/button";

export const SignIn = ({ onSignIn }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-foreground">
            Welcome to Your Calendar
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to start organizing your schedule
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <Button
            onClick={onSignIn}
            className="w-full flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>Sign in with Google</span>
          </Button>
          
          <Button
            onClick={onSignIn}
            className="w-full flex items-center justify-center space-x-2 bg-black hover:bg-gray-900 text-white"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M17.05 20.28c-.98.95-2.05.88-3.08.54-1.07-.36-2.05-.35-3.17 0-1.45.44-2.23.32-3.08-.54-4.06-4.16-3.58-10.8.94-11.05 1.21.09 2.07.78 2.79.78.73 0 1.74-.78 3.17-.78 1.36.03 2.34.75 3.08 1.56-2.73 1.55-2.29 4.67.35 5.64-.86 2.43-2.12 4.87-3.09 5.57.83.37 1.74-.2 3.09-1.72zm-3.08-12.5c-.73.11-1.68-.74-3.08-.87.15-1.5 1.29-3.09 2.79-3.41 1.19 1.46.85 3.2.29 4.28z"
              />
            </svg>
            <span>Sign in with Apple</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
