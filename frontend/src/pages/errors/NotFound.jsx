import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Search } from 'lucide-react';
import Container from '@/components/common/Container';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Container className="text-center py-20">
        <div className="max-w-md mx-auto">
          {/* 404 Number */}
          <div className="text-8xl font-bold text-muted-foreground mb-4">
            404
          </div>
          
          {/* Error Icon */}
          <div className="mb-6">
            <Search className="w-16 h-16 mx-auto text-muted-foreground" />
          </div>
          
          {/* Error Title */}
          <h1 className="text-3xl font-serif font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          
          {/* Error Description */}
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Sorry, we couldn't find the page you're looking for. 
            The page might have been moved, deleted, or the URL might be incorrect.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
            
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
          
          {/* Help Text
          <div className="mt-8 text-sm text-muted-foreground">
            <p>
              Need help? <Link to="/contact" className="text-primary hover:underline">Contact us</Link> or 
              check our <Link to="/sitemap" className="text-primary hover:underline">sitemap</Link>.
            </p>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
