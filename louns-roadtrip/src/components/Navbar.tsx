'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-full mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo animé */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-2xl font-bold text-gray-800 select-none"
        >
          Louns
        </motion.div>

        {/* Menu de navigation */}
        <div className="flex space-x-8 md:space-x-12">
          {[
            { href: '/', label: 'Accueil' },
            { href: '/galerie', label: 'Galerie' },
            { href: '/videos', label: 'Vidéos' },
            { href: '/louns', label: 'À propos' },
          ].map(({ href, label }) => (
            <motion.div
              key={href}
              whileHover={{ scale: 1.1, color: '#1F2937' }} // gris foncé
              whileTap={{ scale: 0.95 }}
              className="text-gray-600 font-semibold cursor-pointer transition-colors duration-200"
            >
              <Link href={href} legacyBehavior>
                <a className="block px-2 py-1">{label}</a>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </nav>
  );
}
