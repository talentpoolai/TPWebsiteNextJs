import React from 'react';
import Head from 'next/head';
import About from '../src/pages/About';

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us - Building the Future of Recruitment | Talentpool</title>
        <meta name="description" content="Learn about Talentpool's mission to help companies find the best talent while creating meaningful connections between candidates and opportunities." />
        <meta name="keywords" content="about talentpool, recruitment company, hiring technology, talent acquisition team" />
        <meta property="og:title" content="About Us - Building the Future of Recruitment | Talentpool" />
        <meta property="og:description" content="Learn about Talentpool's mission to help companies find the best talent while creating meaningful connections." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://talentpool.com/about" />
      </Head>

      <About />
    </>
  );
};

export default AboutPage;