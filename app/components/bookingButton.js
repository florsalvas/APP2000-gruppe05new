'use client'
import React from 'react';
import Link from 'next/link';
import styles from './bookingButton.module.css';

export default function BookingButton() {
    return (
        <div className={styles.buttonContainer}>
        <Link href="/booking">
            <p className={styles.bookingButton}>Se hva vi har å tilby</p>
        </Link>
        </div>
    );
};


