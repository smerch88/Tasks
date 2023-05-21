import { useSort } from '@/hooks/useSort';
import { User } from '@/types';
import { FC, useEffect, useState } from 'react';
import { Paragraph } from './Paragraph';
import { Title } from './Title';
import { useRouter } from 'next/router';
import Arrows from '@/public/images/userstable/tab.svg';

type UsersTableProps = {
  users: User[];
};

export const UsersTable: FC<UsersTableProps> = ({ users }) => {
  const router = useRouter();
  const [sortedUsers, setSortedUsers] = useState<User[]>(users);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortColumn, setSortColumn] = useState<
    'age' | 'weight' | 'height' | false
  >(false);

  useEffect(() => {
    if (
      router.query.sortBy &&
      (router.query.sortBy === 'age' ||
        router.query.sortBy === 'weight' ||
        router.query.sortBy === 'height')
    ) {
      setSortColumn(router.query.sortBy as 'age' | 'weight' | 'height');
    }

    if (
      router.query.sortOrder &&
      (router.query.sortOrder === 'asc' || router.query.sortOrder === 'desc')
    ) {
      setSortOrder(router.query.sortOrder as 'asc' | 'desc');
    }
  }, [router.query.sortBy, router.query.sortOrder]);

  useEffect(() => {
    if (sortColumn) {
      router.push(`/table?sortBy=${sortColumn}&sortOrder=${sortOrder}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortColumn, sortOrder]);

  const sortUsers = (column: 'age' | 'weight' | 'height') => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const sorted = useSort({ users, order: sortOrder, column: sortColumn });

  useEffect(() => {
    setSortedUsers(sorted);
  }, [sorted]);

  return (
    <>
      <Title tag="h2" className="mb-8 text-center">
        Users Table
      </Title>
      <table className="w-full border-2 border-solid border-dark">
        <caption>Sortable table of all users</caption>
        <thead>
          <tr className="cursor-pointer border-2 border-solid border-dark">
            <th className="!cursor-auto">
              <Paragraph size="big">Name</Paragraph>
            </th>
            <th
              onClick={() => sortUsers('age')}
              className="fill-current duration-300 hover:text-hover"
            >
              <Paragraph size="big" className="mr-4 inline">
                Age
              </Paragraph>
              <Arrows className="inline h-4 w-4 rotate-90" />
            </th>
            <th
              onClick={() => sortUsers('weight')}
              className="fill-current duration-300 hover:text-hover"
            >
              <Paragraph size="big" className="mr-4 inline">
                Weight
              </Paragraph>
              <Arrows className="inline h-4 w-4 rotate-90" />
            </th>
            <th
              onClick={() => sortUsers('height')}
              className="fill-current duration-300 hover:text-hover"
            >
              <Paragraph size="big" className="mr-4 inline">
                Height
              </Paragraph>
              <Arrows className="inline h-4 w-4 rotate-90" />
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers?.map((user) => (
            <tr key={user.id}>
              <td className="border-2 border-solid border-dark">
                <Paragraph size="small">
                  {user.firstName} {user.lastName}
                </Paragraph>
              </td>
              <td className="border-2 border-solid border-dark text-center">
                <Paragraph size="small">{user.age}</Paragraph>
              </td>
              <td className="border-2 border-solid border-dark text-center">
                <Paragraph size="small">{user.weight}</Paragraph>
              </td>
              <td className="border-2 border-solid border-dark text-center">
                <Paragraph size="small">{user.height}</Paragraph>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
