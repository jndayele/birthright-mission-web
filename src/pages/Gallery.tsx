import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Users, BookOpen, Wrench, Heart, Loader2 } from 'lucide-react';
import BMI from "@/assets/bmi.jpg"
import PresVice from "@/assets/pres-vice.jpg"
import Student from "@/assets/student-short-tem-certificate.jpg"
import victor from "@/assets/victor.jpg"
import pres from "@/assets/pres.jpg"
import commissioning from "@/assets/comminisioning.jpeg"
import coordinatorGift from "@/assets/coordinator_gift.jpeg"
import event from "@/assets/event.jpeg"
import facultyLecturers from "@/assets/faculty_lecturers.jpeg"
import facultyMembers from "@/assets/faculty_members.jpeg"
import facultyPraying from "@/assets/faculty_praying.jpeg"
import graduation1 from "@/assets/graduation1.jpeg"
import lecturersPraying from "@/assets/lecturers_praying.jpeg"
import presCoordinator from "@/assets/pres_coordinator.jpeg"
import presCorGift from "@/assets/pres_cor_gift.jpeg"
import presidentCoor from "@/assets/president_coor.jpeg"
import presidentGivingGift from "@/assets/president_gicving_gift.jpeg"
import presidentGift from "@/assets/president_gift.jpeg"
import stuFaculty from "@/assets/stu_faculty.jpeg"
import studentImg from "@/assets/student.jpeg"
import studentGift1 from "@/assets/student_gift1.jpeg"
import studentGift2 from "@/assets/student_gift2.jpeg"
import studentGift3 from "@/assets/student_gift3.jpeg"
import studentThanks from "@/assets/student_thanks.jpeg"
import studentVote from "@/assets/student_vote.jpeg"


