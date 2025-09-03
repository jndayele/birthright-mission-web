import { Button } from '@/components/ui/button';
import { ExternalLink, Play, Tv } from 'lucide-react';

const TVShowSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-accent/10 via-background to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-6">
            <Tv className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Featured on TV</span>
          </div>

          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Watch Our Pastor's <span className="text-accent">TV Interview</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't miss this inspiring television appearance where our pastor shares the vision and mission of Birthright Mission Institute.
          </p>

          {/* Video Preview Card */}
          <div className="max-w-md mx-auto bg-card rounded-xl shadow-soft border p-6 mb-8">
            <div className="relative bg-accent/10 rounded-lg p-8 mb-4">
              <Play className="h-16 w-16 text-accent mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Television Interview
            </h3>
            <p className="text-muted-foreground mb-4">
              Watch our pastor discuss the transformative work at Birthright Mission Institute
            </p>
            
            {/* CTA Button */}
            <Button 
              asChild 
              size="lg" 
              className="w-full"
              onClick={() => window.open('https://www.facebook.com/share/v/1FN3zMD6wj/', '_blank')}
            >
              <a 
                href="https://www.facebook.com/share/v/1FN3zMD6wj/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2"
              >
                <Play className="h-5 w-5" />
                Watch on Facebook
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Click the button above to watch the full interview on Facebook
          </p>
        </div>
      </div>
    </section>
  );
};

export default TVShowSection;