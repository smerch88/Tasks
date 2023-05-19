import { AllUsers } from '@/components/AllUsers';
import { Pagination } from '@/components/Pagination';
import { SearchWidget } from '@/components/SearchWidget';
import { Header } from '@/components/Header';
import { UserData } from '@/types';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

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
    const skip = page === 1 ? 0 : (page - 1) * perPage;
    const res = await fetch(
      `https://dummyjson.com/users?limit=${perPage}&skip=${skip}`,
    );
    if (!res.ok) {
      throw new Error('Failed to fetch user data');
    }
    const data = await res.json();
    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: { data: null },
    };
  }
};

const Users: FC<UsersPageProps> = ({ data }) => {
  const router = useRouter();
  const users = data?.users ?? [];
  const total = data?.total;
  const initialPage = data?.skip;

  const [page, setPage] = useState((initialPage ?? 0) / perPage + 1);
  const [endPage] = useState(Math.ceil((total ?? 0) / perPage));
  const startPage = 1;

  useEffect(() => {
    router.push(`/users?page=${page}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <Header />
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

export default Users;
