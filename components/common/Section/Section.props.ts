import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

export type SectionProps = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: ReactNode;
};
