import React from 'react';
import { useRouter } from 'next/router';
import { AppLayout } from './AppLayout';

export const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return router.pathname === '/app' ? (
    <AppLayout>{children}</AppLayout>
  ) : (
    <main>{children}</main>
  );
};
