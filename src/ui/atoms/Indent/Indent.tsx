import { PropsWithChildren } from 'react';

export const Indent = ({ children }: PropsWithChildren) => {
  return <span className="ml-4">{children}</span>;
};
