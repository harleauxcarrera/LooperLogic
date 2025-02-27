import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageUrl, bio }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center border border-white/10 rounded-lg p-8 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
    >
      <motion.div 
        className="w-48 h-48 rounded-full overflow-hidden mb-4 border-2 border-white/20"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-gray-400 mb-4">{role}</p>
      <p className="text-gray-300 text-center">{bio}</p>
    </motion.div>
  );
};

export default TeamMember;