import { Section } from '@/components/Section';
import { UserCardMini } from '@/components/UserCardMini';
import { Title } from '@/components/Title';
import { FC } from 'react';
import { User } from '@/types';

type AllUsersProps = {
  users: User[];
};

export const AllUsers: FC<AllUsersProps> = ({ users }) => {
  return (
    <Section className="">
      <div className="container">
        <Title variant="dark" tag="h2" className="mb-4">
          Lis of all users
        </Title>
        <ul className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 xl:grid-cols-5">
          {users.map(({ firstName, lastName, image, id }) => (
            <li key={id}>
              <UserCardMini
                id={id}
                firstName={firstName}
                lastName={lastName}
                image={image}
                direction="vertical"
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
