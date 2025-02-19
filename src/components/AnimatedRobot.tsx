import React from 'react';
import { Bot } from 'lucide-react';
import { motion } from 'framer-motion';

interface AnimatedRobotProps {
  className?: string;
  size?: number;
}

const AnimatedRobot: React.FC<AnimatedRobotProps> = ({ className = "", size = 24 }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      animate={{
        rotate: [0, -10, 10, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      <Bot className={className} size={size} />
    </motion.div>
  );
};

export default AnimatedRobot;