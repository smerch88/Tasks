import { ReactNode } from 'react';

export interface ParagraphProps {
  variant?: 'dark' | 'light';
  size?: 'big' | 'small' | 'extrasmall';
  className?: string;
  children: ReactNode;
}
