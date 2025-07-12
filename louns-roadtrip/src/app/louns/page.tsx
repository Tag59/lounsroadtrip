"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function APropos() {
  return (
    <main className="min-h-screen bg-white text-gray-800 pt-24 px-4 md:px-8">
      <motion.h1
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        À propos de Louns
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-10 w-full items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/lalouns.png"
            alt="Portrait de Louns"
            width={300}
            height={400}
            className="rounded-xl shadow-lg object-cover"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-gray-700">
            Louns est une passionnée de moto depuis plus de 10 ans. Amoureuse de la liberté et des grands espaces, elle parcourt les routes avec sa caméra embarquée et un esprit d’aventurière.
          </p>
          <ul className="space-y-2">
            <li>🏍️ Moto : Yamaha MT-07</li>
            <li>📍 Région : Sud-Est de la France</li>
            <li>🛣️ Kilomètres parcourus : 12 000+</li>
            <li>📸 Balades documentées : 48</li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        className="mt-16 w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-4">Moments marquants</h2>
        <ul className="border-l-2 border-gray-300 pl-6 space-y-6">
          <li>
            <p className="text-gray-600">2021 – Premier roadtrip solo jusqu’à Nice</p>
          </li>
          <li>
            <p className="text-gray-600">2022 – Rencontre avec un groupe de riders à Gap</p>
          </li>
          <li>
            <p className="text-gray-600">2023 – Création du compte YouTube “Louns Ride”</p>
          </li>
        </ul>
      </motion.div>

      <Footer />
    </main>
  );
}
