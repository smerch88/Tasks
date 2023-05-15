import { Header } from '@/components/Header';
import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Arsenii Maksymenko Test Task</title>
      </Head>
      <Header />
    </>
  );
};

export default Home;
