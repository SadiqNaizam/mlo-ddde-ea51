import React from 'react';
import { Link } from 'react-router-dom';

// Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Custom Page Components
import InteractiveBuildingModel from '@/components/InteractiveBuildingModel';
import DepartmentCard, { DepartmentStat } from '@/components/DepartmentCard';

// shadcn/ui Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Icons for stats
import { BrainCircuit, Atom, Users, BookOpen } from 'lucide-react';

// Placeholder data for Department Cards
const departments = [
  {
    name: 'AI & Machine Learning',
    tagline: 'Pioneering the future of intelligent systems.',
    imageUrl: 'https://images.unsplash.com/photo-1599050751985-5088d1549591?q=80&w=2070&auto=format&fit=crop',
    link: '/academics -hub', // Path from App.tsx
    stats: [
      { label: 'Faculty', value: '150+', Icon: Users },
      { label: 'Research Labs', value: '32', Icon: BrainCircuit },
      { label: 'Publications', value: '1,200+', Icon: BookOpen },
    ] as DepartmentStat[],
  },
  {
    name: 'Quantum Computing',
    tagline: 'Building the next generation of computation.',
    imageUrl: 'https://images.unsplash.com/photo-1635070045041-28fd3d072462?q=80&w=1932&auto=format&fit=crop',
    link: '/academics -hub', // Path from App.tsx
    stats: [
      { label: 'Faculty', value: '75+', Icon: Users },
      { label: 'Qubits Achieved', value: '512', Icon: Atom },
      { label: 'Patents', value: '80+', Icon: BookOpen },
    ] as DepartmentStat[],
  },
];

const Homepage = () => {
  console.log('Homepage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full">
          <InteractiveBuildingModel />
        </section>

        {/* Introduction Section */}
        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              Engineering the Future, Today.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground font-body">
              Aethelred Institute is where the brightest minds converge to solve the world's most pressing challenges. We are a crucible of innovation, a nexus of discovery, and a gateway to the future of technology.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="text-lg">
                <Link to="/admissions ">Discover Your Potential</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Departments Showcase Section */}
        <section className="bg-secondary/50 py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
                Our Core Disciplines
              </h2>
              <p className="mt-4 text-lg text-muted-foreground font-body max-w-2xl mx-auto">
                Explore the research and academic centers that form the bedrock of our institution.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {departments.map((dept) => (
                <DepartmentCard key={dept.name} {...dept} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Generic Card Section for News/Events */}
        <section className="py-24 sm:py-32">
            <div className="container mx-auto px-4 max-w-5xl">
                <Card className="bg-card border shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto">
                        <img 
                            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
                            alt="Students walking on campus"
                            className="w-full h-full object-cover"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <CardHeader className="p-0 mb-4">
                           <CardTitle className="font-heading text-3xl font-bold">
                               Campus & Global Impact
                           </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <p className="font-body text-muted-foreground mb-6">
                                From breakthroughs in our state-of-the-art labs to our worldwide initiatives, discover the latest news and stories from the Aethelred community.
                            </p>
                            <Button asChild>
                               <Link to="/research & -innovation -hub">Read More News</Link>
                            </Button>
                        </CardContent>
                    </div>
                </Card>
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Homepage;