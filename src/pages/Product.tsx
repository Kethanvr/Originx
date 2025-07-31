import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, MapPin, Shield, MessageCircle, Heart, Share2, ChevronLeft, ChevronRight, Package, Truck, RotateCcw, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProductPage = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Mock product data - in a real app this would come from an API
  const products = {
    1: {
      id: 1,
      name: "Premium Mysore Sandalwood Oil",
      region: "Mysore, Karnataka",
      price: "₹2,450",
      originalPrice: "₹2,800",
      rating: 4.8,
      reviews: 124,
      images: [
        "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=600&fit=crop",
      ],
      seller: {
        name: "Sandalwood Heritage Co.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
        rating: 4.9,
        totalProducts: 45,
        responseTime: "Within 2 hours",
        verified: true
      },
      description: "Pure, authentic Mysore sandalwood oil extracted from trees aged over 15 years. This premium oil carries the distinctive sweet, woody fragrance that Mysore sandalwood is world-renowned for.",
      features: [
        "100% Pure Mysore Sandalwood Oil",
        "Extracted from 15+ year old trees",
        "Traditional distillation process",
        "Certified authentic by Karnataka State",
        "No synthetic additives",
        "Premium glass bottle packaging"
      ],
      inStock: true,
      stockCount: 12
    },
    2: {
      id: 2,
      name: "Hand-woven Banarasi Silk Saree",
      region: "Varanasi, UP",
      price: "₹8,500",
      originalPrice: "₹12,000",
      rating: 4.9,
      reviews: 89,
      images: [
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&h=600&fit=crop",
      ],
      seller: {
        name: "Weaver's Pride",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        rating: 4.8,
        totalProducts: 32,
        responseTime: "Within 4 hours",
        verified: true
      },
      description: "Exquisite hand-woven Banarasi silk saree featuring traditional motifs and pure silk threads. Each saree takes 3-6 months to complete by master weavers.",
      features: [
        "100% Pure Silk",
        "Hand-woven by master craftsmen",
        "Traditional Banarasi designs",
        "Zari work with real gold threads",
        "Heritage craft certification",
        "Comes with authenticity certificate"
      ],
      inStock: true,
      stockCount: 5
    },
    // Add more products as needed
  };

  const product = products[parseInt(id) as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 font-poppins">
        <Navigation />
        <div className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <Link to="/browse-products">
              <Button>Back to Products</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const reviews = [
    {
      id: 1,
      user: "Priya Sharma",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b4d8?w=100&h=100&fit=crop",
      rating: 5,
      date: "2 weeks ago",
      comment: "Absolutely authentic! The fragrance is exactly what I expected from genuine Mysore sandalwood. Will definitely order again."
    },
    {
      id: 2,
      user: "Rajesh Kumar",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      rating: 5,
      date: "1 month ago",
      comment: "Best quality sandalwood oil I've ever purchased. The seller was very responsive and packaging was excellent."
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleAddToCart = () => {
    // Add to cart logic - for now just show an alert
    alert(`Added ${quantity} ${product.name} to cart!`);
  };

  const handleBuyNow = () => {
    // Buy now logic - navigate to checkout
    alert("Redirecting to checkout...");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <Navigation />
      
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button and Breadcrumb */}
          <div className="mb-8">
            <Link to="/browse-products">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Button>
            </Link>
            <nav>
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li><Link to="/" className="hover:text-saffron-600">Home</Link></li>
                <li>/</li>
                <li><Link to="/browse-products" className="hover:text-saffron-600">Products</Link></li>
                <li>/</li>
                <li className="text-gray-900 font-medium">{product.name}</li>
              </ol>
            </nav>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <Card className="overflow-hidden">
                <div className="relative aspect-square">
                  <img
                    src={product.images[currentImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {product.images.length > 1 && (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm"
                        onClick={prevImage}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm"
                        onClick={nextImage}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </>
                  )}
                </div>
              </Card>
              
              {/* Thumbnail Images */}
              {product.images.length > 1 && (
                <div className="flex space-x-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 ${
                        index === currentImageIndex ? 'border-saffron-500' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  {product.region}
                </Badge>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-medium">{product.rating}</span>
                    <span className="ml-1 text-gray-500">({product.reviews} reviews)</span>
                  </div>
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                    <Shield className="w-3 h-3 mr-1" />
                    Verified Authentic
                  </Badge>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                  <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
                  <Badge variant="destructive">
                    {Math.round(((parseInt(product.originalPrice.replace('₹', '').replace(',', '')) - parseInt(product.price.replace('₹', '').replace(',', ''))) / parseInt(product.originalPrice.replace('₹', '').replace(',', ''))) * 100)}% OFF
                  </Badge>
                </div>

                <p className="text-gray-600 mb-6">{product.description}</p>
              </div>

              {/* Seller Info */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={product.seller.avatar} alt={product.seller.name} />
                        <AvatarFallback>{product.seller.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium">{product.seller.name}</h3>
                          {product.seller.verified && (
                            <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                              <Shield className="w-3 h-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">
                          {product.seller.rating} ⭐ • {product.seller.totalProducts} products • Responds {product.seller.responseTime}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quantity and Actions */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="font-medium">Quantity:</label>
                  <div className="flex items-center border border-gray-200 rounded-lg">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3"
                    >
                      -
                    </Button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3"
                    >
                      +
                    </Button>
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.stockCount} items available
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-saffron-600 to-terracotta-600 hover:from-saffron-700 hover:to-terracotta-700"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={handleBuyNow}
                  >
                    Buy Now
                  </Button>
                </div>

                <div className="flex space-x-4">
                  <Button variant="ghost" size="sm">
                    <Heart className="w-4 h-4 mr-2" />
                    Add to Wishlist
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Delivery Info */}
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Truck className="w-5 h-5 text-emerald-600" />
                      <span className="font-medium">Free delivery by Dec 25</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Package className="w-5 h-5 text-blue-600" />
                      <span>Secure packaging guaranteed</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RotateCcw className="w-5 h-5 text-orange-600" />
                      <span>7-day return policy</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="prose max-w-none">
                      <p className="text-gray-600 leading-relaxed">
                        {product.description}
                      </p>
                      <p className="text-gray-600 leading-relaxed mt-4">
                        This authentic product represents the rich heritage and traditional craftsmanship 
                        of {product.region}. Each item is carefully selected and verified for authenticity 
                        to ensure you receive only the finest quality products.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="features" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-saffron-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Avatar>
                            <AvatarImage src={review.avatar} alt={review.user} />
                            <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">{review.user}</h4>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                            <div className="flex items-center mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <p className="text-gray-600">{review.comment}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
