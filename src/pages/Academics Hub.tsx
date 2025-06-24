import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DepartmentCard, { DepartmentStat } from '@/components/DepartmentCard';
import { BrainCircuit, Atom, Dna, CodeXml, Sigma, Rocket, Users, FlaskConical, FileText, Award, Github, GraduationCap } from 'lucide-react';

const departments: {
  name: string;
  tagline: string;
  imageUrl: string;
  link: string;
  stats: DepartmentStat[];
}[] = [
  {
    name: 'AI & Machine Learning',
    tagline: 'Pioneering the future of intelligence, from neural networks to large language models.',
    imageUrl: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?q=80&w=2574&auto=format&fit=crop',
    link: '/academics -hub',
    stats: [
      { label: 'Faculty', value: 45, Icon: Users },
      { label: 'Research Labs', value: 12, Icon: FlaskConical },
      { label: 'Publications', value: '300+', Icon: FileText },
    ],
  },
  {
    name: 'Quantum Computing',
    tagline: 'Exploring the fundamental fabric of reality to build the next generation of computers.',
    imageUrl: 'https://images.unsplash.com/photo-1635070045091-925821e2e602?q=80&w=2670&auto=format&fit=crop',
    link: '/academics -hub',
    stats: [
      { label: 'Researchers', value: 28, Icon: Users },
      { label: 'Active Qubits', value: '128', Icon: Atom },
      { label: 'Patents Filed', value: 15, Icon: Award },
    ],
  },
  {
    name: 'Bioengineering',
    tagline: 'Engineering biological systems to solve challenges in health, materials, and energy.',
    imageUrl: 'https/images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2574&auto=format&fit=crop',
    link: '/academics -hub',
    stats: [
      { label: 'Core Faculty', value: 35, Icon: Users },
      { label: 'CRISPR Projects', value: '50+', Icon: Dna },
      { label: 'Graduates', value: '1.2k', Icon: GraduationCap },
    ],
  },
  {
    name: 'Software Systems',
    tagline: 'Architecting robust, scalable, and secure software for a connected world.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop',
    link: '/academics -hub',
    stats: [
      { label: 'Professors', value: 52, Icon: Users },
      { label: 'Open Source', value: 80, Icon: Github },
      { label: 'Core Languages', value: 6, Icon: CodeXml },
    ],
  },
  {
    name: 'Aerospace Engineering',
    tagline: 'Designing and building the next generation of aircraft and spacecraft.',
    imageUrl: 'https/images.unsplash.com/photo-1614728263952-84ea256ec677?q=80&w=2574&auto=format&fit=crop',
    link: '/academics -hub',
    stats: [
      { label: 'Engineers', value: 60, Icon: Users },
      { label: 'Missions', value: 8, Icon: Rocket },
      { label: 'Publications', value: '150+', Icon: FileText },
    ],
  },
  {
    name: 'Applied Mathematics',
    tagline: 'Developing the theoretical foundations that underpin all modern engineering.',
    imageUrl: 'https/images.unsplash.com/photo-1635372722652-320443376127?q=80&w=2574&auto=format&fit=crop',
    link: '/academics -hub',
    stats: [
      { label: 'Mathematicians', value: 30, Icon: Users },
      { label: 'Core Theories', value: 18, Icon: Sigma },
      { label: 'Active Grants', value: 22, Icon: Award },
    ],
  },
];

const AcademicsHub = () => {
  console.log('Academics Hub loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-grow">
        <div className="container max-w-screen-2xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground">
              Academic Disciplines
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground font-body">
              Discover the cutting-edge fields of study that define our institution. Each department is a center of excellence, driving innovation and shaping the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {departments.map((dept) => (
              <DepartmentCard
                key={dept.name}
                name={dept.name}
                tagline={dept.tagline}
                imageUrl={dept.imageUrl}
                link={dept.link}
                stats={dept.stats}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AcademicsHub;