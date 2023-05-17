import { Section } from '@/components/Section';
import { Paragraph } from '@/components/Paragraph';
import { Title } from '@/components/Title';
import { UserProps } from '@/types';
import Image from 'next/image';
import { FC } from 'react';

export const UserDetails: FC<UserProps> = ({ user }) => {
  if (!user) {
    return <div>Error loading user data.</div>;
  }

  return (
    <Section className="">
      <div className="container">
        <div className="rounded-xl p-10 text-center shadow-card">
          <Title tag="h2">Personal User Details</Title>
          <div className="grid gap-4">
            <div className="relative mx-auto h-40 w-40">
              <Image
                src={user.image}
                alt={`${user.firstName} ${user.lastName} avatar`}
                fill
              />
            </div>
            <div>
              <Paragraph>First Name: {user.firstName}</Paragraph>
            </div>
            <div>
              <Paragraph>Last Name: {user.lastName}</Paragraph>
            </div>
            <div>
              <Paragraph>
                Adress: {user.address.address}, {user.address.city}
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
