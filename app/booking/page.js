'use client';
import React, { useState, useEffect } from 'react';
import '../globals.css';
import BookingForm from '../components/bookingForm';
import styles from '../booking/booking.module.css';

export default function BookingPage() {
  const [availableSites, setAvailableSites] = useState([]);
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    async function fetchBookingAndAvailableSites() {
      console.log("Henter booking fra serveren...");
      try {
        const response = await fetch('/api/getBooking');
        if (response.ok) {
          const bookingData = await response.json();
          const formattedBooking = bookingData.map(booking => ({
            id: booking.id,
            plassNr: booking.plassNr,
            type: booking.type,
            navn: booking.navn,
            email: booking.email,
            fraDato: bookingData.fraDato,
            tilDato: bookingData.tilDato
          }));
          console.log("booking med ID:", formattedBooking);
  
          
          const allSites = Array.from({ length: 20 }, (v, i) => `A${i + 1}`);
          const occupiedSites = new Set(formattedBooking.map(b => b.plassNr));
          const availableSitesData = allSites.filter(site => !occupiedSites.has(site));
  
          setBooking(formattedBooking);
          setAvailableSites(availableSitesData);
        } else {
          console.error('Feil ved henting av booking');
        }
      } catch (error) {
        console.error('Nettverksfeil ved henting av booking:', error);
      }
    }
    fetchBookingAndAvailableSites();
  }, []); 
  
  const handleBooking = async (bookingData) => {
    const apiEndpoint = '/api/sendBooking';
  
    try {
      console.log("Sending booking data to:", apiEndpoint);
  
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plassNr: bookingData.plassNr,
          type: bookingData.type,
          navn: bookingData.navn,
          email: bookingData.email,
          tlfnr: bookingData.tlfnr,
          fraDato: bookingData.fraDato,
          tilDato: bookingData.tilDato
        }),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log("Booking response data:", responseData);
  
     
      } else {
        const errorDetails = await response.json();
        console.error('Feil ved opprettelse av booking:', errorDetails);
      }
    } catch (error) {
      console.error('Nettverksfeil ved opprettelse av booking:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
      <BookingForm handleBooking = {handleBooking} availableSites={availableSites}/>
      </main>
      <footer />
    </div>
  );
};


