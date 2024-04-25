/* Skrevet av Jesper */
'use client'
import React from 'react';
import styles from "./news.module.css";

export default function News() {
    return (
    <div className={styles.newsContainer}>
        <artikkel>
            <h1 className={styles.newsTitle}>Nyheter</h1>
            <p className={styles.newsContent}>Nyhets informasjon</p>
        </artikkel>
    </div>
    );
};