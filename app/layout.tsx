// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "DRL Journals",
//   description: "Advancing global research through peer-reviewed scientific publications.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         {children}
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dnadsresearch.com"),

  title: {
    default: "DRL Journals",
    template: "%s | DRL Journals",
  },

  description:
    "DRL Journals is an international peer-reviewed publishing platform dedicated to promoting high-quality research, scientific excellence, ethical publishing practices, and global knowledge dissemination across science and multidisciplinary academic domains.",

  keywords: [
    "DRL Journals",
    "research journal",
    "academic journal",
    "scientific journal",
    "peer reviewed journal",
    "open access journal",
    "multidisciplinary journal",
    "scientific publishing",
    "international journal",
    "research publication",
    "scholarly publishing",
    "science journal",
    "academic publishing",
    "research articles",
  ],

  authors: [
    {
      name: "DRL Journals",
      url: "https://www.dnadsresearch.com",
    },
  ],

  creator: "DRL Journals",

  publisher: "DRL Journals",

  category: "Academic Publishing",

  alternates: {
    canonical: "https://www.dnadsresearch.com",
  },

  openGraph: {
    title: "DRL Journals",

    description:
      "DRL Journals is an international peer-reviewed publishing platform dedicated to promoting high-quality research, scientific excellence, ethical publishing practices, and global knowledge dissemination across science and multidisciplinary academic domains.",

    url: "https://www.dnadsresearch.com",

    siteName: "DRL Journals",

    images: [
      {
        url: "/drl-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "DRL Journals",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "DRL Journals",

    description:
      "International peer-reviewed scholarly publishing platform for scientific research and academic excellence.",

    images: ["/drl-logo.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "PASTE_YOUR_GOOGLE_VERIFICATION_CODE_HERE",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}