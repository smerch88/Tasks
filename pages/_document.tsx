import metatext from '@/data/metatext.json';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="uk">
        <Head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600&family=Manrope:wght@600&family=Poiret+One&display=swap"
            rel="stylesheet"
          />
          <link rel="canonical" href="https://github.com/smerch88/tasks" />
          <link rel="alternate" href="https://github.com/smerch88/tasks" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
