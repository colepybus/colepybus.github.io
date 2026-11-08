import { Pontano_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const pontanoSans = Pontano_Sans({
  variable: "--font-pontano-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Cole Pybus Engineering Portfolio",
  description: "Cole's Engineering Portfolio",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pontanoSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}