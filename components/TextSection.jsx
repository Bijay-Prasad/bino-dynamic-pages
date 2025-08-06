"use client";
import { motion } from 'framer-motion';

export default function TextSection({ title, content, align = 'left' }) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { backgroundColor: 'rgba(255, 255, 255, 0.95)', transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      variants={textVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={`my-4 xs:my-6 p-4 xs:p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-md hover-lift ${alignClasses[align]}`}
    >
      <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
        {title}
      </h2>
      <p className="text-sm xs:text-base sm:text-lg text-gray-600">{content}</p>
    </motion.div>
  );
}