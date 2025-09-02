import { Link } from 'react-router-dom';
import {Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const date = new Date().getFullYear();
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Departments', href: '/departments' },
    { name: 'Programs', href: '/programs' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const programs = [
    { name: 'Ministry & Theology', href: '/programs#ministry' },
    { name: 'Skills Acquisition', href: '/programs#skills' },
    { name: 'Information Technology', href: '/programs#it' },
    { name: 'Leadership & Management', href: '/programs#leadership' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'YouTube', href: '#', icon: Youtube }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div>
                <img 
                  src={logo} 
                  alt="Birthright Mission Institute Logo" 
                  className="h-12 w-12 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Birthright Mission</h3>
                <p className="text-sm opacity-80">Institute</p>
              </div>
            </Link>
            <p className="text-sm opacity-80 mb-6 leading-relaxed">
              Empowering a new generation of seasoned teachers, missionaries, evangelists, and ministers of the Gospel to effectively spread the message of Christ, transforming lives and communities worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link
                    to={program.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="text-sm opacity-80">
                    Gumani, Near Kesmi Fm Radio,<br />
                    Tamale, Ghana
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <p className="text-sm opacity-80">+233 24 107  5236</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <p className="text-sm opacity-80">birthrightchildrenministries@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">
            © {date} Birthright Mission Institute. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Terms of Service
            </Link>
            <Link to="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;