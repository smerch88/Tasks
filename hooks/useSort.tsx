import { User } from '@/types';
import { useState, useEffect } from 'react';

type useSortProps = {
  users: User[];
  order: 'asc' | 'desc';
  column: 'age' | 'weight' | 'height' | false;
};

const sortFunctions = {
  age: (a: User, b: User) => a.age - b.age,
  weight: (a: User, b: User) => a.weight - b.weight,
  height: (a: User, b: User) => a.height - b.height,
};

export const useSort = ({ users, order, column }: useSortProps): User[] => {
  const [sortedUsers, setSortedUsers] = useState<User[]>([]);

  useEffect(() => {
    if (column === false) {
      setSortedUsers(users);
      return;
    }

    const usersArray: User[] = [...users];

    if (sortFunctions[column]) {
      usersArray.sort(sortFunctions[column]);
    }

    if (order === 'desc') {
      usersArray.reverse();
    }

    setSortedUsers(usersArray);
  }, [users, order, column]);

  return sortedUsers;
};
