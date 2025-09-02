import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  Award, 
  Users, 
  BookOpen,
  Cross,
  Hammer,
  Laptop,
  GraduationCap,
  Building,
  Heart
} from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      category: 'Ministry and Theology',
      icon: Cross,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      programs: [
        {
          name: 'Diploma in Ministry',
          duration: '2 years',
          type: 'Diploma',
          description: 'Comprehensive biblical and theological training for ministry leadership',
          courses: [
            'Bible Study',
            'Theology',
            'Church History',
            'Pastoral Care',
            'Evangelism',
            'Leadership',
            'Missions',
            'And more....'
          ],
        },
        {
          name: 'Certificate in Theology',
          duration: '1 year',
          type: 'Certificate',
          description: 'Foundation program in biblical studies and basic theology',
          courses: [
            'Introduction to Theology',
            'Bible Study Methods',
            'Church History',
            'Theology of Missions',
          ],
        }
      ]
    },
    {
      category: 'Skills Acquisition',
      icon: Hammer,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      programs: [
        {
          name: 'Diploma in Carpentry',
          duration: '2 years',
          type: 'Diploma',
          description: 'Comprehensive woodworking and construction skills training',
          courses: [
            'Woodworking',
            'Building Construction',
            'Carpentry Techniques',
            'And more...',
          ],
        },
        {
          name: 'Diploma in Welding and Fabrication',
          duration: '2 years',
          type: 'Diploma',
          description: 'Advanced metal working and fabrication skills',
          courses: [
            'Welding Techniques',
            'Metal Fabrication',
            'Blueprint Reading',
            'Equipment Operation',
            'Safety Procedures',
          ],
        },
        {
          name: 'Diploma in Catering and Culinary Arts',
          duration: '2 years',
          type: 'Diploma',
          description: 'Professional cooking and hospitality management',
          courses: [
            'Cooking Techniques',
            'Baking and Pastry',
            'Food Safety',
            'Nutrition',
            'Restaurant Management',
          ],
        }
      ]
    },
    {
      category: 'Information Technology',
      icon: Laptop,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      programs: [
        {
          name: 'Diploma in Computer Science',
          duration: '2 years',
          type: 'Diploma',
          description: 'Comprehensive IT education covering programming and systems',
          courses: [
            'Programming Languages',
            'Data Structure',
            'Data Algorithm',
            'Computer Networks',
            'And more...',
          ],
        },
        {
          name: 'Certificate in IT Support',
          duration: '1 year',
          type: 'Certificate',
          description: 'Foundation in computer hardware and software support',
          courses: [
            'Computer Hardware',
            'Software Installation',
            'Network Fundamentals',
            'Troubleshooting',
          ],
        }
      ]
    },
    {
      category: 'Leadership and Management',
      icon: Users,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      programs: [
        {
          name: 'Diploma in Leadership and Management',
          duration: '2 years',
          type: 'Diploma',
          description: 'Comprehensive leadership and organizational management training',
          courses: [
            'Leadership Principles',
            'Management Techniques',
            'Team Building',
            'Communication Skills',
            'And more...',
          ],
        }
      ]
    },
    {
      category: 'Community Development',
      icon: Building,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      programs: [
        {
          name: 'Diploma in Community Development',
          duration: '2 years',
          type: 'Diploma',
          description: 'Training for sustainable community development and social change',
          courses: [
            'Community Engagement',
            'Project Management',
            'Sustainable Development',
            'And more...',
          ],
        }
      ]
    },
    {
      category: 'Missions and Evangelism',
      icon: Heart,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      programs: [
        {
          name: 'Diploma in Missions and Evangelism',
          duration: '2 years',
          type: 'Diploma',
          description: 'Specialized training for cross-cultural ministry and evangelism',
          courses: [
            'Missiology',
            'Cross-Cultural Ministry',
            'Evangelism Techniques',
            'And more...',
          ],
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Programs
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Comprehensive diploma and certificate programs designed to equip you with spiritual, academic, and practical skills
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programs.map((category) => (
              <div key={category.category} id={category.category.toLowerCase().replace(/\s+/g, '-')}>
                {/* Category Header */}
                <div className="text-center mb-12">
                  <div className={`inline-flex p-4 rounded-lg ${category.bgColor} mb-4`}>
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <h2 className="text-3xl font-bold text-gradient mb-4">{category.category}</h2>
                </div>

                {/* Programs Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {category.programs.map((program, index) => (
                    <Card key={index} className="card-elevated hover-lift">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold">{program.name}</h3>
                          <Badge 
                            variant={program.type === 'Diploma' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {program.type}
                          </Badge>
                        </div>

                        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {program.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <BookOpen className="h-4 w-4" />
                            {program.courses.length} courses
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6">{program.description}</p>

                        <div className="space-y-6">
                          {/* Courses */}
                          <div>
                            <h4 className="font-semibold mb-3">Core Courses</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {program.courses.map((course, i) => (
                                <div key={i} className="text-sm text-muted-foreground flex items-center gap-1">
                                  <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                                  {course}
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
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 section-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Choose from our comprehensive programs and take the first step toward your calling and career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="default" size="lg">
              <a href="/admissions">Apply Now</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/contact">Get More Information</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;