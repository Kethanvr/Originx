
import { Search, ChevronDown, ChevronRight, MessageCircle, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "How do I verify if a seller is authentic?",
      answer: "All sellers on OriginX go through a rigorous verification process. Look for the ✅ Verified Seller badge on product listings. We verify their business registration, product authenticity, and regional origin credentials."
    },
    {
      id: 2,
      question: "What products can I find on OriginX?",
      answer: "OriginX specializes in authentic regional Indian products like Banarasi silk sarees, Darjeeling tea, Coorg coffee, Kashmir saffron, Mysore sandalwood, Kolhapuri chappals, and many more traditional crafts and specialties."
    },
    {
      id: 3,
      question: "How does the chat feature work?",
      answer: "You can directly message sellers before making a purchase. This is especially useful for B2B bulk orders or if you have specific requirements. Just click the 'Chat with Seller' button on any product page."
    },
    {
      id: 4,
      question: "Can I place bulk orders for my business?",
      answer: "Yes! OriginX supports both B2C and B2B transactions. Many of our sellers offer bulk pricing. Use the chat feature to discuss quantities, custom requirements, and pricing with sellers directly."
    },
    {
      id: 5,
      question: "How do I track my order?",
      answer: "Once your order is placed, you can track it in real-time from your Orders page. We integrate with leading logistics partners to provide accurate tracking information."
    },
    {
      id: 6,
      question: "What if I receive a damaged or incorrect item?",
      answer: "We have a comprehensive returns and refunds policy. Contact us within 7 days of delivery, and we'll arrange for return pickup and full refund. Check our Returns page for detailed information."
    }
  ];

  const categories = [
    {
      title: "Getting Started",
      description: "Learn the basics of using OriginX",
      icon: "🚀",
      articles: 12
    },
    {
      title: "Orders & Payments",
      description: "Manage your orders and payment methods",
      icon: "💳",
      articles: 8
    },
    {
      title: "Seller Verification",
      description: "Understanding our verification process",
      icon: "✅",
      articles: 6
    },
    {
      title: "Shipping & Delivery",
      description: "Track orders and delivery information",
      icon: "📦",
      articles: 10
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/50 via-white to-saffron-50/30">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Support Center</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">How can we help you?</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers to common questions or get in touch with our support team
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for help articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-saffron-400"
                />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Link to="/chat">
                <Button variant="outline" className="hover:bg-saffron-50">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat with Support
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="hover:bg-saffron-50">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </Link>
              <Link to="/orders">
                <Button variant="outline" className="hover:bg-saffron-50">
                  Track Order
                </Button>
              </Link>
            </div>
          </div>

          {/* Help Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Badge variant="secondary">{category.articles} articles</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <Card key={faq.id} className="overflow-hidden">
                  <CardHeader 
                    className="cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  >
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-medium">{faq.question}</CardTitle>
                      {expandedFaq === faq.id ? (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </CardHeader>
                  {expandedFaq === faq.id && (
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No FAQs found matching your search.</p>
              </div>
            )}
          </div>

          {/* Contact Support */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-saffron-600 to-terracotta-600 text-white border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Still need help?</h3>
                <p className="mb-6 opacity-90">
                  Can't find what you're looking for? Our support team is here to help you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button variant="secondary" size="lg">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Support
                    </Button>
                  </Link>
                  <Link to="/chat">
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-saffron-600">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Live Chat
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

export default HelpCenter;
