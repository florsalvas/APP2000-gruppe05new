'use client';

import Link from 'next/link';
import styles from './nav-bar.module.css';
import { signOut, useSession } from 'next-auth/react';

export default function NavBar() {
  const { data: session } = useSession();
  return (
    <nav className={styles.navBar}>
        <div className={styles.logo}>
          <Link legacyBehavior href="/" passHref >
            <a target="_blank" rel="noopener noreferrer" >
              <img src='images\Camping1.png' aria-hidden="true" className={styles.logoImg}></img>
            </a>
          </Link>
        </div>
          <div className={styles.container}>
            <div className={styles.column}>
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <Link href="/" passHref>
                      Hjem
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link href="/services" passHref>
                    Tjenester
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link href="/contact" passHref>
                    Kontakt oss
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link href="/faq" passHref>
                    Faq
                  </Link>
                </li>
                <li className={styles.navItem}>
                <Link href="/about" passHref>
                  Om oss
                </Link>
                </li>
                <li className={styles.navItem}>
                <Link href="/booking" passHref>
                  Booking
                </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            {!session ? (
              <>
                <ul className={styles.navList}>
                  <li className={styles.navItem}>
                    <Link href="/login">
                      Login
                    </Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link href="/register">
                      Register
                    </Link>
                  </li>
                </ul>
              </>
            ): (
            <>
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <Link href="/mySite">
                  {session.user?.name}
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <button onClick={() => { signOut(); }} className={styles.resKnappLoggut}>
                    Logout
                  </button>
                </li>
              </ul>
            </>
            )}
          </div>
      </nav>
  );
};

