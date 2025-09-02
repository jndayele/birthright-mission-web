import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Birthright Mission Institute Campus"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 text-accent-foreground backdrop-blur-sm mb-6">
            <BookOpen className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Spirit-filled Christian Education</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold hero-text mb-6 text-balance">
            Empowering Leaders for
            <span className="block text-accent-light">Kingdom Impact</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl hero-text mb-8 max-w-3xl mx-auto text-balance opacity-90">
            Raising biblically grounded leaders equipped with practical skills to transform communities and nations for God's glory.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button asChild variant="hero" size="xl" className="group shadow-lg">
              <Link to="/admissions">
                Apply Now
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-white/50 text-black hover:bg-white/20 backdrop-blur-sm shadow-lg">
              <Link to="/programs">
                Explore Programs
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-12 justify-center items-center text-center">
            <div className="flex items-center gap-3 text-primary-foreground bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
              <div className="p-3 rounded-lg bg-accent/30 backdrop-blur-sm">
                <Users className="h-6 w-6 text-accent-light" />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">7</p>
                <p className="text-sm text-white/90 font-medium">Departments</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
              <div className="p-3 rounded-lg bg-accent/30 backdrop-blur-sm">
                <BookOpen className="h-6 w-6 text-accent-light" />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">15+</p>
                <p className="text-sm text-white/90 font-medium">Programs</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
              <div className="p-3 rounded-lg bg-accent/30 backdrop-blur-sm">
                <Users className="h-6 w-6 text-accent-light" />
              </div>
              <div>
                <p className="text-3xl font-bold text-white">Mission</p>
                <p className="text-sm text-white/90 font-medium">Focused</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;