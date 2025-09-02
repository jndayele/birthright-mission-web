import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star, } from 'lucide-react';
import founderImage from '@/assets/president.jpg';

const TestimonialSection = () => {

  const testimonials = [
    {
      name: 'Christopher Addi',
      role: 'Graduate Student',
      content: 'Birthright Mission Institute has really imparted me in several ways in ministry. The institute has shaped my skills and knowledge regarding missions since 2022. After graduating from the mission school, i practically utilized what i learnt in BMI on the mission field. It has since been impactful and exciting. I pray for more grace for the authorities to continually render godly services to impact the world.',
      rating: 5
    },
    {
      name: 'Sandra Danamin',
      role: 'Graduate Student',
      content: "The Birthright Mission Institute has been an eye opener in the best way possible, it has taught me a lot about missions according to scripture and also broken down the relation between missions and culture just to mention the least, which playys a big role in my life. It's an acquired knowledge that will serve me for a lifetime and also makes me wishe I encountered this earlier. I bless the Lord for such an opportunity.",
      rating: 5
    },
    {
      name: 'Brefo Jonathan Seoul',
      role: 'Graduate Student',
      content: "Birthright Mission Institute has greatly impacted my life. As someone passionate about evangelism and missions, I seized the opportunity when I saw the advert- and I've never regretted it. My passion to reach the unreached has grown. The lecturers teach with clarity, simplicity, and real-life experience from years in the mission field. I'm truly grateful for this institute and thank God for the life of the founder, Rev. Victor, and his family.",
      rating: 5
    },
      {
      name: 'Comfort Iddrissu Napari',
      role: 'Graduate Student',
      content: "Glory be to God and thanks to Birthright Ministry Institute for the opportunity to grow in knowledge of God and missions. From day one, I've learnt the importance of the Great Commission and the need to reach the unreached. My passion to go as God leads has increased. I have learnt to seek God first, value children in missions, and respect cultures on the field. BMI has turly changed my mindset and deepen my walk with God. I am blessed to be part of this Great family. God bless BMI",
      rating: 5
    },
    {
      name: 'Pastor Daniel Kenaston',
      role: 'American Missionary in Ghana (Faculty Member)',
      content: "In my interaction with Birthright Mission Institute, I see the director (Rev Victor) and his wife pouring their passion for missions into the students. This passion, plus their willingness to share their mission experiences, are the strengths of this institute!. In addition, Rev is humble enough to bring other instructors into the teaching schedule, which adds breadth to the teaching.",
      rating: 5
    }
  ];

  const founderQuote = {
    text: "Our vision is to raise a generation of leaders who are not just academically excellent, but spiritually mature and practically skilled to transform their communities and nations for the glory of God.",
    author: "Rev. Victor Abimbola Babamuboni",
    title: "President of Birthright Mission Institute"
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Student Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our graduates about their transformative experience at Birthright Mission Institute
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-elevated hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-accent mr-3" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}

        </div>

        {/* Founder Quote */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <Quote className="h-12 w-12 text-accent mx-auto mb-6" />
            
            <blockquote className="text-xl md:text-2xl font-medium text-primary-foreground mb-8 italic">
              "{founderQuote.text}"
            </blockquote>
            
            <div className="text-primary-foreground flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-accent/30">
                <img 
                  src={founderImage} 
                  alt={`${founderQuote.author} - ${founderQuote.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg font-semibold">
                {founderQuote.author}
              </p>
              <p className="text-sm opacity-80">
                {founderQuote.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;