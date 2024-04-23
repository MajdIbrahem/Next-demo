import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "next demo Home page",
    template:"%s | next demo"
  },
  description: " create Demo next app for test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex items-center justify-center flex-col'>
        <Navbar></Navbar>
        {children}
      <Footer></Footer>
      </body>
      
    </html>
  );
}
