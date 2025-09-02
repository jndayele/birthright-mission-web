import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import OverlayLoader from '@/components/OverlayLoader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send
} from 'lucide-react';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [inquiryType, setInquiryType] = useState("");

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Gumani, Near Kesmi Fm Radio', 'Tamale, Ghana']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+233 24 107 5236', 'WhatsApp: +233 24 107 5236']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['birthrightchildrenministries@gmail.com']
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon - Fri: 8:00 AM - 5:00 PM', 'Sat: 9:00 AM - 2:00 PM', 'Sun: Closed']
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Information' },
    { value: 'admissions', label: 'Admissions Inquiry' },
    { value: 'programs', label: 'Programs Information' },
    { value: 'financial', label: 'Financial Aid' },
    { value: 'visit', label: 'Ministry Visit' },
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'other', label: 'Other' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      firstName: e.target.contactFirstName.value,
      lastName: e.target.contactLastName.value,
      email: e.target.contactEmail.value,
      phone: e.target.contactPhone.value,
      inquiryType,
      subject: e.target.subject.value,
      message: e.target.message.value
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await res.json();
      if (result.success) {
        toast.success("✅ Message sent successfully!");
        e.target.reset();
        setInquiryType("");
      } else {
        toast.error("❌ Failed to send message.");
      }
    } catch (err) {
      toast.error("⚠️ An error occurred while sending the message.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      {isLoading && <OverlayLoader />}
      <ToastContainer position="top-left" autoClose={4000} />
      <Navigation />
 <Helmet>
        <title>Contact | Birthright Mission Institute</title>
        <meta name="description" content="Learn more about how to contact us for any enquiries" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Get in touch with us for any questions about our programs, admissions, or to schedule a campus visit
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-elevated hover-lift text-center">
                <CardContent className="p-6">
                  <div className="p-3 bg-primary/10 rounded-lg inline-flex mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 section-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gradient mb-6">Send us a Message</h2>
              <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>

              <Card className="card-elevated">
                <CardContent className="p-8">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="contactFirstName">First Name *</Label>
                        <Input id="contactFirstName" name="contactFirstName" required />
                      </div>
                      <div>
                        <Label htmlFor="contactLastName">Last Name *</Label>
                        <Input id="contactLastName" name="contactLastName" required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="contactEmail">Email Address *</Label>
                        <Input id="contactEmail" name="contactEmail" type="email" required />
                      </div>
                      <div>
                        <Label htmlFor="contactPhone">Phone Number</Label>
                        <Input id="contactPhone" name="contactPhone" type="tel" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="inquiryType">Type of Inquiry *</Label>
                      <Select onValueChange={(value) => setInquiryType(value)} required>
                        <SelectTrigger id="inquiryType">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" name="subject" required />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" name="message" rows={5} required />
                    </div>

                    <Button type="submit" variant="default" size="lg" className="w-full group">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-gradient mb-6">Find Us</h2>
              <p className="text-muted-foreground mb-8">
                Visit our ministry to experience our learning environment firsthand.
              </p>

              <Card className="card-elevated mb-8">
                <CardContent className="p-0">
                  <div className="h-64 rounded-lg overflow-hidden">
                    <iframe
                      title="Good News Bible Church, Gumani"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62975.17084030239!2d-0.909291180070829!3d9.4259470964088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfd43d14277bf789%3A0xa251bc0ea2ac6de7!2sGood%20News%20Bible%20Church%20Gumani!5e0!3m2!1sen!2sgh!4v1752782227316!5m2!1sen!2sgh"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
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

export default Contact;
