import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, RefreshCw, AlertTriangle } from 'lucide-react';
import Container from '@/components/common/Container';

const ErrorPage = ({ 
  statusCode = 500, 
  title = "Something went wrong", 
  message = "An unexpected error occurred. Please try again later.",
  showRetry = true 
}) => {
  const handleRetry = () => {
    window.location.reload();
  };

  const getErrorIcon = () => {
    switch (statusCode) {
      case 500:
        return <AlertTriangle className="w-16 h-16 mx-auto text-destructive" />;
      case 403:
        return <AlertTriangle className="w-16 h-16 mx-auto text-orange-500" />;
      default:
        return <AlertTriangle className="w-16 h-16 mx-auto text-destructive" />;
    }
  };

  const getErrorMessage = () => {
    switch (statusCode) {
      case 500:
        return "We're experiencing technical difficulties. Our team has been notified and is working to fix the issue.";
      case 403:
        return "You don't have permission to access this resource. Please contact an administrator if you believe this is an error.";
      case 503:
        return "Our services are temporarily unavailable due to maintenance. Please try again in a few minutes.";
      default:
        return message;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Container className="text-center py-20">
        <div className="max-w-md mx-auto">
          {/* Status Code */}
          <div className="text-6xl font-bold text-muted-foreground mb-4">
            {statusCode}
          </div>
          
          {/* Error Icon */}
          <div className="mb-6">
            {getErrorIcon()}
          </div>
          
          {/* Error Title */}
          <h1 className="text-3xl font-serif font-bold text-foreground mb-4">
            {title}
          </h1>
          
          {/* Error Description */}
          <p className="text-muted-foreground mb-8 leading-relaxed">
            {getErrorMessage()}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
            
            {showRetry && (
              <Button variant="outline" onClick={handleRetry}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
            )}
          </div>
          
          {/* Help Text
          <div className="mt-8 text-sm text-muted-foreground">
            <p>
              If the problem persists, please{' '}
              <Link to="/contact" className="text-primary hover:underline">
                contact our support team
              </Link>.
            </p>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default ErrorPage;
