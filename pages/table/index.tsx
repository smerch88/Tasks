import { Header } from '@/components/Header';
import { Paragraph } from '@/components/Paragraph';
import { Section } from '@/components/Section';
import { UsersTable } from '@/components/UsersTable';
import { User } from '@/types';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

type TableProps = {
  users: User[];
  total: number;
  skip: number;
  limit: number;
};

export const getStaticProps: GetStaticProps<{
  data: TableProps;
}> = async () => {
  try {
    const res = await fetch(`https://dummyjson.com/users?limit=100`);
    if (!res.ok) {
      throw new Error('Failed to fetch user data');
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

const Table = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <Paragraph>Error: Failed to fetch user data.</Paragraph>;
  }
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Table of Users</title>
      </Head>
      <Header />
      <Section>
        <div className="container">
          {data?.users && <UsersTable users={data.users} />}
        </div>
      </Section>
    </>
  );
};

export default Table;
