import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Database, Brain, Cpu, ChevronRight, Check } from 'lucide-react';

const architectures = [
  {
    number: '01',
    icon: Database,
    title: '数据接口层',
    description: '将原始信号转化为结构化、干净的数据，为分析做好准备。',
    features: [
      '多设备集成',
      '实时信号处理',
      '降噪与滤波',
    ],
    color: '#5EEAD4',
  },
  {
    number: '02',
    icon: Brain,
    title: '基础模型层',
    description: '通过深度学习理解呼吸动态和模式。',
    features: [
      '深度模式识别',
      '时序分析',
      '异常检测',
    ],
    color: '#38BDF8',
  },
  {
    number: '03',
    icon: Cpu,
    title: 'AI智能体层',
    description: '输出可追责的判断，而不仅仅是分析结果。',
    features: [
      '决策能力',
      '责任追踪',
      '临床集成',
    ],
    color: '#22C55E',
  },
];

export function Architecture() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="architecture" className="py-24 bg-gradient-soft">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-text-primary leading-tight mb-4">
            从信号到决策
          </h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto">
            完整的呼吸智能处理流程
          </p>
        </ScrollReveal>

        {/* Architecture cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {architectures.map((arch, index) => {
            const Icon = arch.icon;
            const isHovered = hoveredIndex === index;

            return (
              <ScrollReveal key={arch.title} delay={index * 0.1}>
                <motion.div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
                    <CardContent className="p-6">
                      {/* Number and icon */}
                      <div className="flex items-start justify-between mb-5">
                        <span 
                          className="text-4xl font-bold opacity-20"
                          style={{ color: arch.color }}
                        >
                          {arch.number}
                        </span>
                        <motion.div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ 
                            backgroundColor: `${arch.color}20`,
                            border: `1px solid ${arch.color}40`,
                          }}
                          animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon size={20} style={{ color: arch.color }} strokeWidth={1.5} />
                        </motion.div>
                      </div>

                      {/* Title and description */}
                      <h3 className="text-lg font-semibold text-text-primary mb-2">
                        {arch.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed mb-5">
                        {arch.description}
                      </p>

                      {/* Features list */}
                      <AnimatePresence>
                        <motion.ul 
                          className="space-y-2"
                          initial={false}
                          animate={{ height: 'auto' }}
                        >
                          {arch.features.map((feature, fIndex) => (
                            <motion.li
                              key={feature}
                              className="flex items-center gap-2 text-sm"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: fIndex * 0.1 }}
                            >
                              <Check size={14} style={{ color: arch.color }} />
                              <span className="text-text-secondary">{feature}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </AnimatePresence>

                      {/* Hover indicator */}
                      <motion.div
                        className="mt-5 flex items-center gap-1 text-sm font-medium"
                        style={{ color: arch.color }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                      >
                        <span>了解更多</span>
                        <ChevronRight size={14} />
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Connection line visualization */}
        <div className="hidden md:block mt-8">
          <div className="flex items-center justify-center gap-4">
            {architectures.slice(0, -1).map((_, index) => (
              <div key={index} className="flex items-center">
                <motion.div
                  className="w-24 h-0.5 bg-gradient-to-r from-accent-teal to-accent-blue"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                  style={{ originX: 0 }}
                />
                <motion.div
                  className="w-2 h-2 rounded-full bg-accent-blue"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
