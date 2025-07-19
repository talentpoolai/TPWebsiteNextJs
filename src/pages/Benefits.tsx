import React, { useState } from 'react';
import Head from 'next/head';
import { Eye, Settings, Zap, Users, BarChart3, Shield, CheckCircle, ArrowRight, Crown, Target, Clock, TrendingUp } from 'lucide-react';
import PipeDriveForm from '../components/PipeDriveForm';

const Benefits: React.FC = () => {
  const [activeTab, setActiveTab] = useState('chro');

  const roleData = {
    chro: {
      title: "CHRO",
      subtitle: "Chief Human Resources Officer",
      icon: <Crown className="w-8 h-8 text-purple-600" />,
      color: "purple",
      gradient: "from-purple-50 to-pink-50",
      benefits: [
        {
          title: "Get visibility into critical recruitment data",
          description: "Get a snap shot of the entire recruitment pipeline as soon as you log in. Standard and custom reports give details such as open positions, candidates, turn-around time for every stage and recruiter activity. Get instant and real-time visibility into the hiring process, and identify gaps that can make all the difference.",
          icon: <Eye className="w-6 h-6 text-purple-600" />
        },
        {
          title: "See the big picture and discover hiring trends",
          description: "From employee referrals to internal hires to vendor reference, find out what works best to fill positions in your organization. Record and evaluate your hiring process in details and be armed with data to generate insights and take informed business decision.",
          icon: <TrendingUp className="w-6 h-6 text-purple-600" />
        },
        {
          title: "Ensure consistent brand communication",
          description: "Consistent brand communication plays a key role in building trust and equity. If enterprises do not have defined guidelines and templates, recruiters are incorrectly seen as the voice of the brand. Talentpool helps you produce consistent brand communication through standard mailer templates, social media integration and career website integration.",
          icon: <Shield className="w-6 h-6 text-purple-600" />
        },
        {
          title: "Hire better by sharing best practices",
          description: "Talentpool makes collaboration easy by creating a centralized system that everyone can refer to. It helps implement best practices and standardizes processes to expect predictable outcomes. With a single system, your team also gets access to a bigger picture, get visibility into each other's processes and see what's working and what's not.",
          icon: <Users className="w-6 h-6 text-purple-600" />
        }
      ]
    },
    manager: {
      title: "Recruitment Manager",
      subtitle: "Talent Acquisition Manager",
      icon: <Target className="w-8 h-8 text-blue-600" />,
      color: "blue",
      gradient: "from-blue-50 to-indigo-50",
      benefits: [
        {
          title: "Set up standard hiring process to reduce ambiguity",
          description: "With the right process, you reach the top talent consistently with greater efficiency. Avoid missed opportunities with wrong decisions taken on the basis of subjective perceptions. Talentpool's structured hiring workflow helps you establish fair hiring practices and adhere to local hiring laws around the globe. Moreover when your stakeholders are clear about the role they are expected to play, the process becomes focused, quick and effective.",
          icon: <Settings className="w-6 h-6 text-blue-600" />
        },
        {
          title: "View the entire pipeline and track key parameters",
          description: "Get unparalleled visibility into your hiring progress with dashboard and detailed reports. Gain insights with a quick snapshot of your pending activities, open positions, in-process candidates, interviews scheduled and offers made. Track, understand and improve factors impacting efficiency and effectiveness. Take corrective measures to improve the turn-around time. Generate reports with a single click without wasting hours collating and compiling data.",
          icon: <BarChart3 className="w-6 h-6 text-blue-600" />
        },
        {
          title: "Maintain history of candidate interaction for ready reference",
          description: "With Talentpool, you can track each candidate by viewing the interaction history including details on calls, mails, notes, SMS and messages. You no longer need to dig through your emails to track communication between you and the candidate. View your entire candidate database, import contacts from excel sheets and MS Outlook, and flag candidates for quick reference.",
          icon: <Clock className="w-6 h-6 text-blue-600" />
        },
        {
          title: "Provide a real time view of the progress to your stakeholders",
          description: "Line Managers and Business Leaders have vested interest in talent acquisition. They should have complete visibility so that they can use the data to drive changes. With improved visibility, stakeholders improve the quality of hires and reduce the time to hire. They can effectively evaluate and help recruiters identify gaps and close them.",
          icon: <Eye className="w-6 h-6 text-blue-600" />
        }
      ]
    },
    recruiter: {
      title: "Recruiter",
      subtitle: "Talent Acquisition Specialist",
      icon: <Zap className="w-8 h-8 text-green-600" />,
      color: "green",
      gradient: "from-green-50 to-emerald-50",
      benefits: [
        {
          title: "Download resumes in bulk from jobboards at the click of a button",
          description: "Talentpool comes with its advanced sourcing tools that save your efforts by downloading resumes in bulk. You can download not only from Naukri or Monster, but also from your email, web pages, job portals, and even that excel sheet on your desktop!",
          icon: <Zap className="w-6 h-6 text-green-600" />
        },
        {
          title: "Reduce data entry by automatically parsing candidate info",
          description: "You no longer need to copy and paste key information into an excel sheet for your stakeholders to view. Talentpool extracts more than 72 fields from a resume which includes key information such as name, email, experience, skills and many more. This enables you to easily search for the right candidate on the basis of these search parameters.",
          icon: <Settings className="w-6 h-6 text-green-600" />
        },
        {
          title: "Avoid slippages with task list and a standard process",
          description: "With a customized dashboard that shows you your tasklist and gives you visibility into where each position is stuck, there is no room for miscommunication.",
          icon: <CheckCircle className="w-6 h-6 text-green-600" />
        },
        {
          title: "Relax while Talentpool coordinates with managers, vendors and candidates",
          description: "You no longer need to spend time on multiple phone calls or email conversations to collaborate with vendors, interviewers or candidates. Talentpool sends automated reminders, updates and schedules to your stakeholders to save you the valuable time.",
          icon: <Users className="w-6 h-6 text-green-600" />
        }
      ]
    }
  };

  const currentRole = roleData[activeTab as keyof typeof roleData];

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-talentpool-light to-white py-20 pt-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-talentpool-light to-green-100 rounded-full mb-6">
                <span className="bg-white px-6 py-2 rounded-full text-talentpool-dark font-semibold text-sm">
                  ✨ Smart Recruitment Software
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Get Complete Visibility with our
                <br />
                <span className="text-talentpool-dark">Smart, Integration Ready</span>
                <br />
                Recruitment Software
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Built on expertise and experience, our comprehensive recruitment solution makes hiring easy and organized for all stakeholders
              </p>
            </div>
          </div>
        </section>

        {/* Best-in-class Software Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Best-in-class Software
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl mr-4">
                      <Target className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Built on Expertise & Experience</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    We understand recruitment from all angles. With singular focus on recruitment, Talentpool makes recruitment easy and organized for all stakeholders. We started off as a recruitment software and are happy to remain so because we understand recruitment very well.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-purple-100 rounded-xl mr-4">
                      <Settings className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Customized Recruitment Solution</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    If you need a specialized solution that solves your recruitment challenges, then Talentpool is certainly worth a look.
                  </p>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1" 
                  alt="Best-in-class software"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Easy to Adopt Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Easy to Adopt
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1" 
                  alt="Easy to adopt interface"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>

              <div className="space-y-8 order-1 lg:order-2">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-green-100 rounded-xl mr-4">
                      <Zap className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Intuitive Interface × Easily-configurable Workflow</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Though comprehensive, Talentpool's simple, intuitive interface helps your team adopt it readily. You don't need to go through extensive training sessions to start using the application.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-orange-100 rounded-xl mr-4">
                      <Settings className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Designed to Follow Your Processes</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Configure Talentpool to follow your time tested processes. Design workflows as per your organizational need, industry or location.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Ready Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Integration Ready
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-indigo-100 rounded-xl mr-4">
                      <Zap className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Ready APIs for Quick Integration</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    We continually work on building ready connectors or APIs with external applications like job portals, ERPs, assessment tools, and many more.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-200">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-teal-100 rounded-xl mr-4">
                      <Clock className="w-8 h-8 text-teal-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Lower time to Implement</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Get the best of both worlds. Choose a specialized recruitment software that integrates seamlessly with all your other applications. With better flexibility and reduced complexity the time taken to implement Talentpool reduces considerably.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-yellow-100 rounded-xl mr-4">
                      <BarChart3 className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Get Real time Visibility and Analytics</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    View a snapshot of the recruitment progress as per each position as soon as you log in. Talentpool provides you insightful analytics that help you make strategic decisions.
                  </p>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1" 
                  alt="Integration ready"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Role-Specific Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Benefits for Every Role
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how Talentpool empowers different roles in your organization
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
                <div className="flex space-x-2">
                  {Object.entries(roleData).map(([key, role]) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                        activeTab === key
                          ? 'bg-talentpool-dark text-white shadow-lg'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`${activeTab === key ? 'text-white' : `text-${role.color}-600`}`}>
                        {role.icon}
                      </div>
                      <div className="text-left">
                        <div className="font-bold">{role.title}</div>
                        <div className={`text-xs ${activeTab === key ? 'text-white/80' : 'text-gray-500'}`}>
                          {role.subtitle}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <div className={`bg-gradient-to-br ${currentRole.gradient} rounded-3xl p-8 border-2 border-${currentRole.color}-200 shadow-xl`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {currentRole.benefits.map((benefit, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/90 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 p-3 bg-${currentRole.color}-100 rounded-xl`}>
                        {benefit.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-700 leading-relaxed text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
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
        
        {/* {/* Trust indicators 
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
        </div> */}
      </div>
    </div>
  </div>
</section>

        
      </main>
    </div>
  );
};

export default Benefits;