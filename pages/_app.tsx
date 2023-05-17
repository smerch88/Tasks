import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import 'swiper/css';

const App = ({ Component, pageProps = {} }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
