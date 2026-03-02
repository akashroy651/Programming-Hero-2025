import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import localFont from "next/font/local";
import NextAuthProvider from "@/provider/NextAuthProvider";
// import type { Metadata } from "next";

// const popoins = Poppins({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
// });

const popoins = Poppins({
  weight: ["100","200","300","400","500","600","700","800"],
  // subsets: ["latin"],
  // display: "swap",
});

export const fontBangla = localFont({
  src: "../fonts/mayaboti-normal.ttf",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: {
//     default: "Hero kidz",
//     template: "%s |  Hero kidz"
//   }
// };

export const metadata = {
  metadataBase: new URL("https://hero-kidz-sigma.vercel.app"),

  title: "Hero Kidz – Kids Fashion & Products",
  description:
    "Hero Kidz brings stylish, comfortable, and quality kids products with a modern shopping experience.",

  openGraph: {
    title: "Hero Kidz – Kids Fashion & Products",
    description:
      "Explore modern kids fashion and products with a clean UI and smooth experience.",
    url: "https://hero-kidz-sigma.vercel.app",
    siteName: "Hero Kidz",
    images: [
      {
        url: "https://i.ibb.co/jkrPmKW7/Screenshot-2026-02-19-233656.png",
        width: 1200,
        height: 630,
        alt: "Hero Kidz Home Page Preview",
      },
      {
        url: "https://i.ibb.co/Z1vkGPnW/Screenshot-2026-02-19-234314.png",
        width: 1200,
        height: 630,
        alt: "Hero Kidz Products Page Preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    images: ["https://i.ibb.co/jkrPmKW7/Screenshot-2026-02-19-233656.png"],
  },

  icons: {
    icon: "https://i.ibb.co/d0xpBQS0/image.png",
    apple: "https://i.ibb.co/d0xpBQS0/image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body className={`${popoins.className} antialiased`}>
          <header className="py-2 md:w-11/12 mx-auto ">
            <Navbar></Navbar>
          </header>
          <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100vh-302px)]">
            {children}
          </main>

          <footer>
            <Footer></Footer>
          </footer>
        </body>
      </html>
    </NextAuthProvider>
  );
}
