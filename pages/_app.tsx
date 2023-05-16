import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

import '@/styles/globals.css';
import 'swiper/css';

const queryClient = new QueryClient();

const App = ({ Component, pageProps = {} }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default App;
