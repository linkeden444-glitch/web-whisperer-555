import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Signup from "./pages/Signup";
import Services from "./pages/Services";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/services" element={<Services />} />
          <Route path="/api" element={<PlaceholderPage title="API Documentation" description="Integrate our services into your platform with our powerful API." />} />
          <Route path="/reviews" element={<PlaceholderPage title="Reviews" description="See what our customers are saying about our services." />} />
          <Route path="/terms" element={<PlaceholderPage title="Terms & Conditions" description="Please read our terms of service carefully." />} />
          <Route path="/blog" element={<PlaceholderPage title="Blog" description="Latest news and updates from GETz SMM." />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Us" description="Get in touch with our support team." />} />
          <Route path="/cookie-policy" element={<PlaceholderPage title="Cookie Policy" description="Learn about how we use cookies." />} />
          <Route path="/faqs" element={<PlaceholderPage title="FAQs" description="Frequently asked questions about our services." />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
