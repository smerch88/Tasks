interface User {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  id: string;
  image: string;
}

interface UserData {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

type Props = {
  data: UserData;
};
