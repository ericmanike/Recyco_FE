'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatedBackground() {
  const [circles, setCircles] = useState<Array<{
    size: number;
    left: number;
    duration: number;
  }>>([]);

  // Only generate circles after component mounts on client
  useEffect(() => {
    setCircles(
      Array.from({ length: 6 }, (_, i) => ({
        size: 40 + i * 20,
        left: Math.random() * 100,
        duration: 15 + Math.random() * 10,
      }))
    );
  }, []);

  return (
    <>
      {/* Moving Gradient Background */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{
          background: "linear-gradient(270deg, #16a34a, #facc15, #f97316, #16a34a)",
          backgroundSize: "600% 600%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Circles - only render after mount */}
      {circles.map((circle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-30 bg-green-600"
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            left: `${circle.left}%`,
          }}
          initial={{ y: -100, scale: 0 }}
          animate={{ y: 900, scale: [0, 1, 0.5] }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />
      ))}
    </>
  );
}