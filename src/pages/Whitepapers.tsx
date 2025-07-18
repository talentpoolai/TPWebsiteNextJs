import React from 'react';
import { Calendar, Download, FileText, Eye, Users } from 'lucide-react';
import { whitepapers, getFeaturedWhitepapers } from '../data/whitepaperData';

const Whitepapers: React.FC = () => {
  const featuredWhitepapers = getFeaturedWhitepapers();
  const regularWhitepapers = whitepapers.filter(wp => !wp.featured);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-purple-100 rounded-2xl">
                <FileText className="w-12 h-12 text-purple-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Expert Insights &
              <br />
              <span className="text-purple-600">Research Reports</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Download comprehensive whitepapers, research reports, and strategic guides to transform your hiring process
            </p>
          </div>
        </div>
      </section>

      {/* Featured Whitepapers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Research
            </h2>
            <p className="text-xl text-gray-600">
              Our most comprehensive and impactful reports
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredWhitepapers.map((whitepaper, index) => (
              <article key={whitepaper.id} className={`group ${index === 0 ? 'lg:col-span-2' : ''}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className={`aspect-w-16 ${index === 0 ? 'aspect-h-8' : 'aspect-h-9'}`}>
                    <img 
                      src={whitepaper.featuredImage} 
                      alt={whitepaper.title}
                      className={`w-full object-cover group-hover:scale-105 transition-transform ${
                        index === 0 ? 'h-80' : 'h-48'
                      }`}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full">
                        {whitepaper.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center text-gray-500 text-sm">
                        <FileText className="w-4 h-4 mr-1" />
                        {whitepaper.pages} pages
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Download className="w-4 h-4 mr-1" />
                        {whitepaper.downloadCount}
                      </div>
                    </div>
                    <h3 className={`font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors ${
                      index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'
                    }`}>
                      {whitepaper.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{whitepaper.excerpt}</p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <img 
                          src={whitepaper.author.avatar} 
                          alt={whitepaper.author.name}
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{whitepaper.author.name}</p>
                          <p className="text-xs text-gray-500">{whitepaper.author.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(whitepaper.publishedAt).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {whitepaper.fileSize} • PDF Download
                      </div>
                      <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center">
                        <Download className="w-4 h-4 mr-2" />
                        Download Free
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Whitepapers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Research Reports
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive guides and insights for modern recruiting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularWhitepapers.map((whitepaper) => (
              <article key={whitepaper.id} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="relative">
                    <img 
                      src={whitepaper.featuredImage} 
                      alt={whitepaper.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full">
                        {whitepaper.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center text-gray-500 text-sm">
                        <FileText className="w-4 h-4 mr-1" />
                        {whitepaper.pages} pages
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Download className="w-4 h-4 mr-1" />
                        {whitepaper.downloadCount}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {whitepaper.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{whitepaper.excerpt}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <img 
                          src={whitepaper.author.avatar} 
                          alt={whitepaper.author.name}
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{whitepaper.author.name}</p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        {whitepaper.fileSize}
                      </div>
                    </div>
                    <button className="w-full bg-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center">
                      <Download className="w-4 h-4 mr-2" />
                      Download Free
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted Research
            </h2>
            <p className="text-xl text-gray-600">
              Our whitepapers are downloaded by thousands of professionals worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25K+</div>
              <div className="text-gray-600">Total Downloads</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Companies</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">6</div>
              <div className="text-gray-600">Research Reports</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Notified of New Research
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Be the first to access our latest whitepapers, reports, and industry insights
            </p>
          </div>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whitepapers;