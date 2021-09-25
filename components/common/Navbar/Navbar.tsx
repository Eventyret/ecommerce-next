import { FC } from 'react';
import { Container } from '@components/ui';
import Link from 'next/link';
import s from './Navbar.module.css';
const Navbar: FC = () => {
  return (
    <Container>
      <div className={s.root}></div>
      <Link href="/">
        <a className={s.logo}>NEXT_STORE</a>
      </Link>
      <nav>
        <Link href="/">
          <a className={s.link}>All</a>
        </Link>
        <Link href="/">
          <a className={s.link}>Clothes</a>
        </Link>
        <Link href="/">
          <a className={s.link}>Accessories</a>
        </Link>
        <Link href="/">
          <a className={s.link}>Shoes</a>
        </Link>
      </nav>
    </Container>
  );
};

export default Navbar;
