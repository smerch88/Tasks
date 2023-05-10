import { FC } from 'react';
import cn from 'classnames';
import { ParagraphProps } from './Paragraph.props';

export const Paragraph: FC<ParagraphProps> = ({
  variant = 'dark',
  size = 'big',
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={cn(
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
