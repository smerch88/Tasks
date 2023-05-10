export interface User {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  id: string;
  image: string;
}

export interface AllUsersProps {
  users: User[];
}
