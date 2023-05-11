import { User } from '@/page-components/AllUsers/AllUsers.props';

export interface UserData {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

export type Props = {
  data: UserData;
};
