import React, { useState } from 'react';
import { Check, X, Star, Users, Zap, Crown, ChevronDown, ChevronUp, BarChart3, Settings, Shield, Globe, FileText, Link, MessageSquare, Brain, Lock } from 'lucide-react';
import PipeDriveForm from '../components/PipeDriveForm';

const Pricing: React.FC = () => {
  const [showFeatureComparison, setShowFeatureComparison] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);

  const addOns = [
    {
      name: "Career Page",
      price: Math.round(30000 / 12),
      description: "Custom branded career page with job listings and application forms",
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      features: ["Custom branding", "Mobile responsive", "SEO optimized", "Analytics tracking"]
    },
    {
      name: "DocuSign Integration",
      price: Math.round(30000 / 12),
      description: "Seamless integration with DocuSign for digital document signing",
      icon: <FileText className="w-6 h-6 text-green-600" />,
      features: ["Digital signatures", "Document templates", "Automated workflows", "Audit trails"]
    },
    {
      name: "Naukri Integration",
      price: Math.round(30000 / 12),
      description: "Direct integration with Naukri.com for job posting and candidate sourcing",
      icon: <Link className="w-6 h-6 text-purple-600" />,
      features: ["Auto job posting", "Resume import", "Application sync", "Performance tracking"]
    },
    {
      name: "Scored Feedback Forms",
      price: Math.round(12000 / 12),
      description: "Advanced feedback forms with scoring and evaluation metrics",
      icon: <MessageSquare className="w-6 h-6 text-orange-600" />,
      features: ["Custom scoring", "Weighted criteria", "Comparative analysis", "Detailed reports"]
    },
    {
      name: "Recommendation Engine",
      price: Math.round(42000 / 12),
      description: "AI-powered recommendation system for better candidate matching",
      icon: <Brain className="w-6 h-6 text-indigo-600" />,
      features: ["ML algorithms", "Predictive matching", "Continuous learning", "Success tracking"]
    },
    {
      name: "Single Sign-On (SSO)",
      price: Math.round(42000 / 12),
      description: "Enterprise SSO integration with your existing identity provider",
      icon: <Lock className="w-6 h-6 text-red-600" />,
      features: ["SAML/OAuth support", "Active Directory", "Multi-factor auth", "User provisioning"]
    }
  ];

  const plans = [
    {
      name: "Lite",
      price: isAnnual ? 11500 : 16500,
      originalPrice: isAnnual ? 16500 : null,
      joiners: "100 Joiners",
      targetAudience: "For small teams getting started with unified hiring",
      keyBenefit: "Unified Hiring Platform",
      description: "Perfect for startups and small companies looking to centralize their recruitment process and eliminate scattered hiring workflows.",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      cta: "Start Free Trial",
      popular: false,
      color: "border-gray-200 hover:border-blue-300",
      gradient: "from-blue-50 to-indigo-50"
    },
    {
      name: "Pro", 
      price: "Custom",
      joiners: "200 Joiners",
      targetAudience: "For growing companies needing data-driven insights",
      keyBenefit: "Advanced Analytics",
      description: "Ideal for mid-sized companies that want to optimize their hiring process with detailed analytics and performance metrics.",
      icon: <BarChart3 className="w-8 h-8 text-talentpool-dark" />,
      cta: "Contact Sales",
      popular: false,
      color: "border-talentpool-dark shadow-xl",
      gradient: "from-talentpool-light to-green-50"
    },
    {
      name: "Enterprise",
      price: "Custom",
      joiners: "400 Joiners",
      targetAudience: "For large organizations requiring complete automation",
      keyBenefit: "End to End",
      description: "Comprehensive solution for enterprises needing full automation, integrations, and standardized processes across multiple departments.",
      additionalBenefits: [
        "Automate and standardize offers",
        "Manage candidate experience", 
        "Integrated with HRMS, Assessment, Payroll, Background Verification"
      ],
      icon: <Crown className="w-8 h-8 text-purple-600" />,
      cta: "Contact Sales",
      popular: false,
      color: "border-purple-200 hover:border-purple-300",
      gradient: "from-purple-50 to-pink-50"
    }
  ];

  const featureCategories = [
    {
      name: "Usage",
      features: [
        {
          name: "Unlimited Users",
          lite: true,
          pro: true,
          enterprise: true
        },
        {
          name: "Unlimited AI Tokens",
          lite: true,
          pro: true,
          enterprise: true
        },
        {
          name: "Joiners",
          lite: "100",
          pro: "200",
          enterprise: "400"
        },
        {
          name: "Candidate database",
          lite: "5,000 resumes",
          pro: "25,000 resumes",
          enterprise: "75,000 resumes"
        }
      ]
    },
    {
      name: "AI Recruiting",
      features: [
        {
          name: "Virtual Recruiter",
          lite: true,
          pro: true,
          enterprise: true
        },
        {
          name: "JD Generator",
          lite: true,
          pro: true,
          enterprise: true
        },
        {
          name: "AI Resume Parser",
          lite: true,
          pro: true,
          enterprise: true
        },
        {
          name: "AI Recommendation",
          lite: true,
          pro: true,
          enterprise: true
        },
        {
          name: "AI Summary",
          lite: true,
          pro: true,
          enterprise: true
        }
      ]
    },
    {
      name: "Job Posting & Sourcing",
      features: [
        {
          name: "Job Board Integration",
          lite: true,
          pro: true,
          enterprise: true
        },
        {
          name: "Website Integration",
          lite: true,
          pro: true,
          enterprise: true
        },
        {
          name: "Employee Referral Portal",
          lite: true,
          pro: true,
          enterprise: true
        },
        {
          name: "Duplicate Resume Detection",
          lite: true,
          pro: true,
          enterprise: true
        },
        {
          name: "Naukri Plugin",
          lite: "Paid Upgrade",
          pro: true,
          enterprise: true
        },
        {
          name: "Vendor Management",
          lite: "Paid Upgrade",
          pro: "Paid upgrade",
          enterprise: true
        }
      ]
    },
    {
      name: "Organization & Workflows",
      features: [
        {
          name: "Position Templates",
          lite: true,
          pro: true,
          enterprise: true
        },
        {
          name: "Department Hierarchy Management",
          lite: false,
          pro: false,
          enterprise: true
        },
        {
          name: "Requisition Approval Workflows",
          lite: false,
          pro: false,
          enterprise: true
        }
      ]
    },
    {
      name: "Candidate Experience",
      features: [
        {
          name: "Candidate Portal",
          lite: false,
          pro: false,
          enterprise: true
        },
        {
          name: "Engagement Worklows",
          lite: true,
          pro: true,
          enterprise: true
        },
        {
          name: "Confidential Document Uploads",
          lite: false,
          pro: true,
          enterprise: true
        },
        {
          name: "Offer Management",
          lite: false,
          pro: false,
          enterprise: true
        }
      ]
    },
    {
      name: "Assessment & HRMS Integration",
      features: [
        {
          name: "Test Assessment Integrations",
          lite: false,
          pro: "Paid upgrade",
          enterprise: true
        },
        {
          name: "HRMS Integration",
          lite: false,
          pro: "Paid upgrade",
          enterprise: true
        }
      ]
    },
    {
      name: "Smart Search & CRM",
      features: [
        {
          name: "Boolean Search",
          lite: true,
          pro: true,
          enterprise: true
        },
        {
          name: "Labelled Search",
          lite: true,
          pro: true,
          enterprise: true
        },
        {
          name: "Candidate Interaction History",
          lite: true,
          pro: true,
          enterprise: true
        },
        {
          name: "Funnel Stage Tracking",
          lite: true,
          pro: true,
          enterprise: true
        },
        {
          name: "Confidential Document Control",
          lite: false,
          pro: true,
          enterprise: true
        }
      ]
    },
    {
      name: "Communication Tools",
      features: [
        {
          name: "Mass Emailing",
          lite: true,
          pro: true,
          enterprise: true
        },
        {
          name: "MSTeams, GMeet Integration",
          lite: true,
          pro: true,
          enterprise: true
        },
        {
          name: "Interview Scheduling with Panel Selection",
          lite: true,
          pro: true,
          enterprise: true
        }
      ]
    },
    {
      name: "Reporting & Analytics",
      features: [
        {
          name: "Prebuilt Reports",
          lite: true,
          pro: true,
          enterprise: true
        },
        {
          name: "Custom Report Designer",
          lite: false,
          pro: true,
          enterprise: true
        },
        {
          name: "Custom Dashboards",
          lite: true,
          pro: true,
          enterprise: true
        }
      ]
    },
    {
      name: "Workflow & Access Control",
      features: [
        {
          name: "Optional/Mandatory Process Steps",
          lite: true,
          pro: true,
          enterprise: true
        },
        {
          name: "Configurable Workflows",
          lite: true,
          pro: true,
          enterprise: true
        },
        {
          name: "Role-based Access Permissions",
          lite: false,
          pro: false,
          enterprise: true
        }
      ]
    },
    {
      name: "Implementation & Support",
      features: [
        {
          name: "Guided Implementation",
          lite: true,
          pro: true,
          enterprise: true
        },
        {
          name: "Dedicated Account Manager",
          lite: false,
          pro: false,
          enterprise: true
        },
        {
          name: "Regular Backups",
          lite: false,
          pro: true,
          enterprise: true
        },
        {
          name: "Software Upgrades",
          lite: true,
          pro: true,
          enterprise: true
        },
        {
          name: "Priority Support",
          lite: false,
          pro: false,
          enterprise: true
        }
      ]
    }
  ];

  const faqs = [
    {
      question: "How does the free trial work?",
      answer: "You get full access to all features for 60 days with no credit card required. You can invite your team, create jobs, and experience the full platform."
    },
    {
      question: "What happens if I exceed my candidate limit?",
      answer: "We'll notify you when you approach your limit. You can upgrade your plan or purchase additional candidate credits as needed."
    },
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate your billing."
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer: "Yes, we offer 30% off when you choose annual billing. Enterprise customers can discuss custom pricing."
    },
    {
      question: "What integrations are available?",
      answer: "We integrate with popular tools like Slack, LinkedIn, Gmail, Zoom, and many more. Enterprise plans include custom integrations."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We're SOC2 Type II certified, GDPR compliant, and use enterprise-grade security measures to protect your data."
    }
  ];

  const renderFeatureValue = (value: any) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-500 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-gray-300 mx-auto" />
      );
    }
    return <span className="text-sm text-gray-700 text-center">{value}</span>;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-talentpool-light to-white py-20 pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple, Transparent
              <br />
              <span className="text-talentpool-dark">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Choose the plan that fits your team size and hiring needs. Start with a free trial and scale as you grow.
            </p>
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 rounded-lg p-1 flex">
                <button 
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    !isAnnual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                  }`}
                >
                  Monthly
                </button>
                <button 
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    isAnnual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                  }`}
                >
                  Annual
                  <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    Save 30%
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Audience-Focused Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br ${plan.gradient} rounded-3xl border-2 ${plan.color} p-8 transition-all duration-300 ${plan.popular ? 'scale-105' : 'hover:scale-102'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-talentpool-dark text-white px-6 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-white/80 rounded-2xl shadow-sm">
                      {plan.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-heavy text-gray-1100 mb-6 tracking-wide uppercase">{plan.name}</h3>
                  
                  {/* Pricing */}
                  <div className="mb-6">
                    {typeof plan.price === 'number' ? (
                      <div>
                        <div className="flex items-center justify-center">
                          <span className="text-5xl font-bold text-gray-900">₹{plan.price.toLocaleString()}</span>
                          <span className="text-gray-600 ml-2">/month</span>
                        </div>
                        {plan.originalPrice && isAnnual && (
                          <div className="text-sm text-gray-500 mt-2">
                            <span className="line-through">₹{plan.originalPrice.toLocaleString()}/month</span>
                            <span className="ml-2 text-green-600 font-medium">Save 30%</span>
                          </div>
                        )}
                        {/* Invisible placeholder for monthly view to align CTAs */}
                        {!isAnnual && (
                          <div className="text-sm text-transparent mt-2">
                            Placeholder for alignment
                          </div>
                        )}
                        {isAnnual && (
                          <div className="text-sm text-gray-600 mt-2">Billed annually</div>
                        )}
                        
                      </div>
                    ) : (
                      <div>
                        <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                        <div className="text-sm text-gray-600 mt-2">Pricing</div>
                        {/* Invisible placeholder for annual billing alignment */}
                        {isAnnual && (
                          <div className="text-sm text-transparent mt-2">Placeholder</div>
                        )}
                      </div>
                    )}
                  </div>

                  <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 mb-8 ${
                    plan.popular 
                      ? 'bg-talentpool-dark text-white hover:bg-talentpool-medium shadow-lg hover:shadow-xl'
                      : 'bg-white border-2 border-gray-300 text-gray-900 hover:border-talentpool-dark hover:text-talentpool-dark'
                  }`}
                  onClick={() => {
                    if (plan.cta === 'Contact Sales') {
                      // Scroll to the PipeDrive form at the bottom of the page
                      const formSection = document.querySelector('.pipedrive-form-section');
                      if (formSection) {
                        formSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    } else if (plan.cta === 'Start Free Trial') {
                      // Navigate to start free page or scroll to form
                      window.location.href = '/start-free';
                    }
                  }}
                >
                  {plan.cta}
                  </button>
                </div>

                {/* Key Value Proposition - Text Only */}
                <div className="space-y-8">
                  {/* Joiners - Clean Text Display */}
                  <div className="text-center">
                    <div className="text-3xl font-bold text-talentpool-dark mb-2">{plan.joiners}</div>
                    <div className="text-sm text-gray-600 font-medium">Annually</div>
                  </div>

                  {/* Main Benefit - Text Styling */}
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">
                      {plan.keyBenefit}
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {plan.description}
                    </p>
                    
                    {/* Additional benefits for Enterprise only */}
                    {plan.additionalBenefits && (
                      <div className="space-y-3 pt-4 border-t border-white/30">
                        {plan.additionalBenefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start text-left">
                            <Check className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Comparison Toggle */}
          <div className="text-center">
            <button
              onClick={() => setShowFeatureComparison(!showFeatureComparison)}
              className="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors shadow-sm"
            >
              {showFeatureComparison ? (
                <>
                  Hide Detailed Feature Comparison
                  <ChevronUp className="w-5 h-5 ml-2" />
                </>
              ) : (
                <>
                  Compare All Features in Detail
                  <ChevronDown className="w-5 h-5 ml-2" />
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Detailed Feature Comparison */}
      {showFeatureComparison && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Feature Comparison
              </h2>
              <p className="text-xl text-gray-600">
                See exactly what's included in each plan
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-6 border-b border-gray-200">
                <div className="grid grid-cols-4 gap-4">
                  <div className="font-bold text-gray-900 text-lg">Features</div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900 text-lg">Lite</div>
                    <div className="text-sm text-gray-600 mt-1">100 Annual Joiners</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900 text-lg flex items-center justify-center">
                      Pro
                      <Star className="w-4 h-4 ml-1 text-talentpool-dark" />
                    </div>
                    <div className="text-sm text-gray-600 mt-1">200 Annual Joiners</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900 text-lg">Enterprise</div>
                    <div className="text-sm text-gray-600 mt-1">400 Annual Joiners</div>
                  </div>
                </div>
              </div>

              {/* Feature Categories */}
              {featureCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="border-b border-gray-200 last:border-b-0">
                  {/* Category Header */}
                  <div className="bg-gradient-to-r from-talentpool-light to-white px-6 py-4 border-b border-gray-100">
                    <h3 className="font-bold text-gray-900 text-lg flex items-center">
                      <div className="w-2 h-2 bg-talentpool-dark rounded-full mr-3"></div>
                      {category.name}
                    </h3>
                  </div>
                  
                  {/* Features */}
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-gray-50 last:border-b-0 hover:bg-gray-25 transition-colors">
                      <div className="font-medium text-gray-900 flex items-center">
                        {feature.name}
                      </div>
                      <div className="flex justify-center items-center">{renderFeatureValue(feature.lite)}</div>
                      <div className="flex justify-center items-center">{renderFeatureValue(feature.pro)}</div>
                      <div className="flex justify-center items-center">{renderFeatureValue(feature.enterprise)}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Add-ons Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Add-ons
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extend your Talentpool experience with these premium features and integrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 hover:border-talentpool-dark group">
                {/* Icon and Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm mb-4 group-hover:scale-110 transition-transform">
                    {addon.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{addon.name}</h3>
                  <div className="text-3xl font-bold text-talentpool-dark mb-2">
                    ₹{addon.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">per month</div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {addon.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {addon.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

          {/* Add-ons Note */}
          <div className="mt-12 text-center">
            <div className="bg-talentpool-light rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Mix and Match Add-ons
              </h3>
              <p className="text-gray-600 mb-6">
                Choose the add-ons that best fit your needs. All add-ons can be combined with any plan and can be added or removed at any time.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-gray-700">No setup fees</span>
                </div>
                <div className="flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Cancel anytime</span>
                </div>
                <div className="flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Prorated billing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Services
            </h2>
            <p className="text-xl text-gray-600">
              Get expert help to maximize your success with Talentpool
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Data Migration */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Data Migration</h3>
                <p className="text-gray-600 text-sm">
                  Seamlessly migrate your existing candidate data and hiring history without any downtime.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Complete data transfer
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Zero downtime process
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Data integrity guaranteed
                </div>
              </div>
            </div>

            {/* Phone Support */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Phone Support</h3>
                <p className="text-gray-600 text-sm">
                  Get priority phone support with dedicated account management and faster response times.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Priority phone access
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Dedicated account manager
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Same-day response
                </div>
              </div>
            </div>

            {/* Guided Onboarding */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Guided Onboarding</h3>
                <p className="text-gray-600 text-sm">
                  Work with our experts to customize workflows and train your team for maximum success.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Personalized setup sessions
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Custom workflow design
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Team training included
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <div className="bg-talentpool-dark rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Need Expert Assistance?</h3>
              <p className="text-talentpool-light mb-6 max-w-2xl mx-auto">
                Our team is ready to help you migrate, onboard, and succeed with Talentpool
              </p>
              <button 
                onClick={() => {
                  const formSection = document.querySelector('.pipedrive-form-section');
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-talentpool-dark px-8 py-3 rounded-lg font-semibold hover:bg-talentpool-light transition-colors"
              >
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-talentpool-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-gray-600">
              See how much you could save with Talentpool
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Current Costs</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly hires
                    </label>
                    <input 
                      type="number" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-talentpool-dark focus:border-transparent"
                      placeholder="10"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Average cost per hire
                    </label>
                    <input 
                      type="number" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-talentpool-dark focus:border-transparent"
                      placeholder="125000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hours per hire
                    </label>
                    <input 
                      type="number" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-talentpool-dark focus:border-transparent"
                      placeholder="40"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Savings</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600">Monthly cost savings</p>
                    <p className="text-2xl font-bold text-talentpool-dark">₹7,50,000</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600">Annual savings</p>
                    <p className="text-2xl font-bold text-talentpool-dark">₹90,00,000</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600">ROI</p>
                    <p className="text-2xl font-bold text-talentpool-dark">2,400%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

export default Pricing;