import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, DollarSign, Calendar, FileText, Users, MicV, CheckSquare } from 'lucide-react';

const AdmissionsPage = () => {
  console.log('Admissions Page loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <div className="container max-w-screen-xl mx-auto px-4 py-16 md:py-24">
          {/* Page Header */}
          <section className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Admissions
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground font-body">
              Joining an elite community of innovators and leaders dedicated to solving the world's most complex challenges.
            </p>
          </section>

          {/* Key Information Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <Card className="border-border/80 hover:border-primary/50 hover:shadow-lg transition-all">
              <CardHeader className="flex flex-row items-center gap-4">
                <CheckCircle className="h-8 w-8 text-primary" />
                <CardTitle className="font-heading text-2xl">Eligibility Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">We seek candidates who demonstrate exceptional intellectual and creative capacity.</p>
                <ul className="space-y-2 list-disc list-inside text-foreground">
                    <li>Demonstrated Academic Excellence</li>
                    <li>Proven Research Aptitude</li>
                    <li>Passion for Technological Innovation</li>
                    <li>Collaborative Spirit & Leadership</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/80 hover:border-primary/50 hover:shadow-lg transition-all bg-primary/5">
              <CardHeader className="flex flex-row items-center gap-4">
                <DollarSign className="h-8 w-8 text-primary" />
                <CardTitle className="font-heading text-2xl">The Pioneers' Stipend</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All admitted graduate students are fully funded, receiving a comprehensive stipend, full tuition coverage, and health benefits to allow complete focus on their groundbreaking research.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/80 hover:border-primary/50 hover:shadow-lg transition-all">
              <CardHeader className="flex flex-row items-center gap-4">
                <Calendar className="h-8 w-8 text-primary" />
                <CardTitle className="font-heading text-2xl">Key Dates</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-foreground">
                  <li className="flex flex-col">
                    <span className="font-semibold">September 1:</span>
                    <span className="text-muted-foreground">Application Portal Opens</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-semibold">December 15:</span>
                    <span className="text-muted-foreground">Priority Application Deadline</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-semibold">March 1:</span>
                    <span className="text-muted-foreground">Final Decision Notification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Application Process Accordion */}
          <section className="max-w-4xl mx-auto mb-20">
            <h2 className="text-center font-heading text-3xl md:text-4xl font-bold mb-8">
              Application Process
            </h2>
            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-heading hover:no-underline">
                  <div className="flex items-center gap-4">
                    <FileText className="h-6 w-6 text-primary"/>
                    Step 1: Online Application
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pl-10">
                  Submit your personal information, academic history, and a statement of purpose through our secure online portal. Ensure all details are accurate and reflect your ambitions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-heading hover:no-underline">
                  <div className="flex items-center gap-4">
                    <Users className="h-6 w-6 text-primary"/>
                    Step 2: Supporting Documents
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pl-10">
                  Upload official transcripts from all prior institutions, your curriculum vitae, and provide contact information for three academic or professional references who will submit letters of recommendation on your behalf.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-heading hover:no-underline">
                  <div className="flex items-center gap-4">
                    <MicV className="h-6 w-6 text-primary"/>
                    Step 3: Faculty Interview
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pl-10">
                  Shortlisted candidates will be invited for a series of technical interviews with our faculty members to discuss your research interests and assess your problem-solving capabilities.
                </AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl font-heading hover:no-underline">
                  <div className="flex items-center gap-4">
                    <CheckSquare className="h-6 w-6 text-primary"/>
                    Step 4: Admissions Decision
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pl-10">
                  Final admission decisions will be communicated via the application portal. We welcome the most promising minds to join our next cohort.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
          
          {/* Call to Action */}
          <section className="text-center">
            <h2 className="font-heading text-3xl font-bold">Begin Your Journey</h2>
            <p className="mt-2 text-lg text-muted-foreground">Take the first step toward shaping the future of technology.</p>
            <Button size="lg" className="mt-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdmissionsPage;