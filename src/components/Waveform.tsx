import { motion } from 'framer-motion';

interface WaveformProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  animate?: boolean;
}

export function Waveform({ 
  className = '',
  width = 300,
  height = 80,
  color = '#5EEAD4',
  strokeWidth = 2,
  animate = true
}: WaveformProps) {
  // Generate a smooth respiratory-like waveform path
  const generatePath = () => {
    const points = [];
    const amplitude = height * 0.35;
    const centerY = height / 2;
    const frequency = 0.02;
    
    for (let x = 0; x <= width; x += 2) {
      // Combine multiple sine waves for realistic respiratory pattern
      const y = centerY + 
        Math.sin(x * frequency) * amplitude * 0.8 +
        Math.sin(x * frequency * 2.5) * amplitude * 0.15 +
        Math.sin(x * frequency * 0.5) * amplitude * 0.05;
      points.push(`${x},${y}`);
    }
    
    return `M ${points.join(' L ')}`;
  };

  const pathD = generatePath();

  return (
    <svg 
      width={width} 
      height={height} 
      className={className}
      viewBox={`0 0 ${width} ${height}`}
    >
      <defs>
        <linearGradient id={`waveGradient-${color.replace('#', '')}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="50%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="0.3" />
        </linearGradient>
      </defs>
      
      {/* Background grid lines */}
      <line x1="0" y1={height/2} x2={width} y2={height/2} stroke="#E2E8F0" strokeWidth="1" />
      
      {/* Main waveform */}
      <motion.path
        d={pathD}
        fill="none"
        stroke={`url(#waveGradient-${color.replace('#', '')})`}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={animate ? { pathLength: 0, opacity: 0 } : {}}
        animate={animate ? { 
          pathLength: 1, 
          opacity: 1,
        } : {}}
        transition={animate ? {
          pathLength: { duration: 2, ease: "easeInOut" },
          opacity: { duration: 0.5 },
        } : {}}
      />
      
      {/* Animated dot following the wave */}
      {animate && (
        <motion.circle
          r="4"
          fill={color}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path={pathD}
          />
        </motion.circle>
      )}
    </svg>
  );
}
