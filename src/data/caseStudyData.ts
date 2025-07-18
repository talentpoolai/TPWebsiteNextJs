export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  company: {
    name: string;
    logo: string;
    industry: string;
    size: string;
    website: string;
  };
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  featuredImage: string;
  featured: boolean;
  downloadUrl: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "How TechCorp Reduced Time-to-Hire by 50% While Scaling Their Engineering Team",
    slug: "techcorp-reduced-time-to-hire-50-percent-scaling-engineering",
    company: {
      name: "TechCorp",
      logo: "/1.png",
      industry: "SaaS Technology",
      size: "500+ employees",
      website: "techcorp.com"
    },
    challenge: "TechCorp was struggling to scale their engineering team rapidly while maintaining quality. Their traditional hiring process was taking 45+ days per hire, causing them to lose top candidates to competitors and delaying critical product launches.",
    solution: "Implemented Talentpool's AI-powered matching system with automated screening workflows, collaborative hiring features, and predictive analytics to identify the best candidates faster and reduce manual work.",
    results: [
      {
        metric: "Time-to-Hire",
        value: "50%",
        description: "Reduced from 45 to 22 days average"
      },
      {
        metric: "Candidate Quality",
        value: "3x",
        description: "Higher quality score ratings"
      },
      {
        metric: "Hiring Manager Satisfaction",
        value: "95%",
        description: "Up from 67% previously"
      },
      {
        metric: "Cost Savings",
        value: "$280K",
        description: "Annual recruitment cost reduction"
      }
    ],
    testimonial: {
      quote: "Talentpool transformed our hiring process completely. We went from struggling to fill engineering positions to having a robust pipeline of qualified candidates. The AI matching is incredibly accurate.",
      author: "Sarah Chen",
      role: "VP of Engineering",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
    },
    publishedAt: "2024-01-25",
    readTime: "8 min read",
    category: "Engineering",
    tags: ["Engineering Hiring", "AI Matching", "Scale-up", "Time-to-Hire"],
    featuredImage: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1",
    featured: true,
    downloadUrl: "#",
    seo: {
      metaTitle: "TechCorp Case Study: 50% Faster Engineering Hiring | Talentpool",
      metaDescription: "Learn how TechCorp reduced time-to-hire by 50% while scaling their engineering team using Talentpool's AI-powered recruitment platform.",
      keywords: ["engineering hiring", "time-to-hire reduction", "AI recruitment", "case study"]
    }
  },
  {
    id: "2",
    title: "StartupX Eliminates External Recruiters and Saves $500K Annually",
    slug: "startupx-eliminates-external-recruiters-saves-500k-annually",
    company: {
      name: "StartupX",
      logo: "/2.png",
      industry: "Fintech",
      size: "50-200 employees",
      website: "startupx.com"
    },
    challenge: "As a fast-growing fintech startup, StartupX was spending over $500K annually on external recruiters and still struggling with long hiring cycles and poor candidate fit. They needed an in-house solution that could scale with their growth.",
    solution: "Deployed Talentpool's comprehensive recruitment platform with automated candidate sourcing, intelligent screening, and collaborative hiring workflows, enabling their small HR team to handle all recruitment internally.",
    results: [
      {
        metric: "Cost Reduction",
        value: "$500K",
        description: "Annual savings from eliminating external recruiters"
      },
      {
        metric: "Hiring Speed",
        value: "60%",
        description: "Faster hiring cycles"
      },
      {
        metric: "Team Productivity",
        value: "4x",
        description: "More hires per HR team member"
      },
      {
        metric: "Candidate Satisfaction",
        value: "92%",
        description: "Positive candidate experience rating"
      }
    ],
    testimonial: {
      quote: "As a startup, we needed to hire efficiently without breaking the bank. Talentpool made that possible. We eliminated our dependency on expensive external recruiters and built a world-class team internally.",
      author: "Marcus Rodriguez",
      role: "CEO & Co-Founder",
      avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
    },
    publishedAt: "2024-01-20",
    readTime: "6 min read",
    category: "Startup",
    tags: ["Startup Hiring", "Cost Reduction", "Internal Recruiting", "Fintech"],
    featuredImage: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1",
    featured: true,
    downloadUrl: "#",
    seo: {
      metaTitle: "StartupX Case Study: $500K Annual Savings | Talentpool",
      metaDescription: "Discover how StartupX eliminated external recruiters and saved $500K annually while improving hiring speed and quality.",
      keywords: ["startup hiring", "cost reduction", "internal recruiting", "fintech recruitment"]
    }
  },
  {
    id: "3",
    title: "ScaleUp Inc Builds Diverse Engineering Team with 40% Female Representation",
    slug: "scaleup-builds-diverse-engineering-team-40-percent-female",
    company: {
      name: "ScaleUp Inc",
      logo: "/3.png",
      industry: "E-commerce",
      size: "200-500 employees",
      website: "scaleup.com"
    },
    challenge: "ScaleUp Inc recognized that their engineering team lacked diversity, with only 15% female representation. They wanted to build a more inclusive team but struggled with biased hiring processes and limited diverse candidate pipelines.",
    solution: "Leveraged Talentpool's bias-reduction features, diverse sourcing channels, and inclusive hiring workflows to systematically improve their recruitment process and expand their talent pipeline.",
    results: [
      {
        metric: "Female Representation",
        value: "40%",
        description: "In new engineering hires"
      },
      {
        metric: "Diverse Candidate Pipeline",
        value: "3x",
        description: "Increase in underrepresented candidates"
      },
      {
        metric: "Team Performance",
        value: "25%",
        description: "Improvement in innovation metrics"
      },
      {
        metric: "Employee Satisfaction",
        value: "88%",
        description: "Team satisfaction with inclusive culture"
      }
    ],
    testimonial: {
      quote: "Talentpool helped us not just talk about diversity, but actually achieve it. The bias-reduction features and diverse sourcing capabilities transformed our hiring outcomes and team culture.",
      author: "Emily Johnson",
      role: "Head of People",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
    },
    publishedAt: "2024-01-15",
    readTime: "7 min read",
    category: "Diversity & Inclusion",
    tags: ["Diversity", "Inclusion", "Engineering", "Bias Reduction"],
    featuredImage: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1",
    featured: true,
    downloadUrl: "#",
    seo: {
      metaTitle: "ScaleUp Inc Diversity Case Study | 40% Female Engineering Team",
      metaDescription: "Learn how ScaleUp Inc achieved 40% female representation in engineering hires using Talentpool's inclusive hiring features.",
      keywords: ["diversity hiring", "inclusive recruitment", "female engineers", "bias reduction"]
    }
  },
  {
    id: "4",
    title: "GlobalTech Streamlines Remote Hiring Across 15 Countries",
    slug: "globaltech-streamlines-remote-hiring-15-countries",
    company: {
      name: "GlobalTech",
      logo: "/4.png",
      industry: "Software Development",
      size: "1000+ employees",
      website: "globaltech.com"
    },
    challenge: "GlobalTech needed to hire remote talent across 15 countries with different time zones, languages, and legal requirements. Their existing process was fragmented and inefficient, leading to poor candidate experience and long hiring cycles.",
    solution: "Implemented Talentpool's global hiring features with multi-timezone scheduling, automated translations, compliance management, and virtual interview capabilities to create a seamless remote hiring experience.",
    results: [
      {
        metric: "Global Reach",
        value: "15",
        description: "Countries with streamlined hiring"
      },
      {
        metric: "Remote Hires",
        value: "300%",
        description: "Increase in successful remote placements"
      },
      {
        metric: "Process Efficiency",
        value: "45%",
        description: "Reduction in administrative overhead"
      },
      {
        metric: "Candidate Experience",
        value: "94%",
        description: "Positive feedback from global candidates"
      }
    ],
    testimonial: {
      quote: "Talentpool made global remote hiring feel local. The platform handles all the complexity of multi-country recruitment while maintaining a consistent, high-quality candidate experience.",
      author: "David Kim",
      role: "Global Head of Talent",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
    },
    publishedAt: "2024-01-10",
    readTime: "9 min read",
    category: "Remote Hiring",
    tags: ["Remote Hiring", "Global Talent", "Multi-Country", "Virtual Interviews"],
    featuredImage: "https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1",
    featured: false,
    downloadUrl: "#",
    seo: {
      metaTitle: "GlobalTech Remote Hiring Case Study | 15 Countries | Talentpool",
      metaDescription: "See how GlobalTech streamlined remote hiring across 15 countries with 300% increase in successful placements.",
      keywords: ["remote hiring", "global recruitment", "virtual interviews", "multi-country hiring"]
    }
  },
  {
    id: "5",
    title: "DataCorp Improves Technical Interview Quality and Reduces Bias by 70%",
    slug: "datacorp-improves-technical-interview-quality-reduces-bias-70-percent",
    company: {
      name: "DataCorp",
      logo: "/5.png",
      industry: "Data Analytics",
      size: "300-500 employees",
      website: "datacorp.com"
    },
    challenge: "DataCorp's technical interviews were inconsistent and showed signs of unconscious bias, leading to poor hiring decisions and missed opportunities with qualified candidates from diverse backgrounds.",
    solution: "Adopted Talentpool's structured interview framework with standardized technical assessments, bias-detection algorithms, and collaborative evaluation tools to ensure fair and consistent candidate evaluation.",
    results: [
      {
        metric: "Interview Consistency",
        value: "85%",
        description: "Standardization across all interviews"
      },
      {
        metric: "Bias Reduction",
        value: "70%",
        description: "Decrease in biased evaluation patterns"
      },
      {
        metric: "Hire Quality",
        value: "60%",
        description: "Improvement in 90-day performance reviews"
      },
      {
        metric: "Interviewer Confidence",
        value: "92%",
        description: "Feel confident in their evaluations"
      }
    ],
    testimonial: {
      quote: "The structured interview framework transformed our technical hiring. We're now making more objective, data-driven decisions and seeing much better outcomes in our new hires.",
      author: "Dr. Lisa Wang",
      role: "VP of Engineering",
      avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
    },
    publishedAt: "2024-01-05",
    readTime: "6 min read",
    category: "Interview Process",
    tags: ["Technical Interviews", "Bias Reduction", "Interview Quality", "Data Analytics"],
    featuredImage: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1",
    featured: false,
    downloadUrl: "#",
    seo: {
      metaTitle: "DataCorp Technical Interview Case Study | 70% Bias Reduction",
      metaDescription: "Learn how DataCorp improved technical interview quality and reduced bias by 70% using structured interview frameworks.",
      keywords: ["technical interviews", "bias reduction", "interview quality", "structured interviews"]
    }
  },
  {
    id: "6",
    title: "CloudSoft Builds High-Performance Sales Team with 95% Retention Rate",
    slug: "cloudsoft-builds-high-performance-sales-team-95-percent-retention",
    company: {
      name: "CloudSoft",
      logo: "/6.png",
      industry: "Cloud Services",
      size: "100-300 employees",
      website: "cloudsoft.com"
    },
    challenge: "CloudSoft was experiencing high turnover in their sales team (45% annually) and struggling to identify candidates who would succeed in their fast-paced, high-performance culture.",
    solution: "Used Talentpool's predictive analytics and cultural fit assessment tools to identify candidates with the right personality traits, skills, and motivations for long-term success in their sales environment.",
    results: [
      {
        metric: "Retention Rate",
        value: "95%",
        description: "12-month retention for new hires"
      },
      {
        metric: "Sales Performance",
        value: "40%",
        description: "Higher quota attainment"
      },
      {
        metric: "Ramp Time",
        value: "50%",
        description: "Faster time to productivity"
      },
      {
        metric: "Team Satisfaction",
        value: "91%",
        description: "Employee engagement score"
      }
    ],
    testimonial: {
      quote: "The predictive analytics helped us understand what makes a successful salesperson in our environment. We're now hiring people who not only perform well but also stay with us long-term.",
      author: "Michael Torres",
      role: "VP of Sales",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
    },
    publishedAt: "2023-12-28",
    readTime: "7 min read",
    category: "Sales",
    tags: ["Sales Hiring", "Retention", "Predictive Analytics", "Cultural Fit"],
    featuredImage: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1",
    featured: false,
    downloadUrl: "#",
    seo: {
      metaTitle: "CloudSoft Sales Team Case Study | 95% Retention Rate | Talentpool",
      metaDescription: "Discover how CloudSoft achieved 95% retention rate in their sales team using predictive analytics and cultural fit assessments.",
      keywords: ["sales hiring", "retention rate", "predictive analytics", "cultural fit"]
    }
  }
];

export const caseStudyCategories = [
  "All",
  "Engineering",
  "Startup",
  "Diversity & Inclusion",
  "Remote Hiring",
  "Interview Process",
  "Sales"
];

export const getFeaturedCaseStudies = () => caseStudies.filter(caseStudy => caseStudy.featured);
export const getCaseStudiesByCategory = (category: string) => 
  category === "All" ? caseStudies : caseStudies.filter(caseStudy => caseStudy.category === category);
export const getCaseStudyBySlug = (slug: string) => caseStudies.find(caseStudy => caseStudy.slug === slug);
export const getRelatedCaseStudies = (currentCaseStudy: CaseStudy, limit: number = 3) => 
  caseStudies
    .filter(caseStudy => caseStudy.id !== currentCaseStudy.id && caseStudy.category === currentCaseStudy.category)
    .slice(0, limit);