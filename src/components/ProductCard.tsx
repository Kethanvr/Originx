
import { Star, MapPin, Shield, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  region: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  image: string;
  seller: string;
  verified: boolean;
  badge: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`}>
      <Card className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {product.verified && (
            <Badge className="absolute top-3 left-3 bg-green-600 hover:bg-green-600">
              <Shield className="w-3 h-3 mr-1" />
              Verified
            </Badge>
          )}
          <Button
            size="sm"
            variant="secondary"
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              // Handle chat functionality
            }}
          >
            <MessageCircle className="w-4 h-4" />
          </Button>
        </div>
        
        <CardContent className="p-4">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <MapPin className="w-3 h-3 mr-1" />
            {product.region}
          </div>
          
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
            {product.name}
          </h3>
          
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm font-medium">{product.rating}</span>
              <span className="ml-1 text-sm text-gray-500">({product.reviews})</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">{product.price}</span>
              <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
            </div>
          </div>
          
          <div className="text-xs text-gray-600 mb-3">
            by {product.seller}
          </div>
          
          <Badge variant="secondary" className="text-xs">
            {product.badge}
          </Badge>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
