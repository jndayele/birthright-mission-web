import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import {
  Cross,
  Hammer,
  Laptop,
  BookOpen,
  Users,
  Heart,
  ArrowRight
} from 'lucide-react';

const FeaturedDepartments = () => {
  const departments = [
    {
      id: 'ministry',
      name: 'Ministry & Theology',
      description: 'Biblical studies, theology, and pastoral training for effective ministry leadership.',
      icon: Cross,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      programs: ['Diploma in Ministry', 'Certificate in Theology']
    },
    {
      id: 'skills',
      name: 'Skills Acquisition',
      description: 'Practical vocational training in carpentry, welding, catering, and entrepreneurship.',
      icon: Hammer,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      programs: ['Carpentry', 'Welding', 'Catering', 'Automotive']
    },
    {
      id: 'it',
      name: 'Information Technology',
      description: 'Modern IT skills, programming, and digital literacy for the modern world.',
      icon: Laptop,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      programs: ['Computer Science', 'IT Support', 'Software Development']
    },
    {
      id: 'leadership',
      name: 'Leadership & Management',
      description: 'Developing strong Christian leaders with management and organizational skills.',
      icon: Users,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      programs: ['Leadership Development', 'Management Training']
    },
    {
      id: 'missions',
      name: 'Missions & Evangelism',
      description: 'Cross-cultural ministry training and evangelism techniques for global impact.',
      icon: Heart,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      programs: ['Missiology', 'Evangelism', 'Cross-cultural Ministry']
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Our Departments
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive programs combining spiritual formation with practical skills for holistic development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {departments.map((dept) => (
            <Card key={dept.id} className="card-elevated hover-lift group">
              <CardContent className="p-6">
                <div className={`inline-flex p-3 rounded-lg ${dept.bgColor} mb-4`}>
                  <dept.icon className={`h-6 w-6 ${dept.color}`} />
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {dept.name}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm">
                  {dept.description}
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Programs:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {dept.programs.map((program, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                        {program}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="default" size="lg" className="group">
            <Link to="/departments">
              View All Departments
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDepartments;
