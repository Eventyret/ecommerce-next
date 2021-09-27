import { ReactNode } from 'react';
import { getConfig } from './api/config';
import { ApiProvider as CoreApiProvider } from '@common';

const config = getConfig();

interface ShopifyApiProviderProps {
  children: ReactNode | ReactNode[];
}
export const ApiProvider = ({ children }: ShopifyApiProviderProps) => {
  return <CoreApiProvider config={config}>{children}</CoreApiProvider>;
};
