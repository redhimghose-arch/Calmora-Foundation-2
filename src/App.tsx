import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import WhatWeDo from "./pages/WhatWeDo";
import GetInvolved from "./pages/GetInvolved";
import Grants from "./pages/Grants";
import Contact from "./pages/Contact";
import StudentLanding from "./pages/StudentLanding";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
              <ScrollToTop />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/grants" element={<Grants />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student-therapy" element={<StudentLanding />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
