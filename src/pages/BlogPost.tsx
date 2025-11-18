import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, User, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const blogPosts = [
  {
    id: 1,
    title: "Empowering Future Leaders Through Biblical Education",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-lg leading-relaxed mb-6">At Birthright Mission Institute, we believe that true leadership begins with a solid foundation in God's Word combined with practical skills that empower individuals to make a lasting impact in their communities. Our unique approach to biblical education goes beyond traditional theological training to create well-rounded leaders equipped for both ministry and marketplace success.</p>
        
        <h2 class="text-3xl font-bold mt-8 mb-4 text-primary">A Holistic Approach to Education</h2>
        <p class="mb-4">Our curriculum integrates rigorous biblical studies with hands-on vocational training, ensuring our students are prepared for the multifaceted challenges of modern ministry and entrepreneurship. We understand that today's Christian leaders need both spiritual depth and practical competence.</p>
        
        <p class="mb-6">Through programs like our Diploma in Theology & Leadership and specialized short-term courses in carpentry, welding, and information technology, we're equipping students to:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Develop a deep understanding of biblical principles and their application to contemporary issues</li>
          <li>Master practical skills that enable financial independence and community service</li>
          <li>Build strong character grounded in Christian values</li>
          <li>Lead with integrity in both church and secular environments</li>
          <li>Create sustainable solutions to social and economic challenges</li>
        </ul>

        <h2 class="text-3xl font-bold mt-8 mb-4 text-primary">The Power of Integrated Learning</h2>
        <p class="mb-4">What sets Birthright Mission Institute apart is our commitment to integrated learning. When a student studies the book of Proverbs while learning carpentry, they don't just gain knowledge—they develop wisdom. When they explore Paul's letters while mastering welding techniques, they understand the value of excellence and craftsmanship as worship.</p>
        
        <blockquote class="border-l-4 border-primary pl-6 italic my-8 text-xl">
          "Our graduates don't just preach about serving others; they have the skills to build, create, and transform their communities practically."
        </blockquote>

        <h2 class="text-3xl font-bold mt-8 mb-4 text-primary">Real Impact, Real Stories</h2>
        <p class="mb-4">Our graduates are making remarkable differences across Nigeria and beyond. From pastors who fund their ministries through skilled trades to entrepreneurs who employ others while sharing the Gospel, the impact of our integrated approach is evident.</p>
        
        <p class="mb-4">One recent graduate, after completing our carpentry and theology program, started a furniture business that now employs five people from his community. He uses his workshop as a space for discipleship, mentoring young men while teaching them both woodworking and biblical principles.</p>

        <h2 class="text-3xl font-bold mt-8 mb-4 text-primary">Join the Movement</h2>
        <p class="mb-4">We're not just training individuals; we're cultivating a movement of equipped, empowered Christian leaders who are ready to transform society from the inside out. Whether you're called to full-time ministry, entrepreneurship, or marketplace leadership, Birthright Mission Institute provides the foundation you need to excel.</p>
        
        <p class="mb-6">Our next semester begins soon, and spaces are limited. If you're ready to invest in an education that will transform not just your mind but your entire future, we invite you to explore our programs and join our community of changemakers.</p>
      </div>
    `,
    author: "Rev. Victor Babamuboni",
    date: "2024-02-20",
    readTime: "6 min read",
    category: "Education"
  },
  {
    id: 2,
    title: "The Impact of Short-Term Training Programs on Community Development",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-lg leading-relaxed mb-6">In a world where unemployment and poverty continue to challenge communities across Nigeria, short-term vocational training programs are emerging as powerful tools for transformation. At Birthright Mission Institute, we've witnessed firsthand how intensive skills training can change lives, strengthen families, and revitalize entire communities.</p>
        
        <h2 class="text-3xl font-bold mt-8 mb-4 text-primary">Why Short-Term Programs Matter</h2>
        <p class="mb-4">Not everyone can commit to years of traditional education. Many individuals need to start earning quickly to support their families, yet they lack the skills that employers demand. This is where short-term training programs become game-changers.</p>
        
        <p class="mb-6">Our intensive 3-6 month courses in carpentry, welding, and information technology are specifically designed to:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Provide market-relevant skills in a compressed timeframe</li>
          <li>Reduce barriers to entry for those who need immediate employment</li>
          <li>Offer flexible scheduling that accommodates working individuals</li>
          <li>Include both technical training and business fundamentals</li>
          <li>Integrate Christian values and work ethics into every lesson</li>
        </ul>

        <h2 class="text-3xl font-bold mt-8 mb-4 text-primary">Carpentry & Welding: Building More Than Structures</h2>
        <p class="mb-4">Our carpentry and welding programs go beyond teaching students how to work with wood and metal. We're building confidence, fostering creativity, and instilling excellence. Students learn to see their work as both a service to others and an expression of their God-given talents.</p>
        
        <p class="mb-6">These skills are in high demand across Nigeria's growing construction and manufacturing sectors. Our graduates often find employment within weeks of completing their training, or they start their own small businesses, becoming job creators rather than job seekers.</p>

        <h2 class="text-3xl font-bold mt-8 mb-4 text-primary">Information Technology: Opening Digital Doors</h2>
        <p class="mb-4">In today's digital economy, computer literacy is no longer optional—it's essential. Our IT training program equips students with foundational computer skills, basic programming, office applications, and digital communication tools.</p>
        
        <blockquote class="border-l-4 border-primary pl-6 italic my-8 text-xl">
          "We're not just teaching people to use computers; we're opening doors to opportunities they never knew existed."
        </blockquote>

        <p class="mb-6">Many of our IT graduates have gone on to work in administrative roles, start freelance businesses, or even continue their education in more advanced tech fields. The ripple effects are profound—when one person gains digital skills, they often become a resource for their entire family and community.</p>

        <h2 class="text-3xl font-bold mt-8 mb-4 text-primary">Community Transformation in Action</h2>
        <p class="mb-4">The true measure of our success isn't just in individual achievements but in community transformation. When our graduates return to their communities with new skills, several things happen:</p>
        
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Economic Growth:</strong> Skilled workers create businesses that generate income and provide services</li>
          <li><strong>Knowledge Transfer:</strong> Graduates often train others informally, multiplying the impact</li>
          <li><strong>Community Pride:</strong> Success stories inspire others to pursue their own development</li>
          <li><strong>Social Stability:</strong> Employment reduces crime and strengthens family structures</li>
          <li><strong>Kingdom Impact:</strong> Christian graduates become lights in their workplaces and neighborhoods</li>
        </ul>

        <h2 class="text-3xl font-bold mt-8 mb-4 text-primary">The Faith Integration Difference</h2>
        <p class="mb-4">What makes our programs unique is the integration of Christian faith into every aspect of training. We don't just teach skills—we disciple workers. Our students learn that excellence in their craft is a form of worship, that honest business practices honor God, and that their work can be a ministry platform.</p>
        
        <p class="mb-6">This holistic approach produces graduates who are not only skilled but also ethical, reliable, and driven by purpose beyond profit.</p>

        <h2 class="text-3xl font-bold mt-8 mb-4 text-primary">Looking Forward</h2>
        <p class="mb-4">As we continue to expand our short-term training programs, we're excited about the possibilities. We're exploring partnerships with local businesses for apprenticeship opportunities, developing advanced modules for returning students, and creating pathways that connect short-term training to longer diploma programs.</p>
        
        <p class="mb-6">The need is urgent, and the opportunity is vast. Every three months, we have the chance to change dozens of lives. Every year, we impact hundreds of families. Over time, we're helping to transform communities across Nigeria.</p>
        
        <p class="font-semibold">If you or someone you know could benefit from intensive, practical training that combines skills development with Christian values, we encourage you to explore our short-term programs. The investment is minimal, but the returns—for individuals, families, and communities—are immeasurable.</p>
      </div>
    `,
    author: "Rev. Victor Babamuboni",
    date: "2024-02-15",
    readTime: "5 min read",
    category: "Skills Training"
  }
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center py-20">
          <div className="text-center max-w-md mx-auto px-4">
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
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="bg-gradient-to-r from-primary via-primary to-primary-dark py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog">
            <Button variant="outline" className="mb-8 text-white border-white hover:bg-white hover:text-primary">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
          
          <Badge className="mb-4 bg-white/20 text-white border-white/30">{post.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div 
          className="prose prose-lg max-w-none
            prose-headings:text-foreground 
            prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4
            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
            prose-ul:text-muted-foreground prose-ul:mb-6
            prose-li:mb-2
            prose-strong:text-foreground prose-strong:font-semibold
            prose-blockquote:border-l-4 prose-blockquote:border-primary 
            prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:my-8
            prose-blockquote:text-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
        <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/10">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Future?</h3>
          <p className="text-muted-foreground mb-6">
            Discover how Birthright Mission Institute can help you develop the skills and spiritual foundation you need to make a lasting impact.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/programs">
              <Button size="lg">Explore Our Programs</Button>
            </Link>
            <Link to="/admissions">
              <Button size="lg" variant="outline">Apply Now</Button>
            </Link>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
