// app/pricing/page.jsx
import React from 'react';
import PricingHero from '@/components/Pricing/PricingHero';
import PricingPlans from '@/components/Pricing/PricingPlans';
import PricingFAQ from '@/components/Pricing/PricingFAQ';

export const metadata = {
  title: 'Pricing | ShootOrder - Digital Marketing Services',
  description: 'Transparent pricing for our digital marketing services. Choose the perfect plan for your business needs with no hidden fees.',
};

const PricingPage = () => {
  return (
    <main>
      <PricingHero />
      <PricingPlans />
      {/* <PricingFAQ /> */}
    </main>
  );
};

export default PricingPage;