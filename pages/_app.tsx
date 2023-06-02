import { CartProvider } from '@/components/CartProvider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps = {} }: AppProps) => {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
};

export default App;
