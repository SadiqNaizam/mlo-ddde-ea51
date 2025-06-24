import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Academics Hub from "./pages/Academics Hub";
import Admissions Page from "./pages/Admissions Page";
import Faculty Directory from "./pages/Faculty Directory";
import Homepage from "./pages/Homepage";
import Research & Innovation Hub from "./pages/Research & Innovation Hub";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


const App = () => (
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
        <Routes>


          <Route path="/" element={<Homepage />} />
          <Route path="/academics -hub" element={<Academics Hub />} />
          <Route path="/admissions " element={<Admissions Page />} />
          <Route path="/faculty -directory" element={<Faculty Directory />} />
          <Route path="/research & -innovation -hub" element={<Research & Innovation Hub />} />
          {/* catch-all */}
          <Route path="*" element={<NotFound />} />


        </Routes>
    </BrowserRouter>
    </TooltipProvider>
</QueryClientProvider>
);

export default App;
