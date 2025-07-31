
import { RotateCcw, Clock, Shield, CheckCircle, AlertCircle, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Returns = () => {
  const returnProcess = [
    {
      step: 1,
      title: "Initiate Return",
      description: "Contact us within 7 days of delivery",
      icon: RotateCcw
    },
    {
      step: 2,
      title: "Schedule Pickup",
      description: "We'll arrange free pickup from your location",
      icon: Package
    },
    {
      step: 3,
      title: "Quality Check",
      description: "We inspect the returned item",
      icon: Shield
    },
    {
      step: 4,
      title: "Refund Processing",
      description: "Refund initiated within 2-3 business days",
      icon: CheckCircle
    }
  ];

  const returnReasons = [
    "Product damaged during shipping",
    "Received wrong item or size",
    "Product quality not as expected",
    "Seller description mismatch",
    "Missing parts or accessories",
    "Changed mind (applicable for certain categories)"
  ];

  const nonReturnableItems = [
    "Perishable items (food, spices after opening)",
    "Customized or personalized products",
    "Items used or washed",
    "Products without original packaging",
    "Intimate apparel for hygiene reasons"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/50 via-white to-saffron-50/30">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Customer Protection</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Returns & Refunds</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your satisfaction is our priority. Easy returns and quick refunds for all authentic products purchased on OriginX.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Clock className="w-12 h-12 text-saffron-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">7-Day Return</h3>
                <p className="text-gray-600">Return products within 7 days of delivery</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Package className="w-12 h-12 text-saffron-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Free Pickup</h3>
                <p className="text-gray-600">We arrange free pickup from your location</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-saffron-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quick Refunds</h3>
                <p className="text-gray-600">Refunds processed within 2-3 business days</p>
              </CardContent>
            </Card>
          </div>

          {/* Return Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">How Returns Work</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {returnProcess.map((step, index) => (
                  <div key={step.step} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-8 h-8 text-saffron-600" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-saffron-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                      {index < returnProcess.length - 1 && (
                        <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gray-300"></div>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Returnable Items */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-green-700 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Valid Return Reasons
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {returnReasons.map((reason, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-green-600" />
                      <span className="text-gray-700">{reason}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Non-Returnable Items */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-red-700 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Non-Returnable Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {nonReturnableItems.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <AlertCircle className="w-4 h-4 mr-3 mt-0.5 text-red-600" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Refund Information */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl">Refund Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-saffron-700">Refund Timeline</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Online payments: 2-3 business days</li>
                    <li>• UPI/Wallet: 1-2 business days</li>
                    <li>• Credit/Debit cards: 5-7 business days</li>
                    <li>• Net banking: 3-5 business days</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-saffron-700">Refund Method</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Same payment method used for purchase</li>
                    <li>• Full refund including shipping charges</li>
                    <li>• No additional charges or deductions</li>
                    <li>• Email confirmation for all refunds</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Notes */}
          <Alert className="mb-16">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Important:</strong> Products must be returned in original condition with all tags, labels, and packaging intact. 
              For hygiene and safety reasons, certain items cannot be returned once opened or used.
            </AlertDescription>
          </Alert>

          {/* CTA */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-saffron-600 to-terracotta-600 text-white border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Need to Return Something?</h3>
                <p className="mb-6 opacity-90">
                  Our customer support team is here to help you with returns and refunds.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button variant="secondary" size="lg">
                      Contact Support
                    </Button>
                  </Link>
                  <Link to="/orders">
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-saffron-600">
                      View Your Orders
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

export default Returns;
