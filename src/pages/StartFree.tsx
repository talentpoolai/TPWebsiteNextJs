import React, { useState } from 'react';
import { Check, Users, Building, Mail, Phone, Globe, ArrowRight, Shield, Zap, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StartFree: React.FC = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    
    // Company Information
    companyName: '',
    companySize: '',
    industry: '',
    website: '',
    
    // Hiring Information
    monthlyHires: '',
    currentTools: [],
    primaryChallenges: [],
    
    // Additional
    hearAboutUs: '',
    additionalInfo: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '501-1000 employees',
    '1000+ employees'
  ];

  const industries = [
    'Technology/Software',
    'Financial Services',
    'Healthcare',
    'E-commerce/Retail',
    'Manufacturing',
    'Consulting',
    'Education',
    'Media/Entertainment',
    'Non-profit',
    'Other'
  ];

  const currentToolsOptions = [
    'LinkedIn Recruiter',
    'Indeed',
    'Greenhouse',
    'Workday',
    'BambooHR',
    'Lever',
    'SmartRecruiters',
    'JazzHR',
    'Spreadsheets/Manual Process',
    'Other ATS',
    'No current tools'
  ];

  const challengesOptions = [
    'Time-to-hire is too long',
    'Difficulty finding qualified candidates',
    'High cost per hire',
    'Poor candidate experience',
    'Lack of diversity in hiring',
    'Manual/inefficient processes',
    'Difficulty with remote hiring',
    'Interview scheduling challenges',
    'Lack of hiring analytics',
    'Team collaboration issues'
  ];

  const hearAboutUsOptions = [
    'Google Search',
    'LinkedIn',
    'Referral from colleague',
    'Industry event/conference',
    'Social media',
    'Blog/Content',
    'Partner recommendation',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: prev[name as keyof typeof prev].includes(value)
        ? (prev[name as keyof typeof prev] as string[]).filter(item => item !== value)
        : [...(prev[name as keyof typeof prev] as string[]), value]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Redirect to thank you page
    navigate('/thank-you');
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-talentpool-dark" />,
      title: "Setup in 5 minutes",
      description: "Get started immediately with our intuitive onboarding"
    },
    {
      icon: <Clock className="w-6 h-6 text-talentpool-dark" />,
      title: "60-day free trial",
      description: "Full access to all features, no credit card required"
    },
    {
      icon: <Shield className="w-6 h-6 text-talentpool-dark" />,
      title: "Enterprise security",
      description: "SOC2 compliant with bank-level encryption"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-talentpool-light to-white py-12 pt-28 md:pt-36">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Start Your Free Trial
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of companies using Talentpool to hire better, faster
            </p>
            
            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex-shrink-0 p-2 bg-talentpool-light rounded-lg">
                    {benefit.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Progress Bar */}
            <div className="bg-gray-50 px-8 py-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Step {currentStep} of {totalSteps}
                </h2>
                <div className="text-sm text-gray-600">
                  {currentStep === 1 && "Personal & Company Information"}
                  {currentStep === 2 && "Hiring Requirements"}
                  {currentStep === 3 && "Additional Details"}
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-talentpool-dark h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8">
              {/* Step 1: Personal & Company Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                      <Users className="w-6 h-6 mr-2 text-talentpool-dark" />
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-talentpool-dark focus:border-transparent"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-talentpool-dark focus:border-transparent"
                          placeholder="Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-talentpool-dark focus:border-transparent"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-talentpool-dark focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Job Title *
                        </label>
                        <input
                          type="text"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-talentpool-dark focus:border-transparent"
                          placeholder="Head of Talent, HR Manager, Recruiter, etc."
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                      <Building className="w-6 h-6 mr-2 text-talentpool-dark" />
                      Company Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-talentpool-dark focus:border-transparent"
                          placeholder="Acme Corp"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Size *
                        </label>
                        <select
                          name="companySize"
                          value={formData.companySize}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-talentpool-dark focus:border-transparent"
                        >
                          <option value="">Select company size</option>
                          {companySizes.map((size) => (
                            <option key={size} value={size}>{size}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Industry *
                        </label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-talentpool-dark focus:border-transparent"
                        >
                          <option value="">Select industry</option>
                          {industries.map((industry) => (
                            <option key={industry} value={industry}>{industry}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Website
                        </label>
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-talentpool-dark focus:border-transparent"
                          placeholder="https://company.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Hiring Requirements */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                      Tell us about your hiring needs
                    </h3>
                    
                    <div className="mb-8">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        How many people do you typically hire per month? *
                      </label>
                      <select
                        name="monthlyHires"
                        value={formData.monthlyHires}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-talentpool-dark focus:border-transparent"
                      >
                        <option value="">Select hiring volume</option>
                        <option value="1-5">1-5 hires per month</option>
                        <option value="6-15">6-15 hires per month</option>
                        <option value="16-30">16-30 hires per month</option>
                        <option value="31-50">31-50 hires per month</option>
                        <option value="50+">50+ hires per month</option>
                      </select>
                    </div>

                    <div className="mb-8">
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        What tools do you currently use for hiring? (Select all that apply)
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {currentToolsOptions.map((tool) => (
                          <label key={tool} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.currentTools.includes(tool)}
                              onChange={() => handleCheckboxChange('currentTools', tool)}
                              className="w-4 h-4 text-talentpool-dark focus:ring-talentpool-dark border-gray-300 rounded"
                            />
                            <span className="text-sm text-gray-700">{tool}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        What are your biggest hiring challenges? (Select all that apply)
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {challengesOptions.map((challenge) => (
                          <label key={challenge} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.primaryChallenges.includes(challenge)}
                              onChange={() => handleCheckboxChange('primaryChallenges', challenge)}
                              className="w-4 h-4 text-talentpool-dark focus:ring-talentpool-dark border-gray-300 rounded"
                            />
                            <span className="text-sm text-gray-700">{challenge}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Additional Details */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                      Almost done! Just a few more details
                    </h3>
                    
                    <div className="mb-8">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        How did you hear about Talentpool?
                      </label>
                      <select
                        name="hearAboutUs"
                        value={formData.hearAboutUs}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-talentpool-dark focus:border-transparent"
                      >
                        <option value="">Select an option</option>
                        {hearAboutUsOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Anything else you'd like us to know?
                      </label>
                      <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-talentpool-dark focus:border-transparent"
                        placeholder="Tell us about specific use cases, integration needs, or questions you have..."
                      />
                    </div>

                    {/* Terms and Privacy */}
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id="terms"
                          required
                          className="w-4 h-4 text-talentpool-dark focus:ring-talentpool-dark border-gray-300 rounded mt-1"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-700">
                          I agree to Talentpool's{' '}
                          <a href="#" className="text-talentpool-dark hover:underline">Terms of Service</a>
                          {' '}and{' '}
                          <a href="#" className="text-talentpool-dark hover:underline">Privacy Policy</a>
                        </label>
                      </div>
                      <div className="flex items-start space-x-3 mt-3">
                        <input
                          type="checkbox"
                          id="marketing"
                          className="w-4 h-4 text-talentpool-dark focus:ring-talentpool-dark border-gray-300 rounded mt-1"
                        />
                        <label htmlFor="marketing" className="text-sm text-gray-700">
                          I'd like to receive product updates, hiring tips, and industry insights from Talentpool
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                <div>
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                      Previous
                    </button>
                  )}
                </div>
                
                <div>
                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-talentpool-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-talentpool-medium transition-colors flex items-center"
                    >
                      Next Step
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-talentpool-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-talentpool-medium transition-colors flex items-center"
                    >
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by 500+ Companies
            </h3>
            <p className="text-gray-600">
              Join leading companies already using Talentpool
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <img src="/1.png" alt="Company 1" className="h-12 w-auto mx-auto" />
            <img src="/2.png" alt="Company 2" className="h-12 w-auto mx-auto" />
            <img src="/3.png" alt="Company 3" className="h-12 w-auto mx-auto" />
            <img src="/4.png" alt="Company 4" className="h-12 w-auto mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-talentpool-dark mb-2">60 days</div>
              <div className="text-gray-600">Free trial period</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-talentpool-dark mb-2">No setup fees</div>
              <div className="text-gray-600">Get started immediately</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-talentpool-dark mb-2">24/7 support</div>
              <div className="text-gray-600">We're here to help</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartFree;