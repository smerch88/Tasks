import clsx from 'clsx';
import { FC, ReactNode, DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

type ButtonProps = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: 'add' | 'remove';
  children: ReactNode;
};

export const Button: FC<ButtonProps> = ({
  variant = 'add',
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'w-full max-w-[120px] rounded-xl  text-white_light duration-300',
        variant === 'add'
          ? 'bg-dark hover:bg-primary'
          : 'bg-red hover:bg-secondary',
      )}
      {...props}
    >
      {children}
    </button>
  );
};
