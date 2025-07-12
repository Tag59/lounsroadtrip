"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function APropos() {
  return (
    <main className="min-h-screen bg-white text-gray-800 pt-24 px-4 md:px-8">
      {/* TITRE */}
      <motion.h1
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        À propos de Louns
      </motion.h1>

      {/* IMAGE + TEXTE */}
      <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto items-center md:items-start">
        {/* Image ancrée sur le bas */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full md:w-[400px] h-[400px] overflow-hidden rounded-xl shadow-lg"
        >
          <Image
            src="/images/lounsdraw.png"
            alt="Portrait de Louns"
            width={800}
            height={1000}
            className="absolute top-[-250px] object-cover w-full"
            priority
          />
        </motion.div>

        {/* Texte descriptif */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-gray-700">
            Louns est passionnée de moto depuis son plus jeune âge. Amoureuse des balades au grand air, elle sillonne les routes de la Côte d&apos;Azur sous le soleil, toujours accompagnée de sa caméra pour immortaliser chaque instant.          </p>
          <ul className="space-y-2">
            <li>Moto : Yamaha MT-125</li>
            <li>Région : Provence-Alpes-Côte d&apos;Azur</li>
          </ul>
        </motion.div>
      </div>

      {/* TIMELINE */}
      <motion.div
        className="mt-16 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-4">Moments marquants</h2>
        <ul className="border-l-2 border-gray-300 pl-6 space-y-6">
          <li>
            <p className="text-gray-600"> Été 2023 – Obtention du permis A1</p>
          </li>
          <li>
            <p className="text-gray-600">Été 2023 – Achat d&apos;une Yamaha MT-125</p>
          </li>
          <li>
            <p className="text-gray-600">Printemps 2025 – Achat d&apos;une GoPro Hero 13 pour immortaliser ses balades</p>
          </li>
          <li>
            <p className="text-gray-600">Été 2025 – Ouverture du site dédié aux balades de Louns</p>
          </li>
        </ul>
      </motion.div>

      <Footer />
    </main>
  );
}
