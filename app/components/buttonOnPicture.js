'use client'
import React from 'react';
import Picture from './picture';
import BookingButton from './bookingButton';
import styles from './buttonOnPicture.module.css';

export default function ButtonOnPicture() {
    return (
        <div className={styles.buttonOnPicture}>
            <div className={styles.overlay}>
                <h2 className={styles.title}>Velkommen til</h2>
                <h1 className={styles.heading}>Campingplass1</h1>
            </div>
            <Picture />
            <div className={styles.gradientOverlayButton}><BookingButton /></div>
        </div>
    );
};

