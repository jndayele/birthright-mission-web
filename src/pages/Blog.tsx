import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const blogPosts = [
  {
    id: 1,
    title: "Christian Entrepreneurship and Community Development: Empowering Communities through Business",
    excerpt: "Explore how Christian entrepreneurs can make a positive impact through community development and economic empowerment, creating jobs and serving others.",
    author: "Rev. Victor Babamuboni",
    date: "2024-02-15",
    readTime: "8 min read",
    category: "Entrepreneurship",
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Faith and Finances: Managing Your Business Finances with Wisdom",
    excerpt: "Discover biblical principles for managing business finances with wisdom, honesty, and integrity while honoring God.",
    author: "Rev. Victor Babamuboni",
    date: "2024-02-10",
    readTime: "7 min read",
    category: "Finance",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Transforming Lives Through Biblical Education",
    excerpt: "Discover how our holistic approach to education is empowering students to become effective ministers and skilled professionals.",
    author: "Dr. Samuel Adebayo",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Education",
    image: "/api/placeholder/400/250"
  },
  {
    id: 4,
    title: "Building Community Through Skills Training",
    excerpt: "Learn about our carpentry and welding programs that are equipping students with practical skills for entrepreneurship.",
    author: "Sarah Johnson",
    date: "2024-01-10",
    readTime: "3 min read",
    category: "Skills Training",
    image: "/api/placeholder/400/250"
  },
  {
    id: 5,
    title: "Mission Field Preparation: Cross-Cultural Ministry",
    excerpt: "Preparing students for effective cross-cultural ministry and evangelism in diverse communities worldwide.",
    author: "Rev. Michael Thompson",
    date: "2024-01-05",
    readTime: "7 min read",
    category: "Missions",
    image: "/api/placeholder/400/250"
  },
  {
    id: 6,
    title: "Student Testimonies: Lives Changed",
    excerpt: "Hear from our graduates about how their time at Birthright Mission Institute has transformed their lives and ministry.",
    author: "Grace Okafor",
    date: "2024-01-01",
    readTime: "4 min read",
    category: "Testimonies",
    image: "/api/placeholder/400/250"
  },
  {
    id: 7,
    title: "Leadership Development in Action",
    excerpt: "How our leadership programs are raising the next generation of Christian leaders for global impact.",
    author: "Pastor David Wilson",
    date: "2023-12-28",
    readTime: "6 min read",
    category: "Leadership",
    image: "/api/placeholder/400/250"
  },
  {
    id: 8,
    title: "Technology in Ministry: IT Training at BMI",
    excerpt: "Exploring how our IT department is preparing students to use technology for effective ministry and business.",
    author: "James Okonkwo",
    date: "2023-12-25",
    readTime: "5 min read",
    category: "Technology",
    image: "/api/placeholder/400/250"
  }
];

const announcements = [
  {
    id: 1,
    title: "Leadership Development Program - Spring 2024",
    description: "Join our intensive 6-month leadership development program designed for emerging church leaders and ministry professionals.",
    date: "2024-03-15",
    deadline: "2024-02-28",
    location: "Main Campus",
    duration: "6 months",
    registrationLink: "https://forms.google.com/leadership-program-2024",
    type: "Program",
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Annual Missions Conference",
    description: "A three-day conference featuring renowned speakers, workshops, and opportunities to connect with mission organizations worldwide.",
    date: "2024-04-10",
    deadline: "2024-04-05",
    location: "Conference Hall",
    duration: "3 days",
    registrationLink: "https://forms.google.com/missions-conference-2024",
    type: "Event",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Skills Training Workshop - Carpentry Basics",
    description: "Learn fundamental carpentry skills in this hands-on workshop. Perfect for beginners and those looking to enhance their practical skills.",
    date: "2024-02-20",
    deadline: "2024-02-15",
    location: "Carpentry Workshop",
    duration: "2 weeks",
    registrationLink: "https://forms.google.com/carpentry-workshop-2024",
    type: "Workshop",
    image: "/api/placeholder/400/250"
  }
];

const categories = ["All", "Entrepreneurship", "Finance", "Education", "Skills Training", "Missions", "Testimonies", "Leadership", "Technology"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Institute <span className="text-accent-light">Blog</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Stay updated with the latest news, testimonies, and insights from Birthright Mission Institute
          </p>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Upcoming Programs & Events</h2>
          <p className="text-muted-foreground text-center mb-12">
            Don't miss out on these exciting opportunities to grow and learn
          </p>
          
          {announcements.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No upcoming announcements at this time.</p>
              <p className="text-muted-foreground">Check back soon for new programs and events!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {announcements.map((announcement) => (
                <Card key={announcement.id} className="h-full flex flex-col group hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={announcement.image} 
                      alt={announcement.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <Badge variant="outline" className="mb-3 w-fit">
                      {announcement.type}
                    </Badge>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{announcement.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm flex-1">
                      {announcement.description}
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4" />
                        <span>Starts: {new Date(announcement.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>Duration: {announcement.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>Location: {announcement.location}</span>
                      </div>
                      <div className="text-destructive">
                        <strong>Deadline: {new Date(announcement.deadline).toLocaleDateString()}</strong>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button asChild variant="outline" className="flex-1">
                        <Link to={`/announcement/${announcement.id}`}>
                          Read More
                        </Link>
                      </Button>
                      <Button asChild className="flex-1">
                        <a href={announcement.registrationLink} target="_blank" rel="noopener noreferrer">
                          Register
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Latest Blog Posts</h2>
          <p className="text-muted-foreground text-center mb-12">
            Read the latest insights and stories from our community
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Button>
            ))}
          </div>

          {blogPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No blog posts available at this time.</p>
              <p className="text-muted-foreground">Check back soon for new content!</p>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              <Card className="mb-12 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="h-64 lg:h-auto">
                    <img 
                      src="/api/placeholder/600/400" 
                      alt="Featured Post"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <Badge variant="secondary" className="w-fit mb-4">Featured</Badge>
                    <h2 className="text-3xl font-bold mb-4 text-foreground">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-muted-foreground mb-6 text-lg">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {blogPosts[0].author}
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {new Date(blogPosts[0].date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {blogPosts[0].readTime}
                      </div>
                    </div>
                    <Button asChild className="w-fit group">
                      <Link to={`/blog/${blogPosts[0].id}`}>
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>

              {/* Blog Posts Grid */}
              {blogPosts.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.slice(1).map((post) => (
                    <Card key={post.id} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <Badge variant="outline" className="mb-3">
                          {post.category}
                        </Badge>
                        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 text-sm">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <CalendarDays className="h-3 w-3" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                        </div>
                        <Button asChild variant="ghost" size="sm" className="p-0 h-auto group text-primary hover:text-primary-dark">
                          <Link to={`/blog/${post.id}`}>
                            Read More
                            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {/* Load More Button */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Posts
                </Button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-accent/5 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Subscribe to our newsletter to receive the latest updates and insights from Birthright Mission Institute
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;