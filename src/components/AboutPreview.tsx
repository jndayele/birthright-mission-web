import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Target, Eye, ArrowRight } from 'lucide-react';

const AboutPreview = () => {
  return (
    <section className="py-20 section-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            About Birthright Mission Institute
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A premier institution dedicated to raising Spirit-filled leaders equipped with both spiritual wisdom and practical skills for transforming communities worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Mission & Vision Cards */}
          <div className="space-y-6">
            <Card className="card-elevated hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground">
                  To provide a holistic education, empowering students to become effective ministers, skilled professionals, and responsible citizens who will make a positive impact in their world.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <Eye className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  To become a premier institution, raising a new generation of leaders equipped with spiritual, academic, and practical skills to transform communities and nations for the glory of God.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Content Summary */}
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold mb-6 text-primary">Why Choose Us?</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong>Spiritual Formation:</strong> Deep biblical grounding with personal relationship development
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong>Practical Skills:</strong> Vocational training in carpentry, IT, catering, and more
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong>Leadership Development:</strong> Nurturing tomorrow's Christian leaders
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong>Global Impact:</strong> Preparing students for cross-cultural ministry
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild variant="default" size="lg" className="group">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
