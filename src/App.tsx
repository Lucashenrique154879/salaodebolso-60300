import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import MotionEffects from "@/components/MotionEffects";
import RouteLoading from "@/components/RouteLoading";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

const Index = lazy(() => import("./pages/Index"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const StyleGuide = lazy(() => import("./pages/StyleGuide"));

const Afiliados = lazy(() => import("./pages/Afiliados"));
const Beneficios = lazy(() => import("./pages/Beneficios"));
const Depoimentos = lazy(() => import("./pages/Depoimentos"));
const Faq = lazy(() => import("./pages/Faq"));
const Garantia = lazy(() => import("./pages/Garantia"));
const Problemas = lazy(() => import("./pages/Problemas"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MotionEffects />
        <Suspense fallback={<RouteLoading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/product" element={<Product />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/style-guide" element={<StyleGuide />} />

            <Route path="/problemas" element={<Problemas />} />
            <Route path="/beneficios" element={<Beneficios />} />
            <Route path="/depoimentos" element={<Depoimentos />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/garantia" element={<Garantia />} />
            <Route path="/afiliados" element={<Afiliados />} />

            <Route path="/funcionalidades" element={<Navigate to="/product#features" replace />} />
            <Route path="/telas" element={<Navigate to="/product#screens" replace />} />
            <Route path="/planos" element={<Navigate to="/pricing" replace />} />
            <Route path="/contato" element={<Navigate to="/contact" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
