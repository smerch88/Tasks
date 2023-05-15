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

  const { firstName, lastName, address, image } = user;

  return (
    <Section className="">
      <div className="container">
        <div className="rounded-xl p-10 text-center shadow-card">
          <Title tag="h2">Personal User Details</Title>
          <ul className="grid gap-4">
            <div className="relative mx-auto h-40 w-40">
              <Image src={image} alt={`${firstName} ${lastName} avatar`} fill />
            </div>
            <li>
              <Paragraph>First Name: {firstName}</Paragraph>
            </li>
            <li>
              <Paragraph>Last Name: {lastName}</Paragraph>
            </li>
            <li>
              <Paragraph>
                Adress: {address.address}, {address.city}
              </Paragraph>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};
