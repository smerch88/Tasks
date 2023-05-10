import { FC } from 'react';
import cn from 'classnames';

import { SectionProps } from './Section.props';

export const Section: FC<SectionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section className={cn('py-10 xl:py-16', className)} {...props}>
      {children}
    </section>
  );
};
