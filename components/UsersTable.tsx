import { useSort } from '@/hooks/useSort';
import Arrows from '@/public/images/userstable/tab.svg';
import { User } from '@/types';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { Paragraph } from './Paragraph';
import { Title } from './Title';

type UsersTableProps = {
  users: User[];
};
type SortColumn = 'id' | 'name' | 'age' | 'weight' | 'height';
type SortOrder = 'asc' | 'desc';

const tableHead = ['id', 'name', 'age', 'weight', 'height'];

export const UsersTable: FC<UsersTableProps> = ({ users }) => {
  const router = useRouter();
  const [sortedUsers, setSortedUsers] = useState<User[]>(users);
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [sortColumn, setSortColumn] = useState<SortColumn | false>(false);

  useEffect(() => {
    if (
      router.query.sortBy &&
      (router.query.sortBy === 'age' ||
        router.query.sortBy === 'weight' ||
        router.query.sortBy === 'height' ||
        router.query.sortBy === 'weight' ||
        router.query.sortBy === 'id' ||
        router.query.sortBy === 'name')
    ) {
      setSortColumn(router.query.sortBy as SortColumn);
    }

    if (
      router.query.sortOrder &&
      (router.query.sortOrder === 'asc' || router.query.sortOrder === 'desc')
    ) {
      setSortOrder(router.query.sortOrder as SortOrder);
    }
  }, [router.query.sortBy, router.query.sortOrder]);

  useEffect(() => {
    if (sortColumn) {
      router.push(`/table?sortBy=${sortColumn}&sortOrder=${sortOrder}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortColumn, sortOrder]);

  const sortUsers = (column: 'id' | 'name' | 'age' | 'weight' | 'height') => {
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
            {tableHead.map((item) => (
              <th
                key={item}
                onClick={() => sortUsers(item as SortColumn)}
                className="fill-current duration-300 hover:text-hover"
              >
                <Paragraph size="big" className="mr-4 inline capitalize">
                  {item}
                </Paragraph>
                <Arrows className="inline h-4 w-4 rotate-90" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedUsers?.map((user) => (
            <tr key={user.id}>
              <td className="border-2 border-solid border-dark text-center">
                <Paragraph size="small">{user.id}</Paragraph>
              </td>
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
