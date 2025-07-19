import React from 'react';
import { Calendar, Clock, TrendingUp, Users, Award, Download, Building, Globe } from 'lucide-react';
import { caseStudies, getFeaturedCaseStudies } from '../data/caseStudyData';
import PipeDriveForm from '../components/PipeDriveForm';

const CaseStudies: React.FC = () => {
  const featuredCaseStudies = getFeaturedCaseStudies();
  const regularCaseStudies = caseStudies.filter(cs => !cs.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20 pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-orange-100 rounded-2xl">
                <Award className="w-12 h-12 text-orange-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Real Success Stories from
              <br />
              <span className="text-orange-600">Our Clients</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover how leading companies transformed their hiring processes and achieved remarkable results with Talentpool
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Proven results from companies that transformed their hiring
            </p>
          </div>

          <div className="space-y-12">
            {featuredCaseStudies.map((caseStudy, index) => (
              <article key={caseStudy.id} className="group">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Image Section */}
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img 
                        src={caseStudy.featuredImage} 
                        alt={caseStudy.title}
                        className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute top-6 left-6">
                        <span className="inline-block px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-full">
                          {caseStudy.category}
                        </span>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                          <div className="flex items-center space-x-3">
                            <img 
                              src={caseStudy.company.logo} 
                              alt={caseStudy.company.name}
                              className="w-12 h-12 object-contain"
                            />
                            <div>
                              <h4 className="font-bold text-gray-900">{caseStudy.company.name}</h4>
                              <p className="text-sm text-gray-600">{caseStudy.company.industry} • {caseStudy.company.size}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {caseStudy.readTime}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(caseStudy.publishedAt).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 group-hover:text-orange-600 transition-colors">
                        {caseStudy.title}
                      </h3>

                      {/* Key Results */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {caseStudy.results.slice(0, 4).map((result, resultIndex) => (
                          <div key={resultIndex} className="text-center p-4 bg-gray-50 rounded-xl">
                            <div className="text-2xl font-bold text-orange-600 mb-1">{result.value}</div>
                            <div className="text-sm font-medium text-gray-900 mb-1">{result.metric}</div>
                            <div className="text-xs text-gray-600">{result.description}</div>
                          </div>
                        ))}
                      </div>

                      {/* Testimonial */}
                      <blockquote className="bg-orange-50 rounded-xl p-6 mb-6">
                        <p className="text-gray-700 italic mb-4">"{caseStudy.testimonial.quote}"</p>
                        <footer className="flex items-center">
                          <img 
                            src={caseStudy.testimonial.avatar} 
                            alt={caseStudy.testimonial.author}
                            className="w-10 h-10 rounded-full mr-3"
                          />
                          <div>
                            <p className="font-semibold text-gray-900">{caseStudy.testimonial.author}</p>
                            <p className="text-sm text-gray-600">{caseStudy.testimonial.role}</p>
                          </div>
                        </footer>
                      </blockquote>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.tags.slice(0, 3).map((tag) => (
                            <span 
                              key={tag}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center">
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              More Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Explore how different companies achieved their hiring goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularCaseStudies.map((caseStudy) => (
              <article key={caseStudy.id} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="relative">
                    <img 
                      src={caseStudy.featuredImage} 
                      alt={caseStudy.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-orange-600 text-white text-sm font-medium rounded-full">
                        {caseStudy.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    {/* Company Info */}
                    <div className="flex items-center space-x-3 mb-4">
                      <img 
                        src={caseStudy.company.logo} 
                        alt={caseStudy.company.name}
                        className="w-10 h-10 object-contain"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">{caseStudy.company.name}</h4>
                        <p className="text-sm text-gray-600">{caseStudy.company.industry}</p>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {caseStudy.title}
                    </h3>

                    {/* Key Result */}
                    <div className="bg-orange-50 rounded-lg p-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600 mb-1">
                          {caseStudy.results[0].value}
                        </div>
                        <div className="text-sm font-medium text-gray-900 mb-1">
                          {caseStudy.results[0].metric}
                        </div>
                        <div className="text-xs text-gray-600">
                          {caseStudy.results[0].description}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {caseStudy.readTime}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Building className="w-4 h-4 mr-1" />
                        {caseStudy.company.size}
                      </div>
                    </div>

                    <button className="w-full bg-orange-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center">
                      <Download className="w-4 h-4 mr-2" />
                      Download Case Study
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-600">
              Aggregate results from our case studies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50%</div>
              <div className="text-gray-600">Average Time-to-Hire Reduction</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">3x</div>
              <div className="text-gray-600">Improvement in Candidate Quality</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">90%+</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Join these successful companies and transform your hiring process with Talentpool
            </p>
          </div>
          <div className="mb-8">
            <PipeDriveForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;