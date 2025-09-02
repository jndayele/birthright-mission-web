import Navigation from '@/components/Navigation';
import { Helmet } from 'react-helmet';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Target, 
  Eye, 
  Users, 
  BookOpen, 
  Lightbulb, 
  TrendingUp, 
  Heart, 
  Globe 
} from 'lucide-react';

const About = () => {
  const objectives = [
    {
      icon: Heart,
      title: 'Spiritual Formation',
      description: 'To help students develop a deep understanding of God\'s Word, cultivate a personal relationship with Him, and become spiritually mature leaders.'
    },
    {
      icon: BookOpen,
      title: 'Academic Excellence',
      description: 'To provide high-quality education, equipping students with knowledge, critical thinking, and problem-solving skills in their chosen fields.'
    },
    {
      icon: Lightbulb,
      title: 'Practical Skills',
      description: 'To train students in practical skills, such as carpentry, welding, catering, IT, and automobiles, making them self-sufficient and entrepreneurial.'
    },
    {
      icon: Users,
      title: 'Leadership Development',
      description: 'To identify, nurture, and develop leadership potential in students, preparing them to lead and serve in various contexts.'
    },
    {
      icon: TrendingUp,
      title: 'Community Engagement',
      description: 'To foster partnerships with local communities, organizations, and businesses, providing opportunities for students to apply their skills in real-world settings.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'To raise a new generation of leaders who will make a positive impact in their communities, nations, and the world at large, advancing the Kingdom of God.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
       <Helmet>
        <title>About | Birthright Mission Institute</title>
        <meta name="description" content="Learn more about our mission and values." />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Birthright Mission Institute
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Empowering a new generation of seasoned teachers, missionaries, evangelists, and ministers of the Gospel
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 section-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To provide a holistic education, empowering students to become effective ministers, skilled professionals, and responsible citizens, who will make a positive impact in their world.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <Eye className="h-8 w-8 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To become a premier institution, raising a new generation of leaders, equipped with spiritual, academic, and practical skills to transform communities and nations for the glory of God.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Our Objectives
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Six key objectives guide our mission to develop well-rounded leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <Card key={index} className="card-elevated hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <objective.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{objective.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {objective.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join our community of learners and leaders who are making a difference in their world through spiritual formation, academic excellence, and practical skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="btn-accent px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-strong"
            >
              Apply Now
            </a>
            <a
              href="/contact"
              className="btn-outline px-8 py-3 rounded-lg font-semibold transition-all border-white/30 text-white hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;