const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { name: 'All', filter: 'all', icon: Eye },
    { name: 'Academic Life', filter: 'academic', icon: BookOpen },
    { name: 'Leaders', filter: 'leader', icon: Wrench },
    { name: 'Community', filter: 'community', icon: Users },
    { name: 'Worship', filter: 'worship', icon: Heart },
  ];

  const galleryItems = [
    {
      id: 1,
      src: PresVice,
      title: 'Leaders',
      description: 'President, Mr. Victor and Vice President Counsellor Debby',
      category: 'leader',
      tags: ['Leader', 'President', 'Academic']
    },
    {
      id: 2,
      src: BMI,
      title: 'Faculty Members',
      description: 'Faculty Members of Birthright Mission Institute',
      category: 'leader',
      tags: ['Faculty', 'Member', 'Leader']
    },
    {
      id: 3,
      src: pres,
      title: 'Rev. Victor Babamuboni',
      description: 'Our esteemed President of this institution',
      category: 'leader',
      tags: ['Reverend', 'Leader', 'Mission']
    },
    {
      id: 4,
      src: Student,
      title: 'Mission Students',
      description: 'Current Students undergoing 3-Month Short-Term Certificate Course in Missions',
      category: 'academic',
      tags: ['Certificate', 'Students', 'Academic']
    },
    {
      id: 5,
      src: victor,
      title: 'President of Birthright Mission Institute',
      description: 'Stunning picture of Rev. Victor Abimbola Babamuboni',
      category: 'leader',
      tags: ['Birthright', 'President', 'Mission']
    },
    {
      id: 6,
      src: commissioning,
      title: 'Commissioning Ceremony',
      description: 'Special commissioning ceremony for new graduates',
      category: 'academic',
      tags: ['Commissioning', 'Ceremony', 'Graduation']
    },
    {
      id: 7,
      src: coordinatorGift,
      title: 'Coordinator Appreciation',
      description: 'Coordinator receiving appreciation gift for service',
      category: 'academic',
      tags: ['Coordinator', 'Gift', 'Appreciation']
    },
    {
      id: 8,
      src: event,
      title: 'Institute Event',
      description: 'Special event at Birthright Mission Institute',
      category: 'academic',
      tags: ['Event', 'Institute', 'Community']
    },
    {
      id: 9,
      src: facultyLecturers,
      title: 'Faculty Lecturers',
      description: 'Dedicated lecturers of our academic faculty',
      category: 'academic',
      tags: ['Faculty', 'Lecturers', 'Education']
    },
    {
      id: 10,
      src: facultyMembers,
      title: 'Faculty Team',
      description: 'Our distinguished faculty members in session',
      category: 'academic',
      tags: ['Faculty', 'Team', 'Academic']
    },
    {
      id: 11,
      src: facultyPraying,
      title: 'Faculty Prayer',
      description: 'Faculty members in prayer and fellowship',
      category: 'academic',
      tags: ['Faculty', 'Prayer', 'Fellowship']
    },
    {
      id: 12,
      src: graduation1,
      title: 'Graduation Ceremony',
      description: 'Celebrating our graduating students',
      category: 'academic',
      tags: ['Graduation', 'Students', 'Achievement']
    },
    {
      id: 13,
      src: lecturersPraying,
      title: 'Lecturers in Prayer',
      description: 'Lecturers gathered in prayer session',
      category: 'academic',
      tags: ['Lecturers', 'Prayer', 'Spiritual']
    },
    {
      id: 14,
      src: presCoordinator,
      title: 'President with Coordinator',
      description: 'President meeting with program coordinator',
      category: 'academic',
      tags: ['President', 'Coordinator', 'Leadership']
    },
    {
      id: 15,
      src: presCorGift,
      title: 'Presidential Gift',
      description: 'President presenting gift to coordinator',
      category: 'academic',
      tags: ['President', 'Gift', 'Recognition']
    },
    {
      id: 16,
      src: presidentCoor,
      title: 'Leadership Meeting',
      description: 'President and coordinator in discussion',
      category: 'academic',
      tags: ['Leadership', 'Meeting', 'Coordination']
    },
    {
      id: 17,
      src: presidentGivingGift,
      title: 'President Giving Gift',
      description: 'President presenting special gift',
      category: 'academic',
      tags: ['President', 'Gift', 'Ceremony']
    },
    {
      id: 18,
      src: presidentGift,
      title: 'Presidential Recognition',
      description: 'Presidential gift presentation ceremony',
      category: 'academic',
      tags: ['President', 'Recognition', 'Honor']
    },
    {
      id: 19,
      src: stuFaculty,
      title: 'Students and Faculty',
      description: 'Students with faculty members interaction',
      category: 'academic',
      tags: ['Students', 'Faculty', 'Interaction']
    },
    {
      id: 20,
      src: studentImg,
      title: 'Student Life',
      description: 'Students engaged in academic activities',
      category: 'academic',
      tags: ['Students', 'Academic', 'Learning']
    },
    {
      id: 21,
      src: studentGift1,
      title: 'Student Recognition 1',
      description: 'Student receiving recognition gift',
      category: 'academic',
      tags: ['Student', 'Gift', 'Achievement']
    },
    {
      id: 22,
      src: studentGift2,
      title: 'Student Recognition 2',
      description: 'Another student receiving appreciation',
      category: 'academic',
      tags: ['Student', 'Recognition', 'Excellence']
    },
    {
      id: 23,
      src: studentGift3,
      title: 'Student Recognition 3',
      description: 'Student being honored for achievement',
      category: 'academic',
      tags: ['Student', 'Honor', 'Success']
    },
    {
      id: 24,
      src: studentThanks,
      title: 'Student Gratitude',
      description: 'Student expressing gratitude and thanks',
      category: 'academic',
      tags: ['Student', 'Gratitude', 'Appreciation']
    },
    {
      id: 25,
      src: studentVote,
      title: 'Student Voting',
      description: 'Students participating in voting process',
      category: 'academic',
      tags: ['Student', 'Voting', 'Democracy']
    },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);
  
  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;
  
  const loadMore = () => {
    setIsLoading(true);
    // Add loading effect
    setTimeout(() => {
      setVisibleCount(prev => prev + 6);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Birthright Mission Institute Gallery
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Explore life at Birthright Mission Institute through our activities
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Badge
                key={category.filter}
                variant={activeCategory === category.filter ? 'default' : 'outline'}
                className={`cursor-pointer transition-colors px-4 py-2 ${
                  activeCategory === category.filter 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-primary/10 hover:text-primary'
                }`}
                onClick={() => setActiveCategory(category.filter)}
              >
                <category.icon className="h-4 w-4 mr-2" />
                {category.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedItems.map((item) => (
              <Card key={item.id} className="card-elevated hover-lift group overflow-hidden">
                <div className="relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90 mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* View Icon */}
                  <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="h-5 w-5 text-white" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Load More Button */}
          {hasMore && (
            <div className="flex justify-center mt-12">
              <Button 
                onClick={loadMore}
                variant="outline" 
                size="lg"
                className="px-8 py-3 transition-all duration-300 hover:scale-105"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Loading...
                  </>
                ) : (
                  'Load More Images'
                )}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 section-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
             Birthright Mission by the Numbers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our vibrant institution continues to grow and thrive
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">Students Enrolled</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">25+</div>
              <p className="text-muted-foreground">Faculty Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <p className="text-muted-foreground">Programs Offered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">Graduates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Experience the transformative power of education at Birthright Mission Institute
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="btn-accent px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-strong"
            >
              Apply Now
            </a>
            <a
              href="/contact"
              className="btn-outline px-8 py-3 rounded-lg font-semibold transition-all border-white/30 text-white hover:bg-white/10"
            >
            Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
