
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Search from "./pages/Search";
import Product from "./pages/Product";
import Chat from "./pages/Chat";
import SellerOnboarding from "./pages/SellerOnboarding";
import BrowseProducts from "./pages/BrowseProducts";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Regions from "./pages/Regions";
import HelpCenter from "./pages/HelpCenter";
import ShippingInfo from "./pages/ShippingInfo";
import Returns from "./pages/Returns";
import ContactUs from "./pages/ContactUs";
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
          <Route path="/search" element={<Search />} />
          <Route path="/browse-products" element={<BrowseProducts />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/regions" element={<Regions />} />
          <Route path="/seller-onboarding" element={<SellerOnboarding />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/shipping-info" element={<ShippingInfo />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
