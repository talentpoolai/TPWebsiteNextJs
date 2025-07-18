import React from 'react';
import Head from 'next/head';
import StartFree from '../src/pages/StartFree';

const StartFreePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Start Free Trial - Join Thousands of Companies | Talentpool</title>
        <meta name="description" content="Start your free 60-day trial of Talentpool. No credit card required. Setup in 5 minutes with enterprise security and full feature access." />
        <meta name="keywords" content="free trial, recruitment software trial, ATS free trial, hiring software demo" />
        <meta property="og:title" content="Start Free Trial - Join Thousands of Companies | Talentpool" />
        <meta property="og:description" content="Start your free 60-day trial of Talentpool. No credit card required. Setup in 5 minutes." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://talentpool.com/start-free" />
      </Head>

      <StartFree />
    </>
  );
};

export default StartFreePage;