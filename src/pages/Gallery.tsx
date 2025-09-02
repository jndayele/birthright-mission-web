import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Users, BookOpen, Wrench, Heart } from 'lucide-react';
import BMI from "@/assets/bmi.jpg"
import PresVice from "@/assets/pres-vice.jpg"
import Student from "@/assets/student-short-tem-certificate.jpg"
import victor from "@/assets/victor.jpg"
import pres from "@/assets/pres.jpg"


const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

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
    
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

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
            {filteredItems.map((item) => (
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