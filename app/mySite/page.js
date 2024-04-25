'use client'
// Laget av Rolf

import React from 'react';
import styles from './mySite.module.css';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function MySite() {
    const { data: session } = useSession();

    const [bookings, setBookings] = useState([]);
    
    const userEmail = session && session.user ? session.user.email : '';
    const userRole = session && session.user ? session.user.role : '';
    const userTlf = session && session.user ? session.user.tlf : '';
    const sessionUser = session;

    useEffect(() => {
        console.log("session =", sessionUser);
        const fetchBookings = async () => {
            try {
                if (userEmail) {
                    console.log("userEmail found");
                    const response = await fetch(`/api/getBooking?email=${encodeURIComponent(userEmail)}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch bookings');
                    }
                    const data = await response.json();
                    setBookings(data);
                    console.log(data);
                }
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, [userEmail]);

    return (
        <div>

        {!session ? (
            <h2 className={styles.headerUlogget}>Logg inn for å se min side</h2>
            
        ): (
            <div className={styles.main}>

                <div>
                    <h2>Min profil</h2>
                </div>
                <div className={styles.Item}>
                    <ul className={styles.booking}>
                        <li>Navn: {session.user.name}</li>
                        <li>Email: {userEmail}</li>
                        <li>Telefonnummer: {userTlf}</li>
                        <li>Min rolle: {userRole}</li>
                    </ul>
                </div>
            
                <div>
                    <h2>Dine reservasjoner</h2>
                </div>
                <div className={styles.Item}>
                    <ul>
                        {bookings.length > 0 ? (
                            bookings.map((booking) => (
                                <div key={booking._id} className={styles.booking}>
                                    <li>Navn: {booking.navn}</li>
                                    <li>Plassnummer: {booking.plassNr}</li>
                                    <li>Type: {booking.type}</li>
                                    <li>Telefonnummer:  {booking.tlfnr}</li>
                                    <li>Startdato: {booking.dato}</li>
                                    <li>Sluttdato {booking.dato}</li>
                                </div> 
                            ))
                        ) : (
                            <li style={{ listStyleType: 'none' }}>Ingen reservasjoner funnet</li>
                        )}
                    </ul>
                </div>
            </div>
        )}
    
        </div>
    );
}