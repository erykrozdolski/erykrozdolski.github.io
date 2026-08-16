import { PropsWithChildren } from 'react';

export const Container = ({ children, className }: PropsWithChildren<{ className?: string }>) => (
  <div className={`lg:m-auto w-full lg:w-[1024px] px-4 lg:p-0 m-0 ${className ?? ''}`}>
    {children}
  </div>
);
