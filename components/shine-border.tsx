"'use client'";

import { useState } from 'react';

import { cn } from '@/lib/utils';

interface ShineBorderProps {
  className?: string;
  children: React.ReactNode;
}

/**
 * @name Shine Border
 * @description It is an animated background border effect component with easy to use and configurable props.
 * @param className defines the class name to be applied to the component
 * @param children contains react node elements.
 */
export default function ShineBorder({ className, children }: ShineBorderProps) {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className={cn('group relative rounded-lg overflow-hidden', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        // Delay clearing the position to allow fade out
        setTimeout(() => setPosition(null), 300);
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Animated border with mouse-following highlight */}
      <div
        className={cn(
          'absolute inset-0 transition-all duration-300',
          isHovered ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          background: position
            ? `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.8) 0%, transparent 50%)`
            : 'transparent',
          padding: '1px',
          maskImage: 'linear-gradient(black, black) padding-box, linear-gradient(black, black)',
          WebkitMaskImage:
            'linear-gradient(black, black) padding-box, linear-gradient(black, black)',
          maskComposite: 'xor',
          WebkitMaskComposite: 'xor',
        }}
      />

      {/* Content */}
      <div className="relative rounded-lg bg-neutral-900/90 backdrop-blur-sm p-2">{children}</div>
    </div>
  );
}
