import { AllProducts } from '@/components/AllProducts';
import { Cart } from '@/components/Cart';
import { Header } from '@/components/Header';
import { ShopItem } from '@/types';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

export const getStaticProps: GetStaticProps<{
  data: ShopItem[];
}> = async () => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products`);
    if (!res.ok) {
      throw new Error('Failed to fetch shop data');
    }
    const data = await res.json();
    return {
      props: { data },
    };
  } catch (err) {
    return {
      props: { data: null },
    };
  }
};

const WebShop = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>WebShop</title>
      </Head>
      <Header />
      <Cart />
      <AllProducts data={data} />
    </>
  );
};

export default WebShop;
