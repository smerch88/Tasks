import { withLayout } from '@/page-components/layout/Layout';
import { NextPage } from 'next';
import Head from 'next/head';

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <section>
        <div className="container">
          <h2>Сторінка, яку ви шукали - ще не створена</h2>
          <a href="/">На головну</a>
        </div>
      </section>
    </>
  );
};

export default withLayout(Custom404);
