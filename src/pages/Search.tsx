
import { useState } from "react";
import { Search, Filter, Grid, List, MapPin, Star, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

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
    // Add more products as needed
  ];

  const regions = [
    "All Regions",
    "Karnataka",
    "Uttar Pradesh",
    "West Bengal",
    "Kashmir",
    "Kerala",
    "Rajasthan",
    "Tamil Nadu"
  ];

  const categories = [
    "All Categories",
    "Textiles & Clothing",
    "Food & Beverages", 
    "Handicrafts",
    "Beauty & Wellness",
    "Home Decor",
    "Jewelry"
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <Navigation />
      
      <div className="pt-20">
        {/* Search Header */}
        <div className="bg-white border-b border-gray-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search products, regions, or sellers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-3 text-lg rounded-xl border-2 border-gray-200 focus:border-saffron-400"
                />
              </div>
              
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </Button>
                
                <div className="flex items-center border border-gray-200 rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-8">
            {/* Sidebar Filters */}
            <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-80 flex-shrink-0`}>
              <Card className="sticky top-28">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Filters</h3>
                  
                  {/* Region Filter */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Region</h4>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select region" />
                      </SelectTrigger>
                      <SelectContent>
                        {regions.map((region) => (
                          <SelectItem key={region} value={region.toLowerCase()}>
                            {region}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Category Filter */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Category</h4>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category.toLowerCase()}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Price Range */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Price Range</h4>
                    <div className="space-y-2">
                      {[
                        "Under ₹500",
                        "₹500 - ₹2,000",
                        "₹2,000 - ₹5,000",
                        "₹5,000 - ₹10,000",
                        "Above ₹10,000"
                      ].map((range) => (
                        <div key={range} className="flex items-center space-x-2">
                          <Checkbox id={range} />
                          <label htmlFor={range} className="text-sm font-medium">
                            {range}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Seller Type */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Seller Type</h4>
                    <div className="space-y-2">
                      {["Verified Sellers", "New Sellers", "Premium Sellers"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox id={type} />
                          <label htmlFor={type} className="text-sm font-medium">
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  Showing <span className="font-medium">24</span> of{" "}
                  <span className="font-medium">156</span> products
                </p>
                
                <Select defaultValue="relevance">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Sort by Relevance</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Customer Rating</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className={`grid ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} gap-6`}>
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center space-x-2 mt-12">
                <Button variant="outline" disabled>Previous</Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">...</Button>
                <Button variant="outline">12</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SearchPage;
