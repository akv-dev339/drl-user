"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface JournalCardProps {
  title: string;
  description: string;
 // issn: string;
  href: string;
}

export default function JournalCard({
  title,
  description,
  //issn,
  href,
}: JournalCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white/80 backdrop-blur-lg rounded-2xl p-8 
                 shadow-lg hover:shadow-2xl transition-all duration-300
                 border border-gray-200 hover:border-blue-400 flex flex-col justify-between"
    >
      {/* Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-800 to-indigo-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition" />

      <div>
        <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition">
          {title}
        </h2>

        <p className="mt-4 text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* ISSN Badge */}
        {/* <span className="inline-block mt-6 px-3 py-1 text-sm font-medium bg-blue-50 text-blue-800 rounded-full border border-blue-200">
          ISSN: {issn}
        </span> */}
      </div>

      <Link
        href={href}
        className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 
                   bg-blue-900 text-white rounded-xl font-medium 
                   hover:bg-blue-800 transition-all duration-300 
                   group-hover:shadow-lg"
      >
        View Journal →
      </Link>
    </motion.div>
  );
}