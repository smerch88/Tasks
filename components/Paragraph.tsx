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
  ...props
}) => {
  return (
    <p
      className={clsx(
        'font-light',
        {
          'text-dark': variant === 'dark',
          'text-white_light': variant === 'light',
          'text-base md:text-xl': size === 'big',
          'text-sm md:text-base': size === 'small',
          'text-xs': size === 'extrasmall',
        },
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};
