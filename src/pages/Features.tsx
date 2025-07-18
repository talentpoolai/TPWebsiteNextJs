import React from 'react';
import { Database, Users, Calendar, BarChart3, UserPlus, Building, FileText, Brain, Zap, Search, Shield, Target, CheckCircle, ArrowRight, Globe, Link, MessageSquare, Settings } from 'lucide-react';
import PipeDriveForm from '../components/PipeDriveForm';

const Features: React.FC = () => {
  const featureCategories = [
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: "Database Management",
      description: "Search, communicate, and engage with potential candidates using our AI-powered candidate management system. Get through the bulk and reach the best candidates faster.",
      color: "blue",
      gradient: "from-blue-50 to-indigo-50",
      features: [
        "Centralised Database",
        "Duplicate Detection", 
        "Source Management",
        "Advanced Search Filters"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Applicant Tracking",
      description: "Accelerate your hiring process with visibility. Reduce frustration of disparate systems and save time with our comprehensive tracking module.",
      color: "green",
      gradient: "from-green-50 to-emerald-50",
      features: [
        "Automated Workflows",
        "Automatic To-do",
        "Visibility",
        "Role-based Access"
      ]
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-600" />,
      title: "Interview Management",
      description: "Simplify manual interview scheduling and eliminate conflicts with automatic scheduling, calendar integration, and automated reminders.",
      color: "purple",
      gradient: "from-purple-50 to-pink-50",
      features: [
        "Automate interview management",
        "Virtual Recruiter: Maya",
        "Feedback Management",
        "Calendar Integration"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-600" />,
      title: "Reports and Analytics",
      description: "Get real-time visibility into recruitment performance with ready analytics and interactive dashboards to identify trends and improve decisions.",
      color: "orange",
      gradient: "from-orange-50 to-red-50",
      features: [
        "Report Builder",
        "Personalised Dashboard",
        "Track Performance"
      ]
    },
    {
      icon: <Building className="w-8 h-8 text-indigo-600" />,
      title: "Vendor Management",
      description: "Overcome traditional hiring challenges with deep understanding of selection processes and productivity tools to increase team efficiency.",
      color: "indigo",
      gradient: "from-indigo-50 to-purple-50",
      features: [
        "Manage Vendors",
        "Candidate Management",
        "Measure ROI"
      ]
    },
    {
      icon: <FileText className="w-8 h-8 text-pink-600" />,
      title: "Resume Management",
      description: "Leverage AI-powered resume processing to automatically screen, parse, and rank candidates based on job requirements.",
      color: "pink",
      gradient: "from-pink-50 to-rose-50",
      features: [
        "AI Screening",
        "Resume Parsing",
        "Resume Ranking"
      ]
    }
  ];

  const integrations = [
    { name: "Naukri", logo: "/images/1.png" },
    { name: "LinkedIn", logo: "/images/2.png" },
    { name: "Indeed", logo: "/images/3.png" },
    { name: "Slack", logo: "/images/4.png" },
    { name: "Microsoft Teams", logo: "/images/5.png" },
    { name: "Google Workspace", logo: "/images/6.png" },
    { name: "Zoom", logo: "/images/7.png" },
    { name: "DocuSign", logo: "/images/9.png" },
    { name: "BambooHR", logo: "/images/10.png" },
    { name: "Workday", logo: "/images/11.png" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-talentpool-light to-white py-20 pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-talentpool-light to-blue-100 rounded-full mb-6">
              <span className="bg-white px-6 py-2 rounded-full text-talentpool-dark font-semibold text-sm">
                ⚡ Comprehensive Platform
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Powerful Features for
              <br />
              <span className="text-talentpool-dark">Modern Recruiting</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover the comprehensive suite of tools designed to streamline your hiring process and help you find the best talent faster.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureCategories.map((category, index) => (
              <div key={index} className={`bg-gradient-to-br ${category.gradient} rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group`}>
                {/* Icon and Title */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm mb-4 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 bg-${category.color}-100`}>
                        <CheckCircle className="w-4 h-4 text-white" style={{ color: `var(--${category.color}-600)` }} />
                      </div>
                      <span className="text-gray-800 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <span className="bg-white px-6 py-2 rounded-full text-gray-800 font-semibold text-sm">
                🔗 Seamless Integrations
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Integrates with Your Existing Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect Talentpool with the tools you already use to create a unified hiring workflow
            </p>
          </div>

          {/* Creative Logo Display */}
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-400 to-blue-400 rounded-full blur-3xl -translate-x-24 translate-y-24"></div>
            </div>

            {/* Floating logos in creative arrangement */}
            <div className="relative">
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
                {integrations.map((integration, index) => (
                  <div key={index} className="group">
                    <div className="aspect-square bg-white rounded-2xl p-4 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-talentpool-dark transform hover:-translate-y-2 hover:scale-105">
                      <img 
                        src={integration.logo} 
                        alt={integration.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform filter grayscale group-hover:grayscale-0"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* "And More" section */}
              <div className="mt-12 text-center">
                <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-talentpool-light to-blue-100 rounded-2xl px-8 py-6">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-600">+</span>
                    </div>
                    <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-xs font-bold text-white">+</span>
                    </div>
                    <div className="w-8 h-8 bg-gray-500 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-xs font-bold text-white">+</span>
                    </div>
                  </div>
                  <span className="text-xl font-bold text-gray-800">and 50+ more integrations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Integration CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-talentpool-dark to-green-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Need a Custom Integration?
              </h3>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Our team can build custom integrations with your existing tools and workflows
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-talentpool-dark px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-colors">
                  Request Integration
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-talentpool-dark transition-colors">
                  View API Docs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See Talentpool in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience how our features work together to create a seamless hiring experience
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-talentpool-light to-green-100 rounded-2xl mb-8">
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Brain className="w-12 h-12 text-talentpool-dark" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Interactive Demo</h3>
                  <p className="text-gray-600 mb-6">Experience our AI-powered platform in action</p>
                  <button className="bg-talentpool-dark text-white px-8 py-4 rounded-xl font-semibold hover:bg-talentpool-medium transition-colors inline-flex items-center shadow-lg">
                    Try Interactive Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100 overflow-hidden">
            
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gradient-to-br from-talentpool-light to-green-200 rounded-full blur-3xl -translate-x-16 sm:-translate-x-32 -translate-y-16 sm:-translate-y-32"></div>
              <div className="absolute bottom-0 right-0 w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 bg-gradient-to-tl from-green-200 to-talentpool-light rounded-full blur-3xl translate-x-12 sm:translate-x-24 translate-y-12 sm:translate-y-24"></div>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center p-1 bg-gradient-to-r from-talentpool-light to-green-100 rounded-full mb-6 sm:mb-8">
                <span className="bg-white px-4 sm:px-8 py-2 sm:py-3 rounded-full text-talentpool-dark font-bold text-xs sm:text-sm shadow-lg">
                  🚀 Ready to Get Started?
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                Transform Your Hiring Process
                <br />
                <span className="bg-gradient-to-r from-talentpool-dark to-green-600 bg-clip-text text-transparent">
                  Starting Today
                </span>
              </h3>
              <p className="text-gray-600 mb-8 sm:mb-12 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
                Join thousands of tech companies already using Talentpool to hire faster, reduce drop-offs, and build better teams
              </p>

              {/* PipeDrive Form */}
              <div className="mb-8 sm:mb-12">
                <PipeDriveForm />
              </div>
              
              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span>60-day free trial</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span>Setup in 5 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;