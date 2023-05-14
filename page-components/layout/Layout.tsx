import {
  ComponentType,
  DetailedHTMLProps,
  FC,
  HtmlHTMLAttributes,
  ReactNode,
} from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export type LayoutProps = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({
  children,
  ...props
}: LayoutProps) => {
  return (
    <div className="flex h-full min-h-screen flex-col" {...props}>
      <Header />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
};

export const withLayout = (Component: ComponentType<any>) => {
  return function withLayoutComponent(props: any) {
    return (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    );
  };
};
