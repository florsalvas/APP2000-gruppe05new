// components/BookingForm.js

import React from 'react';
import styles from './bookingForm.module.css';

export default function BookingForm({ handleBooking, availableSites }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const bookingData = {
      plassNr: formData.get('PlassNr'),
      type: formData.get('type'),
      navn: formData.get('name'),
      email: formData.get('email'),
      tlfnr: formData.get('phone'),
      fraDato: formData.get('date'),
      tilDato: formData.get('date')
    };
    handleBooking(bookingData);
  };

  return (
    <div>
      <h1 className={styles.title}>Booking</h1>
      <div className={styles.bookingForm}>
        <div className={styles.formWrapper}>
          <form onSubmit={handleSubmit}>
            <div className={styles.bookingItem}>
              <label htmlFor="PlassNr">Booking plass</label>
              <select id="PlassNr" name="PlassNr" required>
                {availableSites.map(site => (
                  <option key={site} value={site}>{site}</option>
                ))}
              </select>
            </div>
            <div className={styles.bookingItem}>
              <label htmlFor="type">Type</label>
              <select id="type" name="type" required>
                <option value="">Velg type</option>
                <option value="bobil">Bobil</option>
                <option value="teltplass">Teltplass</option>
                <option value="bobil_med_båtkai">Bobil med båtkai</option>
                <option value="hytteplass">Hytte</option>
              </select>
            </div>
            <div className={styles.bookingItem}>
              <label htmlFor="name">Navn</label>
              <input type="text" id="name" name="name" placeholder="Navn" required />
            </div>
            <div className={styles.bookingItem}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div className={styles.bookingItem}>
              <label htmlFor="phone">Telefon nummer</label>
              <input type="tel" id="phone" name="phone" placeholder="Telefon nummer" required />
            </div>
            <div className={styles.bookingItem}>
              <label htmlFor="date">Start dato</label>
              <input type="date" id="date" name="date" required />
            </div>
            <div className={styles.bookingItem}>
              <label htmlFor="date">Slutt dato</label>
              <input type="date" id="date" name="date" required />
            </div>
            <button className={styles.formButton} type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
  
}