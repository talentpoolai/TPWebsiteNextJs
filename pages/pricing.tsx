import React from 'react';
import Head from 'next/head';
import Pricing from '../src/pages/Pricing';

const PricingPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pricing - Simple, Transparent Pricing | Talentpool</title>
        <meta name="description" content="Choose the plan that fits your team size and hiring needs. Start with a free trial and scale as you grow. Lite, Pro, and Enterprise plans available." />
        <meta name="keywords" content="recruitment software pricing, ATS pricing, hiring software cost, recruitment plans" />
        <meta property="og:title" content="Pricing - Simple, Transparent Pricing | Talentpool" />
        <meta property="og:description" content="Choose the plan that fits your team size and hiring needs. Start with a free trial and scale as you grow." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://talentpool.com/pricing" />
      </Head>

      <Pricing />
    </>
  );
};

export default PricingPage;