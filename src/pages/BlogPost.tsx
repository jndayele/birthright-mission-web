import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, User, ArrowLeft } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Transforming Lives Through Biblical Education",
    excerpt: "Discover how our holistic approach to education is empowering students to become effective ministers and skilled professionals.",
    content: `
      <p>At Birthright Mission Institute, we believe that education is more than just acquiring knowledge—it's about transformation. Our holistic approach to biblical education is designed to empower students to become effective ministers and skilled professionals who can make a lasting impact in their communities and beyond.</p>
      
      <h2>The Foundation of Our Approach</h2>
      <p>Our educational philosophy is built on the understanding that true learning happens when the mind, heart, and hands work together. We don't just teach biblical principles; we help students embody them in their daily lives and future ministries.</p>
      
      <h2>Practical Application</h2>
      <p>Through hands-on training, real-world experiences, and mentorship programs, our students learn to apply biblical principles in practical ways. Whether they're preparing for ministry or developing professional skills, we ensure they're equipped for success.</p>
      
      <h2>Community Impact</h2>
      <p>Our graduates go on to serve in churches, start businesses, lead organizations, and impact their communities in countless ways. The transformation that begins in our classrooms extends far beyond our campus walls.</p>
    `,
    author: "Dr. Samuel Adebayo",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Education",
    image: "/api/placeholder/800/400"
  },
  {
    id: 2,
    title: "Building Community Through Skills Training",
    excerpt: "Learn about our carpentry and welding programs that are equipping students with practical skills for entrepreneurship.",
    content: `
      <p>Skills training at Birthright Mission Institute goes beyond just teaching technical abilities—we're building communities of skilled professionals who can create economic opportunities and transform lives.</p>
      
      <h2>Our Carpentry Program</h2>
      <p>Our state-of-the-art carpentry workshop provides students with hands-on experience in woodworking, furniture making, and construction techniques. Students learn both traditional craftsmanship and modern building methods.</p>
      
      <h2>Welding Excellence</h2>
      <p>Our welding program covers various welding techniques, safety protocols, and industry standards. Students work with modern equipment and learn skills that are in high demand in today's economy.</p>
      
      <h2>Entrepreneurship Focus</h2>
      <p>We don't just teach skills—we teach students how to turn those skills into sustainable businesses. Our entrepreneurship component helps students develop business plans, understand markets, and create job opportunities in their communities.</p>
    `,
    author: "Sarah Johnson",
    date: "2024-01-10",
    readTime: "3 min read",
    category: "Skills Training",
    image: "/api/placeholder/800/400"
  },
  // Add more blog posts here...
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
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
            {post.category}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5" />
              {new Date(post.date).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              {post.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden mb-12">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </Card>
          
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <div className="mt-12 pt-8 border-t border-border">
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

export default BlogPost;