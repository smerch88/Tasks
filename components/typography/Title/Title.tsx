import clsx from 'clsx';
import { TitleProps } from './Title.props';

export const Title = ({
  tag,
  variant = 'dark',
  children,
  className,
}: TitleProps): JSX.Element => {
  const Tag = tag ?? 'h2';

  return (
    <Tag
      className={clsx(
        className,
        variant == 'dark' ? 'text-dark' : 'text-white_light',
        {
          ['text-[32px] font-bold leading-[1.12] md:text-5xl md:leading-[1.3] xl:text-[64px] xl:leading-[1.3]']:
            tag == 'h1',
          ['text-2xl font-semibold	md:text-[32px] md:leading-[1.25] xl:text-4xl']:
            tag == 'h2',
          ['text-xl font-semibold md:text-2xl xl:text-2xl']: tag == 'h3',
        },
      )}
    >
      {children}
    </Tag>
  );
};
