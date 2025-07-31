
import { Package, Truck, Clock, MapPin, Shield, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ShippingInfo = () => {
  const shippingOptions = [
    {
      name: "Standard Delivery",
      time: "5-7 business days",
      price: "₹99",
      description: "Cost-effective shipping for regular orders",
      icon: Package
    },
    {
      name: "Express Delivery",
      time: "2-3 business days",
      price: "₹199",
      description: "Faster delivery for urgent orders",
      icon: Truck
    },
    {
      name: "Same Day Delivery",
      time: "Within 24 hours",
      price: "₹299",
      description: "Available in select metro cities",
      icon: Clock
    }
  ];

  const deliveryZones = [
    {
      zone: "Zone 1 - Metro Cities",
      cities: "Mumbai, Delhi, Bangalore, Chennai, Kolkata, Hyderabad",
      deliveryTime: "2-4 days",
      charge: "₹99"
    },
    {
      zone: "Zone 2 - Tier 2 Cities",
      cities: "Pune, Ahmedabad, Jaipur, Lucknow, Kanpur, Nagpur",
      deliveryTime: "3-5 days",
      charge: "₹149"
    },
    {
      zone: "Zone 3 - Other Cities",
      cities: "All other cities and towns",
      deliveryTime: "5-7 days",
      charge: "₹199"
    },
    {
      zone: "Zone 4 - Remote Areas",
      cities: "Hill stations, remote villages, islands",
      deliveryTime: "7-10 days",
      charge: "₹299"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure Packaging",
      description: "All products are carefully packaged to prevent damage during transit"
    },
    {
      icon: MapPin,
      title: "Real-time Tracking",
      description: "Track your order from dispatch to delivery with live updates"
    },
    {
      icon: CheckCircle,
      title: "Delivery Guarantee",
      description: "100% delivery guarantee or full refund on undelivered orders"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/50 via-white to-saffron-50/30">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Logistics</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Shipping Information</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fast, secure, and reliable delivery across India. We partner with leading logistics providers to ensure your authentic products reach you safely.
            </p>
          </div>

          {/* Shipping Options */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Shipping Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {shippingOptions.map((option, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <option.icon className="w-12 h-12 text-saffron-600 mx-auto mb-4" />
                    <CardTitle className="text-xl">{option.name}</CardTitle>
                    <div className="text-2xl font-bold text-saffron-600">{option.price}</div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge variant="secondary" className="mb-4">{option.time}</Badge>
                    <p className="text-gray-600">{option.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Shipping?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <feature.icon className="w-16 h-16 text-saffron-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Delivery Zones */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Delivery Zones & Charges</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {deliveryZones.map((zone, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg text-saffron-600">{zone.zone}</CardTitle>
                          <p className="text-sm text-gray-600 mt-1">{zone.cities}</p>
                        </div>
                        <Badge variant="outline">{zone.charge}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        Delivery time: {zone.deliveryTime}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <Card className="mb-16 bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl text-blue-800">Important Shipping Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-blue-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-600" />
                  Free shipping on orders above ₹1,999 across India
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-600" />
                  Orders are processed within 1-2 business days
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-600" />
                  Delivery times may vary during festivals and monsoon season
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-600" />
                  Fragile items like silk sarees and pottery get special packaging
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-600" />
                  SMS and email notifications at every step of delivery
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-saffron-600 to-terracotta-600 text-white border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Order?</h3>
                <p className="mb-6 opacity-90">
                  Browse our collection of authentic regional products and enjoy fast, secure delivery.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/browse-products">
                    <Button variant="secondary" size="lg">
                      <Package className="w-4 h-4 mr-2" />
                      Start Shopping
                    </Button>
                  </Link>
                  <Link to="/orders">
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-saffron-600">
                      Track Your Order
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShippingInfo;
