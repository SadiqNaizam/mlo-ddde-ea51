import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PublicationListItem from '@/components/PublicationListItem';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Lightbulb, Rocket, Milestone } from 'lucide-react';

const researchPapers = [
  {
    id: 1,
    title: "Quantum-Resistant Cryptography using Lattice-Based Algorithms",
    authors: ["Dr. Evelyn Reed", "Dr. Kenji Tanaka", "Dr. Anya Sharma"],
    date: "2023-10-15",
    sourceUrl: "#",
    type: "paper" as "paper" | "patent",
  },
  {
    id: 2,
    title: "Generative Adversarial Networks for Novel Protein Structure Prediction",
    authors: ["Dr. Ben Carter", "Dr. Priya Desai"],
    date: "2023-09-02",
    sourceUrl: "#",
    type: "paper" as "paper" | "patent",
  },
  {
    id: 3,
    title: "Scalable Federated Learning for Decentralized AI Systems",
    authors: ["Dr. Marcus Vance", "Dr. Sofia Rostova"],
    date: "2023-08-21",
    sourceUrl: "#",
    type: "paper" as "paper" | "patent",
  },
];

const patents = [
  {
    id: 1,
    title: "System and Method for Dynamic Energy Allocation in Microgrids",
    authors: ["Aethelred Institute of Technology"],
    date: "2023-05-20",
    sourceUrl: "#",
    type: "patent" as "paper" | "patent",
  },
  {
    id: 2,
    title: "Biocompatible Nanorobotic Drug Delivery Vehicle",
    authors: ["Aethelred Institute of Technology"],
    date: "2023-02-11",
    sourceUrl: "#",
    type: "patent" as "paper" | "patent",
  },
];


const ResearchAndInnovationHub = () => {
  console.log("Research & Innovation Hub loaded");

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <div className="container max-w-screen-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <section className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Research & Innovation Hub
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Explore the groundbreaking work and entrepreneurial spirit that define the Aethelred Institute.
            </p>
          </section>

          {/* Tabs Section */}
          <Tabs defaultValue="papers" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto h-12">
              <TabsTrigger value="papers" className="text-base">Seminal Papers</TabsTrigger>
              <TabsTrigger value="patents" className="text-base">Patents</TabsTrigger>
              <TabsTrigger value="startups" className="text-base">Innovation & Startups</TabsTrigger>
            </TabsList>

            {/* Papers Tab */}
            <TabsContent value="papers" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Browse Published Research</CardTitle>
                  <div className="relative pt-2">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Search by title, author, or keyword..." className="pl-10" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="divide-y divide-border -mx-6">
                    {researchPapers.map((item) => (
                      <div key={item.id} className="px-6">
                        <PublicationListItem {...item} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Patents Tab */}
            <TabsContent value="patents" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Explore Granted Patents</CardTitle>
                   <div className="relative pt-2">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Search by title or patent number..." className="pl-10" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="divide-y divide-border -mx-6">
                    {patents.map((item) => (
                      <div key={item.id} className="px-6">
                        <PublicationListItem {...item} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Innovation & Startups Tab */}
            <TabsContent value="startups" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-3 bg-secondary/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Lightbulb className="w-8 h-8 text-primary" />
                      <CardTitle className="text-2xl font-heading">The Aethelred Incubator</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our on-campus incubator provides the resources, mentorship, and funding necessary to transform revolutionary ideas into world-changing companies. We foster a culture of innovation, empowering our students and faculty to take their research from the lab to the market.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Rocket className="w-6 h-6 text-primary" />
                      <CardTitle className="font-heading">Featured Startup: QuantumLeap</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Pioneering next-generation quantum computing hardware, making complex simulations accessible and affordable. Founded by Dr. Evelyn Reed.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Milestone className="w-6 h-6 text-primary" />
                      <CardTitle className="font-heading">Featured Startup: BioSynth</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Utilizing AI-driven protein synthesis to create novel therapeutics and sustainable biomaterials. Founded by Dr. Ben Carter.
                    </p>
                  </CardContent>
                </Card>
                 <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Milestone className="w-6 h-6 text-primary" />
                      <CardTitle className="font-heading">Featured Startup: GridSecure</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Developing decentralized energy grid management solutions to enhance stability and security against cyber threats.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResearchAndInnovationHub;