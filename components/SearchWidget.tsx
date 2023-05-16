import { Section } from '@/components/Section';
import { Title } from '@/components/Title';
import { UserCardMini } from '@/components/UserCardMini';
import { User } from '@/types';
import { FC, useState } from 'react';
import { useQuery } from 'react-query';

export const SearchWidget: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {
    data: suggestedUsers = [],
    isLoading,
    isError,
  } = useQuery<User[]>(['suggestedUsers', searchTerm], async () => {
    if (searchTerm) {
      const res = await fetch(
        `https://dummyjson.com/users/search?q=${searchTerm}`,
      );
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      return data.users;
    } else {
      return [];
    }
  });

  return (
    <Section className="bg-primary">
      <div className="container">
        <Title tag="h2" variant="light" className="mb-2">
          Search for user
        </Title>
        <input
          type="text"
          value={searchTerm}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const searchTerm = event.target.value;
            setSearchTerm(searchTerm);
          }}
          className="mb-4 w-full max-w-[320px] rounded-s"
          placeholder="Name.."
        />
        <div className="relative">
          {isLoading ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>Error fetching suggested users.</div>
          ) : (
            <ul className="absolute left-0 top-0 z-10 max-h-[400px] w-full max-w-[320px] gap-2 overflow-y-scroll rounded-s bg-dark">
              {suggestedUsers.map((user) => (
                <li key={user.id}>
                  <UserCardMini
                    id={user.id}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    image={user.image}
                    variant="light"
                    direction="horizontal"
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Section>
  );
};
