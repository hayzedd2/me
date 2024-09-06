"use client"

import React from 'react';
import { motion } from 'framer-motion';

interface PulsatingCircleProps {
  size?: number;
  color?: string;
}

const PulsatingCircle: React.FC<PulsatingCircleProps> = ({
  size = 7,
  color = '#22c55e'
}) => {
  return (
    <div className="relative mt-[-3px]" style={{ width: size, height: size }}>
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: color }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 0.3, 0.7]
        }}
        transition={{
          duration: 2.3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: color }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 0, 0.7]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      <span 
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};

export default PulsatingCircle;