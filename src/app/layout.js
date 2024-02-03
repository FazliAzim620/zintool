import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Menu from "@/component/Menu";
import Footer from "@/component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
      </head>
      <body className={inter.className}>
      <Navbar/>
      <Menu/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
