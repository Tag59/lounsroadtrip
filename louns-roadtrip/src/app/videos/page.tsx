"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { useState } from "react";

const videos = [
  {
    src: "/videos/Gisèle.mp4",
    poster: "/images/minia/gisele.png",
    title: "Balade au coucher de soleil",
    desc: "Une fin de journée comme on les aime. Le soleil était rayonnant et se couchait, et les routes semblaient presque vides, comme si elles n'étaient qu'à moi. J'avais mis 'Gisèle' dans le casque, tout était calme, lent, beau. C'était une balade simple, mais tellement agréable.",
  },
  {
    src: "/videos/nightride.mp4",
    poster: "/images/minia/nightride.png",
    title: "Balade nocturne sur la côte",
    desc: "Je suis partie faire une petite virée nocturne. Les lumières de la côte sont faibles, la mer noire est à mes côtés et le vent est plus frais. J’écoutais un son que j'aime, \"I like the way you kiss me\", c'était magique.",  
  },
  {
    src: "/videos/totallyspies.mp4",
    poster: "/images/minia/totallyspies.png",
    title: "Balade sous le soleil méditerranéen",
    desc: "C’était l’une de ces journées parfaites, où le ciel est bleu, les routes sont sèches, le soleil brille aux éclats. Je suis partie dans les hauteurs, puis traçais ma route vers Fréjus. Je chantais dans mon casque Totally Spies de Houdi, et je me suis dit : 'C’est ça la liberté !'.",
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
        className="max-w-4xl w-full flex justify-center gap-6"
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
            <video
              src={video.src}
              poster={video.poster}
              className="w-40 h-24 object-cover"
              muted
              preload="metadata"
              playsInline
            />
          </motion.div>
        ))}
      </motion.div>

      <Footer />
    </main>
  );
}
