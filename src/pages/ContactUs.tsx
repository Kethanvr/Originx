import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ContactUs = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "CMRIT Bangalore, India",
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 98765 43210",
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: "kethanvr@gmail.com",
      color: "text-orange-600"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 hours",
      color: "text-purple-600"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/Kethanvr",
      color: "hover:text-gray-900"
    },
    {
      icon: Linkedin,
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/kethan-vr-433ab532b/",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      name: "Twitter/X",
      url: "https://x.com/VrKethan",
      color: "hover:text-blue-400"
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://www.youtube.com/@kethanvr",
      color: "hover:text-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/50 via-white to-saffron-50/30">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Get in Touch</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help! Reach out to us with any questions, feedback, or inquiries.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <item.icon className={`w-10 h-10 mx-auto mb-4 ${item.color}`} />
                <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                <p className="text-gray-600">{item.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <Card className="max-w-3xl mx-auto mb-16">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
            </div>
            <Input type="text" placeholder="Subject" />
            <Textarea placeholder="Message" rows={4} />
            <Button className="w-full bg-gradient-to-r from-saffron-600 to-terracotta-600 hover:from-saffron-700 hover:to-terracotta-700">
              Send Message
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>

        {/* Social Links */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Connect with Us</h2>
          <div className="flex justify-center space-x-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-500 hover:text-gray-900 transition-colors ${link.color}`}
              >
                <link.icon className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
