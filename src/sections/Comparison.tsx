import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ArrowRight, X, Check } from 'lucide-react';

const comparisons = [
  {
    traditional: '预测性输出',
    respiai: '决策性输出',
    description: '超越预测，实现可执行的临床决策',
  },
  {
    traditional: '以模型为中心',
    respiai: '以智能体为中心',
    description: 'AI智能体承担责任，而非仅作分析的模型',
  },
  {
    traditional: '被动分析',
    respiai: '主动判断',
    description: '从观察模式到做出可追责的决策',
  },
];

export function Comparison() {
  return (
    <section className="py-24 bg-bg-primary">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-text-primary leading-tight mb-4">
            为什么选择 RespiAI？
          </h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto">
            超越传统AI分析
          </p>
        </ScrollReveal>

        {/* Comparison table */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {comparisons.map((item, index) => (
              <ScrollReveal key={item.traditional} delay={index * 0.15}>
                <motion.div
                  className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden"
                  whileHover={{ y: -2, boxShadow: '0px 12px 32px rgba(0, 0, 0, 0.1)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-3 items-center">
                    {/* Traditional */}
                    <div className="p-6 text-center border-r border-gray-100">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <X size={16} className="text-gray-400" />
                        <span className="text-sm font-medium text-text-secondary">
                          {item.traditional}
                        </span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center justify-center">
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight size={20} className="text-accent-teal" />
                      </motion.div>
                    </div>

                    {/* RespiAI */}
                    <div className="p-6 text-center border-l border-gray-100 bg-soft-teal/30">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Check size={16} className="text-accent-green" />
                        <span className="text-sm font-semibold text-text-primary">
                          {item.respiai}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
                    <p className="text-xs text-text-secondary text-center">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
