import { DetailedHTMLProps, ReactNode } from 'react';

export type TitleProps = DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  tag?: 'h1' | 'h2' | 'h3';
  variant?: 'dark' | 'light';
  children: ReactNode;
};
