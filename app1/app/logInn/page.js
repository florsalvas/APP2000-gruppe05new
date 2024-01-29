// laget av Rolf
"use client";
import { useState } from 'react';
import '../globals.css';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import styles from '../components/form.module.css';

export default function Home() {
  // Has to be const, initializes the userID, and password that will be sent through the api
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Stops page from refreshing
    try {
      // Fetches api
      const response = await fetch("../api/registerUser", {
        method: "POST", // POST for sending data to mongodb
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ // Converts javascript value to JSON object
          "userID": userID,
          "password": password,
        }),
      });

      if (response) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Makes the visual site, plus form
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className = {styles.formContainer}>
      <form onSubmit = {handleSubmit} className={styles.form}>

      <input
      type="text"
      className={styles.inputField}
      value={userID}
      onChange={(e)=> setUserID(e.target.value)}
      placeholder = "Skriv brukernavn"
      />

      <input 
      type="text"
      className= {styles.inputField}
      value={password}
      onChange={(e)=> setPassword(e.target.value)}
      placeholder = "Skriv passord"
      />

      <button type="submit">Log inn</button>
      </form>
      </div>
      <Footer />
    </div>
  )
}
