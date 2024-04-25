'use client'
import React from 'react';
import ContactForm from '@/app/components/contactForm';
import styles from './contact.module.css'

export default async function Contact () {

  return (
      <div className="flex flex-col min-h-screen">
        <main>
        <div className={styles.blurBackground}></div>
            <ContactForm />
        </main>
      </div>
  );
}
