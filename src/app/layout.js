import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "California Plumbers Directory",
  description: "Discover California Plumbers  ",
  verification: { google: "0XgXg5w0Qv0SylqCwLitaK87Qm3X-r2qdXj6kzq_FJo" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
