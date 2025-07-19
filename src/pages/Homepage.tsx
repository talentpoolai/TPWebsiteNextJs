import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../lib/blog';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Target, Zap, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import PipeDriveForm from '../components/PipeDriveForm';
import blogIndex from '../data/blogIndex.json';

interface HomepageProps {
  featuredPosts: BlogPost[];
}

const Homepage: React.FC<HomepageProps> = ({ featuredPosts = [] }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

  const videos = [
    {
      url: "https://drive.google.com/file/d/1yY43xyZIw8QDaIo_vySrNZ7OB_T2IsHD/preview",
      quote: "Talentica has been part of the family at Mist, and they have been a key part of our engineering team. They bring us startup spirit and a wide range of required skills.",
      customerName: "",
      company: "",
      logo: "/images/rexel1.png",
      thumbnail: "/rexelthumbnail"
    }
    // {
    //   url: "https://tinyurl.com/bdfm47pu",
    //   quote: "Talentica stood out with constructive criticism and fiercely innovative approach. Their commitment and motivation made them an organic part of our organization.",
    //   customerName: "Daniel Nissan",
    //   company: "",
    //   logo: "/coditas.png",
    //   thumbnail: "https://www.talentica.com/wp-content/uploads/2025/06/Daniel-Nissan-1.webp"
    // }
    // {
    //   url: "https://tinyurl.com/bdfm47pu",
    //   quote: "Talentica understood our user needs and helped us design a product that sells successfully. They brought expertise in AI and blockchain to enable innovation for us.",
    //   customerName: "Carmelle Cadet",
    //   company: "",
    //   logo: "/.png",
    //   thumbnail: "https://www.talentica.com/wp-content/uploads/2019/03/Carmel-1.webp"
    // }
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  // Auto-scroll functionality
  React.useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 5000); // Auto-advance every 5 seconds
    
    return () => clearInterval(interval);
  }, [videos.length, isAutoPlaying]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Manual navigation pauses auto-scroll temporarily
  const handleManualNavigation = (index: number) => {
    setCurrentVideoIndex(index);
    setIsAutoPlaying(false);
    
    // Resume auto-scroll after 10 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  const achievementCards = [
    {
      title: "Reduce offer drop-offs",
      subtitle: "Track intent signals early and personalize candidate engagement to reduce last-minute drop-offs.",
      bullets: ["Candidate engagement", "360° candidate feedback", "Ready bench for backups"],
      icon: <Target className="w-6 h-6 md:w-8 md:h-8 text-talentpool-dark" />,
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      gradient: "from-blue-50 to-indigo-50",
      accentColor: "blue"
    },
    {
      title: "Handle unforeseen demand spikes",
      subtitle: "Build role-specific pipelines seamlessly ahead of time so you can move quickly when new roles open up.",
      bullets: ["Position sets", "Labelled candidate pools", "AI recommendations"],
      icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-talentpool-dark" />,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      gradient: "from-green-50 to-emerald-50",
      accentColor: "green"
    },
    {
      title: "Simplify collaboration with busy stakeholders",
      subtitle: "Give your stakeholders, from leaders to interviewers, real-time visibility and a way to act fast without back and forth.",
      bullets: ["Unlimited collaborators", "Tailored portals", "Virtual recruiter"],
      icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-talentpool-dark" />,
      image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      gradient: "from-purple-50 to-pink-50",
      accentColor: "purple"
    },
    {
      title: "Adapt to shifting priorities",
      subtitle: "Manage your workflows as things change to keep your team focused and hiring on track.",
      bullets: ["Flexible workflows", "Adaptable AI", "Human support"],
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8 text-talentpool-dark" />,
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      gradient: "from-orange-50 to-red-50",
      accentColor: "orange"
    },
  ];

  const testimonials = [
    {
      quote: "Talentpool transformed our hiring process. We reduced time-to-hire by 40% and improved candidate quality significantly.",
      author: "Sarah Chen",
      role: "VP of Engineering",
      company: "TechCorp",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
    },
    {
      quote: "The AI recommendations are spot-on. It's like having a senior recruiter working 24/7 to find the best candidates.",
      author: "Marcus Rodriguez",
      role: "Talent Acquisition Lead",
      company: "DevStartup",
      avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
    },
    {
      quote: "The collaborative features made it easy for our entire team to participate in the hiring process without overwhelming our recruiters.",
      author: "Emily Johnson",
      role: "Head of People",
      company: "ScaleUp Inc",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
    },
  ];

  // Use the first 3 featured posts or fallback to default content
  const displayPosts = featuredPosts.length > 0 ? featuredPosts.slice(0, 3) : (blogIndex as any[]).slice(0, 3);

  const companyLogos = [
    { src: "/1.png", alt: "Company 1" },
    { src: "/8.png", alt: "Company 2" },
    { src: "/3.png", alt: "Company 3" },
    { src: "/4.png", alt: "Company 4" },
    { src: "/5.png", alt: "Company 5" },
    { src: "/6.png", alt: "Company 6" },
    { src: "/7.png", alt: "Company 7" },
    { src: "/2.png", alt: "Company 8" },
    { src: "/9.png", alt: "Company 9" },
    { src: "/10.png", alt: "Company 10" },
    { src: "/11.png", alt: "Company 11" },
    { src: "/12.png", alt: "Company 12" },
    { src: "/13.png", alt: "Company 13" },
    { src: "/14.png", alt: "Company 14" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 relative min-h-screen flex items-center" style={{
        backgroundImage: 'url(https://www.talentica.com/wp-content/uploads/2025/07/Frame-3.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>

        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center animate-fade-in relative z-10">
            {/* Subtle Award Badge - Above Headline */}
            <div className="mb-6">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 space-x-3 group hover:bg-white/15 transition-all duration-300 cursor-pointer">
                {/* <div className="w-5 h-5 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                  <Award className="w-3 h-3 text-white" />
                </div> */}
                <span className="text-white text-sm font-medium">🏆  Best Design Project 2025 </span>
                <button className="text-white/80 hover:text-white transition-colors text-xs font-medium flex items-center group-hover:translate-x-0.5 transition-transform">
                  Learn more
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 font-sans leading-tight">
              The Only Recruitment Software
              <br className="hidden sm:block" />
              <span className="text-green-200"> for Tech Companies</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-4xl mx-auto font-sans px-4">
              Built-in AI to stay ahead of evolving skill needs, demand spikes,
              <br className="hidden md:block" />
              and the pressure to hire fast in a candidate-driven market.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4">
              <button 
                onClick={() => {
                  const formSection = document.querySelector('.pipedrive-form-section');
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
              >
                Start Free
              </button>
              <button 
                onClick={() => {
                  const formSection = document.querySelector('.pipedrive-form-section');
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-talentpool-dark transition-colors text-sm sm:text-base"
              >
                Talk to Us
              </button>
            </div>
          </div>

          {/* Trusted by section */}
          <div className="text-center animate-slide-up relative z-10">
            <p className="text-green-200 mb-6 sm:mb-8 font-medium text-sm sm:text-base">Trusted by leading tech teams</p>
            <div className="overflow-hidden">
              <div className="flex animate-scroll">
                {/* First set of logos */}
                {companyLogos.map((logo, index) => (
                  <div key={index} className="flex-shrink-0 w-24 sm:w-32 md:w-40 h-12 sm:h-16 md:h-20 mx-4 sm:mx-6 md:mx-8 rounded-lg transition-all backdrop-blur-sm">
                    <img src={logo.src} alt={logo.alt} className="w-full h-full object-contain filter brightness-0 invert rounded-lg" />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {companyLogos.map((logo, index) => (
                  <div key={`duplicate-${index}`} className="flex-shrink-0 w-24 sm:w-32 md:w-40 h-12 sm:h-16 md:h-20 mx-4 sm:mx-6 md:mx-8 rounded-lg transition-all backdrop-blur-sm">
                    <img src={logo.src} alt={logo.alt} className="w-full h-full object-contain filter brightness-0 invert rounded-lg" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Talentpool Helps You Achieve */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-talentpool-light to-green-100 rounded-full mb-4 sm:mb-6">
              <span className="bg-white px-4 sm:px-6 py-2 rounded-full text-talentpool-dark font-semibold text-xs sm:text-sm">
                ✨ Transform Your Hiring Process
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
              What Talentpool Helps You
              <br />
              <span className="bg-gradient-to-r from-talentpool-dark to-green-600 bg-clip-text text-transparent">
                Achieve
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Overcome the biggest challenges in modern recruiting with AI-powered solutions designed for tech companies
            </p>
          </div>
          
          <div className="space-y-16 sm:space-y-20 md:space-y-24">
            {achievementCards.map((card, index) => (
              <div key={index} className="relative">
                {/* Decorative background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className={`absolute ${index % 2 === 0 ? 'top-20 left-20' : 'bottom-20 right-20'} w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gradient-to-br ${card.gradient} rounded-full blur-3xl opacity-20`}></div>
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Large Product Image Section */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative group">
                      {/* Main product image container */}
                      <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-gray-100">
                        {/* Floating number badge */}
                        <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-talentpool-dark to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-xl shadow-2xl z-20">
                          {index + 1}
                        </div>
                        
                        {/* Product image - large and prominent */}
                        <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                          <img 
                            src={card.image} 
                            alt={card.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        
                        {/* Floating icon badge */}
                        <div className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 p-2 sm:p-4 bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-gray-100 group-hover:scale-110 transition-all duration-300">
                          <div className="text-talentpool-dark">
                            {card.icon}
                          </div>
                        </div>

                        {/* Floating Proof Points - positioned on the image */}
                        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 space-y-2 sm:space-y-3 z-10">
                          {index === 0 && (
                            <>
                              <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg border border-white/50 transform rotate-2 hover:rotate-0 transition-all duration-300 hover:scale-105">
                                <div className="text-sm sm:text-lg font-bold text-blue-600">60%</div>
                                <div className="text-xs font-medium text-gray-600">Less Drop-offs</div>
                              </div>
                              <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg border border-white/50 transform -rotate-1 hover:rotate-0 transition-all duration-300 hover:scale-105">
                                <div className="text-sm sm:text-lg font-bold text-green-600">85%</div>
                                <div className="text-xs font-medium text-gray-600">Engagement</div>
                              </div>
                            </>
                          )}
                          {index === 1 && (
                            <>
                              <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg border border-white/50 transform rotate-1 hover:rotate-0 transition-all duration-300 hover:scale-105">
                                <div className="text-sm sm:text-lg font-bold text-green-600">3x</div>
                                <div className="text-xs font-medium text-gray-600">Faster</div>
                              </div>
                              <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg border border-white/50 transform -rotate-2 hover:rotate-0 transition-all duration-300 hover:scale-105">
                                <div className="text-sm sm:text-lg font-bold text-emerald-600">90%</div>
                                <div className="text-xs font-medium text-gray-600">Ready</div>
                              </div>
                            </>
                          )}
                          {index === 2 && (
                            <>
                              <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg border border-white/50 transform rotate-2 hover:rotate-0 transition-all duration-300 hover:scale-105">
                                <div className="text-sm sm:text-lg font-bold text-purple-600">50%</div>
                                <div className="text-xs font-medium text-gray-600">Less Effort</div>
                              </div>
                              <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg border border-white/50 transform -rotate-1 hover:rotate-0 transition-all duration-300 hover:scale-105">
                                <div className="text-sm sm:text-lg font-bold text-pink-600">24/7</div>
                                <div className="text-xs font-medium text-gray-600">Available</div>
                              </div>
                            </>
                          )}
                          {index === 3 && (
                            <>
                              <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg border border-white/50 transform rotate-1 hover:rotate-0 transition-all duration-300 hover:scale-105">
                                <div className="text-sm sm:text-lg font-bold text-orange-600">75%</div>
                                <div className="text-xs font-medium text-gray-600">Flexible</div>
                              </div>
                              <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg border border-white/50 transform -rotate-2 hover:rotate-0 transition-all duration-300 hover:scale-105">
                                <div className="text-sm sm:text-lg font-bold text-red-600">100%</div>
                                <div className="text-xs font-medium text-gray-600">Adaptable</div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      
                      {/* Glow effect */}
                      <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-2xl ${
                        card.accentColor === 'blue' ? 'bg-gradient-to-r from-blue-400 to-indigo-400' :
                        card.accentColor === 'green' ? 'bg-gradient-to-r from-green-400 to-emerald-400' :
                        card.accentColor === 'purple' ? 'bg-gradient-to-r from-purple-400 to-pink-400' :
                        'bg-gradient-to-r from-orange-400 to-red-400'
                      }`}></div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`space-y-6 sm:space-y-8 px-4 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    

                    {/* Title and description */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                        {card.subtitle}
                      </p>
                    </div>

                    {/* Enhanced feature list */}
                    <div className="space-y-3 sm:space-y-4">
                      {card.bullets.map((bullet, bulletIndex) => (
                        <div 
                          key={bulletIndex} 
                          className="flex items-start group/item"
                        >
                          <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg group-hover/item:scale-110 transition-all duration-300 ${
                            card.accentColor === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                            card.accentColor === 'green' ? 'bg-gradient-to-br from-green-500 to-green-600' :
                            card.accentColor === 'purple' ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                            'bg-gradient-to-br from-orange-500 to-orange-600'
                          }`}>
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <div className="pt-1 sm:pt-2">
                            <span className="text-base sm:text-lg font-semibold text-gray-800 group-hover/item:text-talentpool-dark transition-colors duration-300">
                              {bullet}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <button className={`group/btn inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${
                        card.accentColor === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' :
                        card.accentColor === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' :
                        card.accentColor === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700' :
                        'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
                      }`}
                      onClick={() => {
                  const formSection = document.querySelector('.pipedrive-form-section');
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>
                        <span>Explore This Solution</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & Awards */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <span className="bg-white px-6 py-2 rounded-full text-gray-800 font-semibold text-sm">
                💬 Customer Success Stories
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Trusted by Industry Leaders
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Worldwide
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              See how leading companies are transforming their hiring processes and achieving remarkable results
            </p>
          </div>

          {/* Video Carousel */}
          <div 
            className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 sm:p-12 mb-16 shadow-xl border border-gray-100 relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-400 to-blue-400 rounded-full blur-3xl -translate-x-24 translate-y-24"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="relative z-10">
                {/* Featured badge */}
                <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Star className="w-4 h-4 mr-2 fill-current" />
                  Featured Customer Story
                </div>
                
                <div className="mb-6 sm:mb-8">
                  <img
                    src={videos[currentVideoIndex].logo}
                    alt={videos[currentVideoIndex].company}
                    className="h-16 w-auto mb-6 filter drop-shadow-lg"
                  />
                </div>
                <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed mb-8 relative">
                  <div className="absolute -top-4 -left-4 text-6xl text-blue-200 font-serif">"</div>
                  "{videos[currentVideoIndex].quote}"
                  <div className="absolute -bottom-8 -right-4 text-6xl text-blue-200 font-serif">"</div>
                </blockquote>
                <div className="mb-6 sm:mb-8">
                  <p className="text-lg sm:text-xl font-bold text-gray-900">{videos[currentVideoIndex].customerName}</p>
                  {videos[currentVideoIndex].company && (
                    <p className="text-gray-600 text-lg">{videos[currentVideoIndex].company}</p>
                  )}
                </div>
                {/* <button className="bg-gradient-to-r from-talentpool-dark to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-talentpool-dark transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
                  Read the full story
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button> */}
              </div>
              
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                {/* Video container with enhanced styling */}
                <div className="relative bg-gradient-to-br from-gray-900 to-black p-4 rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentVideoIndex * 100}%)` }}>
                  {videos.map((video, index) => (
                    <div key={index} className="w-full flex-shrink-0" data-video-index={index}>
                        <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden relative">
                        {video.thumbnail ? (
                          <div className="relative w-full h-full">
                            <img 
                              src={video.thumbnail}
                              alt={`${video.customerName} testimonial`}
                                className="w-full h-full object-cover rounded-xl"
                            />
                              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-20 transition-all duration-300">
                              <button 
                                  className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
                                onClick={() => {
                                  // Create and embed iframe for Google Drive video
                                  const iframe = document.createElement('iframe');
                                  iframe.src = video.url;
                                  iframe.className = "w-full h-full rounded-xl";
                                  iframe.setAttribute('allowfullscreen', 'true');
                                  iframe.setAttribute('allow', 'autoplay');
                                  
                                  // Replace thumbnail with iframe
                                  const container = document.querySelector(`[data-video-index="${index}"] .aspect-video`);
                                  if (container) {
                                    container.innerHTML = '';
                                    container.appendChild(iframe);
                                  }
                                }}
                              >
                                  <div className="w-0 h-0 border-l-[12px] sm:border-l-[16px] border-l-talentpool-dark border-y-[8px] sm:border-y-[12px] border-y-transparent ml-1 group-hover:border-l-green-600 transition-colors"></div>
                              </button>
                            </div>
                          </div>
                        ) : (
                          <iframe
                            src={video.url}
                              className="w-full h-full object-cover rounded-xl"
                            allowFullScreen
                            allow="autoplay"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            </div>
            
            {/* Centered Dots Navigation 
            <div className="flex justify-center mt-8 relative z-10">
              <div className="flex space-x-2 sm:space-x-3">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleManualNavigation(index)}
                    className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                      index === currentVideoIndex 
                        ? 'bg-gradient-to-r from-talentpool-dark to-green-600 scale-125 shadow-lg' 
                        : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                    }`}
                    aria-label={`Go to video ${index + 1}`}
                  />
                ))}
              </div>
            </div> */}
          </div>
          
          {/* Enhanced Grid of customer stories */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                More Success Stories
              </h3>
              <p className="text-gray-600 text-lg">
                Discover how companies across industries are achieving their hiring goals
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Toyota */}
              <div className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                <div className="mb-6">
                <img 
                  src="/voltas.png" 
                  alt="Company 2" 
                    className="h-16 w-auto filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
                <p className="text-gray-900 font-semibold mb-6 text-lg leading-relaxed line-clamp-3 h-20">
                Streamlined workflows to reduce timelines by 3x.
              </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Case Study</div>
                  <button className="bg-blue-50 text-blue-600 p-2 rounded-full hover:bg-blue-100 transition-colors group-hover:scale-110 transform duration-300">
                    <ArrowRight className="w-4 h-4" />
              </button>
                </div>
            </div>

            {/* Ramp */}
              <div className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                <div className="mb-6">
                <img 
                  src="/huawei.png" 
                  alt="Company 3" 
                    className="h-16 w-auto filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
                <p className="text-gray-900 font-semibold mb-6 text-lg leading-relaxed line-clamp-3 h-20">
                "With Talentpool, every person at our company has an AI assistant."
              </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Success Story</div>
                  <button className="bg-purple-50 text-purple-600 p-2 rounded-full hover:bg-purple-100 transition-colors group-hover:scale-110 transform duration-300">
                    <ArrowRight className="w-4 h-4" />
              </button>
                </div>
            </div>

            {/* Vercel */}
              <div className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2">
                <div className="mb-6">
                <img 
                  src="/prodapt.png" 
                  alt="Company 4" 
                    className="h-16 w-auto filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
                <p className="text-gray-900 font-semibold mb-6 text-lg leading-relaxed line-clamp-3 h-20">
                "Talentpool understands that you can solve a lot of problems with one tool."
              </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Customer Review</div>
                  <button className="bg-green-50 text-green-600 p-2 rounded-full hover:bg-green-100 transition-colors group-hover:scale-110 transform duration-300">
                    <ArrowRight className="w-4 h-4" />
              </button>
                </div>
            </div>

            {/* MatchGroup */}
              <div className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
                <div className="mb-6">
                <img 
                  src="/xoriant.png" 
                  alt="Company 5" 
                    className="h-16 w-auto filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
                <p className="text-gray-900 font-semibold mb-6 text-lg leading-relaxed line-clamp-3 h-20">
                "Talentpool has been the most powerful and impactful way to streamline our workflow."
              </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Testimonial</div>
                  <button className="bg-orange-50 text-orange-600 p-2 rounded-full hover:bg-orange-100 transition-colors group-hover:scale-110 transform duration-300">
                    <ArrowRight className="w-4 h-4" />
              </button>
                </div>
            </div>

            {/* Deel */}
              <div className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2">
                <div className="mb-6">
                <img 
                  src="/icertis.png" 
                  alt="Company 6" 
                    className="h-16 w-auto filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
                <p className="text-gray-900 font-semibold mb-6 text-lg leading-relaxed line-clamp-3 h-20">
                "Someone could join our company and onboard themselves without ever speaking to anybody."
              </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Use Case</div>
                  <button className="bg-indigo-50 text-indigo-600 p-2 rounded-full hover:bg-indigo-100 transition-colors group-hover:scale-110 transform duration-300">
                    <ArrowRight className="w-4 h-4" />
              </button>
                </div>
            </div>

            {/* Planful */}
              <div className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 transform hover:-translate-y-2">
                <div className="mb-6">
                <img 
                  src="/sears.png" 
                  alt="Sears" 
                    className="h-16 w-auto filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
                <p className="text-gray-900 font-semibold mb-6 text-lg leading-relaxed line-clamp-3 h-20">
                  Transforming enterprise hiring with AI-powered solutions.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Enterprise Story</div>
                  <button className="bg-red-50 text-red-600 p-2 rounded-full hover:bg-red-100 transition-colors group-hover:scale-110 transform duration-300">
                    <ArrowRight className="w-4 h-4" />
              </button>
                </div>
            </div>
            </div>
          </div>

          {/* Enhanced Awards Section */}
          <div className="text-center">
  <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-8">
    <span className="bg-white px-6 py-2 rounded-full text-gray-800 font-semibold text-sm">
      🏆 Awards & Recognition
    </span>
  </div>
  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
    Industry Recognition
  </h3>
  <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
    Recognized by leading industry analysts and review platforms for excellence in recruitment technology
  </p>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
    {/* Software Suggest Category Leader */}
    <img 
      src="https://www.thetalentpool.ai/wp-content/uploads/2024/09/category-leader-winter-2024-300x300-1.png"
      alt="Team working together"
      className="h-32 object-contain rounded-xl"
    />

    {/* Software Suggest High Performer */}
    <img 
      src="https://www.thetalentpool.ai/wp-content/uploads/2024/09/high-performer-winter-2024-300x300-1.png"
      alt="Team working together"
      className="h-32 object-contain rounded-xl"
    />

    {/* TechImply Most Trusted */}
    <img 
      src="https://www.thetalentpool.ai/wp-content/uploads/2024/09/tracking-software.png"
      alt="Team working together"
      className="h-32 object-contain rounded-xl"
    />

    {/* TechImply Best Support */}
    <img 
      src="https://www.thetalentpool.ai/wp-content/uploads/2024/09/consumer-support-300x300-1.png"
      alt="Team working together"
      className="h-32 object-contain rounded-xl"
    />
  </div>
</div>

        </div>
      </section>

      {/* Latest from Our Blog */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest from Our Blog
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayPosts.map((post, index) => (
              <article key={post.slug || index} className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="block"
                  onClick={() => {
                    // Small delay to ensure navigation happens first
                    setTimeout(() => {
                      window.scrollTo(0, 0);
                    }, 100);
                  }}
                >
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  {post.featuredImage ? (
                    <img 
                      src={post.featuredImage} 
                      alt={post.title}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1';
                      }}
                    />
                  ) : (
                    <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-talentpool-light to-gray-100 flex items-center justify-center">
                      <div className="text-gray-500 text-center">
                        <div className="text-4xl mb-2">📝</div>
                        <div className="text-sm">Blog Post</div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 group-hover:text-talentpool-dark transition-colors line-clamp-2 h-12 sm:h-14 leading-6 sm:leading-7">
                    {post.title || 'Untitled Post'}
                  </h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base leading-5" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    height: '3.75rem', // 15 * 3 lines
                    lineHeight: '1.25rem'
                  }}>
                    {(post.excerpt || 'No description available.').length > 120 
                      ? `${(post.excerpt || 'No description available.').substring(0, 120)}...`
                      : (post.excerpt || 'No description available.')
                    }
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-talentpool-dark font-medium group-hover:text-talentpool-medium transition-colors flex items-center text-sm">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                    {post.category && (
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                    )}
                  </div>
                </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 pipedrive-form-section">
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
              
              
              
              {/* Trust indicators 
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
              </div>*/}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;