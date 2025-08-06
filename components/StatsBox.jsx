'use client';
import { motion } from 'framer-motion';
import { NumberTicker } from './magicui/number-ticker';

export default function StatsBox({ stats }) {
  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const statItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05, backgroundColor: '#e0f2fe', transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      variants={statsVariants}
      initial="hidden"
      animate="visible"
      className="my-4 xs:my-6 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={statItemVariants}
          whileHover="hover"
          className="bg-white/90 backdrop-blur-sm p-4 xs:p-6 rounded-xl text-center shadow-md hover-lift"
        >
          <p className=" text-blue-600">
            <NumberTicker
              value={stat.value}
              className="text-2xl xs:text-4xl sm:text-6xl whitespace-pre-wrap font-bold tracking-tighter text-black dark:text-white"
            />
            <span className='text-2xl font-bold text-black dark:text-white xs:text-4xl sm:text-6xl'>+</span>
          </p>
          <p className="text-sm xs:text-base text-gray-600">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}