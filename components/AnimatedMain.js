"use client";
import { motion } from "framer-motion";

export default function AnimatedMain({ children, ...props }) {
  return (
    <motion.main {...props}>
      {children}
    </motion.main>
  );
}