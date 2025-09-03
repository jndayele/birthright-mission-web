import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, CheckCircle, Star } from 'lucide-react';
import teachingCrusadeHero from '@/assets/teaching-crusade-hero.jpg';
import { useToast } from '@/hooks/use-toast';

const TeachingCrusade = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    education: '',
    fieldOfStudy: '',
    employmentStatus: '',
    wantToBusiness: '',
    motivation: '',
    hopes: '',
    experience: '',
    additionalInfo: '',
    hearAbout: '',
    availability: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    toast({
      title: "Registration Successful!",
      description: "Thank you for registering. We'll contact you with more details soon.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      age: '',
      education: '',
      fieldOfStudy: '',
      employmentStatus: '',
      wantToBusiness: '',
      motivation: '',
      hopes: '',
      experience: '',
      additionalInfo: '',
      hearAbout: '',
      availability: ''
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={teachingCrusadeHero}
            alt="Teaching Crusade for Creativity Program"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/70 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-accent/20 text-accent-foreground">
            Special Program 2025
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Teaching Crusade for <span className="text-accent-light">Creativity</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Introducing Jesus for Creativity
          </p>
          <div className="text-2xl md:text-3xl font-bold text-accent-light">
            STOP THE JOB HUNTING, COME LEARN HOW TO CREATE ONE
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Program Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Program Details</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-accent" />
                        <div>
                          <p className="font-semibold">Date</p>
                          <p className="text-muted-foreground">Monday 24th November, 2025 - Saturday 29th November 2025</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-accent" />
                        <div>
                          <p className="font-semibold">Time</p>
                          <p className="text-muted-foreground">10:00 AM - 5:00 PM Daily</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-accent" />
                        <div>
                          <p className="font-semibold">Venue</p>
                          <p className="text-muted-foreground">Sackey Hall, Tamale College of Education, Tamale</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-accent" />
                        <div>
                          <p className="font-semibold">Registration</p>
                          <p className="text-muted-foreground">FREE • Lunch Provided</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-accent" />
                      Who Should Attend?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span>Unemployed graduates</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span>Individuals who want to be their own boss</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span>Aspiring entrepreneurs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span>Anyone seeking creative skills and entrepreneurial mindset</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Registration Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Teaching Crusade for Creativity 2025 Registration Form</CardTitle>
                  <p className="text-muted-foreground">
                    Welcome to the Teaching Crusade for Creativity 2025! This program is designed to equip unemployed graduates and individuals who want to be their own boss with creative skills and entrepreneurial mindset. Please fill out this registration form to secure your spot.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Personal Details</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="age">Age *</Label>
                          <Input
                            id="age"
                            type="number"
                            value={formData.age}
                            onChange={(e) => handleInputChange('age', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Educational Background */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Educational Background</h3>
                      
                      <div>
                        <Label htmlFor="education">Highest Level of Education *</Label>
                        <Select value={formData.education} onValueChange={(value) => handleInputChange('education', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select education level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="diploma">Diploma</SelectItem>
                            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                            <SelectItem value="master">Master's Degree</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="fieldOfStudy">Field of Study *</Label>
                        <Input
                          id="fieldOfStudy"
                          value={formData.fieldOfStudy}
                          onChange={(e) => handleInputChange('fieldOfStudy', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Employment Status */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Employment Status</h3>
                      
                      <div>
                        <Label htmlFor="employmentStatus">Current Employment Status *</Label>
                        <Select value={formData.employmentStatus} onValueChange={(value) => handleInputChange('employmentStatus', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select employment status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="unemployed">Unemployed</SelectItem>
                            <SelectItem value="employed">Employed (part-time or full-time)</SelectItem>
                            <SelectItem value="entrepreneur">Entrepreneur/Self-Employed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="wantToBusiness">If employed, do you want to start your own business? *</Label>
                        <Select value={formData.wantToBusiness} onValueChange={(value) => handleInputChange('wantToBusiness', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                            <SelectItem value="maybe">Maybe</SelectItem>
                            <SelectItem value="na">Not Applicable</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Program Interest */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Program Interest</h3>
                      
                      <div>
                        <Label htmlFor="motivation">What motivated you to register for this program? *</Label>
                        <Textarea
                          id="motivation"
                          value={formData.motivation}
                          onChange={(e) => handleInputChange('motivation', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="hopes">What do you hope to achieve from this program? *</Label>
                        <Textarea
                          id="hopes"
                          value={formData.hopes}
                          onChange={(e) => handleInputChange('hopes', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Additional Information</h3>
                      
                      <div>
                        <Label htmlFor="experience">Do you have any previous experience in entrepreneurship or creative fields? *</Label>
                        <Textarea
                          id="experience"
                          value={formData.experience}
                          onChange={(e) => handleInputChange('experience', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="additionalInfo">Any other information you'd like to share about yourself?</Label>
                        <Textarea
                          id="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Registration Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Registration Details</h3>
                      
                      <div>
                        <Label htmlFor="hearAbout">How did you hear about this program? *</Label>
                        <Select value={formData.hearAbout} onValueChange={(value) => handleInputChange('hearAbout', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="website">Institute Website</SelectItem>
                            <SelectItem value="social-media">Social Media</SelectItem>
                            <SelectItem value="friend">Friend/Family</SelectItem>
                            <SelectItem value="church">Church</SelectItem>
                            <SelectItem value="flyer">Flyer/Poster</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="availability">Are you available to attend all 6 days of the program? *</Label>
                        <Select value={formData.availability} onValueChange={(value) => handleInputChange('availability', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes, all 6 days</SelectItem>
                            <SelectItem value="partial">Partial attendance</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button type="submit" size="xl" className="w-full">
                      Submit Registration
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeachingCrusade;