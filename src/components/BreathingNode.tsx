import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface BreathingNodeProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'teal' | 'blue' | 'green';
}

export function BreathingNode({ 
  children, 
  className = '',
  size = 'md',
  color = 'teal'
}: BreathingNodeProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
  };

  const colorClasses = {
    teal: 'bg-accent-teal/20 border-accent-teal',
    blue: 'bg-accent-blue/20 border-accent-blue',
    green: 'bg-accent-green/20 border-accent-green',
  };

  return (
    <motion.div
      className={`
        ${sizeClasses[size]}
        ${colorClasses[color]}
        ${className}
        rounded-xl border-2 flex items-center justify-center
        relative
      `}
      animate={{
        scale: [1, 1.05, 1],
        opacity: [1, 0.85, 1],
      }}
      transition={{
        duration: 3,
        ease: 'easeInOut',
        repeat: Infinity,
      }}
    >
      {/* Inner glow effect */}
      <motion.div
        className={`
          absolute inset-0 rounded-xl
          ${color === 'teal' ? 'bg-accent-teal/10' : ''}
          ${color === 'blue' ? 'bg-accent-blue/10' : ''}
          ${color === 'green' ? 'bg-accent-green/10' : ''}
        `}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
