import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Atom, Menu, Search } from 'lucide-react';
import MegaMenu from '@/components/MegaMenu'; // Assuming this component exists as per provided context

const Header: React.FC = () => {
  console.log('Header loaded');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close menus on route change
    setMenuOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    // Note: Paths are taken directly from App.tsx, including trailing spaces or hyphens
    { to: '/admissions ', label: 'Admissions' },
    { to: '/faculty -directory', label: 'Faculty' },
    { to: '/research & -innovation -hub', label: 'Research' },
  ];

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `transition-colors hover:text-primary ${
      isActive ? 'text-primary' : 'text-foreground/80'
    }`;

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <Link to="/" className="flex items-center gap-2" aria-label="Homepage">
            <Atom className="h-6 w-6 text-primary" />
            <span className="font-heading text-xl font-bold">Aethelred Institute</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Button
              variant="link"
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="text-foreground/80 hover:text-primary hover:no-underline"
            >
              Academics
            </Button>
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={navLinkClasses}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-4 mt-8">
                    <Link to="/" className="font-heading text-lg font-bold">Aethelred Institute</Link>
                    <div className="flex flex-col gap-3 pt-4">
                      <Link to="/academics -hub" className="text-lg font-medium hover:text-primary">Academics</Link>
                      {navLinks.map((link) => (
                        <Link key={`mobile-${link.to}`} to={link.to} className="text-lg font-medium hover:text-primary">
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
      {/* Mega Menu is rendered outside the header flow to act as an overlay */}
      {isMenuOpen && <MegaMenu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />}
    </>
  );
};

export default Header;