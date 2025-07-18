export interface Whitepaper {
  id: string;
  title: string;
  slug: string;
  description: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  category: string;
  tags: string[];
  featuredImage: string;
  downloadUrl: string;
  pages: number;
  fileSize: string;
  featured: boolean;
  downloadCount: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export const whitepapers: Whitepaper[] = [
  {
    id: "1",
    title: "The Complete Guide to Remote Hiring: Best Practices for Building Distributed Teams",
    slug: "complete-guide-remote-hiring-distributed-teams",
    description: "A comprehensive guide covering everything you need to know about hiring remote talent, from sourcing to onboarding.",
    excerpt: "Master the art of remote hiring with proven strategies, tools, and frameworks for building successful distributed teams in the modern workplace.",
    author: {
      name: "Manjusha Madabushi",
      role: "CTO & Co-Founder",
      avatar: "https://www.thetalentpool.ai/wp-content/uploads/2024/10/Manjusha-Madabushiimage.webp"
    },
    publishedAt: "2024-01-20",
    category: "Remote Work",
    tags: ["Remote Hiring", "Distributed Teams", "Virtual Interviews", "Remote Onboarding"],
    featuredImage: "https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1",
    downloadUrl: "#",
    pages: 32,
    fileSize: "2.4 MB",
    featured: true,
    downloadCount: "3.2K",
    seo: {
      metaTitle: "Complete Guide to Remote Hiring | Free Whitepaper | Talentpool",
      metaDescription: "Download our comprehensive guide to remote hiring. Learn best practices for building distributed teams and hiring remote talent effectively.",
      keywords: ["remote hiring", "distributed teams", "virtual interviews", "remote work"]
    }
  },
  {
    id: "2",
    title: "AI in Recruitment: Transforming Talent Acquisition for the Digital Age",
    slug: "ai-recruitment-transforming-talent-acquisition",
    description: "Explore how artificial intelligence is revolutionizing recruitment processes and what it means for the future of hiring.",
    excerpt: "Discover how AI is reshaping recruitment with intelligent matching, automated screening, and predictive analytics for better hiring outcomes.",
    author: {
      name: "Nitin Shimpi",
      role: "CEO & Co-Founder",
      avatar: "https://www.thetalentpool.ai/wp-content/uploads/2024/10/Nitin-Shimpi-image.webp"
    },
    publishedAt: "2024-01-15",
    category: "AI & Technology",
    tags: ["Artificial Intelligence", "Machine Learning", "Recruitment Technology", "Automation"],
    featuredImage: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1",
    downloadUrl: "#",
    pages: 28,
    fileSize: "3.1 MB",
    featured: true,
    downloadCount: "4.7K",
    seo: {
      metaTitle: "AI in Recruitment Whitepaper | Free Download | Talentpool",
      metaDescription: "Learn how AI is transforming recruitment. Download our comprehensive whitepaper on artificial intelligence in talent acquisition.",
      keywords: ["AI recruitment", "artificial intelligence hiring", "recruitment technology", "automated screening"]
    }
  },
  {
    id: "3",
    title: "Building Diverse and Inclusive Hiring Practices: A Strategic Framework",
    slug: "building-diverse-inclusive-hiring-practices-framework",
    description: "A strategic approach to creating hiring processes that promote diversity, equity, and inclusion while building stronger teams.",
    excerpt: "Learn how to eliminate bias, expand your talent pipeline, and create inclusive hiring practices that drive innovation and business success.",
    author: {
      name: "Poushali Ganguly",
      role: "Head of Product",
      avatar: "https://www.thetalentpool.ai/wp-content/uploads/2024/10/Poushali-Gangulyimage.webp"
    },
    publishedAt: "2024-01-10",
    category: "Diversity & Inclusion",
    tags: ["Diversity", "Inclusion", "Bias Reduction", "Inclusive Hiring"],
    featuredImage: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1",
    downloadUrl: "#",
    pages: 24,
    fileSize: "1.8 MB",
    featured: false,
    downloadCount: "2.1K",
    seo: {
      metaTitle: "Diverse & Inclusive Hiring Practices Whitepaper | Talentpool",
      metaDescription: "Build diverse teams with our strategic framework for inclusive hiring. Download free whitepaper on diversity in recruitment.",
      keywords: ["diverse hiring", "inclusive recruitment", "bias reduction", "diversity framework"]
    }
  },
  {
    id: "4",
    title: "The State of Tech Hiring 2024: Trends, Challenges, and Opportunities",
    slug: "state-tech-hiring-2024-trends-challenges-opportunities",
    description: "An in-depth analysis of the current tech hiring landscape, emerging trends, and strategic insights for talent acquisition leaders.",
    excerpt: "Get data-driven insights into the tech hiring market with comprehensive analysis of trends, salary benchmarks, and hiring challenges.",
    author: {
      name: "Nitin Shimpi",
      role: "CEO & Co-Founder",
      avatar: "https://www.thetalentpool.ai/wp-content/uploads/2024/10/Nitin-Shimpi-image.webp"
    },
    publishedAt: "2024-01-05",
    category: "Industry Reports",
    tags: ["Tech Hiring", "Market Trends", "Salary Benchmarks", "Industry Analysis"],
    featuredImage: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1",
    downloadUrl: "#",
    pages: 45,
    fileSize: "4.2 MB",
    featured: true,
    downloadCount: "6.8K",
    seo: {
      metaTitle: "State of Tech Hiring 2024 Report | Free Download | Talentpool",
      metaDescription: "Download our comprehensive 2024 tech hiring report. Get insights on trends, challenges, and opportunities in tech recruitment.",
      keywords: ["tech hiring 2024", "hiring trends", "tech recruitment report", "salary benchmarks"]
    }
  },
  {
    id: "5",
    title: "Scaling Your Startup's Hiring Process: From 10 to 100 Employees",
    slug: "scaling-startup-hiring-process-10-to-100-employees",
    description: "Essential strategies for startups to build scalable hiring processes that maintain quality and culture during rapid growth.",
    excerpt: "Navigate the challenges of scaling your hiring process with proven frameworks for maintaining quality while growing your team rapidly.",
    author: {
      name: "Poushali Ganguly",
      role: "Head of Product",
      avatar: "https://www.thetalentpool.ai/wp-content/uploads/2024/10/Poushali-Gangulyimage.webp"
    },
    publishedAt: "2023-12-28",
    category: "Startup Hiring",
    tags: ["Startup", "Scaling", "Hiring Process", "Growth"],
    featuredImage: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1",
    downloadUrl: "#",
    pages: 20,
    fileSize: "1.5 MB",
    featured: false,
    downloadCount: "1.9K",
    seo: {
      metaTitle: "Scaling Startup Hiring Process Whitepaper | Talentpool",
      metaDescription: "Learn how to scale your startup's hiring process effectively. Download our guide for growing from 10 to 100 employees.",
      keywords: ["startup hiring", "scaling hiring", "startup recruitment", "hiring growth"]
    }
  },
  {
    id: "6",
    title: "Technical Interview Mastery: A Complete Guide for Engineering Teams",
    slug: "technical-interview-mastery-guide-engineering-teams",
    description: "Master the art of technical interviews with comprehensive strategies for evaluating engineering candidates effectively.",
    excerpt: "Transform your technical interview process with proven methodologies, assessment frameworks, and best practices for hiring top engineering talent.",
    author: {
      name: "Manjusha Madabushi",
      role: "CTO & Co-Founder",
      avatar: "https://www.thetalentpool.ai/wp-content/uploads/2024/10/Manjusha-Madabushiimage.webp"
    },
    publishedAt: "2023-12-20",
    category: "Interview Process",
    tags: ["Technical Interviews", "Engineering Hiring", "Interview Techniques", "Assessment"],
    featuredImage: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1",
    downloadUrl: "#",
    pages: 36,
    fileSize: "2.7 MB",
    featured: false,
    downloadCount: "2.8K",
    seo: {
      metaTitle: "Technical Interview Mastery Guide | Free Whitepaper | Talentpool",
      metaDescription: "Master technical interviews with our comprehensive guide. Download free whitepaper on engineering interview best practices.",
      keywords: ["technical interviews", "engineering interviews", "coding interviews", "technical assessment"]
    }
  }
];

export const whitepaperCategories = [
  "All",
  "Remote Work",
  "AI & Technology",
  "Diversity & Inclusion",
  "Industry Reports",
  "Startup Hiring",
  "Interview Process"
];

export const getFeaturedWhitepapers = () => whitepapers.filter(whitepaper => whitepaper.featured);
export const getWhitepapersByCategory = (category: string) => 
  category === "All" ? whitepapers : whitepapers.filter(whitepaper => whitepaper.category === category);
export const getWhitepaperBySlug = (slug: string) => whitepapers.find(whitepaper => whitepaper.slug === slug);
export const getRelatedWhitepapers = (currentWhitepaper: Whitepaper, limit: number = 3) => 
  whitepapers
    .filter(whitepaper => whitepaper.id !== currentWhitepaper.id && whitepaper.category === currentWhitepaper.category)
    .slice(0, limit);