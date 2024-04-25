"use client";
import './globals.css';
import News from './components/news';
import ButtonOnPicture from "./components/buttonOnPicture";
import { useSession } from 'next-auth/react';
import React from 'react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <main>
      <section>
        <div className="section-row">
          <div className="picture-component">
            <ButtonOnPicture />
          </div>
        </div>
      </section>

      {session && session.user.role === "admin" && (
        <>
        <section>
          <div className="section-row">
            <div>
              <h2>Endre bilde:</h2>
              <input type='file'/>
              <button>Bytt bilde</button>
            </div>
          </div>
        </section>
        </>
      )}
      
      <section>
        <div className="section-row">
          <div className="news-component">
            <News />
          </div>
        </div>
      </section>
      
      <section>
        <div className="section-row">
          <div className="">
            <h1> GRID HER </h1>
          </div>
        </div>
      </section>
    </main>   
  );
}