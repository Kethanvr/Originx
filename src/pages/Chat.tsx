
import { useState } from "react";
import { Send, Paperclip, Phone, Video, MoreVertical, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [selectedChat, setSelectedChat] = useState(1);

  const chats = [
    {
      id: 1,
      seller: "Sandalwood Heritage Co.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      lastMessage: "Thank you for your interest in our sandalwood oil!",
      time: "2 min ago",
      unread: 2,
      online: true
    },
    {
      id: 2,
      seller: "Weaver's Pride",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      lastMessage: "The saree will be ready for shipping tomorrow",
      time: "1 hour ago",
      unread: 0,
      online: false
    },
    {
      id: 3,
      seller: "Kashmir Spice Co.",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
      lastMessage: "We have fresh saffron available",
      time: "3 hours ago",
      unread: 1,
      online: true
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "seller",
      content: "Hello! Thank you for your interest in our Premium Mysore Sandalwood Oil. How can I help you today?",
      time: "10:30 AM",
      type: "text"
    },
    {
      id: 2,
      sender: "user",
      content: "Hi! I wanted to know more about the authenticity certificate. Do you provide one?",
      time: "10:32 AM",
      type: "text"
    },
    {
      id: 3,
      sender: "seller",
      content: "Absolutely! Every bottle comes with a Karnataka State certification of authenticity. I can send you a sample certificate image.",
      time: "10:33 AM",
      type: "text"
    },
    {
      id: 4,
      sender: "seller",
      content: "certificate.jpg",
      time: "10:34 AM",
      type: "image",
      imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop"
    },
    {
      id: 5,
      sender: "user",
      content: "Perfect! That looks authentic. What's the minimum order quantity?",
      time: "10:35 AM",
      type: "text"
    },
    {
      id: 6,
      sender: "seller",
      content: "For retail customers, there's no minimum order. You can order just one bottle. For bulk orders (10+ bottles), I offer a 15% discount.",
      time: "10:36 AM",
      type: "text"
    }
  ];

  const currentChat = chats.find(chat => chat.id === selectedChat);

  const sendMessage = () => {
    if (message.trim()) {
      // Add message logic here
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <Navigation />
      
      <div className="pt-20 h-screen flex">
        <div className="max-w-7xl mx-auto w-full flex bg-white shadow-lg">
          {/* Chat List */}
          <div className="w-1/3 border-r border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold">Messages</h2>
            </div>
            
            <div className="overflow-y-auto h-full">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setSelectedChat(chat.id)}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                    selectedChat === chat.id ? 'bg-saffron-50 border-l-4 border-l-saffron-500' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={chat.avatar} alt={chat.seller} />
                        <AvatarFallback>{chat.seller.charAt(0)}</AvatarFallback>
                      </Avatar>
                      {chat.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900 truncate">
                          {chat.seller}
                        </h3>
                        <span className="text-xs text-gray-500">{chat.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                    </div>
                    
                    {chat.unread > 0 && (
                      <Badge className="bg-saffron-500 text-white">{chat.unread}</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Window */}
          <div className="flex-1 flex flex-col">
            {currentChat ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Button variant="ghost" size="sm" className="lg:hidden">
                        <ArrowLeft className="w-4 h-4" />
                      </Button>
                      <Avatar>
                        <AvatarImage src={currentChat.avatar} alt={currentChat.seller} />
                        <AvatarFallback>{currentChat.seller.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{currentChat.seller}</h3>
                        <p className="text-sm text-gray-600">
                          {currentChat.online ? 'Online' : 'Last seen 2 hours ago'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Video className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-xs lg:max-w-md ${
                        msg.sender === 'user' 
                          ? 'bg-saffron-500 text-white' 
                          : 'bg-gray-100 text-gray-900'
                      } rounded-lg px-4 py-2`}>
                        {msg.type === 'text' ? (
                          <p className="text-sm">{msg.content}</p>
                        ) : (
                          <div className="space-y-2">
                            <img
                              src={msg.imageUrl}
                              alt="Attachment"
                              className="rounded-lg max-w-full h-auto"
                            />
                            <p className="text-xs opacity-75">{msg.content}</p>
                          </div>
                        )}
                        <p className={`text-xs mt-1 ${
                          msg.sender === 'user' ? 'text-saffron-100' : 'text-gray-500'
                        }`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200 bg-white">
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Paperclip className="w-4 h-4" />
                    </Button>
                    <Input
                      placeholder="Type a message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      className="flex-1"
                    />
                    <Button 
                      onClick={sendMessage}
                      className="bg-saffron-500 hover:bg-saffron-600"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-gray-500">Select a chat to start messaging</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
