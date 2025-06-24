import React, { useState, useMemo } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FacultyProfileCard from '@/components/FacultyProfileCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';

const allFaculty = [
  { name: 'Dr. Evelyn Reed', title: 'Professor & Dept. Head', department: 'AI & Machine Learning', imageUrl: 'https://images.unsplash.com/photo-1580852300654-03c803a15e75?q=80&w=256&h=256&fit=crop&crop=faces' },
  { name: 'Dr. Samuel Chen', title: 'Associate Professor', department: 'Quantum Computing', imageUrl: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?q=80&w=256&h=256&fit=crop&crop=faces' },
  { name: 'Dr. Isabella Rossi', title: 'Assistant Professor', department: 'Bioengineering', imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286de2?q=80&w=256&h=256&fit=crop&crop=faces' },
  { name: 'Dr. Marcus Thorne', title: 'Professor of Practice', department: 'Software Systems', imageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=256&h=256&fit=crop&crop=faces' },
  { name: 'Dr. Alistair Finch', title: 'Lead Researcher', department: 'Quantum Computing', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&fit=crop&crop=faces' },
  { name: 'Dr. Lena Petrova', title: 'Senior Lecturer', department: 'AI & Machine Learning', imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&h=256&fit=crop&crop=faces' },
  { name: 'Dr. Kenji Tanaka', title: 'Postdoctoral Fellow', department: 'Bioengineering', imageUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=256&h=256&fit=crop&crop=faces' },
  { name: 'Dr. Sofia Reyes', title: 'Associate Professor', department: 'Software Systems', imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&h=256&fit=crop&crop=faces' },
  { name: 'Dr. David Grant', title: 'Professor', department: 'AI & Machine Learning', imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&h=256&fit=crop&crop=faces' },
  { name: 'Dr. Chloe O\'Sullivan', title: 'Researcher', department: 'Bioengineering', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&fit=crop&crop=faces' },
  { name: 'Dr. Ben Carter', title: 'Lecturer', department: 'Quantum Computing', imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=256&h=256&fit=crop&crop=faces' },
  { name: 'Dr. Fatima Ahmed', title: 'Professor', department: 'Software Systems', imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=256&h=256&fit=crop&crop=faces' },
];

const PROFS_PER_PAGE = 8;

const FacultyDirectory = () => {
  console.log('Faculty Directory page loaded');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  
  const departments = useMemo(() => ['all', ...Array.from(new Set(allFaculty.map(f => f.department)))], []);

  const filteredFaculty = useMemo(() => {
    return allFaculty.filter(prof => {
      const nameMatch = prof.name.toLowerCase().includes(searchTerm.toLowerCase());
      const departmentMatch = selectedDepartment === 'all' || prof.department === selectedDepartment;
      return nameMatch && departmentMatch;
    });
  }, [searchTerm, selectedDepartment]);

  const totalPages = Math.ceil(filteredFaculty.length / PROFS_PER_PAGE);
  const currentFaculty = filteredFaculty.slice((currentPage - 1) * PROFS_PER_PAGE, currentPage * PROFS_PER_PAGE);

  const handleDepartmentChange = (value: string) => {
    setSelectedDepartment(value);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page on search change
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container max-w-screen-2xl mx-auto px-4 py-12 sm:py-16">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Our Faculty
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the brilliant minds shaping the future of technology. Our faculty are world-renowned leaders, researchers, and mentors.
            </p>
          </div>

          {/* Filter and Search Controls */}
          <Card className="mb-12 shadow-sm bg-card">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 relative">
                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="pl-10 text-base"
                  />
                </div>
                <div>
                  <Select value={selectedDepartment} onValueChange={handleDepartmentChange}>
                    <SelectTrigger className="w-full text-base">
                      <SelectValue placeholder="Filter by Department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map(dept => (
                        <SelectItem key={dept} value={dept}>
                          {dept === 'all' ? 'All Departments' : dept}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Faculty Grid */}
          {currentFaculty.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {currentFaculty.map((prof, index) => (
                <FacultyProfileCard
                  key={`${prof.name}-${index}`}
                  name={prof.name}
                  title={prof.title}
                  department={prof.department}
                  imageUrl={prof.imageUrl}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="font-heading text-2xl font-semibold">No Faculty Found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your search or filter criteria.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); setCurrentPage(p => Math.max(1, p - 1)); }}
                      className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                    />
                  </PaginationItem>
                  {[...Array(totalPages)].map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink 
                        href="#" 
                        isActive={currentPage === i + 1}
                        onClick={(e) => { e.preventDefault(); setCurrentPage(i + 1); }}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext 
                      href="#"
                      onClick={(e) => { e.preventDefault(); setCurrentPage(p => Math.min(totalPages, p + 1)); }}
                      className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FacultyDirectory;