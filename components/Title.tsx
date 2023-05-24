import clsx from 'clsx';
import { DetailedHTMLProps, ReactNode, FC } from 'react';

type TitleProps = DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  tag?: 'h1' | 'h2' | 'h3';
  variant?: 'dark' | 'light';
  children: ReactNode;
};

export const Title: FC<TitleProps> = ({
  tag,
  variant = 'dark',
  children,
  className,
}) => {
  const Tag = tag ?? 'h2';

  return (
    <Tag
      className={clsx(
        className,
        variant == 'dark' ? 'text-dark' : 'text-white_light',
        tag == 'h1'
          ? 'text-[32px] font-bold leading-[1.12] md:text-5xl md:leading-[1.3] xl:text-[64px] xl:leading-[1.3]'
          : '',
        tag == 'h2'
          ? 'text-2xl font-semibold	md:text-[32px] md:leading-[1.25] xl:text-4xl'
          : '',
        tag == 'h3' ? 'text-sm font-semibold md:text-sm xl:text-sm' : '',
      )}
    >
      {children}
    </Tag>
  );
};
