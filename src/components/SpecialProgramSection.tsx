import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import teachingCrusadeHero from '@/assets/teaching-crusade-hero.jpg';

const SpecialProgramSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const targetDate = new Date('2025-11-24T10:00:00').getTime();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-6">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Special Program</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Teaching Crusade for <span className="text-accent">Creativity</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop the job hunting, come learn how to create one. A transformative program for unemployed graduates and aspiring entrepreneurs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={teachingCrusadeHero}
                alt="Teaching Crusade for Creativity Program"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Program Details */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Introducing Jesus for Creativity
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span>November 24-29, 2025</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="h-5 w-5 text-accent" />
                  <span>10:00 AM - 5:00 PM Daily</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>Sackey Hall, Tamale College of Education</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Users className="h-5 w-5 text-accent" />
                  <span>Free Registration • Lunch Provided</span>
                </div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-card rounded-xl p-6 border shadow-soft">
              <h4 className="text-lg font-semibold text-center mb-4 text-foreground">
                Program Starts In:
              </h4>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="bg-accent/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-accent">{timeLeft.days}</div>
                  <div className="text-sm text-muted-foreground">Days</div>
                </div>
                <div className="bg-accent/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-accent">{timeLeft.hours}</div>
                  <div className="text-sm text-muted-foreground">Hours</div>
                </div>
                <div className="bg-accent/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-accent">{timeLeft.minutes}</div>
                  <div className="text-sm text-muted-foreground">Minutes</div>
                </div>
                <div className="bg-accent/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-accent">{timeLeft.seconds}</div>
                  <div className="text-sm text-muted-foreground">Seconds</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              Designed for unemployed graduates and individuals who want to be their own boss, this program equips you with creative skills and an entrepreneurial mindset through Jesus-centered creativity principles.
            </p>

            {/* CTA Button */}
            <Button asChild size="xl" className="w-full sm:w-auto">
              <Link to="/teaching-crusade">
                Learn More & Register
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialProgramSection;