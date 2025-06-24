import React from 'react';
import { Link } from 'react-router-dom';
import { Atom, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container max-w-screen-2xl py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1 mb-6 lg:mb-0">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Atom className="h-7 w-7 text-primary" />
              <span className="font-heading text-lg font-bold">Aethelred Institute</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Pioneering the future of technology and engineering.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-semibold tracking-wider">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/academics -hub" className="hover:text-primary transition-colors">Academics</Link></li>
              <li><Link to="/research & -innovation -hub" className="hover:text-primary transition-colors">Research</Link></li>
              <li><Link to="/faculty -directory" className="hover:text-primary transition-colors">Faculty</Link></li>
              <li><Link to="/news" className="hover:text-primary transition-colors">News & Events</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-heading text-sm font-semibold tracking-wider">Admissions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/admissions " className="hover:text-primary transition-colors">Apply Now</Link></li>
              <li><Link to="/admissions " className="hover:text-primary transition-colors">Tuition & Aid</Link></li>
              <li><Link to="/admissions " className="hover:text-primary transition-colors">Visit Campus</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-heading text-sm font-semibold tracking-wider">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/library" className="hover:text-primary transition-colors">Library</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            &copy; {currentYear} Aethelred Institute of Technology. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="YouTube" className="text-muted-foreground hover:text-primary transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;