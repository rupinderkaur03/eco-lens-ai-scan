
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ScanPage from "./pages/ScanPage";
import ResultPage from "./pages/ResultPage";
import RecommendationsPage from "./pages/RecommendationsPage";
import SchemesPage from "./pages/SchemesPage";
import ProfilePage from "./pages/ProfilePage";
import ShareActionPage from "./pages/ShareActionPage";
import CommunityPage from "./pages/CommunityPage";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="/scan" element={<ScanPage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/recommendations" element={<RecommendationsPage />} />
            <Route path="/schemes" element={<SchemesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/share" element={<ShareActionPage />} />
            <Route path="/community" element={<CommunityPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
