'use client';
import { motion } from 'framer-motion';
import { Card as ShadcnCard, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function Card({ title, description, icon }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="my-4 xs:my-6"
    >
      <ShadcnCard className="w-full bg-white/90 backdrop-blur-sm hover-lift">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg xs:text-xl sm:text-2xl">
            {icon && <span className="text-xl sm:text-2xl">{icon}</span>}
            {title}
          </CardTitle>
          <CardDescription className="text-sm xs:text-base text-gray-600">
            {description}
          </CardDescription>
        </CardHeader>
      </ShadcnCard>
    </motion.div>
  );
}