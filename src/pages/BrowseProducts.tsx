import { useState } from "react";
import { Search, Filter, Grid, List, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const BrowseProducts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(true);

  const categories = [
    "Textiles & Clothing",
    "Food & Beverages", 
    "Handicrafts",
    "Spices & Condiments",
    "Beauty & Personal Care",
    "Home Decor"
  ];

  const regions = [
    "Varanasi, UP",
    "Darjeeling, WB", 
    "Kashmir Valley",
    "Mysore, Karnataka",
    "Coorg, Karnataka",
    "Kanchipuram, TN"
  ];

  const products = [
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
    },
    {
      id: 5,
      name: "Kanchipuram Pure Silk Saree",
      region: "Kanchipuram, TN",
      price: "₹12,500",
      originalPrice: "₹15,000",
      rating: 4.8,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=300&h=300&fit=crop",
      seller: "South Silk Weavers",
      verified: true,
      badge: "✅ Traditional Craft"
    },
    {
      id: 6,
      name: "Coorg Arabica Coffee Beans",
      region: "Coorg, Karnataka",
      price: "₹800",
      originalPrice: "₹950",
      rating: 4.6,
      reviews: 178,
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=300&h=300&fit=crop",
      seller: "Coffee Plantation Direct",
      verified: true,
      badge: "✅ Fresh Roasted"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/50 via-white to-saffron-50/30">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Browse Products</h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Discover authentic Indian products from verified regional sellers
            </p>
          </div>

          {/* Search and Filters Bar */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="h-12 px-6"
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <div className="flex border rounded-lg overflow-hidden">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-none"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Select defaultValue="featured">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
              
              <Badge variant="secondary" className="text-sm">
                {products.length} products found
              </Badge>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Filters Sidebar */}
            {showFilters && (
              <div className="w-80 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Categories</h3>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox id={category} />
                          <label htmlFor={category} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Regions</h3>
                    <div className="space-y-3">
                      {regions.map((region) => (
                        <div key={region} className="flex items-center space-x-2">
                          <Checkbox id={region} />
                          <label htmlFor={region} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            {region}
                          </label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Price Range</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="under-1000" />
                        <label htmlFor="under-1000" className="text-sm">Under ₹1,000</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="1000-5000" />
                        <label htmlFor="1000-5000" className="text-sm">₹1,000 - ₹5,000</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="5000-10000" />
                        <label htmlFor="5000-10000" className="text-sm">₹5,000 - ₹10,000</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="above-10000" />
                        <label htmlFor="above-10000" className="text-sm">Above ₹10,000</label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Products Grid */}
            <div className="flex-1">
              <div className={viewMode === "grid" 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
                : "space-y-6"
              }>
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BrowseProducts;
