'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer";
import AnimatedButton from "@/components/AnimatedButton";

const images = [
  { src: "moto1.jpg", title: "moto1" },
  { src: "louns6.jpg", title: "louns6" },
  { src: "moto3.jpg", title: "moto3" },
  { src: "louns4.jpg", title: "louns4" },
  { src: "moto2.jpg", title: "moto2" },
  { src: "louns5.jpg", title: "louns5" },
];

export default function Galerie() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-10">
      <motion.h1
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Galerie
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="rounded-xl overflow-hidden shadow-md cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(0,0,0,0.3)" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={`/images/${img.src}`}
              alt={img.title}
              width={600}
              height={400}
              className="object-cover w-full h-full"
              priority={idx === 0}
            />
            <p className="p-4 text-center text-gray-600">{img.title}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <AnimatedButton href="/">
          Retour à l’accueil
        </AnimatedButton>
      </div>

      <Footer />
    </main>
  );
}
