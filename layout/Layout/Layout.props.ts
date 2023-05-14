import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

export type LayoutProps = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: ReactNode;
};
