import { Paragraph } from '@/components/Paragraph';
import Link from 'next/link';
import { FC } from 'react';
import { Cart } from './Cart';

export const Header: FC = () => {
  return (
    <header className="shadow-header">
      <div className="flex justify-between p-2 md:p-10">
        <nav>
          <ul className="flex flex-col md:flex-row md:gap-10 ">
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
        <Cart />
      </div>
    </header>
  );
};
