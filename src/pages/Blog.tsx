import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import blogIndex from '../data/blogIndex.json';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  featuredImage: string;
  featured: boolean;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [postsPerPage] = useState(9); // Show 9 posts per page (3x3 grid)
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = (blogIndex as BlogPost[]).filter((post) =>
    (selectedCategory === "All" || post.category === selectedCategory) &&
    (
      (post.title || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.excerpt || '').toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const blogCategories = ["All", ...Array.from(new Set((blogIndex as BlogPost[]).map(p => p.category)))];
  
  // Calculate pagination
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Reset to first page when search or category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of blog section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  // Generate page numbers to show
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show smart pagination
      if (currentPage <= 3) {
        // Show first 5 pages
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        // Show last 5 pages
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Show current page and 2 on each side
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
      }
    }
    
    return pages;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-talentpool-light to-white py-20 pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Insights & Resources for
            <br />
            <span className="text-talentpool-dark">Modern Recruiting</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Stay ahead with the latest trends, best practices, and expert insights in talent acquisition
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-8 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-talentpool-dark focus:border-transparent text-lg"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-talentpool-dark text-white'
                    : 'bg-white text-gray-700 hover:bg-talentpool-light border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {totalPosts === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No articles found. Try another search or category.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {currentPosts.map((post) => (
                <article key={post.slug} className="group">
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
                    <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow">
                      {post.featuredImage ? (
                        <img 
                          src={post.featuredImage} 
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                          onError={(e) => {
                            e.currentTarget.src = 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1';
                          }}
                        />
                      ) : (
                        <div className="w-full h-48 bg-gradient-to-br from-talentpool-light to-gray-100 flex items-center justify-center">
                          <div className="text-gray-500 text-center">
                            <div className="text-4xl mb-2">📝</div>
                            <div className="text-sm">Blog Post</div>
                          </div>
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="inline-block px-3 py-1 bg-talentpool-light text-talentpool-dark text-sm font-medium rounded-full">
                            {post.category}
                          </span>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.publishedAt && !isNaN(new Date(post.publishedAt).getTime()) 
                              ? new Date(post.publishedAt).toLocaleDateString()
                              : 'Recent'
                            }
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-talentpool-dark transition-colors line-clamp-2 h-14 leading-7">
                          {post.title || 'Untitled Post'}
                        </h3>
                        <p className="text-gray-600 line-clamp-3 h-18 leading-6">{post.excerpt || 'No description available.'}</p>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
              </div>

              {/* Results count */}
              <div className="text-center mb-8">
                <p className="text-gray-600">
                  Showing {startIndex + 1}-{Math.min(endIndex, totalPosts)} of {totalPosts} articles
                  {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                  {searchTerm && ` matching "${searchTerm}"`}
                </p>
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center space-x-2">
                  {/* Previous Button */}
                  <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                      currentPage === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-gray-700 hover:bg-talentpool-light hover:text-talentpool-dark border border-gray-300'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </button>

                  {/* Page Numbers */}
                  <div className="flex items-center space-x-1">
                    {/* First page if not visible */}
                    {currentPage > 3 && totalPages > 5 && (
                      <>
                        <button
                          onClick={() => goToPage(1)}
                          className="px-3 py-2 rounded-lg font-medium bg-white text-gray-700 hover:bg-talentpool-light hover:text-talentpool-dark border border-gray-300 transition-colors"
                        >
                          1
                        </button>
                        <span className="px-2 text-gray-500">...</span>
                      </>
                    )}

                    {/* Visible page numbers */}
                    {getPageNumbers().map((page) => (
                      <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                          page === currentPage
                            ? 'bg-talentpool-dark text-white'
                            : 'bg-white text-gray-700 hover:bg-talentpool-light hover:text-talentpool-dark border border-gray-300'
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    {/* Last page if not visible */}
                    {currentPage < totalPages - 2 && totalPages > 5 && (
                      <>
                        <span className="px-2 text-gray-500">...</span>
                        <button
                          onClick={() => goToPage(totalPages)}
                          className="px-3 py-2 rounded-lg font-medium bg-white text-gray-700 hover:bg-talentpool-light hover:text-talentpool-dark border border-gray-300 transition-colors"
                        >
                          {totalPages}
                        </button>
                      </>
                    )}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                      currentPage === totalPages
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-gray-700 hover:bg-talentpool-light hover:text-talentpool-dark border border-gray-300'
                    }`}
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;