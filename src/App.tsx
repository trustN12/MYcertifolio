
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Coursera from "./pages/Coursera";
import MernDsa from "./pages/MernDsa";
import RoadsideCoder from "./pages/RoadsideCoder";
import HackerRank from "./pages/HackerRank";
import Thesis from "./pages/Thesis";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/coursera" element={<Coursera />} />
            <Route path="/mern-dsa" element={<MernDsa />} />
            <Route path="/roadside-coder" element={<RoadsideCoder />} />
            <Route path="/hackerrank" element={<HackerRank />} />
            <Route path="/thesis" element={<Thesis />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
