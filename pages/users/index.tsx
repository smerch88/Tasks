import { withLayout } from '@/page-components/layout/Layout';
import { AllUsers } from '@/page-components/AllUsers';
import { Pagination } from '@/page-components/Pagination';
import SearchWidget from '@/page-components/SearchWidget';
import { UserData } from '@/types';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

type UsersPageProps = {
  data: UserData | undefined;
};

const perPage = 10;

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  try {
    const { query } = context;
    const page = parseInt(query.page as string, 10) || 1;
    const res = await fetch(
      `https://dummyjson.com/users?limit=${perPage}&skip=${
        (page - 1) * perPage
      }`,
    );
    if (!res.ok) {
      throw new Error('Failed to fetch user data');
    }
    const data = await res.json();
    return {
      props: { data },
    };
  } catch (error) {
    console.error('Error fetching user data:', error);
    return {
      props: { data: undefined },
    };
  }
};

const Users: FC<UsersPageProps> = ({ data }) => {
  const router = useRouter();
  const users = data?.users ?? [];
  const total = data?.total;
  const initialPage = data?.skip;

  const [page, setPage] = useState((initialPage ?? 0) / perPage);
  const [startPage] = useState(1);
  const [endPage] = useState(Math.ceil((total ?? 0) / perPage));

  useEffect(() => {
    router.push(`/users?page=${page + 1}`);
  }, [page]);

  if (data == undefined) {
    return <div>Error: Failed to fetch users data</div>;
  }

  if (data.users.length === 0) {
    return (
      <div>
        <p>Error: No users at this page</p>
        <Link href={'/users'}>Go to Users Page</Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Users List</title>
      </Head>
      <SearchWidget />
      <AllUsers users={users} />
      <Pagination
        setPage={setPage}
        startPage={startPage}
        endPage={endPage}
        page={page}
      />
    </>
  );
};

export default withLayout(Users);
