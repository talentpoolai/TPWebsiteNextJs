import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Homepage from '../src/pages/Homepage';
import { getFeaturedPosts, BlogPost } from '../lib/blog';

interface HomePageProps {
  featuredPosts: BlogPost[];
}

const Home: React.FC<HomePageProps> = ({ featuredPosts }) => {
  return (
    <>
      <Head>
        <title>Talentpool - The Only Recruitment Software for Tech Companies</title>
        <meta name="description" content="Built-in AI to stay ahead of evolving skill needs, demand spikes, and the pressure to hire fast in a candidate-driven market." />
        <meta name="keywords" content="recruitment software, tech hiring, AI recruiting, talent acquisition, applicant tracking system" />
        <meta property="og:title" content="Talentpool - The Only Recruitment Software for Tech Companies" />
        <meta property="og:description" content="Built-in AI to stay ahead of evolving skill needs, demand spikes, and the pressure to hire fast in a candidate-driven market." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://talentpool.com" />
        <link rel="canonical" href="https://talentpool.com" />
      </Head>

      <Homepage featuredPosts={featuredPosts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const featuredPosts = getFeaturedPosts().slice(0, 3); // Get first 3 featured posts

  return {
    props: {
      featuredPosts,
    },
    revalidate: 3600, // Revalidate every hour
  };
};

export default Home;