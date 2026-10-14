import { PropsWithChildren, Suspense } from 'react';
import { Loader } from '../../atoms/Loader/Loader';

export const SuspenseLoader = ({ children }: PropsWithChildren) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);
