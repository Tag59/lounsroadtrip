"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        <Navbar />
        <ScrollProgress />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20" // pt-20 pour éviter que le contenu soit sous la navbar
        >
          {children}
        </motion.main>
      </body>
    </html>
  );
}
