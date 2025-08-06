'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function CTA({ text, href, variant = 'default' }) {
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      className="my-4 xs:my-6 flex justify-center"
    >
      <Button
        variant={variant}
        className="px-6 xs:px-8 py-2 xs:py-3 text-sm xs:text-base sm:text-lg bg-blue-600 hover:bg-blue-700 rounded-full hover:shadow-lg transition-colors duration-300"
        asChild
      >
        <a href={href} aria-label={text}>
          {text}
        </a>
      </Button>
    </motion.div>
  );
}