import { PT_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin"],
  weight: ["400", "700"], // optional: include weights you need
  display: "swap",
});

export const metadata = {
  title:
    "Top 3% Digital Marketing Agency in USA, #1  - ShootOrder®",
  description:
    "ShootOrder is one of the globally awarded digital marketing agency , USA. We are amongst the top ranked digital marketing companies with 300+ clients across the globe driving best results in digital marketing services like SEO, PPC, Content Marketing & Social Media.",
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ptSans.variable} font-sans antialiased `}>
        <Header />
        {children}

        <div className="absolute inset-0 -z-10">
          {/* Background elements for parallax */}
          <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
