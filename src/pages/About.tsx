import React from 'react';
import { MapPin, Phone, Mail, Users, Award, Heart, Target, Zap, Shield } from 'lucide-react';
import PipeDriveForm from '../components/PipeDriveForm';

const About: React.FC = () => {
  const team = [
    {
      name: "Nitin Shimpi",
      role: "CEO & Co-Founder",
      bio: "Nitin brings in over 26 years of experience in successfully running and growing companies, and provides organizational leadership. He holds a Master’s degree from Marquette University and Bachelors from IIT Bombay",
      image: "https://www.thetalentpool.ai/wp-content/uploads/2024/10/Nitin-Shimpi-image.webp",
      linkedin: "#"
    },
    {
      name: "Manjusha Madabushi",
      role: "CTO & Co-Founder",
      bio: "Manjusha is responsible for our technology vision and new product development. She helms product management, engineering and services. She holds a Master’s from Northwestern University and Bachelors from IIT Bombay",
      image: "https://www.thetalentpool.ai/wp-content/uploads/2024/10/Manjusha-Madabushiimage.webp",
      linkedin: "#"
    },
    {
      name: "Poushali Ganguly",
      role: "Head of Product",
      bio: "Poushali oversees the day to day operations of Talentpool and is responsible for growth of Talentpool. She is an alumnus of IIM Calcutta and brings in over 15 years of experience in sales, marketing and product management",
      image: "https://www.thetalentpool.ai/wp-content/uploads/2024/10/Poushali-Gangulyimage.webp",
      linkedin: "#"
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-talentpool-dark" />,
      title: "Mission-Driven",
      description: "We're passionate about helping companies find the right talent and helping candidates find their dream jobs."
    },
    {
      icon: <Zap className="w-8 h-8 text-talentpool-dark" />,
      title: "Innovation First",
      description: "We continuously push the boundaries of what's possible in recruitment technology."
    },
    {
      icon: <Shield className="w-8 h-8 text-talentpool-dark" />,
      title: "Trust & Security",
      description: "We prioritize data security and maintain the highest standards of privacy and compliance."
    },
    {
      icon: <Heart className="w-8 h-8 text-talentpool-dark" />,
      title: "Human-Centered",
      description: "Technology should enhance human connections, not replace them. We build tools that empower people."
    }
  ];

  const milestones = [
    {
      year: "2021",
      title: "Company Founded",
      description: "Sarah and Marcus start Talentpool to solve the challenges they faced in tech recruiting"
    },
    {
      year: "2022",
      title: "First 100 Customers",
      description: "Reached our first major milestone with companies across North America"
    },
    {
      year: "2023",
      title: "Series A Funding",
      description: "Raised $15M to accelerate product development and expand our team"
    },
    {
      year: "2024",
      title: "AI-Powered Matching",
      description: "Launched our revolutionary AI matching engine, transforming how companies find talent"
    }
  ];

  const stats = [
    {
      number: "500+",
      label: "Companies Trust Us",
      description: "From startups to Fortune 500"
    },
    {
      number: "50,000+",
      label: "Successful Hires",
      description: "Matches made through our platform"
    },
    {
      number: "40%",
      label: "Faster Hiring",
      description: "Average time-to-hire reduction"
    },
    {
      number: "95%",
      label: "Customer Satisfaction",
      description: "Based on quarterly surveys"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-talentpool-light to-white py-20 pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              We're Building the Future of
              <br />
              <span className="text-talentpool-dark">Recruitment</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Our mission is to help companies find the best talent while creating meaningful connections between candidates and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-talentpool-dark mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-700">
                <p>
                Back in 2003, Nitin and Manju needed a simple and affordable recruitment software manage hiring for one of their companies. When they could not find the right software, they decided to build one.  
                </p>
                  <p>
                  Talentpool turned the lack of the required solution into an opportunity! Over three years, the product was developed, tested and improved – and a bunch of interesting features were added with time. Talentpool finally entered the market in 2006.
</p>
                  <p>
In the early years, the team realized that most of such automation was primarily pushed down by the management to end users. Recruiters were not convinced about adding an additional task to their already overflowing task list, especially if the interface was not easy for the end users to readily adopt it.
              </p>
                  <p>
 So for Talentpool, simplicity and usability always came first. Built for the end user, Talentpool aims to make the recruiter more productive than ever.
                
                
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1" 
                alt="Team working together"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <blockquote className="text-gray-700 italic">
                "We believe that great companies are built by great people, and great people deserve 
                great opportunities. Our job is to make those connections happen."
              </blockquote>
              <footer className="mt-4 text-sm text-gray-600">
                — Sarah Chen, CEO & Co-Founder
              </footer>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The people behind Talentpool
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-talentpool-dark font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section 
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                    <div className="flex items-center mb-2">
                      <span className="text-gray-700 mr-2">Email:</span>
                      <a 
                        href="mailto:info@thetalentpool.ai" 
                        className="text-talentpool-dark hover:text-talentpool-medium transition-colors font-medium"
                      >
                        info@thetalentpool.ai
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-700 mr-2">Phone:</span>
                      <a 
                        href="tel:+919922963760" 
                        className="text-talentpool-dark hover:text-talentpool-medium transition-colors font-medium"
                      >
                        +91-9922963760
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Timeline Section
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our growth story
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-talentpool-dark">{milestone.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-talentpool-dark rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Careers Section
      <section className="py-20 bg-talentpool-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Team
            </h2>
            <p className="text-xl text-talentpool-light mb-8">
              Help us build the future of recruitment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-talentpool-medium rounded-xl">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Remote-First</h3>
              <p className="text-talentpool-light">Work from anywhere with flexible hours</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-talentpool-medium rounded-xl">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Great Benefits</h3>
              <p className="text-talentpool-light">Competitive salary, equity, and comprehensive benefits</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-talentpool-medium rounded-xl">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
              <p className="text-talentpool-light">Learn, grow, and advance your career</p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-white text-talentpool-dark px-8 py-4 rounded-lg font-semibold hover:bg-talentpool-light transition-colors">
              View Open Positions
            </button>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              We'd love to hear from you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-talentpool-dark mr-3" />
                  <span className="text-gray-700">Pune, India</span>
                </div>
                
                <div className="flex items-center mb-2">
                  <Mail className="w-5 h-5 text-talentpool-dark mr-3" />
                      <span className="text-gray-700 mr-2">
                      <a 
                        href="mailto:info@thetalentpool.ai" 
                        className="text-talentpool-dark hover:text-talentpool-medium transition-colors font-medium"
                      >
                        info@thetalentpool.ai
                      </a>
                        </span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-talentpool-dark mr-3" />
                      <span className="text-gray-700 mr-2">
                      <a 
                        href="tel:+919922963760" 
                        className="text-talentpool-dark hover:text-talentpool-medium transition-colors font-medium"
                      >
                        +91-9922963760
                      </a>
                        </span>
                    </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Send us a message</h3>
              <PipeDriveForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;