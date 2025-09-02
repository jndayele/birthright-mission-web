import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import PresVice from "@/assets/pres-vice.jpg"
import BMI from "@/assets/bmi.jpg"
import Students from "@/assets/student-short-tem-certificate.jpg"
import pres from "@/assets/pres.jpg"

const GalleryPreview = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const galleryItems = [
    {
      id: 1,
      src: PresVice,
      title: 'President and Vice President',
      category: 'Leaders',
      description: 'The President, Rev. Victor and Vice President Counsellor Debby'
    },
    {
      id: 2,
      src: BMI,
      title: 'Faculty Members',
      category: 'Academic Life',
      description: 'Faculty Members of Birthright Mission Institute'
    },
      {
      id: 1,
      src: pres,
      title: 'President',
      category: 'Leaders',
      description: 'The President, Rev. Victor Abimbola Babamuboni'
    },
    {
      id: 4,
      src: Students,
      title: 'Short Term Course Students',
      category: 'Academic Life',
      description: 'Current students undergoing 3-Month Short-Term Certificate Course in Missions'
    }
  ];

  return (
    <section className="py-20 section-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Birthright Mission Institute Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get a glimpse of life at Birthright Mission Institute through our activities 
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {galleryItems.map((item) => (
                <div key={item.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                  <Card className="card-elevated hover-lift group overflow-hidden h-full">
                    <div className="relative">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="inline-block px-2 py-1 bg-accent rounded-full text-xs font-medium text-accent-foreground mb-2">
                          {item.category}
                        </span>
                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm opacity-90">{item.description}</p>
                      </div>
                      <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Eye className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Experience More of our Life Gallery
            </h3>
            <p className="text-muted-foreground mb-6">
              Explore more Gallery of Birthright Mission Institute.
            </p>
            <Button asChild variant="default" size="lg" className="group">
              <Link to="/gallery">
                View Full Gallery
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;