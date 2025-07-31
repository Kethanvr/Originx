
import { useState } from "react";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Mysore Sandalwood Oil",
      region: "Mysore, Karnataka",
      price: 2450,
      originalPrice: 2800,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=300&h=300&fit=crop",
      seller: "Sandalwood Heritage Co.",
      verified: true
    },
    {
      id: 2,
      name: "Hand-woven Banarasi Silk Saree",
      region: "Varanasi, UP",
      price: 8500,
      originalPrice: 12000,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=300&fit=crop",
      seller: "Weaver's Pride",
      verified: true
    },
    {
      id: 3,
      name: "Pure Kashmir Saffron",
      region: "Kashmir Valley",
      price: 15000,
      originalPrice: 18000,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1609501676725-7186f305e3dc?w=300&h=300&fit=crop",
      seller: "Kashmir Spice Co.",
      verified: true
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const totalSavings = cartItems.reduce((total, item) => total + ((item.originalPrice - item.price) * item.quantity), 0);
  const shippingFee = 150;
  const total = subtotal + shippingFee;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/50 via-white to-saffron-50/30">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Shopping Cart</h1>
            <p className="text-xl text-gray-600">
              {cartItems.length} items in your cart
            </p>
          </div>

          {cartItems.length === 0 ? (
            <Card className="text-center py-16">
              <CardContent>
                <ShoppingBag className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
                <p className="text-gray-500 mb-6">Add some authentic products to get started!</p>
                <Button className="bg-gradient-to-r from-saffron-600 to-terracotta-600">
                  Continue Shopping
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full md:w-32 h-32 object-cover rounded-lg"
                        />
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-2">{item.region}</p>
                          <p className="text-sm text-gray-600 mb-4">by {item.seller}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center border rounded-lg">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="h-10 w-10 p-0"
                                >
                                  <Minus className="w-4 h-4" />
                                </Button>
                                <span className="px-4 py-2 font-medium">{item.quantity}</span>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="h-10 w-10 p-0"
                                >
                                  <Plus className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <div className="flex items-center space-x-2">
                                <span className="text-lg font-bold">₹{(item.price * item.quantity).toLocaleString()}</span>
                                {item.originalPrice > item.price && (
                                  <span className="text-sm text-gray-500 line-through">
                                    ₹{(item.originalPrice * item.quantity).toLocaleString()}
                                  </span>
                                )}
                              </div>
                              {item.originalPrice > item.price && (
                                <Badge variant="secondary" className="mt-1">
                                  Save ₹{((item.originalPrice - item.price) * item.quantity).toLocaleString()}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">₹{subtotal.toLocaleString()}</span>
                    </div>
                    
                    {totalSavings > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Total Savings</span>
                        <span className="font-medium">-₹{totalSavings.toLocaleString()}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">₹{shippingFee}</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>₹{total.toLocaleString()}</span>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-saffron-600 to-terracotta-600 hover:from-saffron-700 hover:to-terracotta-700 h-12">
                      Proceed to Checkout
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    
                    <Button variant="outline" className="w-full">
                      Continue Shopping
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
