import { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

import Loading from "./loading";
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
        <Suspense fallback={<Loading />}>
          <div className="flex flex-col">
            <Header />
            <main className="overflow-y-auto h-screen overflow-x-hidden">{children}</main>
            <Footer />
          </div>
        </Suspense>
        <TailwindIndicator />
      </body>
    </html>
  );
}
