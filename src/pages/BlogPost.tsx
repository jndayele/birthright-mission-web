import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, User, ArrowLeft } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Christian Entrepreneurship and Community Development: Empowering Communities through Business",
    excerpt: "Explore how Christian entrepreneurs can make a positive impact through community development and economic empowerment, creating jobs and serving others.",
    content: `
      <p>As a Christian entrepreneur, you're likely driven by a desire to make a positive impact in the world. One way to do this is through community development and economic empowerment. By starting a business in your community, you can create jobs, stimulate economic growth, and provide valuable goods and services to your neighbors. In this article, we'll explore the role of Christian entrepreneurs in community development and economic empowerment.</p>
      
      <h2>The Biblical Basis for Community Development</h2>
      <p>The Bible teaches us that we are called to care for the poor and vulnerable in our communities. In Matthew 25:31-46, Jesus teaches us that our treatment of others will be a key factor in God's judgment. As Christian entrepreneurs, we have a responsibility to use our businesses as a means of serving others and making a positive impact in our communities.</p>
      
      <h2>The Role of Christian Entrepreneurs in Community Development</h2>
      <p>Christian entrepreneurs have a unique opportunity to make a positive impact in their communities. Here are a few ways that you can get involved in community development and economic empowerment:</p>
      <ol>
        <li><strong>Create jobs:</strong> One of the most effective ways to stimulate economic growth in your community is to create jobs. By hiring local employees, you can provide income and stability to families in your community.</li>
        <li><strong>Provide valuable goods and services:</strong> By providing valuable goods and services, you can meet the needs of your community and help to improve the quality of life for your neighbors.</li>
        <li><strong>Partner with local organizations:</strong> Consider partnering with local organizations, such as churches or non-profits, to amplify your impact and make a greater difference in your community.</li>
        <li><strong>Mentor and train others:</strong> Consider mentoring and training others in your community who are interested in starting their own businesses.</li>
      </ol>
      
      <h2>Examples of Christian Entrepreneurs Making a Positive Impact</h2>
      <p>There are many examples of Christian entrepreneurs who are making a positive impact in their communities. Here are a few:</p>
      <ul>
        <li><strong>Blum Global:</strong> Blum Global is a business that provides clean water and sanitation to communities in need around the world.</li>
        <li><strong>Chick-fil-A:</strong> Chick-fil-A is a fast-food chain that has a strong commitment to serving the community and supporting local charities.</li>
        <li><strong>Thrive Market:</strong> Thrive Market is an online marketplace that provides healthy and sustainable products to customers while also supporting farmers and suppliers who are making a positive impact in their communities.</li>
      </ul>
      
      <h2>Benefits of Community Development</h2>
      <p>There are many benefits to community development, including:</p>
      <ul>
        <li><strong>Economic growth:</strong> Community development can stimulate economic growth and create new opportunities for businesses and individuals.</li>
        <li><strong>Improved quality of life:</strong> Community development can help to improve the quality of life for residents by providing access to valuable goods and services.</li>
        <li><strong>Increased community engagement:</strong> Community development can help to build stronger, more engaged communities.</li>
      </ul>
      
      <h2>Challenges and Opportunities</h2>
      <p>While community development can be rewarding, there are also challenges and opportunities to consider:</p>
      <ul>
        <li><strong>Limited resources:</strong> Community development often requires significant resources, including funding, expertise, and time.</li>
        <li><strong>Complexity of issues:</strong> Community development often involves addressing complex issues, such as poverty and inequality.</li>
        <li><strong>Partnerships and collaboration:</strong> Community development often requires partnerships and collaboration between different organizations and stakeholders.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>As a Christian entrepreneur, you have a unique opportunity to make a positive impact in your community through community development and economic empowerment. By creating jobs, providing valuable goods and services, and partnering with local organizations, you can help to stimulate economic growth and improve the quality of life for your neighbors. Remember to seek God's guidance and support as you seek to make a positive impact in your community.</p>
      
      <h2>Action Step</h2>
      <p>Take some time to reflect on your business and how you can make a positive impact in your community. Ask yourself:</p>
      <ul>
        <li>What are my values and mission as a business owner?</li>
        <li>How can I use my business to serve others and make a positive impact in my community?</li>
        <li>What partnerships or collaborations can I form to amplify my impact?</li>
      </ul>
      <p>Consider seeking guidance from other Christian entrepreneurs or community development experts who can provide support and accountability. Pray for wisdom and guidance as you seek to make a positive impact in your community.</p>
      
      <h2>Prayer</h2>
      <p><em>Dear Heavenly Father, I pray for wisdom and guidance as I seek to make a positive impact in my community through community development and economic empowerment. Help me to use my business as a means of serving others and making a difference in the world. May my business be a reflection of Your love and values. In Jesus' name, Amen.</em></p>
    `,
    author: "Rev. Victor Babamuboni",
    date: "2024-02-15",
    readTime: "8 min read",
    category: "Entrepreneurship",
    image: "/api/placeholder/800/400"
  },
  {
    id: 2,
    title: "Faith and Finances: Managing Your Business Finances with Wisdom",
    excerpt: "Discover biblical principles for managing business finances with wisdom, honesty, and integrity while honoring God.",
    content: `
      <p>As a Christian entrepreneur, you're likely looking for ways to manage your business finances in a way that honors God and reflects your values. Managing finances is a crucial aspect of running a successful business, and it's essential to do it with wisdom and integrity. In this article, we'll explore biblical principles for managing your business finances and provide practical tips for making wise financial decisions.</p>
      
      <h2>Biblical Principles for Managing Finances</h2>
      <p>The Bible provides many principles for managing finances that can be applied to business. Here are a few key principles:</p>
      <ol>
        <li><strong>Stewardship:</strong> The Bible teaches that we are stewards of God's resources, and we are responsible for using them wisely. (1 Corinthians 4:2)</li>
        <li><strong>Honesty:</strong> The Bible emphasizes the importance of honesty and integrity in all our dealings, including financial transactions. (Proverbs 10:9)</li>
        <li><strong>Contentment:</strong> The Bible teaches us to be content with what we have and to avoid covetousness. (Philippians 4:11-12)</li>
        <li><strong>Generosity:</strong> The Bible encourages us to be generous and to use our resources to bless others. (2 Corinthians 9:6-7)</li>
      </ol>
      
      <h2>Practical Tips for Managing Business Finances</h2>
      <p>Here are some practical tips for managing your business finances with wisdom:</p>
      <ol>
        <li><strong>Create a budget:</strong> Create a budget that outlines your income and expenses, and stick to it.</li>
        <li><strong>Prioritize needs over wants:</strong> Prioritize your business needs over your wants, and avoid unnecessary expenses.</li>
        <li><strong>Save for the future:</strong> Save a portion of your profits for the future, and consider investing in a diversified portfolio.</li>
        <li><strong>Avoid debt:</strong> Avoid debt whenever possible, and work to pay off any existing debt.</li>
        <li><strong>Give generously:</strong> Give generously to others, and consider supporting causes and charities that align with your values.</li>
      </ol>
      
      <h2>Biblical Examples of Financial Management</h2>
      <p>The Bible provides many examples of financial management that can be applied to business. Here are a few examples:</p>
      <ul>
        <li><strong>Joseph's management of Pharaoh's resources:</strong> Joseph's management of Pharaoh's resources is a great example of wise financial management. (Genesis 41:37-57)</li>
        <li><strong>The widow's oil:</strong> The story of the widow's oil is a great example of God's provision and blessing on those who are faithful and wise in their financial management. (2 Kings 4:1-7)</li>
      </ul>
      
      <h2>Benefits of Managing Finances with Wisdom</h2>
      <p>Managing your business finances with wisdom can have many benefits, including:</p>
      <ul>
        <li><strong>Financial stability:</strong> Managing your finances with wisdom can help you achieve financial stability and security.</li>
        <li><strong>Increased giving:</strong> When you manage your finances with wisdom, you may have more resources available to give to others.</li>
        <li><strong>Better decision-making:</strong> Managing your finances with wisdom can help you make better decisions about how to use your resources.</li>
      </ul>
      
      <h2>Challenges and Opportunities</h2>
      <p>While managing finances with wisdom is essential, there are also challenges and opportunities to consider:</p>
      <ul>
        <li><strong>Financial stress:</strong> Financial stress can be a significant challenge for business owners. Seek God's guidance and support from others to help you navigate financial challenges.</li>
        <li><strong>Temptation:</strong> There may be temptations to compromise your values or take risks with your finances. Seek God's guidance and accountability from others to help you stay grounded.</li>
        <li><strong>Opportunities for generosity:</strong> Managing your finances with wisdom can provide opportunities for generosity and blessing others.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Managing your business finances with wisdom is essential for achieving financial stability and security. By applying biblical principles and practical tips, you can make wise financial decisions that honor God and reflect your values. Remember to prioritize stewardship, honesty, contentment, and generosity, and seek God's guidance and support in all your financial decisions.</p>
      
      <h2>Action Step</h2>
      <p>Take some time to reflect on your business finances and how you can manage them with wisdom. Ask yourself:</p>
      <ul>
        <li>What are my financial goals and priorities?</li>
        <li>How can I prioritize needs over wants and avoid unnecessary expenses?</li>
        <li>How can I give generously to others and support causes that align with my values?</li>
      </ul>
      <p>Consider seeking guidance from a financial advisor or mentor who can provide support and accountability. Pray for wisdom and guidance as you seek to manage your business finances with wisdom.</p>
      
      <h2>Prayer</h2>
      <p><em>Dear Heavenly Father, I pray for wisdom and guidance as I seek to manage my business finances with wisdom. Help me to prioritize stewardship, honesty, contentment, and generosity, and to make wise financial decisions that honor You. May my business be a reflection of Your love and values. In Jesus' name, Amen.</em></p>
    `,
    author: "Rev. Victor Babamuboni",
    date: "2024-02-10",
    readTime: "7 min read",
    category: "Finance",
    image: "/api/placeholder/800/400"
  },
  {
    id: 3,
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
    id: 4,
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
  }
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