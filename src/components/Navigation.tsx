
import { useState } from "react";
import { Search, User, ShoppingCart, MessageCircle, Package, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-saffron-600 to-terracotta-600 bg-clip-text text-transparent">
              Origin<span className="text-gray-900">X</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors font-medium ${
                isActive('/') ? 'text-saffron-600' : 'text-gray-700 hover:text-saffron-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/browse-products" 
              className={`transition-colors font-medium ${
                isActive('/browse-products') ? 'text-saffron-600' : 'text-gray-700 hover:text-saffron-600'
              }`}
            >
              Browse Products
            </Link>
            <Link 
              to="/regions" 
              className={`transition-colors font-medium ${
                isActive('/regions') ? 'text-saffron-600' : 'text-gray-700 hover:text-saffron-600'
              }`}
            >
              Regions
            </Link>
            <Link 
              to="/seller-onboarding" 
              className={`transition-colors font-medium ${
                isActive('/seller-onboarding') ? 'text-saffron-600' : 'text-gray-700 hover:text-saffron-600'
              }`}
            >
              Sell on OriginX
            </Link>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/chat">
              <Button variant="ghost" size="sm" className="hover:bg-saffron-50">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat
              </Button>
            </Link>
            <Link to="/orders">
              <Button variant="ghost" size="sm" className="hover:bg-saffron-50 relative">
                <Package className="w-4 h-4 mr-2" />
                Orders
                <Badge className="absolute -top-2 -right-2 bg-saffron-500 text-white text-xs px-1.5 py-0.5">2</Badge>
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="sm" className="hover:bg-saffron-50 relative">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart
                <Badge className="absolute -top-2 -right-2 bg-saffron-500 text-white text-xs px-1.5 py-0.5">3</Badge>
              </Button>
            </Link>
            <Button variant="default" size="sm" className="bg-gradient-to-r from-saffron-600 to-terracotta-600 hover:from-saffron-700 hover:to-terracotta-700">
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-saffron-50"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-6 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`transition-colors font-medium py-2 ${
                  isActive('/') ? 'text-saffron-600' : 'text-gray-700 hover:text-saffron-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/browse-products" 
                className={`transition-colors font-medium py-2 ${
                  isActive('/browse-products') ? 'text-saffron-600' : 'text-gray-700 hover:text-saffron-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Products
              </Link>
              <Link 
                to="/regions" 
                className={`transition-colors font-medium py-2 ${
                  isActive('/regions') ? 'text-saffron-600' : 'text-gray-700 hover:text-saffron-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Regions
              </Link>
              <Link 
                to="/seller-onboarding" 
                className={`transition-colors font-medium py-2 ${
                  isActive('/seller-onboarding') ? 'text-saffron-600' : 'text-gray-700 hover:text-saffron-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sell on OriginX
              </Link>
              <div className="flex flex-col space-y-3 pt-6 border-t border-gray-200">
                <Link to="/chat" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="justify-start hover:bg-saffron-50 w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat
                  </Button>
                </Link>
                <Link to="/orders" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="justify-start hover:bg-saffron-50 w-full">
                    <Package className="w-4 h-4 mr-2" />
                    Orders
                  </Button>
                </Link>
                <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="justify-start hover:bg-saffron-50 w-full">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Cart
                  </Button>
                </Link>
                <Button variant="default" size="sm" className="justify-start bg-gradient-to-r from-saffron-600 to-terracotta-600">
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
