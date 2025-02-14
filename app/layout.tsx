import type { Metadata } from "next";
import "./globals.css";
import BackgroundMusic from "../components/BackgroundMusic";
export const metadata: Metadata = {
  title: "Free Fire Tournament",
  description: "Spandan 2K25 Mandsaur University",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <BackgroundMusic /> 
        {children}
      </body>
    </html>
  );
}