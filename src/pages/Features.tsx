import React from 'react';
import { Brain, Users, Target, TrendingUp, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import PipeDriveForm from '../components/PipeDriveForm';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-talentpool-dark" />,
      title: "AI-Powered Candidate Matching",
      description: "Our advanced AI algorithms analyze candidate profiles and job requirements to find the perfect matches, saving you hours of manual screening.",
      benefits: ["90% accuracy in candidate-job fit", "Reduces screening time by 80%", "Learns from your hiring patterns"],
    },
    {
      icon: <Users className="w-8 h-8 text-talentpool-dark" />,
      title: "Collaborative Hiring",
      description: "Seamlessly collaborate with your entire team, from hiring managers to interviewers, with real-time feedback and decision-making tools.",
      benefits: ["Unlimited team collaborators", "Real-time interview feedback", "Automated decision workflows"],
    },
    {
      icon: <Target className="w-8 h-8 text-talentpool-dark" />,
      title: "Candidate Engagement Tracking",
      description: "Monitor candidate interest and engagement throughout the process to reduce drop-offs and improve conversion rates.",
      benefits: ["Intent signal tracking", "Automated follow-ups", "Personalized candidate experiences"],
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-talentpool-dark" />,
      title: "Pipeline Management",
      description: "Build role-specific pipelines that adapt to your changing needs, ensuring you're always ready for new opportunities.",
      benefits: ["Dynamic pipeline creation", "Skill-based candidate pools", "Predictive hiring analytics"],
    },
    {
      icon: <Shield className="w-8 h-8 text-talentpool-dark" />,
      title: "Compliance & Security",
      description: "Stay compliant with GDPR, EEOC, and other regulations while maintaining the highest security standards for candidate data.",
      benefits: ["GDPR & EEOC compliant", "SOC2 Type II certified", "End-to-end encryption"],
    },
    {
      icon: <Zap className="w-8 h-8 text-talentpool-dark" />,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and streamline your hiring process with intelligent workflows that adapt to your preferences.",
      benefits: ["Smart task automation", "Custom workflow builder", "Integration with existing tools"],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-talentpool-light to-white py-20 pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Powerful Features for
              <br />
              <span className="text-talentpool-dark">Modern Recruiting</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover the comprehensive suite of tools designed to streamline your hiring process and help you find the best talent faster.
            </p>
            <button className="bg-talentpool-dark text-white px-8 py-4 rounded-lg font-semibold hover:bg-talentpool-medium transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-talentpool-light rounded-xl group-hover:bg-talentpool-medium transition-colors">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 text-talentpool-dark mr-3" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See Talentpool in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience how our features work together to create a seamless hiring experience
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-xl mb-8">
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="w-24 h-24 bg-talentpool-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-12 h-12 text-talentpool-dark" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Demo</h3>
                  <p className="text-gray-600">Experience our AI-powered matching in action</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-talentpool-dark text-white px-8 py-4 rounded-lg font-semibold hover:bg-talentpool-medium transition-colors inline-flex items-center">
                Try Interactive Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Integrates with Your Existing Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Seamlessly connect with the tools you already use
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Integration 1", logo: "/8.png" },
              { name: "Integration 2", logo: "/9.png" },
              { name: "Integration 3", logo: "/10.png" },
              { name: "Integration 4", logo: "/11.png" },
              { name: "Integration 5", logo: "/12.png" },
              { name: "Integration 6", logo: "/13.png" },
              { name: "Integration 7", logo: "/14.png" },
              { name: "Integration 8", logo: "/1.png" }
            ].map((integration, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <img src={integration.logo} alt={integration.name} className="w-12 h-12 object-contain" />
                </div>
                <h3 className="font-semibold text-gray-900">{integration.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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