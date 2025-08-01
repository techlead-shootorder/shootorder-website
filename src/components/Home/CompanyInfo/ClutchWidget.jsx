'use client';

import dynamic from 'next/dynamic';

const ClutchWidgetClient = dynamic(() => import('./ClutchWidgetClient'), {
  ssr: false,
});

export default function ClutchWidget() {
  return (
    <div className="text-center px-4 py-10 bg-gray-50">
      <h2 className="text-3xl font-bold mb-4">Trusted by Growing Businesses</h2>
      <p className="text-lg text-gray-600 mb-8">
        See how we've helped businesses across industries achieve their digital marketing goals and drive measurable results.
      </p>
      <ClutchWidgetClient />
    </div>
  );
}
