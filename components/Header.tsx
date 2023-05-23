import { Paragraph } from '@/components/Paragraph';
import Link from 'next/link';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className="shadow-header">
      <div className="p-10">
        <nav>
          <ul className="flex gap-10">
            <li>
              <Link href="/">
                <Paragraph>Home</Paragraph>
              </Link>
            </li>
            <li>
              <Link href="/users">
                <Paragraph>Users</Paragraph>
              </Link>
            </li>
            <li>
              <Link href="/table">
                <Paragraph>Table</Paragraph>
              </Link>
            </li>
            <li>
              <Link href="/webshop">
                <Paragraph>WebShop</Paragraph>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
