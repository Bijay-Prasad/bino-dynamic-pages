// Modernized CreatorLayout with glassmorphism and subtle animation

"use client";
import { motion } from "framer-motion";

export default function CreatorLayout({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex-1 min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100 p-8 flex items-center justify-center"
    >
      <div className="max-w-2xl w-full mx-auto bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">
        {children}
      </div>
    </motion.div>
  );
}