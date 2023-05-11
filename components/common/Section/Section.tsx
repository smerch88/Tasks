import { FC } from 'react';
import clsx from 'clsx';

import { SectionProps } from './Section.props';

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
