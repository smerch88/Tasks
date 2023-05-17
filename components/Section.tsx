import clsx from 'clsx';
import { DetailedHTMLProps, FC, HtmlHTMLAttributes, ReactNode } from 'react';

type SectionProps = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: ReactNode;
};

export const Section: FC<SectionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section className={clsx('py-10 xl:py-16', className)} {...props}>
      {children}
    </section>
  );
};
