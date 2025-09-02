import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutPreview from '@/components/AboutPreview';
import FeaturedDepartments from '@/components/FeaturedDepartments';
import MandateSection from '@/components/MandateSection';
import TestimonialSection from '@/components/TestimonialSection';
import GalleryPreview from '@/components/GalleryPreview';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutPreview />
      <FeaturedDepartments />
      <MandateSection />
      <TestimonialSection />
      <GalleryPreview />
      <Footer />
    </div>
  );
};

export default Index;
