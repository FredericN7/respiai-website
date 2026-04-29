import { motion } from 'framer-motion';
import { Database, Brain, Cpu, FileCheck, Activity } from 'lucide-react';

export function DataFlow() {
  const nodes = [
    { id: 1, icon: Activity, label: '信号', color: '#5EEAD4' },
    { id: 2, icon: Database, label: '接口', color: '#38BDF8' },
    { id: 3, icon: Brain, label: '模型', color: '#5EEAD4' },
    { id: 4, icon: Cpu, label: '智能体', color: '#38BDF8' },
    { id: 5, icon: FileCheck, label: '决策', color: '#22C55E' },
  ];

  return (
    <div className="relative w-full h-[400px]">
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        {/* Connection lines */}
        {nodes.slice(0, -1).map((_, index) => {
          const x1 = ((index + 0.5) / nodes.length) * 100;
          const x2 = ((index + 1.5) / nodes.length) * 100;
          return (
            <g key={index}>
              {/* Base line */}
              <line
                x1={`${x1}%`}
                y1="50%"
                x2={`${x2}%`}
                y2="50%"
                stroke="#E2E8F0"
                strokeWidth="2"
              />
              {/* Animated flow line */}
              <motion.line
                x1={`${x1}%`}
                y1="50%"
                x2={`${x2}%`}
                y2="50%"
                stroke="url(#flowGradient)"
                strokeWidth="2"
                strokeDasharray="8 8"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -32 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </g>
          );
        })}
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5EEAD4" stopOpacity="0" />
            <stop offset="50%" stopColor="#5EEAD4" stopOpacity="1" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Nodes */}
      <div className="relative z-10 flex items-center justify-between h-full px-4">
        {nodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <motion.div
              key={node.id}
              className="flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.15,
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              {/* Node circle with breathing effect */}
              <motion.div
                className="w-14 h-14 rounded-xl flex items-center justify-center relative"
                style={{ 
                  backgroundColor: `${node.color}20`,
                  border: `2px solid ${node.color}`,
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    `0 0 0 0 ${node.color}40`,
                    `0 0 20px 5px ${node.color}20`,
                    `0 0 0 0 ${node.color}40`,
                  ],
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              >
                <Icon 
                  size={24} 
                  style={{ color: node.color }}
                  strokeWidth={2}
                />
              </motion.div>
              
              {/* Label */}
              <span className="text-xs font-medium text-text-secondary">
                {node.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-accent-teal/40"
          style={{
            left: `${15 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2 + i * 0.5,
            ease: "easeInOut",
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}
