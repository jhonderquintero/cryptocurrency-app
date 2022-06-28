import React from 'react';
import { Sidebar } from '../organisms/Sidebar/Sidebar';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className='w-full'>
        <header>Header</header>
        <main>{children}</main>
      </div>
    </div>
  );
};
