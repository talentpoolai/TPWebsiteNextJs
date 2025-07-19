import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Bookmark } from 'lucide-react';
import { getAllPosts, getPostBySlug, getRelatedPosts, BlogPost } from '../../lib/blog';

interface BlogPostPageProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, relatedPosts }) => {
  if (!post) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            href="/blog" 
            className="bg-talentpool-dark text-white px-6 py-3 rounded-lg font-semibold hover:bg-talentpool-medium transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.seo.metaTitle || post.title} | Talentpool Blog</title>
        <meta name="description" content={post.seo.metaDescription || post.excerpt} />
        <meta name="keywords" content={post.seo.keywords?.join(', ') || post.tags.join(', ')} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:author" content={post.author.name} />
        <meta property="article:section" content={post.category} />
        {post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
      </Head>

      <main>
          {/* Breadcrumb */}
          <div className="bg-gray-50 py-4 pt-28 md:pt-36">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex items-center space-x-2 text-sm">
                <Link href="/" className="text-gray-500 hover:text-talentpool-dark">Home</Link>
                <span className="text-gray-400">/</span>
                <Link href="/blog" className="text-gray-500 hover:text-talentpool-dark">Blog</Link>
                <span className="text-gray-400">/</span>
                <span className="text-gray-900">{post.title}</span>
              </nav>
            </div>
          </div>

          {/* Article */}
          <article className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <header className="mb-12">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="inline-block px-4 py-2 bg-talentpool-light text-talentpool-dark text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {post.title}
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between border-t border-b border-gray-200 py-6">
                  <div className="flex items-center">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="text-lg font-semibold text-gray-900">{post.author.name}</p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center text-gray-500">
                      <Calendar className="w-5 h-5 mr-2" />
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className="p-2 text-gray-500 hover:text-talentpool-dark transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-talentpool-dark transition-colors">
                        <Bookmark className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </header>

              {/* Featured Image */}
              <div className="mb-12">
                <img 
                  src={post.featuredImage} 
                  alt={post.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{
                  lineHeight: '1.8',
                  fontSize: '18px'
                }}
              />

              {/* Tags */}
              <div className="border-t border-gray-200 pt-8 mb-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-talentpool-light hover:text-talentpool-dark transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="bg-gray-50 rounded-2xl p-8 mb-12">
                <div className="flex items-start space-x-6">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-20 h-20 rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{post.author.name}</h3>
                    <p className="text-talentpool-dark font-medium mb-3">{post.author.role}</p>
                    <p className="text-gray-600">
                      {post.author.name} is a key member of the Talentpool team, bringing extensive experience in 
                      talent acquisition and recruitment technology to help companies build better hiring processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Related Articles
                  </h2>
                  <p className="text-xl text-gray-600">
                    More insights on {post.category.toLowerCase()}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <article key={relatedPost.slug} className="group">
                      <Link href={`/blog/${relatedPost.slug}`} className="block">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                          <div className="aspect-w-16 aspect-h-9">
                            <img 
                              src={relatedPost.featuredImage} 
                              alt={relatedPost.title}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                          <div className="p-6">
                            <div className="flex items-center space-x-4 mb-4">
                              <span className="inline-block px-3 py-1 bg-talentpool-light text-talentpool-dark text-sm font-medium rounded-full">
                                {relatedPost.category}
                              </span>
                              <div className="flex items-center text-gray-500 text-sm">
                                <Clock className="w-4 h-4 mr-1" />
                                {relatedPost.readTime}
                              </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-talentpool-dark transition-colors">
                              {relatedPost.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{relatedPost.excerpt}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <img 
                                  src={relatedPost.author.avatar} 
                                  alt={relatedPost.author.name}
                                  className="w-8 h-8 rounded-full mr-2"
                                />
                                <p className="text-sm font-medium text-gray-900">{relatedPost.author.name}</p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-talentpool-dark group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Navigation */}
          <div className="bg-white border-t border-gray-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Link 
                href="/blog"
                className="inline-flex items-center text-talentpool-dark hover:text-talentpool-medium transition-colors font-medium"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Blog
              </Link>
            </div>
          </div>
        </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const relatedPosts = getRelatedPosts(slug, post.category, 3);

  return {
    props: {
      post,
      relatedPosts,
    },
    revalidate: 3600, // Revalidate every hour
  };
};

export default BlogPostPage;