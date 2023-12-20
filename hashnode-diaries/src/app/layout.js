import { Inter } from "next/font/google";
import "./globals.css";

import TailwindIndicator from "./components/utils/TailwindIndicator";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hashnode Diaries",
  description: "Read any blog on Hashnode",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <TailwindIndicator />
      </body>
    </html>
  );
}
