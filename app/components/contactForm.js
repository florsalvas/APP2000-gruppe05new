'use client'

// components/BookingForm.js
import React from 'react';
import styles from './contactForm.module.css';

export default function ContactForm() {
  const email = 'Campingplass1@gmail.com';
  const tlf = '+47 999999999';

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Kontakt oss</h1>
      <h2 className={styles.title}>Ta kontakt</h2>
         <div className={styles.contactForm}>
        <div className={styles.formWrapper}>
        <form>
      <div className={styles.contactItem}>
            <label htmlFor="name">Navn: </label>
            <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.contactItem}>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.contactItem}>
            <label htmlFor="message">Din melding:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button className={styles.formButton} type="submit">Send</button>
        </form>
            
        </div>
            <div className={styles.contactForm}>
              <h2 className={styles.title}>Kontakt info</h2>
              <p className={styles.contactItem}>Mailen våres: {email}</p>
              <p className={styles.contactItem}>Telefon nummer: {tlf}</p>
            </div>
    
    </div>
      </div>
    
  );
};



