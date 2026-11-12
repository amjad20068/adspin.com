"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface SpiralMarkProps {
  size?: number;
  className?: string;
  animate?: boolean;
  speed?: number; // seconds per rotation
  interactive?: boolean;
}

export const SpiralMark: React.FC<SpiralMarkProps> = ({
  size = 64,
  className = "",
  animate = true,
  speed = 28,
  interactive = true,
}) => {
  return (
    <motion.div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      animate={
        animate
          ? {
              rotate: 360,
            }
          : undefined
      }
      transition={
        animate
          ? {
              duration: speed,
              repeat: Infinity,
              ease: "linear",
            }
          : undefined
      }
      whileHover={interactive ? { scale: 1.1, rotate: 180, transition: { duration: 0.6 } } : undefined}
    >
      <Image
        src="/images/logos/spiral.png"
        alt="AD SPIN Signature Red Spiral"
        width={size}
        height={size}
        className="w-full h-full object-contain pointer-events-none drop-shadow-sm"
        priority
      />
    </motion.div>
  );
};

