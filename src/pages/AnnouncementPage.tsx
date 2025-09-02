import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, User, ArrowLeft, MapPin } from 'lucide-react';

const announcements = [
  {
    id: 1,
    title: "Leadership Development Program - Spring 2024",
    description: "Join our intensive 6-month leadership development program designed for emerging church leaders and ministry professionals.",
    content: `
      <h2>Program Overview</h2>
      <p>Our Leadership Development Program is designed to equip emerging church leaders and ministry professionals with the skills, knowledge, and character needed to lead effectively in today's complex world.</p>
      
      <h2>What You'll Learn</h2>
      <ul>
        <li>Biblical foundations of leadership</li>
        <li>Team building and conflict resolution</li>
        <li>Strategic planning and vision casting</li>
        <li>Financial stewardship and resource management</li>
        <li>Cross-cultural ministry and communication</li>
        <li>Personal spiritual formation and character development</li>
      </ul>
      
      <h2>Program Structure</h2>
      <p>The program runs for 6 months with weekly intensive sessions, monthly retreats, and practical ministry assignments. Participants will be paired with experienced mentors and will complete a capstone leadership project.</p>
      
      <h2>Who Should Apply</h2>
      <p>This program is ideal for pastors, ministry leaders, church board members, and anyone called to leadership in Christian organizations. No prior formal training required, but a heart for ministry is essential.</p>
    `,
    date: "2024-03-15",
    deadline: "2024-02-28",
    location: "Main Campus",
    duration: "6 months",
    registrationLink: "https://forms.google.com/leadership-program-2024",
    type: "Program",
    image: "/api/placeholder/800/400"
  },
  {
    id: 2,
    title: "Annual Missions Conference",
    description: "A three-day conference featuring renowned speakers, workshops, and opportunities to connect with mission organizations worldwide.",
    content: `
      <h2>Conference Theme: "Go and Make Disciples"</h2>
      <p>Join us for our Annual Missions Conference, a transformative three-day event that will inspire, equip, and mobilize you for global ministry. This year's conference focuses on the Great Commission and how every believer can participate in God's mission to reach the world.</p>
      
      <h2>Featured Speakers</h2>
      <ul>
        <li>Dr. Sarah Martinez - International missions strategist</li>
        <li>Pastor John Kimani - Church planter from Kenya</li>
        <li>Rev. Maria Santos - Cross-cultural ministry expert</li>
        <li>Dr. David Chen - Urban missions specialist</li>
      </ul>
      
      <h2>Workshop Sessions</h2>
      <ul>
        <li>Cross-cultural communication strategies</li>
        <li>Short-term missions preparation</li>
        <li>Fundraising for missions projects</li>
        <li>Digital evangelism in the modern age</li>
        <li>Caring for missionary families</li>
      </ul>
      
      <h2>Mission Organization Fair</h2>
      <p>Connect with over 30 mission organizations and learn about opportunities to serve both locally and internationally. Meet current missionaries and hear firsthand accounts of God's work around the world.</p>
      
      <h2>Call to Action</h2>
      <p>The conference concludes with a powerful commissioning service where participants can make commitments to specific mission opportunities and receive prayer for their calling.</p>
    `,
    date: "2024-04-10",
    deadline: "2024-04-05",
    location: "Conference Hall",
    duration: "3 days",
    registrationLink: "https://forms.google.com/missions-conference-2024",
    type: "Event",
    image: "/api/placeholder/800/400"
  },
  {
    id: 3,
    title: "Skills Training Workshop - Carpentry Basics",
    description: "Learn fundamental carpentry skills in this hands-on workshop. Perfect for beginners and those looking to enhance their practical skills.",
    content: `
      <h2>Hands-On Learning Experience</h2>
      <p>This intensive two-week workshop provides participants with fundamental carpentry skills through hands-on practice and expert instruction. No prior experience necessary - we start from the basics and build your confidence with each project.</p>
      
      <h2>Skills You'll Master</h2>
      <ul>
        <li>Proper use and maintenance of hand tools</li>
        <li>Power tool safety and operation</li>
        <li>Wood selection and preparation</li>
        <li>Measuring, marking, and cutting techniques</li>
        <li>Joinery methods and hardware installation</li>
        <li>Finishing techniques and wood protection</li>
      </ul>
      
      <h2>Projects You'll Complete</h2>
      <ul>
        <li>Simple bookshelf</li>
        <li>Wooden toolbox</li>
        <li>Small coffee table</li>
        <li>Picture frames</li>
      </ul>
      
      <h2>Equipment Provided</h2>
      <p>All tools, materials, and safety equipment are provided. You'll take home all the projects you create, plus a basic tool kit to continue your carpentry journey.</p>
      
      <h2>Certification</h2>
      <p>Upon completion, participants receive a certificate of completion and are eligible to enroll in our advanced woodworking program.</p>
    `,
    date: "2024-02-20",
    deadline: "2024-02-15",
    location: "Carpentry Workshop",
    duration: "2 weeks",
    registrationLink: "https://forms.google.com/carpentry-workshop-2024",
    type: "Workshop",
    image: "/api/placeholder/800/400"
  }
];

const AnnouncementPage = () => {
  const { id } = useParams();
  const announcement = announcements.find(a => a.id === Number(id));

  if (!announcement) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Announcement Not Found</h1>
          <p className="text-muted-foreground mb-8">The program or event you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-primary-foreground/80 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          <Badge variant="secondary" className="mb-4">
            {announcement.type}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {announcement.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5" />
              <span>Starts: {new Date(announcement.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{announcement.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>{announcement.location}</span>
            </div>
          </div>
          <div className="mt-4 text-destructive-foreground">
            <strong>Registration Deadline: {new Date(announcement.deadline).toLocaleDateString()}</strong>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden mb-12">
            <img 
              src={announcement.image} 
              alt={announcement.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </Card>
          
          <div className="prose prose-lg max-w-none mb-12">
            <div 
              className="text-foreground"
              dangerouslySetInnerHTML={{ __html: announcement.content }}
            />
          </div>

          {/* Registration Section */}
          <Card className="bg-accent/5 mb-12">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
              <p className="text-muted-foreground mb-6">
                Don't miss this opportunity! Register now to secure your spot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="px-8">
                  <a href={announcement.registrationLink} target="_blank" rel="noopener noreferrer">
                    Register Now
                  </a>
                </Button>
                <div className="text-sm text-muted-foreground">
                  Deadline: {new Date(announcement.deadline).toLocaleDateString()}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="pt-8 border-t border-border">
            <Link to="/blog">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnnouncementPage;