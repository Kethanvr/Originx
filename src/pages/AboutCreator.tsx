import { useState } from "react";
import React from "react";
import {
  Github,
  Linkedin,
  Youtube,
  Twitter,
  Globe,
  Mail,
  Code,
  Palette,
  Database,
  Brain,
  Rocket,
  Award,
  ExternalLink,
  ArrowRight,
  Star,
  CheckCircle,
  TrendingUp,
  Users,
  Globe as GlobeIcon,
  Package,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const AboutCreator = () => {
  const [activeTab, setActiveTab] = useState("about");

  // SEO: Update document title and meta description
  React.useEffect(() => {
    document.title = "About Creator - Kethan VR | OriginX Heritage Hub";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Meet Kethan VR, the creator of OriginX Heritage Hub. Full Stack Developer specializing in React, Next.js, and modern web technologies. Discover his projects and expertise."
      );
    }

    // Add structured data for the person
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Kethan VR",
      jobTitle: "Full Stack Developer",
      description:
        "AI developer & software builder from Bangalore, passionate about crafting smart, end-to-end web applications that actually scale and make a difference.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQHs5yDObbymdw/profile-displayphoto-shrink_800_800/B4DZV1yJd8HkAc-/0/1741437837622?e=1756944000&v=beta&t=fdJMquafRN6Hx_ivcRmAbDv9FTFBQfefsm0bQTD7im8",
      url: "https://originx.kethanvr.me/about-creator",
      sameAs: [
        "https://github.com/Kethanvr",
        "https://linkedin.com/in/kethan-vr-433ab532b",
        "https://kethanvr.me",
        "https://youtube.com/@kethanvr",
      ],
      knowsAbout: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Node.js",
        "AI Development",
        "Full Stack Development",
        "Web Applications",
      ],
      worksFor: {
        "@type": "Organization",
        name: "OriginX Heritage Hub",
      },
    };

    // Remove existing structured data if any
    const existingScript = document.querySelector(
      'script[data-structured-data="person"]'
    );
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-structured-data", "person");
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, []);

  const projects = [
    {
      title: "CoCreateAI - AI Prompting Assistant",
      description:
        "CoCreateAI is an AI-powered collaborative platform for creating, managing, and sharing prompts. It features smart prompt creation with AI assistance, version control, collaborative sharing, interactive tutorials, and a prompt playground for real-time testing.",
      technologies: [
        "Next.js 14",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Gemini API",
        "Lucide React",
        "Framer Motion",
        "Vercel",
      ],
      link: "https://cca.kethanvr.me",
      github: "https://github.com/Kethanvr/cocreateai",
      featured: true,
    },
    {
      title: "TherapEase - AI Mental Health Support",
      description:
        "TherapEase is an AI-driven web application designed to provide accessible, compassionate mental health support. Leveraging the latest in GenAI and LLM technology, it offers a safe space for users to chat, track their mood, set medication reminders, and access relaxation exercises.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Clerk Auth",
        "Gemini API",
        "LangChain",
        "Vercel",
      ],
      link: "https://github.com/Kethanvr/TherapEase",
      github: "https://github.com/Kethanvr/TherapEase",
      featured: true,
    },
    {
      title: "MediScan - AI Health Assistant",
      description:
        "MediScan is a mobile-first web app that allows users to scan medicine and get detailed information such as usage, side effects, and dosage. The app also features a health-related AI chatbot for user interaction.",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Supabase",
        "Gemini API",
      ],
      link: "https://downloadmediscan.kethanvr.me",
      github: "https://github.com/Kethanvr/MediScan",
      featured: true,
    },
    {
      title: "InstaScan - AI Label Scanner",
      description:
        "InstaScan is an AI-powered label scanner that extracts ingredient details from food, medicine, and cosmetic products, providing a health score to help users make informed choices.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "OpenFoodFacts API",
        "Machine Learning",
      ],
      link: "https://instascan.kethanvr.me/",
      github: "https://github.com/Kethanvr/InstaScan",
    },
    {
      title: "Shūn.AI - Revolutionizing the Future of Intelligence",
      description:
        "Shūn.AI is not just another AI model—it's a revolution in artificial intelligence, pushing the boundaries of what machines can understand and achieve. The project is currently in its early stages.",
      technologies: [
        "Next.js",
        "TypeScript",
        "ShadCN",
        "Accessibility UI",
        "AI Model (Future Plan)",
      ],
      link: "https://ai.kethanvr.me",
      github: "https://github.com/Kethanvr/ShunAI",
    },
    {
      title: "InstaSearch - Image Search App",
      description:
        "InstaSearch allows users to search for high-quality images from Unsplash based on keywords. The app integrates the Unsplash API, providing a seamless search experience.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Tailwind CSS",
        "Unsplash API",
      ],
      link: "https://instasearch.kethanvr.me/",
      github: "https://github.com/Kethanvr/InstaSearch",
    },
    {
      title: "CineSnap - Movie Hub & CineShot",
      description:
        "CineSnap is a user-friendly platform for movie enthusiasts, offering detailed insights into movies, cast, and crew. The standout CineShot feature lets users download high-quality images.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "TMDB API"],
      link: "https://cinesnap.kethanvr.me/",
      github: "https://github.com/Kethanvr/CineSnap",
    },
    {
      title: "Petty - eCommerce Platform for Pet Food",
      description:
        "Petty is an award-winning eCommerce platform for pet food, created as a 1st Semester Mini Project at CMRIT Bangalore. It bagged 1st Prize in a project competition.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://petty.kethanvr.me/",
      github: "https://github.com/Kethanvr/Petty",
      award: "🏆 1st Prize Winner",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "Supabase", "MongoDB", "PostgreSQL"],
    },
    {
      category: "AI & ML",
      items: [
        "Gemini API",
        "OpenAI",
        "LangChain",
        "Prompt Engineering",
        "AI Chatbots",
      ],
    },
    {
      category: "Dev Tools",
      items: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Docker"],
    },
  ];

  const stats = [
    {
      icon: Users,
      label: "500+ Verified Sellers",
      value: "500+",
      color: "text-emerald-600",
    },
    {
      icon: GlobeIcon,
      label: "28 States & UTs",
      value: "28",
      color: "text-blue-600",
    },
    {
      icon: Package,
      label: "10,000+ Products",
      value: "10K+",
      color: "text-purple-600",
    },
    {
      icon: Shield,
      label: "99% Satisfaction",
      value: "99%",
      color: "text-amber-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/50 via-white to-saffron-50/30">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge
            variant="secondary"
            className="mb-6 text-saffron-700 bg-saffron-100 border-saffron-200 text-sm px-4 py-2"
          >
            <Rocket className="w-4 h-4 mr-2" />
            AI Developer & Software Builder
          </Badge>

          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQHs5yDObbymdw/profile-displayphoto-shrink_800_800/B4DZV1yJd8HkAc-/0/1741437837622?e=1756944000&v=beta&t=fdJMquafRN6Hx_ivcRmAbDv9FTFBQfefsm0bQTD7im8"
                alt="Kethan VR - Full Stack Developer and Creator of OriginX Heritage Hub"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-2xl"
                loading="eager"
              />
              <div className="absolute -bottom-2 -right-2 bg-saffron-500 text-white rounded-full p-2 shadow-lg">
                <Code className="w-4 h-4" />
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            Hey, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-600 via-orange-500 to-terracotta-600">
              Kethan VR
            </span>
          </h1>

          <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            An AI developer & software builder from Bangalore, passionate about
            crafting smart, end-to-end web applications that actually scale and
            make a difference.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link to="https://github.com/Kethanvr" target="_blank">
              <Button variant="outline" size="lg" className="gap-2">
                <Github className="w-5 h-5" />
                GitHub
              </Button>
            </Link>
            <Link
              to="https://linkedin.com/in/kethan-vr-433ab532b"
              target="_blank"
            >
              <Button variant="outline" size="lg" className="gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Button>
            </Link>
            <Link to="https://kethanvr.me" target="_blank">
              <Button variant="outline" size="lg" className="gap-2">
                <Globe className="w-5 h-5" />
                Portfolio
              </Button>
            </Link>
            <Link to="https://youtube.com/@kethanvr" target="_blank">
              <Button variant="outline" size="lg" className="gap-2">
                <Youtube className="w-5 h-5" />
                YouTube
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <stat.icon
                    className={`w-12 h-12 ${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  />
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm font-semibold text-gray-600">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 text-lg px-6 py-2">
              What I Do
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Specializations
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Exploring the future of AI & building real-world GenAI
              applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8 text-center">
                <Brain className="w-16 h-16 text-purple-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  AI & GenAI
                </h3>
                <p className="text-gray-600">
                  Building smart applications with LLMs, Gemini API, and OpenAI
                  integration
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8 text-center">
                <Code className="w-16 h-16 text-blue-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Full-Stack Dev
                </h3>
                <p className="text-gray-600">
                  Next.js, Node.js, Tailwind CSS, and Supabase for scalable
                  applications
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8 text-center">
                <Palette className="w-16 h-16 text-green-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  UI/UX Design
                </h3>
                <p className="text-gray-600">
                  Creating beautiful, accessible interfaces with modern design
                  systems
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8 text-center">
                <Database className="w-16 h-16 text-orange-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  DevOps
                </h3>
                <p className="text-gray-600">
                  Learning Docker, CI/CD, and cloud infrastructure for better
                  scaling
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-saffron-50/50 to-terracotta-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge
              variant="secondary"
              className="mb-6 bg-saffron-100 text-saffron-700 text-lg px-6 py-2"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Technical Stack
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Skills & Technologies
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Modern tech stack for building scalable, AI-powered applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 font-medium">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 text-lg px-6 py-2">
              Featured Work
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Featured Projects
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Real-world applications that showcase my expertise in AI,
              full-stack development, and modern web technologies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 overflow-hidden"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                          {project.title}
                        </CardTitle>
                        {project.award && (
                          <Badge
                            variant="secondary"
                            className="bg-amber-100 text-amber-700 border-amber-200"
                          >
                            {project.award}
                          </Badge>
                        )}
                      </div>
                      <Star className="w-6 h-6 text-yellow-500" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Link to={project.link} target="_blank">
                        <Button size="sm" className="gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </Button>
                      </Link>
                      <Link to={project.github} target="_blank">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Github className="w-4 h-4" />
                          Code
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-saffron-50/50 to-terracotta-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge
              variant="secondary"
              className="mb-6 bg-saffron-100 text-saffron-700 text-lg px-6 py-2"
            >
              <Package className="w-5 h-5 mr-2" />
              Complete Portfolio
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              All Projects
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive collection of my work across different
              technologies and domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {project.title}
                    </CardTitle>
                    {project.award && (
                      <Badge
                        variant="secondary"
                        className="bg-amber-100 text-amber-700 border-amber-200 text-xs"
                      >
                        {project.award}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Link to={project.link} target="_blank">
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-1 text-xs"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Demo
                      </Button>
                    </Link>
                    <Link to={project.github} target="_blank">
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-1 text-xs"
                      >
                        <Github className="w-3 h-3" />
                        Code
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Career */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 text-lg px-6 py-2">
              Background
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Education & Career
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Self-taught developer with a passion for learning and building
              real-world applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gray-900">
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-saffron-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-saffron-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      CMRIT Bangalore
                    </h3>
                    <p className="text-gray-600">
                      Information Science Engineering (2024–2028)
                    </p>
                    <p className="text-sm text-gray-500">Bachelor's Degree</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Self-Taught Developer
                    </h3>
                    <p className="text-gray-600">
                      Udemy, YouTube, Online Resources
                    </p>
                    <p className="text-sm text-gray-500">Continuous Learning</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gray-900">
                  Currently Learning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    AI fine-tuning & running local LLMs (HuggingFace, PyTorch,
                    Docker)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    DevOps for scaling apps (CI/CD, cloud infra, serverless)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    API optimization, microservices, database scalability
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    Prompt engineering for custom chatbot use-cases
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <Card className="max-w-6xl mx-auto bg-gradient-to-r from-saffron-600 via-orange-500 to-terracotta-600 border-0 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32"></div>

          <CardContent className="p-16 text-center relative z-10">
            <h2 className="text-5xl font-bold mb-8">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-2xl mb-12 opacity-90 max-w-4xl mx-auto">
              Whether you're looking to collaborate on a project, need technical
              consultation, or just want to connect
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="https://kethanvr.me" target="_blank">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-saffron-600 font-semibold hover:bg-white/90 px-10 py-6 text-xl"
                >
                  View Portfolio
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </Link>
              <Link to="mailto:contact@kethanvr.me">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-saffron-600 bg-transparent px-10 py-6 text-xl font-semibold"
                >
                  <Mail className="w-6 h-6 mr-2" />
                  Get in Touch
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default AboutCreator;
