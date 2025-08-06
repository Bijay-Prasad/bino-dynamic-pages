import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dynamic Page Builder",
  description: "Create pages on demand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-background font-sans ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="mx-auto">
          {children}
        </main>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
