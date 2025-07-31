
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-orange-500 mb-4">
              Origin<span className="text-white">X</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting buyers with verified regional sellers across India. 
              Authentic products, direct from the source.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/browse-products" className="text-gray-400 hover:text-white transition-colors">Browse Products</Link></li>
              <li><Link to="/regions" className="text-gray-400 hover:text-white transition-colors">Regions</Link></li>
              <li><Link to="/seller-onboarding" className="text-gray-400 hover:text-white transition-colors">Become a Seller</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help-center" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/shipping-info" className="text-gray-400 hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-white transition-colors">Returns</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                <span className="text-gray-400 text-sm">CMRIT Bangalore, India</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-orange-500" />
                <span className="text-gray-400 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-orange-500" />
                <span className="text-gray-400 text-sm">kethanvr@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 OriginX. All rights reserved. Built with ❤️ by Kethan VR</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
