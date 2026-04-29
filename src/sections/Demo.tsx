import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { DemoPanel } from '@/components/DemoPanel';
import { Badge } from '@/components/ui/badge';
import { Activity, AlertTriangle, Brain, FileCheck } from 'lucide-react';

const steps = [
  {
    number: '1',
    label: '波形实时流动',
    icon: Activity,
    color: '#5EEAD4',
  },
  {
    number: '2',
    label: '自动检测异常',
    icon: AlertTriangle,
    color: '#F59E0B',
  },
  {
    number: '3',
    label: '模型标记模式',
    icon: Brain,
    color: '#38BDF8',
  },
  {
    number: '4',
    label: '智能体输出判断',
    icon: FileCheck,
    color: '#22C55E',
  },
];

export function Demo() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            <ScrollReveal>
              <Badge 
                variant="secondary" 
                className="bg-soft-teal text-text-primary border-0 px-3 py-1 text-xs font-medium mb-4"
              >
                实时演示
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-text-primary leading-tight mb-4">
                见证呼吸智能的实际应用
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                观看 RespiAI 如何将原始呼吸信号转化为可执行的临床决策。
              </p>
            </ScrollReveal>

            {/* Steps */}
            <div className="space-y-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <ScrollReveal key={step.number} delay={index * 0.1}>
                    <motion.div
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                      whileHover={{ x: 4 }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ 
                          backgroundColor: `${step.color}20`,
                          border: `1px solid ${step.color}40`,
                        }}
                      >
                        <Icon size={18} style={{ color: step.color }} strokeWidth={1.5} />
                      </div>
                      <div className="flex items-center gap-3">
                        <span 
                          className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium text-white"
                          style={{ backgroundColor: step.color }}
                        >
                          {step.number}
                        </span>
                        <span className="text-sm font-medium text-text-primary">
                          {step.label}
                        </span>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Right column - Demo Panel */}
          <ScrollReveal delay={0.2} direction="left">
            <DemoPanel />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
