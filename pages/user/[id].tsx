import { withLayout } from '@/layout/Layout';
import { UserDetails } from '@/page-components/UserDetails/UserDetails';
import { UserProps } from '@/types';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

const UserPage: NextPage<UserProps> = ({ user }: UserProps) => {
  if (!user) {
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
          {firstName} {lastName}
        </title>
      </Head>
      <UserDetails user={user} />
    </>
  );
};

export default withLayout(UserPage);

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const { id } = query;
    const res = await fetch(`https://dummyjson.com/users/${id}`);

    if (!res.ok) {
      throw new Error('Failed to fetch user data');
    }

    const user = await res.json();

    return {
      props: { user },
    };
  } catch (error) {
    console.error('Error fetching user data:', error);

    return {
      props: { user: null }, // You can handle the error state here, e.g., setting user to null
    };
  }
};
