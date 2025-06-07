'use client';

import dynamic from 'next/dynamic';

const ClutchWidgetClient = dynamic(
  () => import('./ClutchWidgetClient'),
  { ssr: false }
);

export default function ClutchTestWidget() {
  return <ClutchWidgetClient />;
}
