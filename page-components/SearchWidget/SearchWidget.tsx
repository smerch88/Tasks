import { Section } from '@/components/common/Section';
import { UserCardMini } from '@/components/common/UserCardMini';
import { Title } from '@/components/typography/Title';
import { FC, useState } from 'react';
import { User } from '../AllUsers/AllUsers.props';

const SearchWidget: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [suggestedUsers, setSuggestedUsers] = useState<User[]>([]);

  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const searchTerm = event.target.value;

    setSearchTerm(searchTerm);

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

  return (
    <Section className="h-full min-h-[420px] bg-primary">
      <div className="container">
        <Title tag="h2" variant="light">
          Search for user
        </Title>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          className="mb-4"
          placeholder="Name.."
        />
        {!searchTerm && (
          <Title tag="h3" variant="light">
            Start typing a name of user and see the results
          </Title>
        )}
        <div className="max-h-[180px] overflow-y-scroll md:max-h-[220px] xl:max-h-[190px]">
          <ul>
            {suggestedUsers.map(({ id, firstName, lastName, image }) => (
              <li key={id}>
                <UserCardMini
                  id={id}
                  firstName={firstName}
                  lastName={lastName}
                  image={image}
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

export default SearchWidget;
