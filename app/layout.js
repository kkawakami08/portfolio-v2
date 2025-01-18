import { DM_Serif_Text, Sofia_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSerifText = DM_Serif_Text({
  variable: "--font-dm-serif-text",
  subsets: ["latin"],
  weight: "400", // Specify the weight you want to use (400 is regular)
});
const sofiaSans = Sofia_Sans({
  subsets: ["latin"], // Specify subsets (adjust based on your needs)
  weight: ["400", "700"], // Include font weights you're using
});

export const metadata = {
  title: "Kaori Kawakami Portfolio",
  description: "Kaori Kawakami Portfolio for Front End Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSerifText.variable} ${sofiaSans.variable} antialiased cursor-default  bg-gray-100 `}
      >
        <Navbar />
        <main className="min-h-screen ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
