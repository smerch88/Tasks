import { withLayout } from '@/layout/Layout';
import { AllUsers } from '@/page-components/AllUsers/AllUsers';
import { Pagination } from '@/page-components/Pagination/Pagination';
import SearchWidget from '@/page-components/SearchWidget/SearchWidget';
import { Props, UserData } from '@/types';
import { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const perPage = 10;

const Users: NextPage<Props> = ({ data }: { data: UserData | null }) => {
  const router = useRouter();
  const users = data?.users ?? [];
  const total = data?.total;
  const initialPage = data?.skip;

  const [page, setPage] = useState((initialPage ?? 0) / perPage);
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(Math.ceil((total ?? 0) / perPage));

  useEffect(() => {
    router.push(`/users?page=${page + 1}`);
  }, [page]);

  if (data === null) {
    return <div>Error: Failed to fetch users data</div>;
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { query } = context;
    const page = parseInt(query.page as string, 10) || 1;
    const res = await fetch(
      `https://dummyjson.com/users?limit=${perPage}&skip=${
        (page - 1) * perPage
      }`,
    );
    console.log(
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
      props: { data: null },
    };
  }
}
