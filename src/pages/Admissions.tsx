import React, {useState} from 'react';
import {Helmet} from 'react-helmet';
import Navigation from '@/components/Navigation'; 
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  CheckCircle, 
  FileText, 
  User, 
  GraduationCap, 
  Clock, 
  Download,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import trainingCourse from '@/assets/training-course.png';
import DocumentUpload from '@/components/DocumentUpload';

const Admissions = () => {
    const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    program: "",
  });
const [files, setFiles] = useState<File[]>([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleProgramChange = (value) => {
    setFormValues((prev) => ({ ...prev, program: value }));
  };

const handleFileChange = (files: File[]) => {
  setFiles(files);
};
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const formData = new FormData();
    
    // Append all form values
    Object.entries(formValues).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // Append all files
    files.forEach((file, index) => {
      formData.append(`documents`, file); 
    });

    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/admissions`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Application submitted successfully");
      // Reset form
      setFormValues({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        program: "",
      });
      setFiles([]); // Reset files
    } else {
      toast.error(data.message || "Submission failed");
    }
  } catch (err) {
    toast.error("An error occurred. Please try again.");
    console.error(err);
  } finally {
    setLoading(false);
  }
};
  const phoneNumber = "+233241075236";
      const message = "I would like to submit my application for the special training";
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const requirements = [
    {
      title: 'Academic Requirements',
      items: [
        'Minimum Secondary School Certificate (WAEC/NECO/GCE)',
      ]
    },
    {
      title: 'Spiritual Requirements',
      items: [
        'Commitment to Christian values and lifestyle',
        'Willingness to participate in spiritual formation activities'
      ]
    },
    {
      title: 'Personal Requirements',
      items: [
        'Age 18 years and above',
        'Good moral character',
        'Commitment to complete the program'
      ]
    }
  ];

  const programOptions = [
    'Diploma in Ministry (2 years)',
    'Certificate in Theology (1 year)',
    'Diploma in Carpentry (2 years)',
    'Diploma in Welding and Fabrication (2 years)',
    'Diploma in Catering and Culinary Arts (2 years)',
    'Diploma in Computer Science (2 years)',
    'Certificate in IT Support (1 year)',
    'Diploma in Leadership and Management (2 years)',
    'Diploma in Community Development (2 years)',
    'Diploma in Missions and Evangelism (2 years)',
    'Short-Term Mission Training (3 months)',
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
       <Helmet>
        <title>Admissions | Birthright Mission Institute</title>
        <meta name="description" content="Learn more about how to apply for our courses and programs." />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Admissions
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Join our community of learners and leaders. Your journey to transformation starts here.
          </p>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Admission Requirements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We welcome students who are passionate about spiritual growth and practical skill development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <Card key={index} className="card-elevated hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{req.title}</h3>
                  <ul className="space-y-3">
                    {req.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
                Special Training Programs
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join our intensive short-term mission training programs designed to equip you for effective ministry and evangelism.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Comprehensive biblical foundation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Practical ministry skills</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Mission field preparation</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={trainingCourse} 
                alt="Mission Training Program Flyer" 
                className="max-w-md w-full rounded-lg shadow-lg hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 section-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Apply Online
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete your application form below or send your application letter to us via whatsapp
            </p>
          </div>

        <div className="flex justify-center mb-8">
  <Button 
    variant="outline" 
    size="lg" 
    className="group"
    onClick={() => {
      window.open(whatsappUrl, '_blank');
    }}
  >
    <Download className="h-5 w-5 mr-2" />
    Application Via Whatsapp
  </Button>
</div>

          <Card className="card-elevated">
            {loading && (
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center z-10 rounded-md">
          <div className="text-primary text-lg font-medium animate-pulse">Submitting...</div>
        </div>
      )}
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input name="firstName" value={formValues.firstName} onChange={handleInputChange} placeholder="Enter your first name" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input name="lastName" value={formValues.lastName} onChange={handleInputChange} placeholder="Enter your last name" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input name="email" value={formValues.email} onChange={handleInputChange} type="email" placeholder="Enter your email" required/>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input name="phone"value={formValues.phone} onChange={handleInputChange} type="tel" placeholder="Enter your phone number" required/>
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Textarea name="address" value={formValues.address} onChange={handleInputChange} placeholder="Enter your full address" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="program">Preferred Program *</Label>
                    <Select onValueChange={handleProgramChange} value={formValues.program} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                      <SelectContent>
                        {programOptions.map((program) => (
                          <SelectItem key={program} value={program}>
                            {program}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                
                </div>


          <DocumentUpload onFilesChange={handleFileChange} onUploadingChange={setLoading}/>

                <div className="text-center">
                  <Button type="submit" variant="default" size="lg">
                    Submit Application
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help with Your Application?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Our admissions team is here to help you through the process
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-white/10 rounded-lg mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <p className="font-semibold mb-2">Email</p>
              <p className="text-sm opacity-80">birthrightchildrenministries@gmail.com</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="p-3 bg-white/10 rounded-lg mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <p className="font-semibold mb-2">Phone</p>
              <p className="text-sm opacity-80">+233 24 107 5236</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="p-3 bg-white/10 rounded-lg mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <p className="font-semibold mb-2">Visit Us</p>
              <p className="text-sm opacity-80">Gumani Near Kesmin Fm, Tamale</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;