import { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

import Loading from "./loading";
import TailwindIndicator from "./components/utils/TailwindIndicator";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const inter = Inter({ subsets: ["latin"] });
const generateMetaData = (meta) => {
  return {
    metadataBase: new URL(meta.link),
    title: meta.title,
    description: meta.description,
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.link,
      siteName: meta.title,
      images: [
        {
          url: meta.image,
          width: 1200,
          height: 627,
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      // siteId: "1467726470533754880",
      creator: "@creowistech",
      // creatorId: "1467726470533754880",
      images: [
        {
          url: meta.image,
          width: 1200,
          height: 627,
        },
      ],
    },
    alternates: {
      canonical: meta.link,
    },
  };
};

export const metadata = generateMetaData({
  title: "Hashnode Diaries",
  description: "Read any blog on Hashnode",
  link: "https://hashnode-diaries.vercel.app/",
  image: "/images/homepage.png",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <div className="flex flex-col">
            <Header />
            <main className="overflow-y-auto h-screen overflow-x-hidden">
              {children}
            </main>
            <Footer />
          </div>
        </Suspense>
        <TailwindIndicator />
      </body>
    </html>
  );
}
