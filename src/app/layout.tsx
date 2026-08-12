import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ever Blooming English Medium School | Bijapur, Chhattisgarh",
  description:
    "Ever Blooming English Medium School in Bijapur, Chhattisgarh offers quality education from Kindergarten to Class 8. Admissions information and school activities for families in Bijapur, Chhattisgarh.",
  keywords: [
    "Ever Blooming School",
    "English Medium School Bijapur",
    "Bijapur Chhattisgarh school",
    "CBSE school Bijapur",
    "Kindergarten Bijapur",
    "school admission Bijapur",
  ],
  icons: { icon: "/logo.jpg", apple: "/logo.jpg" },
  openGraph: {
    title: "Ever Blooming English Medium School | Bijapur, Chhattisgarh",
    description:
      "Quality English medium education and a welcoming learning environment for children in Bijapur, Chhattisgarh.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}
