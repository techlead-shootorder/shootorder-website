import { PT_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Script from 'next/script';

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin"],
  weight: ["400", "700"], // optional: include weights you need
  display: "swap",
});

export const metadata = {
  title:
    "Top 3% Digital Marketing Agency in USA, #1 in Connecticut  - ShootOrder®",
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
     {/* GTM Script inside <head> */}
     <head>
      <Script id="gtm-head" strategy="beforeInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W4DMQQQ6');
        `}
      </Script>
      </head>

      <body className={`${ptSans.variable} font-sans antialiased `}>
        {/* GTM noscript immediately after <body> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W4DMQQQ6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Header />
        {children}
        <div className="absolute inset-0 -z-10">
          {/* Background elements for parallax */}
          <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        <Footer />
        {/* Updated Pipedrive LeadBooster Script */}
        <Script id="pipedrive-leadbooster-config" strategy="beforeInteractive">
          {`
            window.pipedriveLeadboosterConfig = {
              base: 'leadbooster-chat.pipedrive.com',
              companyId: 14111626,
              playbookUuid: 'a1c1352f-7b6c-4f7a-9065-1f7ecde7c714',
              version: 2
            };
            (function () {
              var w = window;
              if (w.LeadBooster) {
                console.warn('LeadBooster already exists');
              } else {
                w.LeadBooster = {
                  q: [],
                  on: function (n, h) {
                    this.q.push({ t: 'o', n: n, h: h });
                  },
                  trigger: function (n) {
                    this.q.push({ t: 't', n: n });
                  },
                };
              }
            })();
          `}
        </Script>

        <Script
          src="https://leadbooster-chat.pipedrive.com/assets/loader.js"
          strategy="afterInteractive"
          async
        />
      </body>
    </html>
  );
}
