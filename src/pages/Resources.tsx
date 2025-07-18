import React from 'react';
import { BookOpen, Video, FileText, Download, Users, Calendar, ArrowRight } from 'lucide-react';

const Resources: React.FC = () => {
  const resourceCategories = [
    {
      title: "Getting Started",
      icon: <BookOpen className="w-8 h-8 text-talentpool-dark" />,
      resources: [
        {
          title: "Quick Start Guide",
          type: "Guide",
          description: "Get up and running with Talentpool in 10 minutes",
          downloadCount: "2.3K",
          link: "#"
        },
        {
          title: "Platform Overview",
          type: "Video",
          description: "5-minute walkthrough of key features",
          downloadCount: "1.8K",
          link: "#"
        },
        {
          title: "Best Practices Checklist",
          type: "PDF",
          description: "Essential steps for hiring success",
          downloadCount: "4.1K",
          link: "#"
        }
      ]
    },
    {
      title: "Advanced Features",
      icon: <Video className="w-8 h-8 text-talentpool-dark" />,
      resources: [
        {
          title: "AI Matching Deep Dive",
          type: "Webinar",
          description: "Master our AI-powered candidate matching",
          downloadCount: "1.2K",
          link: "#"
        },
        {
          title: "Workflow Automation Guide",
          type: "Guide",
          description: "Build custom hiring workflows",
          downloadCount: "950",
          link: "#"
        },
        {
          title: "Integration Tutorials",
          type: "Video Series",
          description: "Connect with your existing tools",
          downloadCount: "1.5K",
          link: "#"
        }
      ]
    },
    {
      title: "Industry Reports",
      icon: <FileText className="w-8 h-8 text-talentpool-dark" />,
      resources: [
        {
          title: "State of Tech Hiring 2024",
          type: "Report",
          description: "Latest trends and benchmarks",
          downloadCount: "8.7K",
          link: "#"
        },
        {
          title: "Remote Hiring Playbook",
          type: "Whitepaper",
          description: "Best practices for distributed teams",
          downloadCount: "3.2K",
          link: "#"
        },
        {
          title: "Diversity & Inclusion Guide",
          type: "Guide",
          description: "Building inclusive hiring practices",
          downloadCount: "2.8K",
          link: "#"
        }
      ]
    }
  ];

  const webinars = [
    {
      title: "AI-Powered Recruiting: The Future is Now",
      date: "March 15, 2024",
      time: "2:00 PM EST",
      speaker: "Dr. Sarah Chen, Head of AI",
      description: "Discover how AI is transforming the recruiting landscape",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1",
      type: "upcoming"
    },
    {
      title: "Scaling Your Tech Team: Lessons from High-Growth Companies",
      date: "March 8, 2024",
      time: "1:00 PM EST",
      speaker: "Marcus Rodriguez, VP of Talent",
      description: "Real strategies from companies that scaled from 50 to 500+",
      image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1",
      type: "recorded"
    },
    {
      title: "Building Inclusive Hiring Practices",
      date: "February 28, 2024",
      time: "3:00 PM EST",
      speaker: "Dr. Emily Johnson, D&I Expert",
      description: "Creating fair and unbiased recruitment processes",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1",
      type: "recorded"
    }
  ];

  const blogPosts = [
    {
      title: "The Complete Guide to Technical Interviewing",
      category: "Best Practices",
      readTime: "12 min read",
      description: "Essential techniques for evaluating technical candidates effectively",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1",
      date: "March 10, 2024"
    },
    {
      title: "How to Reduce Candidate Drop-offs by 60%",
      category: "Case Study",
      readTime: "8 min read",
      description: "Real strategies that leading companies use to improve offer acceptance",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1",
      date: "March 5, 2024"
    },
    {
      title: "Building Your Employer Brand in 2024",
      category: "Strategy",
      readTime: "10 min read",
      description: "Attract top talent with a compelling employer value proposition",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1",
      date: "February 28, 2024"
    },
    {
      title: "The ROI of Recruiting Technology",
      category: "Analysis",
      readTime: "15 min read",
      description: "Calculate the true impact of recruitment software on your business",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1",
      date: "February 22, 2024"
    },
    {
      title: "Remote Hiring: Best Practices for Distributed Teams",
      category: "Guide",
      readTime: "11 min read",
      description: "Master the art of hiring and onboarding remote talent",
      image: "https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1",
      date: "February 15, 2024"
    },
    {
      title: "Data-Driven Recruiting: Metrics That Matter",
      category: "Analytics",
      readTime: "9 min read",
      description: "Key performance indicators every recruiting team should track",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1",
      date: "February 10, 2024"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-talentpool-light to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Resources to Help You
              <br />
              <span className="text-talentpool-dark">Hire Better</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Guides, webinars, reports, and insights to help you master modern recruiting
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-talentpool-dark text-white px-8 py-4 rounded-lg font-semibold hover:bg-talentpool-medium transition-colors">
                Browse All Resources
              </button>
              <button className="border border-talentpool-dark text-talentpool-dark px-8 py-4 rounded-lg font-semibold hover:bg-talentpool-light transition-colors">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Resources
            </h2>
          </div>

          <div className="space-y-12">
            {resourceCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-talentpool-light rounded-xl mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.resources.map((resource, resourceIndex) => (
                    <div key={resourceIndex} className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow group">
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-block px-3 py-1 bg-talentpool-light text-talentpool-dark text-sm font-medium rounded-full">
                          {resource.type}
                        </span>
                        <Download className="w-5 h-5 text-gray-400 group-hover:text-talentpool-dark transition-colors" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-talentpool-dark transition-colors">
                        {resource.title}
                      </h4>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{resource.downloadCount} downloads</span>
                        <button className="text-talentpool-dark hover:text-talentpool-medium transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Webinars & Events
            </h2>
            <p className="text-xl text-gray-600">
              Join our expert-led sessions and learn from industry leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative">
                  <img 
                    src={webinar.image} 
                    alt={webinar.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                      webinar.type === 'upcoming' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {webinar.type === 'upcoming' ? 'Upcoming' : 'Recorded'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{webinar.date} • {webinar.time}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{webinar.title}</h3>
                  <p className="text-gray-600 mb-4">{webinar.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{webinar.speaker}</span>
                    </div>
                    <button className="text-talentpool-dark hover:text-talentpool-medium transition-colors font-medium">
                      {webinar.type === 'upcoming' ? 'Register' : 'Watch'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-gray-600">
              Expert insights and practical advice for modern recruiting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 bg-talentpool-light text-talentpool-dark text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-talentpool-dark transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <button className="text-talentpool-dark hover:text-talentpool-medium transition-colors font-medium flex items-center">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-talentpool-dark text-white px-8 py-4 rounded-lg font-semibold hover:bg-talentpool-medium transition-colors">
              View All Blog Posts
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-talentpool-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with the Latest Resources
          </h2>
          <p className="text-xl text-talentpool-light mb-8">
            Get weekly insights, guides, and updates delivered to your inbox
          </p>
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
    </div>
  );
};

export default Resources;