import { useState } from "react";
import { Package, MapPin, Clock, CheckCircle, Truck, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";

const Orders = () => {
  const orders = [
    {
      id: "ORD-2024-001",
      date: "2024-01-15",
      status: "delivered",
      total: 17950,
      estimatedDelivery: "2024-01-18",
      actualDelivery: "2024-01-17",
      trackingId: "TRK123456789",
      items: [
        {
          id: 1,
          name: "Premium Mysore Sandalwood Oil",
          region: "Mysore, Karnataka",
          price: 2450,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=300&h=300&fit=crop",
          seller: "Sandalwood Heritage Co."
        },
        {
          id: 2,
          name: "Pure Kashmir Saffron",
          region: "Kashmir Valley",
          price: 15000,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1609501676725-7186f305e3dc?w=300&h=300&fit=crop",
          seller: "Kashmir Spice Co."
        }
      ]
    },
    {
      id: "ORD-2024-002",
      date: "2024-01-20",
      status: "shipped",
      total: 8500,
      estimatedDelivery: "2024-01-25",
      trackingId: "TRK987654321",
      items: [
        {
          id: 3,
          name: "Hand-woven Banarasi Silk Saree",
          region: "Varanasi, UP",
          price: 8500,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=300&fit=crop",
          seller: "Weaver's Pride"
        }
      ]
    },
    {
      id: "ORD-2024-003",
      date: "2024-01-22",
      status: "processing",
      total: 1200,
      estimatedDelivery: "2024-01-28",
      trackingId: "TRK456789123",
      items: [
        {
          id: 4,
          name: "Premium Darjeeling Black Tea",
          region: "Darjeeling, WB",
          price: 1200,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop",
          seller: "Mountain Tea Estate"
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "bg-green-100 text-green-800";
      case "shipped": return "bg-blue-100 text-blue-800";
      case "processing": return "bg-yellow-100 text-yellow-800";
      case "cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered": return <CheckCircle className="w-4 h-4" />;
      case "shipped": return <Truck className="w-4 h-4" />;
      case "processing": return <Clock className="w-4 h-4" />;
      default: return <Package className="w-4 h-4" />;
    }
  };

  const filterOrders = (status?: string) => {
    if (!status) return orders;
    return orders.filter(order => order.status === status);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/50 via-white to-saffron-50/30">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">My Orders</h1>
            <p className="text-xl text-gray-600">
              Track and manage your orders
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">All Orders</TabsTrigger>
              <TabsTrigger value="processing">Processing</TabsTrigger>
              <TabsTrigger value="shipped">Shipped</TabsTrigger>
              <TabsTrigger value="delivered">Delivered</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="space-y-6">
                {orders.map((order) => (
                  <Card key={order.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">Order {order.id}</CardTitle>
                          <p className="text-sm text-gray-600">Placed on {new Date(order.date).toLocaleDateString()}</p>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(order.status)}>
                            {getStatusIcon(order.status)}
                            <span className="ml-1 capitalize">{order.status}</span>
                          </Badge>
                          <p className="text-lg font-bold mt-2">₹{order.total.toLocaleString()}</p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex items-center space-x-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900">{item.name}</h4>
                              <p className="text-sm text-gray-600">{item.region}</p>
                              <p className="text-sm text-gray-600">by {item.seller}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">₹{item.price.toLocaleString()}</p>
                              <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                            </div>
                          </div>
                        ))}
                        
                        <div className="border-t pt-4 flex justify-between items-center">
                          <div className="text-sm text-gray-600">
                            <p>Tracking ID: {order.trackingId}</p>
                            <p>
                              {order.status === "delivered" 
                                ? `Delivered on ${new Date(order.actualDelivery!).toLocaleDateString()}`
                                : `Expected delivery: ${new Date(order.estimatedDelivery).toLocaleDateString()}`
                              }
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                            <Button variant="outline" size="sm">
                              <Package className="w-4 h-4 mr-2" />
                              Track Order
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="processing" className="mt-8">
              <div className="space-y-6">
                {filterOrders("processing").map((order) => (
                  <Card key={order.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">Order {order.id}</CardTitle>
                          <p className="text-sm text-gray-600">Placed on {new Date(order.date).toLocaleDateString()}</p>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(order.status)}>
                            {getStatusIcon(order.status)}
                            <span className="ml-1 capitalize">{order.status}</span>
                          </Badge>
                          <p className="text-lg font-bold mt-2">₹{order.total.toLocaleString()}</p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex items-center space-x-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900">{item.name}</h4>
                              <p className="text-sm text-gray-600">{item.region}</p>
                              <p className="text-sm text-gray-600">by {item.seller}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">₹{item.price.toLocaleString()}</p>
                              <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                            </div>
                          </div>
                        ))}
                        
                        <div className="border-t pt-4 flex justify-between items-center">
                          <div className="text-sm text-gray-600">
                            <p>Tracking ID: {order.trackingId}</p>
                            <p>
                              {order.status === "delivered" 
                                ? `Delivered on ${new Date(order.actualDelivery!).toLocaleDateString()}`
                                : `Expected delivery: ${new Date(order.estimatedDelivery).toLocaleDateString()}`
                              }
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                            <Button variant="outline" size="sm">
                              <Package className="w-4 h-4 mr-2" />
                              Track Order
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="shipped" className="mt-8">
              <div className="space-y-6">
                {filterOrders("shipped").map((order) => (
                  <Card key={order.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">Order {order.id}</CardTitle>
                          <p className="text-sm text-gray-600">Placed on {new Date(order.date).toLocaleDateString()}</p>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(order.status)}>
                            {getStatusIcon(order.status)}
                            <span className="ml-1 capitalize">{order.status}</span>
                          </Badge>
                          <p className="text-lg font-bold mt-2">₹{order.total.toLocaleString()}</p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex items-center space-x-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900">{item.name}</h4>
                              <p className="text-sm text-gray-600">{item.region}</p>
                              <p className="text-sm text-gray-600">by {item.seller}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">₹{item.price.toLocaleString()}</p>
                              <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                            </div>
                          </div>
                        ))}
                        
                        <div className="border-t pt-4 flex justify-between items-center">
                          <div className="text-sm text-gray-600">
                            <p>Tracking ID: {order.trackingId}</p>
                            <p>
                              {order.status === "delivered" 
                                ? `Delivered on ${new Date(order.actualDelivery!).toLocaleDateString()}`
                                : `Expected delivery: ${new Date(order.estimatedDelivery).toLocaleDateString()}`
                              }
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                            <Button variant="outline" size="sm">
                              <Package className="w-4 h-4 mr-2" />
                              Track Order
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="delivered" className="mt-8">
              <div className="space-y-6">
                {filterOrders("delivered").map((order) => (
                  <Card key={order.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">Order {order.id}</CardTitle>
                          <p className="text-sm text-gray-600">Placed on {new Date(order.date).toLocaleDateString()}</p>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(order.status)}>
                            {getStatusIcon(order.status)}
                            <span className="ml-1 capitalize">{order.status}</span>
                          </Badge>
                          <p className="text-lg font-bold mt-2">₹{order.total.toLocaleString()}</p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex items-center space-x-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900">{item.name}</h4>
                              <p className="text-sm text-gray-600">{item.region}</p>
                              <p className="text-sm text-gray-600">by {item.seller}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">₹{item.price.toLocaleString()}</p>
                              <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                            </div>
                          </div>
                        ))}
                        
                        <div className="border-t pt-4 flex justify-between items-center">
                          <div className="text-sm text-gray-600">
                            <p>Tracking ID: {order.trackingId}</p>
                            <p>
                              {order.status === "delivered" 
                                ? `Delivered on ${new Date(order.actualDelivery!).toLocaleDateString()}`
                                : `Expected delivery: ${new Date(order.estimatedDelivery).toLocaleDateString()}`
                              }
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                            <Button variant="outline" size="sm">
                              <Package className="w-4 h-4 mr-2" />
                              Track Order
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cancelled" className="mt-8">
              <div className="text-center py-16">
                <Package className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No cancelled orders</h3>
                <p className="text-gray-500">You haven't cancelled any orders yet.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Orders;
