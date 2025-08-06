"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ImageBlock({ src, alt, width, height }) {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.03, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      variants={imageVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="my-4 xs:my-6 flex justify-center"
    >
      <Image
        src={src}
        alt={alt || 'Dynamic Image'}
        width={width}
        height={height}
        className="rounded-lg shadow-lg"
        // className="w-full h-48 xs:h-56 sm:h-64 md:h-80 object-cover rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
        loading="lazy"
      />
    </motion.div>
  );
}