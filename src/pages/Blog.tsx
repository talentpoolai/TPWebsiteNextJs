import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Search } from 'lucide-react';
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
  const hasMorePosts = currentPage < totalPages;

  // Reset to first page when search or category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const loadMorePosts = () => {
    setCurrentPage(prev => prev + 1);
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
              {/* Results count */}
              <div className="text-center mb-8">
                <p className="text-gray-600">
                  Showing {Math.min(currentPage * postsPerPage, totalPosts)} of {totalPosts} articles
                  {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                  {searchTerm && ` matching "${searchTerm}"`}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {currentPosts.map((post) => (
                <article key={post.slug} className="group">
                  <Link to={`/blog/${post.slug}`} className="block">
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
                        <p className="text-gray-600 line-clamp-3 h-18 leading-6">{post.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
              </div>
              
              {/* Load More Button */}
              {hasMorePosts && (
                <div className="text-center">
                  <button
                    onClick={loadMorePosts}
                    className="bg-talentpool-dark text-white px-8 py-4 rounded-xl font-semibold hover:bg-talentpool-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Load More Articles
                  </button>
                  <p className="text-gray-500 text-sm mt-4">
                    {totalPosts - (currentPage * postsPerPage)} more articles available
                  </p>
                </div>
              )}
              
              {/* End message when all posts are loaded */}
              {!hasMorePosts && totalPosts > postsPerPage && (
                <div className="text-center">
                  <div className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-600 rounded-xl">
                    <span>You've reached the end of our articles</span>
                  </div>
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
