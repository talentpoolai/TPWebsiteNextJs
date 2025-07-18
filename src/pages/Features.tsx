import React from 'react';
import { Database, Users, Calendar, BarChart3, UserPlus, Building, FileText, Brain, Zap, Search, Shield, Target, CheckCircle, ArrowRight, Globe, Link, MessageSquare, Settings } from 'lucide-react';
import PipeDriveForm from '../components/PipeDriveForm';

const Features: React.FC = () => {
  const featureCategories = [
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: "Database Management",
      description: "Search, communicate, and engage with your potential candidates with candidate management system. Let AI help you get through the bulk and reach the best candidates faster. AI screening gets you the key skills based on experience, just like a human does. Know them better to nurture with personalisation and aspiration alignment.",
      color: "blue",
      gradient: "from-blue-50 to-indigo-50",
      features: [
        "Centralised Database",
        "Duplicate Detection", 
        "Source Management",
        "Advanced Search Filters"
      ],
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Applicant Tracking",
      description: "Accelerate your hiring process with visibility. Reduce the frustration of working on disparate systems. Save time with Talentpool's applicant tracking module, along with tools such as Candidate 360, document management, and onboarding. Empower your team with insights and make your recruitment process more agile and efficient.",
      color: "green",
      gradient: "from-green-50 to-emerald-50",
      features: [
        "Automated Workflows",
        "Automatic To-do",
        "Visibility",
        "Role-based Access"
      ],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-600" />,
      title: "Interview Management",
      description: "Simplify the intricate process of manual interview scheduling and the prolonged application process. Eliminate the risk of scheduling conflicts and double bookings with Talentpool's automatic interview scheduling tool, calendar integration, and automated reminders. Keep your candidates informed and engaged for better interview outcomes.",
      color: "purple",
      gradient: "from-purple-50 to-pink-50",
      features: [
        "Automate interview management",
        "Virtual Recruiter: Maya",
        "Feedback Management",
        "Calendar Integration"
      ],
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-600" />,
      title: "Reports and Analytics",
      description: "Obtain real-time visibility into your recruitment performance instead of waiting for a weekly report from your recruiters. Get all recruitment data at your fingertips to dissect and analyze from multiple metrics. Leverage ready analytics and visual interactive dashboards to identify trends. Track correctly, measure against benchmarks and improve with data-backed decisions.",
      color: "orange",
      gradient: "from-orange-50 to-red-50",
      features: [
        "Report Builder",
        "Personalised Dashboard",
        "Track Performance"
      ],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
    },
    {
      icon: <UserPlus className="w-8 h-8 text-teal-600" />,
      title: "Employee Referral",
      description: "With a transparent referral system, tap into the valuable networks of existing employees to source top talent and shorten your time to hire. Eliminate time-consuming manual entry, increase visibility on performance, and ensure every referral is tracked with incentives and eligibility requirements.",
      color: "teal",
      gradient: "from-teal-50 to-cyan-50",
      features: [
        "Easy Referrals",
        "Candidate tracking",
        "Rewards"
      ],
      image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
    },
    {
      icon: <Building className="w-8 h-8 text-indigo-600" />,
      title: "Vendor Management",
      description: "Traditional hiring approach deters the hiring velocity and poses challenges which can be easily be overcome with the help of recruitment software. With deep understanding and selection processes across segments and organizational stages, Talentpool brings you useful modules and productivity tools to increase efficiency of your team.",
      color: "indigo",
      gradient: "from-indigo-50 to-purple-50",
      features: [
        "Manage Vendors",
        "Candidate Management",
        "Measure ROI"
      ],
      image: "https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
    },
    {
      icon: <FileText className="w-8 h-8 text-pink-600" />,
      title: "Resume Management",
      description: "Leverage AI-powered resume processing to automatically screen, parse, and rank candidates based on job requirements. Transform unstructured resume data into actionable insights and streamline your candidate evaluation process.",
      color: "pink",
      gradient: "from-pink-50 to-rose-50",
      features: [
        "AI Screening",
        "Resume Parsing",
        "Resume Ranking"
      ],
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
    }
  ];

  const integrations = [
    { name: "Naukri", logo: "/1.png", category: "Job Boards" },
    { name: "LinkedIn", logo: "/2.png", category: "Professional Networks" },
    { name: "Indeed", logo: "/3.png", category: "Job Boards" },
    { name: "Slack", logo: "/4.png", category: "Communication" },
    { name: "Microsoft Teams", logo: "/5.png", category: "Communication" },
    { name: "Google Workspace", logo: "/6.png", category: "Productivity" },
    { name: "Zoom", logo: "/7.png", category: "Video Conferencing" },
    { name: "Outlook", logo: "/8.png", category: "Email" },
    { name: "DocuSign", logo: "/9.png", category: "Document Management" },
    { name: "BambooHR", logo: "/10.png", category: "HRMS" },
    { name: "Workday", logo: "/11.png", category: "HRMS" },
    { name: "Greenhouse", logo: "/12.png", category: "ATS Integration" }
  ];

  const integrationCategories = [
    {
      title: "Job Boards & Sourcing",
      description: "Connect with major job boards and sourcing platforms",
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      integrations: integrations.filter(i => i.category === "Job Boards" || i.category === "Professional Networks")
    },
    {
      title: "Communication & Collaboration",
      description: "Seamlessly integrate with your team's communication tools",
      icon: <MessageSquare className="w-6 h-6 text-green-600" />,
      integrations: integrations.filter(i => i.category === "Communication" || i.category === "Video Conferencing")
    },
    {
      title: "HRMS & Document Management",
      description: "Connect with your existing HR systems and workflows",
      icon: <Settings className="w-6 h-6 text-purple-600" />,
      integrations: integrations.filter(i => i.category === "HRMS" || i.category === "Document Management" || i.category === "ATS Integration")
    },
    {
      title: "Productivity & Email",
      description: "Integrate with productivity suites and email platforms",
      icon: <Zap className="w-6 h-6 text-orange-600" />,
      integrations: integrations.filter(i => i.category === "Productivity" || i.category === "Email")
    }
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

      {/* Feature Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {featureCategories.map((category, index) => (
              <div key={index} className="relative">
                {/* Decorative background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className={`absolute ${index % 2 === 0 ? 'top-20 left-20' : 'bottom-20 right-20'} w-64 h-64 bg-gradient-to-br ${category.gradient} rounded-full blur-3xl opacity-20`}></div>
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image Section */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative group">
                      <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-2xl border border-gray-100">
                        <img 
                          src={category.image} 
                          alt={category.title}
                          className="w-full h-80 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Floating icon badge */}
                        <div className="absolute -bottom-6 -right-6 p-4 bg-white rounded-2xl shadow-2xl border border-gray-100 group-hover:scale-110 transition-all duration-300">
                          <div className={`text-${category.color}-600`}>
                            {category.icon}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        {category.title}
                      </h3>
                      <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        {category.description}
                      </p>
                    </div>

                    {/* Feature list */}
                    <div className="space-y-4">
                      {category.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex} 
                          className="flex items-center group/item"
                        >
                          <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover/item:scale-110 transition-all duration-300 bg-gradient-to-br from-${category.color}-500 to-${category.color}-600`}>
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-lg font-semibold text-gray-800 group-hover/item:text-talentpool-dark transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <button className={`group/btn inline-flex items-center px-8 py-4 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 hover:from-${category.color}-600 hover:to-${category.color}-700`}>
                        <span>Learn More</span>
                        <ArrowRight className="w-5 h-5 ml-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
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

          {/* Integration Categories */}
          <div className="space-y-12">
            {integrationCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-gray-50 rounded-xl mr-4">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {category.integrations.map((integration, integrationIndex) => (
                    <div key={integrationIndex} className="group">
                      <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:bg-white border border-gray-100 hover:border-talentpool-dark">
                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                          <img 
                            src={integration.logo} 
                            alt={integration.name}
                            className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
                          />
                        </div>
                        <h4 className="font-semibold text-gray-900 text-sm group-hover:text-talentpool-dark transition-colors">
                          {integration.name}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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