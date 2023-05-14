import { ReactNode } from 'react';

export type ParagraphProps = {
  variant?: 'dark' | 'light';
  size?: 'big' | 'small' | 'extrasmall';
  className?: string;
  children: ReactNode;
};
