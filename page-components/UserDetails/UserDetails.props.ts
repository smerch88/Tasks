export interface User {
  firstName: string;
  lastName: string;
  address: Address;
  image: string;
  id: string;
}

export interface Address {
  address: string;
  city: string;
}

export type UserProps = {
  user: User;
};
