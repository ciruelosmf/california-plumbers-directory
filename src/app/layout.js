import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "California Plumbers Directory",
  description: "Discover California Plumbers  ",
  verification: { google: "v9-hf_re9pvJk49yojVNtGblQIvZPjuRT7bIE4so71U" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
