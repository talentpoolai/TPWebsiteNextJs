import React from 'react';
import { CheckCircle, ArrowRight, Calendar, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Animation Container */}
          <div className="text-center mb-12">
            <div className="relative inline-flex items-center justify-center">
              {/* Animated Success Icon */}
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8 animate-pulse">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              
              {/* Floating particles effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-4 right-2 w-1 h-1 bg-green-300 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-2 left-4 w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Thank You for Your Interest!
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              We've received your submission and one of our representatives will get in touch with you shortly.
            </p>
          </div>

          {/* What Happens Next Section */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              What Happens Next?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Within 24 Hours</h3>
                <p className="text-gray-600">
                  Our team will review your information and prepare a personalized response
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Consultation</h3>
                <p className="text-gray-600">
                  We'll schedule a call to understand your specific hiring needs and challenges
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Custom Demo</h3>
                <p className="text-gray-600">
                  Get a tailored demonstration of how Talentpool can solve your recruitment challenges
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-talentpool-dark to-green-600 rounded-3xl text-white p-8 md:p-12 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Need Immediate Assistance?
              </h2>
              <p className="text-green-100 text-lg">
                Don't wait - reach out to us directly
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-green-100 mb-3">Get detailed answers to your questions</p>
                <a 
                  href="mailto:hello@talentpool.com" 
                  className="text-white hover:text-green-200 transition-colors font-medium"
                >
                  info@thetalentpool.ai
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-green-100 mb-3">Speak with our team directly</p>
                <a 
                  href="tel:+15551234567" 
                  className="text-white hover:text-green-200 transition-colors font-medium"
                >
                  9922963760
                </a>
              </div>
            </div>
          </div>

          {/* Explore More Section */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              While You Wait, Explore More
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/blog" className="group">
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Read Our Blog
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get expert insights on modern recruiting
                  </p>
                  <div className="flex items-center justify-center text-blue-600 group-hover:translate-x-1 transition-transform">
                    <span className="text-sm font-medium">Explore Articles</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
              
              <Link to="/case-studies" className="group">
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-purple-200">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    Success Stories
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    See how companies transformed their hiring
                  </p>
                  <div className="flex items-center justify-center text-purple-600 group-hover:translate-x-1 transition-transform">
                    <span className="text-sm font-medium">View Case Studies</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
              
              <Link to="/features" className="group">
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-green-200">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    Platform Features
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Discover powerful recruiting tools
                  </p>
                  <div className="flex items-center justify-center text-green-600 group-hover:translate-x-1 transition-transform">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link 
              to="/"
              className="inline-flex items-center bg-talentpool-dark text-white px-8 py-4 rounded-xl font-semibold hover:bg-talentpool-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Back to Homepage</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThankYou;