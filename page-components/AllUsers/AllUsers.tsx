import { Section } from '@/components/common/Section/Section';
import { UserCardMini } from '@/components/common/UserCardMini/UserCardMini';
import { Title } from '@/components/typography/Title/Title';
import { FC } from 'react';
import { AllUsersProps } from './AllUsers.props';

export const AllUsers: FC<AllUsersProps> = ({ users }) => {
  return (
    <Section className="">
      <div className="container">
        <Title variant="dark" tag="h2" className="mb-4">
          You can find all users here
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
