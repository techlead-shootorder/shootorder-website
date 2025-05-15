// src/components/Login/LoginFormWrapper.jsx
'use client';

import dynamic from 'next/dynamic';

const LoginForm = dynamic(() => import('./LoginForm'), {
  ssr: false,
});

export default function LoginFormWrapper() {
  return <LoginForm />;
}
