import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { BookOpen, Award, ArrowRight, TrendingUp, Users, FileText, Calendar } from 'lucide-react';

const Resources: React.FC = () => {
  const featuredResources = [
    {
      type: "blog",
      title: "The Future of AI-Powered Recruiting",
      excerpt: "Discover how artificial intelligence is transforming the recruitment landscape and what it means for your hiring strategy.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&dpr=1",
      category: "AI & Technology",
      readTime: "8 min read",
      href: "/blog/ai-powered-recruiting",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />
    },
    {
      type: "case-study",
      title: "How TechCorp Reduced Time-to-Hire by 50%",
      excerpt: "Learn how TechCorp transformed their engineering hiring process and achieved remarkable results with Talentpool.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&dpr=1",
      category: "Engineering",
      readTime: "6 min read",
      href: "/case-studies/techcorp-50-percent-faster",
      icon: <Award className="w-5 h-5 text-purple-600" />
    }
  ];

  const resourceCategories = [
    {
      title: "Blog Articles",
      description: "Expert insights, best practices, and industry trends",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      href: "/blog",
      count: "50+ Articles",
      color: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Case Studies",
      description: "Real success stories from companies using Talentpool",
      icon: <Award className="w-8 h-8 text-purple-600" />,
      href: "/case-studies",
      count: "12+ Stories",
      color: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200"
    }
  ];

  const stats = [
    {
      number: "50+",
      label: "Blog Articles",
      description: "Expert insights and guides"
    },
    {
      number: "12+",
      label: "Case Studies",
      description: "Real success stories"
    },
    {
      number: "25K+",
      label: "Monthly Readers",
      description: "Growing community"
    },
    {
      number: "95%",
      label: "Satisfaction Rate",
      description: "Reader feedback"
    }
  ];

  return (
    <>
      <Head>
        <title>Resources - Expert Insights & Success Stories | Talentpool</title>
        <meta name="description" content="Access expert insights, best practices, and real success stories to transform your hiring process. Explore our blog and case studies." />
        <meta name="keywords" content="recruitment resources, hiring insights, case studies, recruitment blog" />
        <meta property="og:title" content="Resources - Expert Insights & Success Stories | Talentpool" />
        <meta property="og:description" content="Access expert insights, best practices, and real success stories to transform your hiring process." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://talentpool.com/resources" />
      </Head>

      <div className="min-h-screen bg-white">
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-talentpool-light to-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center animate-fade-in">
                <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
                  <span className="bg-white px-6 py-2 rounded-full text-gray-800 font-semibold text-sm">
                    📚 Knowledge Hub
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  Resources to Help You
                  <br />
                  <span className="text-talentpool-dark">Hire Better</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Expert insights, best practices, and real success stories to transform your hiring process
                </p>
              </div>
            </div>
          </section>

          {/* Featured Resources */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Featured Resources
                </h2>
                <p className="text-xl text-gray-600">
                  Our most popular and impactful content
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredResources.map((resource, index) => (
                  <article key={index} className="group">
                    <Link href={resource.href}>
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
                        <div className="relative">
                          <img 
                            src={resource.image} 
                            alt={resource.title}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4 flex items-center space-x-2">
                            <span className={`inline-flex items-center px-3 py-1 text-white text-sm font-medium rounded-full ${
                              resource.type === 'blog' ? 'bg-blue-600' : 'bg-purple-600'
                            }`}>
                              {resource.icon}
                              <span className="ml-1 capitalize">{resource.type}</span>
                            </span>
                          </div>
                          <div className="absolute top-4 right-4">
                            <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-sm font-medium rounded-full">
                              {resource.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-8">
                          <div className="flex items-center text-gray-500 text-sm mb-4">
                            <Calendar className="w-4 h-4 mr-1" />
                            {resource.readTime}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-talentpool-dark transition-colors">
                            {resource.title}
                          </h3>
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {resource.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500 capitalize">
                              {resource.type === 'blog' ? 'Blog Article' : 'Case Study'}
                            </span>
                            <ArrowRight className="w-5 h-5 text-talentpool-dark group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Resource Categories */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Explore Our Resources
                </h2>
                <p className="text-xl text-gray-600">
                  Choose the type of content that interests you most
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {resourceCategories.map((category, index) => (
                  <Link key={index} href={category.href}>
                    <div className={`group bg-gradient-to-br ${category.color} border-2 ${category.borderColor} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                      <div className="flex items-center mb-6">
                        <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform mr-6">
                          {category.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                          <p className="text-sm text-gray-600 font-medium">{category.count}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">
                          Explore {category.title.toLowerCase()}
                        </span>
                        <ArrowRight className="w-5 h-5 text-talentpool-dark group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Trusted Knowledge Base
                </h2>
                <p className="text-xl text-gray-600">
                  Our resources are trusted by thousands of professionals worldwide
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-talentpool-dark mb-2">{stat.number}</div>
                    <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                    <div className="text-gray-600">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="py-20 bg-talentpool-dark text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="mb-8">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Stay Updated with Latest Resources
                </h2>
                <p className="text-xl text-talentpool-light mb-8">
                  Get weekly insights, case studies, and expert advice delivered to your inbox
                </p>
              </div>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-talentpool-light"
                />
                <button className="bg-white text-talentpool-dark px-8 py-4 rounded-lg font-semibold hover:bg-talentpool-light transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Resources;