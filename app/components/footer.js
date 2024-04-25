'use client'
import React from 'react';
import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles['footer-col']}>
          <h4>Campingplass1</h4>
            <ul className={styles.footList}>
              <li className={styles.navItem}>
                  <Link href="/about" passHref>
                  Om oss
                  </Link>
              </li>
              <li className={styles.footItem}>
                 <Link href="/services" passHref>
                 Tjenester
                 </Link>
              </li>
              <li className={styles.footItem}>
                  <Link href="/contact" passHref>
                  Kontakt oss
                  </Link>
              </li>
            </ul>
          </div>
          <div className={styles['footer-col']}>
            <div className={styles.madeBy}>
            <h4>Laget av: Rolf, Jesper, Sondre, Marcus, Matias</h4>
            <div className={styles.flags}>
              <img src='images/Norway.png' alt="Norsk" className={styles.flag1} />
              <img src='images/English.png' alt="English" className={styles.flag2} />
              <img src='images/German.png' alt="German" className={styles.flag3} />
            </div>
          </div>
        </div>
          <div className={styles['footer-col']}>
            <h4>Sosiale medier</h4>
            <div className={styles['social-links']}>
              <Link legacyBehavior href="https://www.facebook.com"  passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <img src='images/faclogo.png' aria-hidden="true" className={styles.FooterIconfac}></img>
                </a>
              </Link>
              <Link legacyBehavior href="https://www.instagram.com" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <img src='images/inlogo.png' aria-hidden="true" className={styles.FooterIconin}></img>
                </a>
              </Link>
              <Link legacyBehavior href="https://twitter.com" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <img src='images/twlogo.png' aria-hidden="true"className={styles.FooterIcontw}></img>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


