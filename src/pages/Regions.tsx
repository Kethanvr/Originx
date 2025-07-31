
import { useState } from "react";
import { MapPin, Users, Package, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import RegionCard from "@/components/RegionCard";

const Regions = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const regions = [
    {
      id: 1,
      name: "Varanasi, Uttar Pradesh",
      specialty: "Banarasi Silk Sarees",
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=300&fit=crop",
      productCount: 150,
      verifiedSellers: 25,
      description: "Home to the finest silk weaving traditions in India, Varanasi has been creating exquisite Banarasi sarees for over 500 years."
    },
    {
      id: 2,
      name: "Darjeeling, West Bengal",
      specialty: "Premium Tea Leaves",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      productCount: 89,
      verifiedSellers: 18,
      description: "The foothills of the Himalayas produce some of the world's finest black tea, known for its distinctive muscatel flavor."
    },
    {
      id: 3,
      name: "Coorg, Karnataka",
      specialty: "Arabica Coffee Beans",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop",
      productCount: 67,
      verifiedSellers: 12,
      description: "The hills of Coorg are renowned for producing high-quality Arabica coffee with rich aroma and smooth taste."
    },
    {
      id: 4,
      name: "Kashmir Valley",
      specialty: "Pure Saffron",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      productCount: 34,
      verifiedSellers: 8,
      description: "The pristine valleys of Kashmir produce the world's finest saffron, known for its intense aroma and deep color."
    },
    {
      id: 5,
      name: "Mysore, Karnataka",
      specialty: "Sandalwood Products",
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop",
      productCount: 45,
      verifiedSellers: 15,
      description: "Mysore sandalwood is world-famous for its quality and is used in traditional Indian perfumes and cosmetics."
    },
    {
      id: 6,
      name: "Kanchipuram, Tamil Nadu",
      specialty: "Silk Sarees",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=300&fit=crop",
      productCount: 120,
      verifiedSellers: 22,
      description: "Known as the 'Silk City', Kanchipuram produces some of India's most beautiful and durable silk sarees."
    },
    {
      id: 7,
      name: "Kolhapur, Maharashtra",
      specialty: "Leather Chappals",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop",
      productCount: 78,
      verifiedSellers: 14,
      description: "Traditional Kolhapuri chappals are handcrafted leather footwear known for their durability and comfort."
    },
    {
      id: 8,
      name: "Rajasthan",
      specialty: "Handicrafts & Textiles",
      image: "https://images.unsplash.com/photo-1506664090427-c0a180c19ec8?w=400&h=300&fit=crop",
      productCount: 200,
      verifiedSellers: 35,
      description: "The royal state of Rajasthan is famous for its vibrant handicrafts, block prints, and traditional textiles."
    }
  ];

  const filteredRegions = regions.filter(region =>
    region.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    region.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/50 via-white to-saffron-50/30">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Discover Origins</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Explore by Region</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Journey through India's cultural heritage and discover authentic products from their places of origin
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search regions or specialties..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-saffron-400"
                />
              </div>
            </div>

            <div className="text-sm text-gray-600">
              {filteredRegions.length} regions found
            </div>
          </div>

          {/* Regions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredRegions.map((region) => (
              <div key={region.id} className="group">
                <RegionCard region={region} />
                <div className="mt-4 px-2">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {region.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredRegions.length === 0 && (
            <div className="text-center py-16">
              <MapPin className="mx-auto h-16 w-16 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No regions found</h3>
              <p className="text-gray-500">Try searching with different keywords.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Regions;
