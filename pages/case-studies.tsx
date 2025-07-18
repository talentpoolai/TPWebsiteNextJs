import React from 'react';
import Head from 'next/head';
import { Calendar, Clock, TrendingUp, Users, Award, Download, Building, Globe, ArrowRight, Target, Zap, DollarSign } from 'lucide-react';
import Link from 'next/link';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      id: "1",
      title: "How TechCorp Reduced Time-to-Hire by 50% While Scaling Their Engineering Team",
      slug: "techcorp-reduced-time-to-hire-50-percent-scaling-engineering",
      company: {
        name: "TechCorp",
        logo: "/1.png",
        industry: "SaaS Technology",
        size: "500+ employees"
      },
      challenge: "TechCorp was struggling to scale their engineering team rapidly while maintaining quality. Their traditional hiring process was taking 45+ days per hire.",
      results: [
        { metric: "Time-to-Hire", value: "50%", description: "Reduced from 45 to 22 days" },
        { metric: "Candidate Quality", value: "3x", description: "Higher quality score ratings" },
        { metric: "Cost Savings", value: "$280K", description: "Annual recruitment cost reduction" },
        { metric: "Satisfaction", value: "95%", description: "Hiring manager satisfaction" }
      ],
      testimonial: {
        quote: "Talentpool transformed our hiring process completely. We went from struggling to fill engineering positions to having a robust pipeline of qualified candidates.",
        author: "Sarah Chen",
        role: "VP of Engineering",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
      },
      publishedAt: "2024-01-25",
      readTime: "8 min read",
      category: "Engineering",
      tags: ["Engineering Hiring", "AI Matching", "Scale-up", "Time-to-Hire"],
      featuredImage: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1",
      featured: true
    },
    {
      id: "2",
      title: "StartupX Eliminates External Recruiters and Saves $500K Annually",
      slug: "startupx-eliminates-external-recruiters-saves-500k-annually",
      company: {
        name: "StartupX",
        logo: "/2.png",
        industry: "Fintech",
        size: "50-200 employees"
      },
      challenge: "StartupX was spending over $500K annually on external recruiters and still struggling with long hiring cycles and poor candidate fit.",
      results: [
        { metric: "Cost Reduction", value: "$500K", description: "Annual savings from eliminating external recruiters" },
        { metric: "Hiring Speed", value: "60%", description: "Faster hiring cycles" },
        { metric: "Team Productivity", value: "4x", description: "More hires per HR team member" },
        { metric: "Candidate Satisfaction", value: "92%", description: "Positive candidate experience rating" }
      ],
      testimonial: {
        quote: "As a startup, we needed to hire efficiently without breaking the bank. Talentpool made that possible.",
        author: "Marcus Rodriguez",
        role: "CEO & Co-Founder",
        avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
      },
      publishedAt: "2024-01-20",
      readTime: "6 min read",
      category: "Startup",
      tags: ["Startup Hiring", "Cost Reduction", "Internal Recruiting", "Fintech"],
      featuredImage: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1",
      featured: true
    },
    {
      id: "3",
      title: "ScaleUp Inc Builds Diverse Engineering Team with 40% Female Representation",
      slug: "scaleup-builds-diverse-engineering-team-40-percent-female",
      company: {
        name: "ScaleUp Inc",
        logo: "/3.png",
        industry: "E-commerce",
        size: "200-500 employees"
      },
      challenge: "ScaleUp Inc recognized that their engineering team lacked diversity, with only 15% female representation.",
      results: [
        { metric: "Female Representation", value: "40%", description: "In new engineering hires" },
        { metric: "Diverse Pipeline", value: "3x", description: "Increase in underrepresented candidates" },
        { metric: "Team Performance", value: "25%", description: "Improvement in innovation metrics" },
        { metric: "Employee Satisfaction", value: "88%", description: "Team satisfaction with inclusive culture" }
      ],
      testimonial: {
        quote: "Talentpool helped us not just talk about diversity, but actually achieve it. The bias-reduction features transformed our hiring outcomes.",
        author: "Emily Johnson",
        role: "Head of People",
        avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
      },
      publishedAt: "2024-01-15",
      readTime: "7 min read",
      category: "Diversity & Inclusion",
      tags: ["Diversity", "Inclusion", "Engineering", "Bias Reduction"],
      featuredImage: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1",
      featured: true
    },
    {
      id: "4",
      title: "GlobalTech Streamlines Remote Hiring Across 15 Countries",
      slug: "globaltech-streamlines-remote-hiring-15-countries",
      company: {
        name: "GlobalTech",
        logo: "/4.png",
        industry: "Software Development",
        size: "1000+ employees"
      },
      challenge: "GlobalTech needed to hire remote talent across 15 countries with different time zones, languages, and legal requirements.",
      results: [
        { metric: "Global Reach", value: "15", description: "Countries with streamlined hiring" },
        { metric: "Remote Hires", value: "300%", description: "Increase in successful remote placements" },
        { metric: "Process Efficiency", value: "45%", description: "Reduction in administrative overhead" },
        { metric: "Candidate Experience", value: "94%", description: "Positive feedback from global candidates" }
      ],
      testimonial: {
        quote: "Talentpool made global remote hiring feel local. The platform handles all the complexity while maintaining a consistent experience.",
        author: "David Kim",
        role: "Global Head of Talent",
        avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
      },
      publishedAt: "2024-01-10",
      readTime: "9 min read",
      category: "Remote Hiring",
      tags: ["Remote Hiring", "Global Talent", "Multi-Country", "Virtual Interviews"],
      featuredImage: "https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1",
      featured: false
    }
  ];

  const featuredCaseStudies = caseStudies.filter(cs => cs.featured);
  const regularCaseStudies = caseStudies.filter(cs => !cs.featured);

  const businessImpact = [
    {
      metric: "50%",
      title: "Average Time-to-Hire Reduction",
      description: "Reduce average hiring time from weeks to days",
      icon: <TrendingUp className="w-6 h-6 text-green-600" />
    },
    {
      metric: "60%",
      title: "Lower Cost-per-Hire",
      description: "Significant reduction in recruitment expenses",
      icon: <DollarSign className="w-6 h-6 text-blue-600" />
    },
    {
      metric: "3x",
      title: "Improved Quality Score",
      description: "Higher quality candidates and better job fit",
      icon: <Target className="w-6 h-6 text-purple-600" />
    },
    {
      metric: "95%",
      title: "User Satisfaction",
      description: "High satisfaction among HR teams and hiring managers",
      icon: <Users className="w-6 h-6 text-orange-600" />
    }
  ];

  return (
    <>
      <Head>
        <title>Case Studies - Real Success Stories | Talentpool</title>
        <meta name="description" content="Discover how leading companies transformed their hiring processes and achieved remarkable results with Talentpool. Read real success stories." />
        <meta name="keywords" content="recruitment case studies, hiring success stories, talent acquisition results, recruitment ROI" />
        <meta property="og:title" content="Case Studies - Real Success Stories | Talentpool" />
        <meta property="og:description" content="Discover how leading companies transformed their hiring processes and achieved remarkable results with Talentpool." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://talentpool.com/case-studies" />
      </Head>

      <div className="min-h-screen bg-white">
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-orange-50 to-white py-20 pt-40">
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

                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {caseStudy.challenge}
                          </p>

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

          {/* More Case Studies */}
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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

                        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                          {caseStudy.challenge}
                        </p>

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
                {businessImpact.map((impact, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      {impact.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{impact.metric}</div>
                    <div className="text-lg font-semibold text-gray-900 mb-2">{impact.title}</div>
                    <div className="text-gray-600 text-sm">{impact.description}</div>
                  </div>
                ))}
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
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/start-free">
                  <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                    Start Free Trial
                  </button>
                </Link>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default CaseStudies;