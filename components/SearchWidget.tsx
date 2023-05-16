import { Section } from '@/components/Section';
import { Title } from '@/components/Title';
import { UserCardMini } from '@/components/UserCardMini';
import { User } from '@/types';
import { FC, useEffect, useState } from 'react';

export const SearchWidget: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [suggestedUsers, setSuggestedUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchSuggestedUsers = async () => {
      if (searchTerm) {
        try {
          const res = await fetch(
            `https://dummyjson.com/users/search?q=${searchTerm}`,
          );
          const data = await res.json();

          if (!res.ok) {
            throw new Error(data.message);
          }

          setSuggestedUsers(data.users);
        } catch (error) {
          console.error('Error fetching suggested users:', error);
          setSuggestedUsers([]);
        }
      } else {
        setSuggestedUsers([]);
      }
    };
    fetchSuggestedUsers();
  }, [searchTerm]);

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
        </div>
      </div>
    </Section>
  );
};
