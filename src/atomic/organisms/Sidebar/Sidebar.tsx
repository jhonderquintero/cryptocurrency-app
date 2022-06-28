import React from 'react';
import { Button } from '../../atoms/Button/Button';

export const Sidebar = () => {
  return (
    <aside className="w-20 h-screen" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 h-full bg-secondary-surface dark:bg-secondary-surface-dark flex flex-col justify-between">
        <div>HeadIcon</div>
        <ul>
          <li>
            <Button>Icon1</Button>
          </li>
          <li>
            <Button>Icon2</Button>
          </li>
          <li>
            <Button>Icon3</Button>
          </li>
          <li>
            <Button>Icon4</Button>
          </li>
        </ul>
        <div>FootIcon</div>
      </div>
    </aside>
  );
};
