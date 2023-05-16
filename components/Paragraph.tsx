import clsx from 'clsx';
import { FC, ReactNode } from 'react';

export type ParagraphProps = {
  variant?: 'dark' | 'light';
  size?: 'big' | 'small' | 'extrasmall';
  className?: string;
  children: ReactNode;
};

export const Paragraph: FC<ParagraphProps> = ({
  variant = 'dark',
  size = 'big',
  children,
  className,
}) => {
  return (
    <p
      className={clsx(
        'font-light',
        variant === 'dark' ? 'ext-dark' : '',
        variant === 'light' ? 'text-white_light' : '',
        size === 'big' ? 'text-base md:text-xl' : '',
        size === 'small' ? 'text-sm md:text-base' : '',
        size === 'extrasmall' ? 'text-xs' : '',
        className,
      )}
    >
      {children}
    </p>
  );
};
