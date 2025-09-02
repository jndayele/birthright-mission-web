import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "Transforming Lives Through Biblical Education",
    excerpt: "Discover how our holistic approach to education is empowering students to become effective ministers and skilled professionals.",
    author: "Dr. Samuel Adebayo",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Education",
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Building Community Through Skills Training",
    excerpt: "Learn about our carpentry and welding programs that are equipping students with practical skills for entrepreneurship.",
    author: "Sarah Johnson",
    date: "2024-01-10",
    readTime: "3 min read",
    category: "Skills Training",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Mission Field Preparation: Cross-Cultural Ministry",
    excerpt: "Preparing students for effective cross-cultural ministry and evangelism in diverse communities worldwide.",
    author: "Rev. Michael Thompson",
    date: "2024-01-05",
    readTime: "7 min read",
    category: "Missions",
    image: "/api/placeholder/400/250"
  },
  {
    id: 4,
    title: "Student Testimonies: Lives Changed",
    excerpt: "Hear from our graduates about how their time at Birthright Mission Institute has transformed their lives and ministry.",
    author: "Grace Okafor",
    date: "2024-01-01",
    readTime: "4 min read",
    category: "Testimonies",
    image: "/api/placeholder/400/250"
  },
  {
    id: 5,
    title: "Leadership Development in Action",
    excerpt: "How our leadership programs are raising the next generation of Christian leaders for global impact.",
    author: "Pastor David Wilson",
    date: "2023-12-28",
    readTime: "6 min read",
    category: "Leadership",
    image: "/api/placeholder/400/250"
  },
  {
    id: 6,
    title: "Technology in Ministry: IT Training at BMI",
    excerpt: "Exploring how our IT department is preparing students to use technology for effective ministry and business.",
    author: "James Okonkwo",
    date: "2023-12-25",
    readTime: "5 min read",
    category: "Technology",
    image: "/api/placeholder/400/250"
  }
];

const categories = ["All", "Education", "Skills Training", "Missions", "Testimonies", "Leadership", "Technology"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
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

      {/* Blog Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <Button className="w-fit group">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </div>
          </Card>

          {/* Blog Posts Grid */}
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
                  <Button variant="ghost" size="sm" className="p-0 h-auto group text-primary hover:text-primary-dark">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Posts
            </Button>
          </div>
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
    </div>
  );
};

export default Blog;
