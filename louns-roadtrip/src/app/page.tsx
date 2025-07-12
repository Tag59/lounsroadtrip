'use client';

import Image from "next/image";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import AnimatedButton from "@/components/AnimatedButton";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
        <Image
          src="/images/moto1.jpg"
          alt="Moto sur la route"
          fill
          style={{ objectFit: "cover" }}
          className="z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <motion.div
          className="z-20 px-6 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold uppercase">Louns Roadtrip</h1>
          <p className="mt-4 text-xl text-gray-200">La route. La liberté. La passion moto.</p>
          <div className="mt-6">
            <AnimatedButton href="/videos">
              Voir les vidéos
            </AnimatedButton>
          </div>
        </motion.div>
      </section>

      {/* PRÉSENTATION */}
      <motion.section
        className="py-20 px-6 bg-gray-100 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">Qui est Louns ?</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Louns est une passionnée de moto, explorant les routes et capturant la beauté de chaque virage.
        </p>
      </motion.section>

      {/* BALADES */}
      <motion.section
        className="py-20 px-6 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-10">Quelques photos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["moto2.jpg", "louns1.jpg", "moto1.jpg"].map((img, i) => (
            <motion.div
              key={i}
              className="min-h-[200px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={`/images/${img}`}
                alt={`Balade ${i + 1}`}
                width={600}
                height={400}
                unoptimized
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <AnimatedButton href="/galerie" className="border-gray-800">
            Voir la galerie
          </AnimatedButton>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
