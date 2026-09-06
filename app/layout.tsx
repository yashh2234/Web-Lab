import type { Metadata } from "next";
import "./globals.css";
import { SoundProvider } from "../components/SoundManager";
import { SmoothScroll } from "../components/SmoothScroll";
import { CustomCursor } from "../components/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://yashdesign.dev"),
  title: "Yash — Digital Designer & Creative Developer // E-Commerce Specialist",
  description:
    "Independent creative developer & UI/UX designer specializing in high-converting Shopify Plus stores, luxury fashion & jewelry digital flagships, and art-directed frontend architecture.",
  keywords: [
    "Creative Developer",
    "UI/UX Designer",
    "Shopify Plus Expert",
    "Frontend Engineer",
    "Fashion E-commerce",
    "Next.js Portfolio",
    "Web Design Studio",
  ],
  authors: [{ name: "Yash" }],
  openGraph: {
    title: "Yash — Digital Designer & Creative Developer",
    description:
      "I design and build high-converting digital experiences for fashion, jewellery, lifestyle and e-commerce brands.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/teela.jpg",
        width: 1200,
        height: 630,
        alt: "Yash Creative Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash — Digital Designer & Creative Developer",
    description: "High-converting digital experiences for luxury and e-commerce brands.",
    images: ["/images/teela.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-[#0a0a0a] text-[#f5f5f0] selection:bg-[#00f0ff] selection:text-black">
      <body className="min-h-screen bg-[#0a0a0a] text-[#f5f5f0] font-sans antialiased overflow-x-hidden relative bg-notebook-lines">
        <SoundProvider>
          <SmoothScroll>
            <CustomCursor />
            <div className="noise-overlay" />
            <main className="relative z-10 flex flex-col min-h-screen">
              {children}
            </main>
          </SmoothScroll>
        </SoundProvider>
      </body>
    </html>
  );
}
