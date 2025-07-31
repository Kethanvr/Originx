
import { MapPin, Users, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Region {
  id: number;
  name: string;
  specialty: string;
  image: string;
  productCount: number;
  verifiedSellers: number;
}

interface RegionCardProps {
  region: Region;
}

const RegionCard = ({ region }: RegionCardProps) => {
  return (
    <Card className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden">
      <div className="relative">
        <img
          src={region.image}
          alt={region.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="font-bold text-lg mb-1">{region.name}</h3>
          <p className="text-sm opacity-90">{region.specialty}</p>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <div className="flex items-center">
            <Package className="w-4 h-4 mr-1" />
            {region.productCount} products
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {region.verifiedSellers} sellers
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RegionCard;
