import { Header } from '@/components/Header';
import { UserDetails } from '@/components/UserDetails';
import { UserProps } from '@/types';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { FC } from 'react';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const { id } = query;
    const res = await fetch(`https://dummyjson.com/users/${id}`);

    if (!res.ok) {
      throw new Error('Failed to fetch user data');
    }

    const user = await res.json();

    return {
      props: { user: user },
    };
  } catch (error) {
    console.error('Error fetching user data:', error);
    return {
      props: { user: null },
    };
  }
};

const UserPage: FC<UserProps> = ({ user }) => {
  if (user == undefined) {
    return <div>Error loading user data.</div>;
  }

  const { firstName, lastName } = user;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>
          {firstName ? `${firstName} ` : ''}
          {lastName}
        </title>
      </Head>
      <Header />
      <UserDetails user={user} />
    </>
  );
};

export default UserPage;
