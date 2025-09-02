import { Card, CardContent } from '@/components/ui/card';
import { 
  Users, 
  BookOpen, 
  Heart, 
  Globe, 
  Lightbulb,
  HandHeart,
  Zap,
  Wrench,
  TrendingUp,
  Building
} from 'lucide-react';

const MandateSection = () => {
  const mandatePoints = [
    {
      icon: Users,
      title: 'Equip & Empower',
      description: 'Equip and empower individuals for effective ministry and mission work',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: BookOpen,
      title: 'Biblical Understanding',
      description: 'Foster deep understanding of God\'s Word and its application in ministry',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: Heart,
      title: 'Develop Leaders',
      description: 'Develop leaders with strong calling, passion, and commitment to the Gospel',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: Globe,
      title: 'Cross-Cultural Ministry',
      description: 'Provide training for cross-cultural ministry and evangelism worldwide',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: HandHeart,
      title: 'Community Building',
      description: 'Build a supportive community for mutual encouragement in ministry',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: Lightbulb,
      title: 'Practical Experience',
      description: 'Facilitate opportunities for hands-on ministry experience and mentorship',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: Zap,
      title: 'Spiritual Growth',
      description: 'Promote a culture of prayer, worship, and spiritual development',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Wrench,
      title: 'Skills Acquisition',
      description: 'Provide training in carpentry, welding, catering, IT, and automotive skills',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: TrendingUp,
      title: 'Entrepreneurship',
      description: 'Empower students to be self-sufficient and entrepreneurial in ministry',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: Building,
      title: 'Partnerships',
      description: 'Foster collaborations with organizations for real-world application',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    }
  ];

  return (
    <section className="py-20 section-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Our Mandate
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Birthright Mission Institute is mandated to fulfill these key objectives in raising godly leaders
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mandatePoints.map((point, index) => (
            <Card key={index} className="card-elevated hover-lift group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-accent/20 bg-card/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className={`inline-flex p-4 rounded-xl ${point.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <point.icon className={`h-8 w-8 ${point.color}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {point.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Transform Communities, Impact Nations
            </h3>
            <p className="text-lg text-muted-foreground">
              Through our comprehensive mandate, we prepare students to become effective ministers, skilled professionals, and responsible citizens who will make a positive impact in their communities and beyond, advancing the Kingdom of God.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MandateSection;