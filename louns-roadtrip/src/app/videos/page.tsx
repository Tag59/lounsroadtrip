"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { useState } from "react";

const videos = [
  {
    src: "/videos/Gisèle.mp4",
    poster: "/images/minia/gisele.png",
    title: "Balade au coucher de soleil",
    desc: "Une fin de journée comme on les aime. Le soleil se couchait doucement sur les routes désertes, avec 'Gisèle' dans le casque. Un moment suspendu, lent et doux, comme si la route m’appartenait.",
  },
  {
    src: "/videos/nightride.mp4",
    poster: "/images/minia/nightride.png",
    title: "Balade nocturne sur la côte",
    desc: "Une virée improvisée sous les étoiles. Les lumières de la côte clignotaient faiblement, la mer noire défilait à mes côtés. 'I like the way you kiss me' résonnait dans mon casque, rendant l’instant presque irréel.",
  },
  {
    src: "/videos/totallyspies.mp4",
    poster: "/images/minia/totallyspies.png",
    title: "Balade sous le soleil méditerranéen",
    desc: "Une journée parfaite. Ciel bleu, routes sèches, le soleil sur la visière teintée. J’ai démarré dans les hauteurs avant de redescendre vers Fréjus, Totally Spies dans les oreilles.",
  },
  {
    src: "/videos/Roi.mp4",
    poster: "/images/minia/roi.png",
    title: "Balade sur la côte d'Azur",
    desc: "Une longue balade, le ciel était bleu, les routes calmes, la mer resplendissante, 'censuré pour le moment' passait dans mon casque, et ce son était parfait pour l'occasion.",
  },
];

export default function VideosPage() {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <main className="min-h-screen bg-white text-gray-800 p-10 flex flex-col items-center">
      {/* Titre principal */}
      <motion.h1
        className="text-4xl font-bold text-center mb-14"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Vidéos de Louns
      </motion.h1>

      {/* Bloc vidéo principal */}
      <motion.section
        key={currentVideo.src}
        className="max-w-4xl w-full bg-gray-100 rounded-xl p-6 shadow-md mb-16 space-y-6"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-center space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
            {currentVideo.title}
          </h2>
          <div className="w-16 h-1 mx-auto bg-gray-500" />
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            {currentVideo.desc}
          </p>
        </motion.div>

        <motion.video
          key={currentVideo.src}
          controls
          poster={currentVideo.poster}
          className="w-full rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <source src={currentVideo.src} type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </motion.video>
      </motion.section>

      {/* Mini galerie */}
      <motion.div
        className="max-w-4xl w-full flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {videos.map((video, idx) => (
          <motion.div
            key={video.src}
            className={`cursor-pointer rounded-lg overflow-hidden shadow-md border-4 ${
              video.src === currentVideo.src
                ? "border-gray-800"
                : "border-transparent hover:border-gray-400"
            }`}
            onClick={() => setCurrentVideo(video)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            layoutId={`video-thumb-${idx}`}
          >
            <img
              src={video.poster}
              alt={video.title}
              className="w-40 h-24 object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      <Footer />
    </main>
  );
}
