"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function SplitLanding() {
  const [hovered, setHovered] = useState<"journals" | "lab" | null>(null);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* 🔵 Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-green-950 opacity-95" />

      

      {/* 🌌 Floating Blur Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl top-20 left-20 animate-pulse" />
        <div className="absolute w-96 h-96 bg-green-500/20 rounded-full blur-3xl bottom-20 right-20 animate-pulse" />
      </div>

      {/* 🏛 Branding Header */}
      <div className="relative z-10 text-center pt-20 pb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
          DNA-DS Research Laboratory (DRL)
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Advancing Knowledge Through Scientific Innovation, 
          Peer-Reviewed Publications, and Multidisciplinary Research Excellence.
        </p>
      </div>

      {/* 🧩 Split Section */}
      <div className="relative z-10 flex flex-col md:flex-row h-[65vh]">

        {/* LEFT – JOURNALS */}
        <motion.div
          onHoverStart={() => setHovered("journals")}
          onHoverEnd={() => setHovered(null)}
          animate={{ flex: hovered === "journals" ? 1.15 : 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative flex flex-col items-center justify-center 
                     bg-blue-900/70 backdrop-blur-lg 
                     text-white cursor-pointer 
                     border-r border-white/10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-semibold mb-6"
          >
            DRL Journals
          </motion.h2>

          <Link
            href="/journals"
            className="px-8 py-3 rounded-md 
                       border border-white/40 
                       bg-white/10 backdrop-blur-md 
                       hover:bg-white hover:text-blue-900 
                       transition-all duration-300"
          >
            Explore Journals
          </Link>
        </motion.div>

        {/* RIGHT – LAB */}
        <motion.div
          onHoverStart={() => setHovered("lab")}
          onHoverEnd={() => setHovered(null)}
          animate={{ flex: hovered === "lab" ? 1.15 : 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative flex flex-col items-center justify-center 
                     bg-green-900/70 backdrop-blur-lg 
                     text-white cursor-pointer"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-semibold mb-6"
          >
            DNA-DS Research Lab
          </motion.h2>

          <a
  href="https://drl-dna-ds-research-laboratoy.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-3 rounded-md 
             border border-white/40 
             bg-white/10 backdrop-blur-md 
             hover:bg-white hover:text-green-900 
             transition-all duration-300"
>
  Visit Lab
</a>
        </motion.div>

      </div>
    </div>
  );
}
