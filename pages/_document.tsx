import Document, { Html, Head, Main, NextScript } from 'next/document';
import metatext from '@/data/metatext.json';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="uk">
        <Head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600&family=Manrope:wght@600&family=Poiret+One&display=swap"
            rel="stylesheet"
          />
          <meta name="twitter:description" content={metatext.description} />
          <meta name="twitter:title" content={metatext.title} />
          <meta name="twitter:card" content="summary" />

          <meta property="og:type" content="website" />
          <meta property="og:description" content={metatext.description} />
          <meta property="og:title" content={metatext.title} />
          <meta name="description" content={metatext.description} />
          <meta name="generator" content="React 18.2.0" />

          <link
            rel="canonical"
            href="https://github.com/smerch88/User-List-Test-Task"
          />
          <link
            rel="alternate"
            href="https://github.com/smerch88/User-List-Test-Task"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
