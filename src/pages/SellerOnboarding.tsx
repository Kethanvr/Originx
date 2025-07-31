
import { useState } from "react";
import { Upload, CheckCircle, AlertCircle, FileText, Camera, MapPin, Phone, Mail, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SellerOnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    region: "",
    address: "",
    businessType: "",
    gstNumber: "",
    panNumber: "",
    productCategory: "",
    productDescription: "",
    agreedToTerms: false
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const regions = [
    "Karnataka", "Uttar Pradesh", "West Bengal", "Kashmir", "Kerala", 
    "Rajasthan", "Tamil Nadu", "Gujarat", "Maharashtra", "Punjab"
  ];

  const categories = [
    "Textiles & Clothing", "Food & Beverages", "Handicrafts", 
    "Beauty & Wellness", "Home Decor", "Jewelry", "Spices & Condiments"
  ];

  const businessTypes = [
    "Manufacturer", "Artisan/Craftsperson", "Cooperative", "Retailer", "Wholesaler"
  ];

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Building className="w-5 h-5 text-saffron-600" />
                <span>Business Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Business Name *</label>
                  <Input
                    placeholder="Enter your business name"
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Owner/Contact Person *</label>
                  <Input
                    placeholder="Enter owner name"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({...formData, ownerName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Business Type *</label>
                  <Select value={formData.businessType} onValueChange={(value) => setFormData({...formData, businessType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      {businessTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Primary Region *</label>
                  <Select value={formData.region} onValueChange={(value) => setFormData({...formData, region: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your region" />
                    </SelectTrigger>
                    <SelectContent>
                      {regions.map((region) => (
                        <SelectItem key={region} value={region}>{region}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Complete Address *</label>
                <Textarea
                  placeholder="Enter your complete business address"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-saffron-600" />
                <span>Contact & Legal Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <Input
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">GST Number (if applicable)</label>
                  <Input
                    placeholder="Enter GST number"
                    value={formData.gstNumber}
                    onChange={(e) => setFormData({...formData, gstNumber: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">PAN Number *</label>
                  <Input
                    placeholder="Enter PAN number"
                    value={formData.panNumber}
                    onChange={(e) => setFormData({...formData, panNumber: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-amber-800">KYC Verification Required</h4>
                    <p className="text-sm text-amber-700 mt-1">
                      All seller accounts go through a verification process to ensure authenticity and build trust with buyers.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-saffron-600" />
                <span>Product Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Primary Product Category *</label>
                <Select value={formData.productCategory} onValueChange={(value) => setFormData({...formData, productCategory: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select product category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Product Description *</label>
                <Textarea
                  placeholder="Describe your products, their authenticity, and what makes them special..."
                  value={formData.productDescription}
                  onChange={(e) => setFormData({...formData, productDescription: e.target.value})}
                  rows={4}
                />
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Upload Product Samples</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-saffron-400 transition-colors cursor-pointer">
                      <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Upload Image {i}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  Upload high-quality images of your products. This helps buyers understand your offerings better.
                </p>
              </div>
            </CardContent>
          </Card>
        );

      case 4:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-saffron-600" />
                <span>Document Upload & Verification</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Required Documents</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium">Business Registration</span>
                      <Badge variant="secondary">Required</Badge>
                    </div>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Upload Document</p>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium">PAN Card</span>
                      <Badge variant="secondary">Required</Badge>
                    </div>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Upload Document</p>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium">Address Proof</span>
                      <Badge variant="secondary">Required</Badge>
                    </div>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Upload Document</p>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium">GST Certificate</span>
                      <Badge variant="outline">Optional</Badge>
                    </div>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Upload Document</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-emerald-800">Verification Process</h4>
                    <p className="text-sm text-emerald-700 mt-1">
                      Our team will verify your documents within 2-3 business days. You'll receive an email once approved.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={formData.agreedToTerms}
                  onCheckedChange={(checked) => setFormData({...formData, agreedToTerms: checked as boolean})}
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the <a href="#" className="text-saffron-600 hover:underline">Terms of Service</a> and{" "}
                  <a href="#" className="text-saffron-600 hover:underline">Seller Agreement</a>
                </label>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <Navigation />
      
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Join OriginX as a Seller
            </h1>
            <p className="text-xl text-gray-600">
              Start selling your authentic regional products to customers across India
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm font-medium text-gray-600">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step Content */}
          <div className="mb-8">
            {renderStep()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              Previous
            </Button>
            
            {currentStep === totalSteps ? (
              <Button
                className="bg-gradient-to-r from-saffron-600 to-terracotta-600 hover:from-saffron-700 hover:to-terracotta-700"
                disabled={!formData.agreedToTerms}
              >
                Submit Application
              </Button>
            ) : (
              <Button
                className="bg-gradient-to-r from-saffron-600 to-terracotta-600 hover:from-saffron-700 hover:to-terracotta-700"
                onClick={nextStep}
              >
                Next Step
              </Button>
            )}
          </div>

          {/* Benefits Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-saffron-600" />
                </div>
                <h3 className="font-semibold mb-2">Nationwide Reach</h3>
                <p className="text-sm text-gray-600">
                  Connect with customers across India and grow your business beyond local boundaries.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold mb-2">Verification Badge</h3>
                <p className="text-sm text-gray-600">
                  Get verified seller status to build trust and credibility with potential buyers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Direct Communication</h3>
                <p className="text-sm text-gray-600">
                  Chat directly with customers to build relationships and close deals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SellerOnboardingPage;
