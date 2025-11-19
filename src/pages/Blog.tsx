import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, User, ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import blog1Image from '@/assets/blog1.jpg';
import blog2Image from '@/assets/blog2.jpg';

const blogPosts = [
  {
    id: 1,
    title: "Christian Entrepreneurship and Community Development: Empowering Communities through Business",
    excerpt: "As a Christian entrepreneur, you're likely driven by a desire to make a positive impact in the world. Discover how to create jobs, stimulate economic growth, and provide valuable goods and services to your community.",
    author: "Rev. Victor Babamuboni",
    date: "2024-02-20",
    readTime: "8 min read",
    category: "Entrepreneurship",
    image: blog1Image
  },
  {
    id: 2,
    title: "Faith and Finances: Managing Your Business Finances with Wisdom",
    excerpt: "Managing finances is a crucial aspect of running a successful business. Learn biblical principles and practical tips for managing your business finances with wisdom and integrity.",
    author: "Rev. Victor Babamuboni",
    date: "2024-02-15",
    readTime: "7 min read",
    category: "Finance",
    image: blog2Image
  }
];

const announcements = [
  {
    id: 1,
    title: "2024 Spring Semester Enrollment Now Open",
    description: "Join our comprehensive programs combining biblical education with practical skills training. Choose from diploma programs in theology, short-term vocational courses, or our intensive leadership development track.",
    date: "2024-04-01",
    deadline: "2024-03-15",
    location: "Main Campus, Lagos",
    duration: "3-24 months (varies by program)",
    registrationLink: "/admissions",
    type: "Enrollment",
    image: "/api/placeholder/400/250"
  }
];



const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Header */}
      <section className="bg-gradient-to-r from-primary via-primary to-primary-dark py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Insights</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Stay updated with the latest news, insights, and stories from Birthright Mission Institute
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't miss out on these important upcoming programs and events
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {announcements.map((announcement) => (
              <Card key={announcement.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-primary to-primary-dark p-8 text-white flex flex-col justify-center items-center">
                      <div className="text-center">
                        <CalendarDays className="h-12 w-12 mb-4 mx-auto" />
                        <div className="text-4xl font-bold mb-2">
                          {new Date(announcement.date).getDate()}
                        </div>
                        <div className="text-lg">
                          {new Date(announcement.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 p-6">
                      <Badge className="mb-3">{announcement.type}</Badge>
                      <h3 className="text-2xl font-bold mb-3">{announcement.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {announcement.description}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{announcement.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{announcement.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <CalendarDays className="h-4 w-4" />
                          <span>Deadline: {new Date(announcement.deadline).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <Link to={announcement.registrationLink}>
                        <Button className="w-full sm:w-auto">
                          Learn More & Register
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Read our latest insights on biblical education, skills training, and community transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-white text-primary">{post.category}</Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-all">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;