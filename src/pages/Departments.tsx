import Navigation from '@/components/Navigation';
import { Helmet } from 'react-helmet';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Cross, 
  Hammer, 
  Laptop, 
  GraduationCap, 
  Users, 
  Building, 
  Heart,
  ChevronRight
} from 'lucide-react';

const Departments = () => {
  const departments = [
    {
      id: 'ministry',
      name: 'Ministry and Theology',
      description: 'Comprehensive biblical studies and theological training for effective ministry leadership in the modern world.',
      icon: Cross,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      courses: [
        'Bible Study Methods',
        'Systematic Theology',
        'Church History',
        'Pastoral Care',
        'Homiletics (Preaching)',
        'Christian Ethics',
        'Missiology',
        'Leadership in Ministry'
      ],
      duration: '2 years (Diploma) / 1 year (Certificate)',
      outcome: 'Graduates equipped for pastoral ministry, teaching, and church leadership roles'
    },
    {
      id: 'skills',
      name: 'Skills Acquisition',
      description: 'Practical vocational training in various trades to ensure students are self-sufficient and entrepreneurial.',
      icon: Hammer,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      courses: [
        'Carpentry & Joinery',
        'Welding & Fabrication',
        'Catering & Culinary Arts',
        'Automotive Maintenance',
        'Electronics & Repairs',
        'Business Management',
        'Entrepreneurship',
        'Quality Control'
      ],
      duration: '2 years (Diploma Programs)',
      outcome: 'Skilled craftsmen and entrepreneurs ready to start their own businesses'
    },
    {
      id: 'it',
      name: 'Information Technology',
      description: 'Modern IT education covering programming, systems administration, and digital solutions for the 21st century.',
      icon: Laptop,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      courses: [
        'Programming Languages',
        'Database Management',
        'Network Administration',
        'Web Development',
        'Cybersecurity',
        'Hardware Troubleshooting',
        'Software Development',
        'Digital Marketing'
      ],
      duration: '2 years (Diploma) / 1 year (Certificate)',
      outcome: 'IT professionals ready for the digital economy and tech industry'
    },
    {
      id: 'general',
      name: 'General Education',
      description: 'Foundation courses in core academic subjects providing a well-rounded educational base.',
      icon: GraduationCap,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      courses: [
        'English Language',
        'Mathematics',
        'Science (Biology, Chemistry, Physics)',
        'Social Studies',
        'Business Studies',
        'Agriculture',
        'Communication Skills',
        'Critical Thinking'
      ],
      duration: '2 years (Diploma Program)',
      outcome: 'Strong academic foundation for further education or career advancement'
    },
    {
      id: 'leadership',
      name: 'Leadership and Management',
      description: 'Developing strong Christian leaders with management skills for various organizational contexts.',
      icon: Users,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      courses: [
        'Leadership Principles',
        'Management Techniques',
        'Team Building',
        'Communication Skills',
        'Project Management',
        'Conflict Resolution',
        'Strategic Planning',
        'Organizational Behavior'
      ],
      duration: '2 years (Diploma Program)',
      outcome: 'Effective leaders for churches, businesses, and community organizations'
    },
    {
      id: 'community',
      name: 'Community Development',
      description: 'Training students to become agents of positive change in their communities through sustainable development.',
      icon: Building,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      courses: [
        'Community Engagement',
        'Development Economics',
        'Project Management',
        'Sustainable Development',
        'Social Work',
        'Public Health',
        'Environmental Studies',
        'Grant Writing'
      ],
      duration: '2 years (Diploma Program)',
      outcome: 'Community development specialists and social entrepreneurs'
    },
    {
      id: 'missions',
      name: 'Missions and Evangelism',
      description: 'Specialized training for cross-cultural ministry and effective evangelism in diverse contexts.',
      icon: Heart,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      courses: [
        'Missiology',
        'Cross-Cultural Communication',
        'Evangelism Techniques',
        'Cultural Anthropology',
        'World Religions',
        'Mission Strategy',
        'Church Planting',
        'Intercultural Studies'
      ],
      duration: '2 years (Diploma Program)',
      outcome: 'Equipped missionaries and evangelists for global ministry'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
       <Helmet>
        <title>Departments | Birthright Mission Institute</title>
        <meta name="description" content="Learn more about our departments and courses" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Departments
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Seven specialized departments offering comprehensive training in ministry, vocational skills, and leadership development
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {departments.map((dept) => (
              <Card key={dept.id} className="card-elevated">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Department Header */}
                    <div className="lg:col-span-1">
                      <div className={`inline-flex p-4 rounded-lg ${dept.bgColor} mb-4`}>
                        <dept.icon className={`h-8 w-8 ${dept.color}`} />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{dept.name}</h3>
                      <p className="text-muted-foreground mb-6">{dept.description}</p>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-sm text-foreground mb-1">Duration</h4>
                          <p className="text-sm text-muted-foreground">{dept.duration}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-foreground mb-1">Outcome</h4>
                          <p className="text-sm text-muted-foreground">{dept.outcome}</p>
                        </div>
                      </div>
                    </div>

                    {/* Courses */}
                    <div className="lg:col-span-2">
                      <h4 className="text-lg font-semibold mb-4">Core Courses</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {dept.courses.map((course, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <ChevronRight className="h-4 w-4 text-accent flex-shrink-0" />
                            <span className="text-muted-foreground">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 section-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
            Ready to Choose Your Path?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Explore our comprehensive programs and find the perfect fit for your calling and career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="default" size="lg">
              <a href="/programs">View All Programs</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/admissions">Apply Now</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Departments;