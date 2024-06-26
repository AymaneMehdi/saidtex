import { Inter } from "next/font/google";
import "./globals.css";
import Navbr from "./components/nav";
import Fotter from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Fotter />
      </body>
    </html>
  );
}
