import { Section } from '@/components/Section';
import { Title } from '@/components/Title';
import { UserCardMini } from '@/components/UserCardMini';
import { useDebounceValue } from '@/hooks/useDebounceValue';
import { User } from '@/types';
import { FC, useEffect, useState } from 'react';

export const SearchWidget: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [suggestedUsers, setSuggestedUsers] = useState<User[]>([]);
  const [cache, setCache] = useState<Record<string, User[]>>({});
  const [fetchController, setFetchController] =
    useState<AbortController | null>(null);

  const debouncedSearchTerm = useDebounceValue(searchTerm, 300);

  useEffect(() => {
    const fetchSuggestedUsers = async () => {
      if (debouncedSearchTerm) {
        if (cache[debouncedSearchTerm]) {
          setSuggestedUsers(cache[debouncedSearchTerm]);
        } else {
          const controller = new AbortController();
          setFetchController(controller);

          try {
            const res = await fetch(
              `https://dummyjson.com/users/search?q=${debouncedSearchTerm}`,
              { signal: controller.signal },
            );
            const data = await res.json();

            if (!res.ok) {
              throw new Error(data.message);
            }

            const users = data.users || [];
            setCache((prevCache) => ({
              ...prevCache,
              [debouncedSearchTerm]: users,
            }));
            setSuggestedUsers(users);
          } catch (error) {
            setSuggestedUsers([]);
          }
        }
      } else {
        setSuggestedUsers([]);
      }
    };

    if (fetchController) {
      fetchController.abort();
    }

    fetchSuggestedUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm, cache]);

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
