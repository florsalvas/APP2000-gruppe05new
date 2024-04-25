import React from 'react';
import styles from './mySiteUser.module.css';

export default function User({ userData, orderData }) {
  const { email: userEmail, tlf: userTelephone } = userData;
  const { email: orderEmail, tlf: orderTelephone } = orderData;

  return (
    <>
      <div className={styles.userProfileContainer}>
        <section className={styles.userSection}>
          <h2>Min profil</h2>
          <div className={styles.userInfo}>
            <p><strong>Email:</strong> {userEmail}</p>
            <p><strong>Telefon nummer:</strong> {userTelephone}</p>
          </div>
        </section>
      </div>

      <div className={styles.userProfileContainer}>
        <section className={styles.userSection}>
          <h2>Mine ordre</h2>
          <div className={styles.userInfo}>
            <p><strong>Email:</strong> {orderEmail}</p>
            <p><strong>Telefon nummer:</strong> {orderTelephone}</p>
          </div>
        </section>
      </div>
    </>
  );
}
