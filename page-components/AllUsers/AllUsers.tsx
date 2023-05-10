import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { AllUsersProps, User } from './AllUsers.props';
import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';
import { Section } from '@/components/common/Section';
import { UserCardMini } from '@/components/common/UserCardMini';

export const AllUsers: FC<AllUsersProps> = ({ users }) => {
  return (
    <Section className="">
      <div className="container">
        <Title variant="dark" tag="h2" className="mb-4">
          You can find all users here
        </Title>
        <ul className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 xl:grid-cols-5">
          {users.map(({ firstName, lastName, image, id }: User) => (
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
