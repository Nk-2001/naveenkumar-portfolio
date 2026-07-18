import React from "react";
import { motion } from "motion/react";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  id?: string;
  key?: React.Key;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 40,
  className = "",
  id,
}: ScrollRevealProps) {
  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      default:
        return {};
    }
  };

  return (
    <motion.div
      id={id}
      initial={{
        opacity: 0,
        ...getDirectionOffset(),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.12, margin: "-50px 0px -50px 0px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 1, 0.5, 1], // Custom ultra-smooth cubic-bezier curve (out-quad/cubic hybrid)
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
