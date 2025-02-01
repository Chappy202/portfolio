'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { ReactNode, useRef } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
}

export const FadeInSection = ({ children, className }: FadeInSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className={className}>
      <motion.div style={{ opacity }}>{children}</motion.div>
    </div>
  );
};
