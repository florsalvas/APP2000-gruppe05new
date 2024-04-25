import './globals.css';
import NavBar from './components/nav-bar';
import Footer from './components/footer';
import {Providers} from "./nextUIprovider";
import SessionProvider from './utils/SessionProvider'

export const metadata = {
  title: 'Camping nettside',
  description: 'Generated by create next app',
}

export default async function RootLayout({children}) {

  return (
    <html lang="en">
      <body>
        <SessionProvider>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </SessionProvider>
      </body>
    </html>
  );
} 