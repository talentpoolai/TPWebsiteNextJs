import React from 'react';
import Head from 'next/head';
import Features from '../src/pages/Features';

const FeaturesPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Features - Powerful Tools for Modern Recruiting | Talentpool</title>
        <meta name="description" content="Discover comprehensive recruitment features including AI-powered matching, collaborative hiring, pipeline management, and workflow automation." />
        <meta name="keywords" content="recruitment features, AI matching, collaborative hiring, pipeline management, workflow automation" />
        <meta property="og:title" content="Features - Powerful Tools for Modern Recruiting | Talentpool" />
        <meta property="og:description" content="Discover comprehensive recruitment features including AI-powered matching, collaborative hiring, and workflow automation." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://talentpool.com/features" />
      </Head>

      <Features />
    </>
  );
};

export default FeaturesPage;