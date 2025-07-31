
import { useState } from "react";
import { Search, MapPin, Star, Shield, MessageCircle, Package, ArrowRight, TrendingUp, Users, CheckCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import RegionCard from "@/components/RegionCard";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const featuredRegions = [
    {
      id: 1,
      name: "Varanasi, Uttar Pradesh",
      specialty: "Banarasi Silk Sarees",
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=300&fit=crop",
      productCount: 150,
      verifiedSellers: 25
    },
    {
      id: 2,
      name: "Darjeeling, West Bengal",
      specialty: "Premium Tea Leaves",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      productCount: 89,
      verifiedSellers: 18
    },
    {
      id: 3,
      name: "Coorg, Karnataka",
      specialty: "Arabica Coffee Beans",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop",
      productCount: 67,
      verifiedSellers: 12
    },
    {
      id: 4,
      name: "Kashmir Valley",
      specialty: "Pure Saffron",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      productCount: 34,
      verifiedSellers: 8
    }
  ];

  const trendingProducts = [
    {
      id: 1,
      name: "Premium Mysore Sandalwood Oil",
      region: "Mysore, Karnataka",
      price: "₹2,450",
      originalPrice: "₹2,800",
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=300&h=300&fit=crop",
      seller: "Sandalwood Heritage Co.",
      verified: true,
      badge: "✅ Verified Seller"
    },
    {
      id: 2,
      name: "Hand-woven Banarasi Silk Saree",
      region: "Varanasi, UP",
      price: "₹8,500",
      originalPrice: "₹12,000",
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=300&fit=crop",
      seller: "Weaver's Pride",
      verified: true,
      badge: "✅ Heritage Craft"
    },
    {
      id: 3,
      name: "Premium Darjeeling Black Tea",
      region: "Darjeeling, WB",
      price: "₹1,200",
      originalPrice: "₹1,400",
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop",
      seller: "Mountain Tea Estate",
      verified: true,
      badge: "✅ Organic Certified"
    },
    {
      id: 4,
      name: "Pure Kashmir Saffron",
      region: "Kashmir Valley",
      price: "₹15,000",
      originalPrice: "₹18,000",
      rating: 5.0,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1609501676725-7186f305e3dc?w=300&h=300&fit=crop",
      seller: "Kashmir Spice Co.",
      verified: true,
      badge: "✅ Grade A Quality"
    }
  ];

  const stats = [
    { icon: Users, label: "500+ Verified Sellers", value: "500+", color: "text-emerald-600" },
    { icon: Globe, label: "28 States & UTs", value: "28", color: "text-blue-600" },
    { icon: Package, label: "10,000+ Products", value: "10K+", color: "text-purple-600" },
    { icon: CheckCircle, label: "99% Satisfaction", value: "99%", color: "text-amber-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/50 via-white to-saffron-50/30 font-poppins">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-saffron-100/20 to-terracotta-100/20 transform -skew-y-1 origin-top-left"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Badge variant="secondary" className="mb-6 text-saffron-700 bg-saffron-100 border-saffron-200 text-sm px-4 py-2">
            <TrendingUp className="w-4 h-4 mr-2" />
            India's #1 Authentic Marketplace
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            Authentic Products,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-600 via-orange-500 to-terracotta-600">
              Direct from Source
            </span>
          </h1>
          
          <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Connect with verified regional sellers across India. Discover iconic products 
            like Banarasi silk, Darjeeling tea, and Coorg coffee — straight from their origins.
          </p>
          
          {/* Enhanced Search Bar */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 group-hover:text-saffron-500 transition-colors" />
              <Input
                type="text"
                placeholder="Search products or regions... (e.g., 'Mysore sandalwood' or 'Kashmir')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-16 pr-40 py-8 text-xl rounded-2xl border-2 border-gray-200 focus:border-saffron-400 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
              />
              <Link to="/browse-products">
                <Button className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-xl bg-gradient-to-r from-saffron-600 to-terracotta-600 hover:from-saffron-700 hover:to-terracotta-700 px-8 py-4 text-lg">
                  Search
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group hover:scale-105">
                <CardContent className="p-8 text-center">
                  <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <p className="text-sm font-semibold text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Regions */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 text-lg px-6 py-2">Discover Origins</Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Explore by Region</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Journey through India's cultural heritage and discover authentic products from their places of origin
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredRegions.map((region) => (
              <RegionCard key={region.id} region={region} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/regions">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg hover:bg-saffron-50 hover:border-saffron-300">
                View All Regions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-saffron-50/50 to-terracotta-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-6 bg-saffron-100 text-saffron-700 text-lg px-6 py-2">
              <TrendingUp className="w-5 h-5 mr-2" />
              Hot This Month
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Trending Products</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Most loved authentic products chosen by our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/browse-products">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg hover:bg-saffron-50 hover:border-saffron-300">
                Shop All Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action - Fixed button visibility */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <Card className="max-w-6xl mx-auto bg-gradient-to-r from-saffron-600 via-orange-500 to-terracotta-600 border-0 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32"></div>
          
          <CardContent className="p-16 text-center relative z-10">
            <h2 className="text-5xl font-bold mb-8">Join India's Authentic Marketplace</h2>
            <p className="text-2xl mb-12 opacity-90 max-w-4xl mx-auto">
              Whether you're a buyer seeking authentic products or a seller wanting to reach customers nationwide
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/browse-products">
                <Button size="lg" variant="secondary" className="bg-white text-saffron-600 font-semibold hover:bg-white/90 px-10 py-6 text-xl">
                  Start Shopping
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </Link>
              <Link to="/seller-onboarding">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-saffron-600 bg-transparent px-10 py-6 text-xl font-semibold"
                >
                  Become a Seller
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
