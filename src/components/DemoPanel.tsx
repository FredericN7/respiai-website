import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Waveform } from './Waveform';
import { DecisionCard } from './DecisionCard';
import { Activity, AlertTriangle } from 'lucide-react';

export function DemoPanel() {
  const [step, setStep] = useState(0);
  const [showAnomaly, setShowAnomaly] = useState(false);
  const [showDecision, setShowDecision] = useState(false);

  useEffect(() => {
    const cycle = () => {
      setStep(0);
      setShowAnomaly(false);
      setShowDecision(false);
      
      setTimeout(() => setStep(1), 1000);
      setTimeout(() => {
        setShowAnomaly(true);
        setStep(2);
      }, 2500);
      setTimeout(() => setStep(3), 4000);
      setTimeout(() => {
        setShowDecision(true);
        setStep(4);
      }, 5500);
    };

    cycle();
    const interval = setInterval(cycle, 8000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { label: '波形输入', active: step >= 0 },
    { label: '信号处理', active: step >= 1 },
    { label: '异常检测', active: step >= 2 },
    { label: '模式分析', active: step >= 3 },
    { label: '决策输出', active: step >= 4 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
        <div className="flex items-center gap-2">
          <Activity size={16} className="text-accent-teal" />
          <span className="text-sm font-medium text-text-primary">呼吸监测仪</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
          <span className="text-xs text-text-secondary">实时</span>
        </div>
      </div>

      {/* Main content */}
      <div className="p-4">
        {/* Waveform display */}
        <div className="relative bg-gray-50 rounded-xl p-4 mb-4">
          <Waveform width={280} height={100} color="#5EEAD4" animate={true} />
          
          {/* Anomaly marker */}
          <AnimatePresence>
            {showAnomaly && (
              <motion.div
                className="absolute top-4 left-[60%]"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <AlertTriangle size={14} className="text-amber-600" />
                </motion.div>
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-amber-600 whitespace-nowrap">
                  异常
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Decision card */}
        <AnimatePresence>
          {showDecision && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <DecisionCard
                title="检测到不规则呼吸模式"
                description="呼吸节律持续不规则，建议立即进行临床评估。"
                type="warning"
                confidence={87}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress steps */}
        <div className="mt-4 flex items-center justify-between">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <motion.div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium
                  ${s.active 
                    ? 'bg-accent-teal text-white' 
                    : 'bg-gray-100 text-gray-400'
                  }
                `}
                animate={s.active ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                {i + 1}
              </motion.div>
              <span className={`text-[8px] ${s.active ? 'text-text-primary' : 'text-gray-300'}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
