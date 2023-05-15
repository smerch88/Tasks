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
        <Title tag="h2">Personal User Details</Title>
        <ul>
          <div className="relative h-10 w-10">
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
    </Section>
  );
};
