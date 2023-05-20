import { User } from '@/types';
import { FC } from 'react';
import { Title } from './Title';

type UsersTableProps = {
  users: User[] | null;
};

export const UsersTable: FC<UsersTableProps> = ({ users }) => {
  const usersString = users ? JSON.stringify(users, null, 2) : null;
  return (
    <>
      <Title tag="h2" className="py-4 text-center">
        UsersTable
      </Title>
      <details className="rounded-xl p-4 shadow-card duration-300 hover:shadow-card_hover">
        <summary className="cursor-pointer">
          <Title tag="h3" className="inline">
            All Users Json
          </Title>
        </summary>
        <pre>{usersString}</pre>
      </details>
    </>
  );
};
