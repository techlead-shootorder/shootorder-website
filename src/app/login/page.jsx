// src/app/login/page.jsx
import LoginFormWrapper from '@/components/Login/LoginWrapper';
import { Suspense } from 'react';


export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading login form...</div>}>
      <LoginFormWrapper />
    </Suspense>
  );
}
