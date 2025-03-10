import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "./components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arkan",
  description: "الصفحة الرئيسية لموقع اركان",
};

export default function RootLayout({ children, params }) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col ` }
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
