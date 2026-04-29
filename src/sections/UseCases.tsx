import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Monitor, Wifi, Cpu } from 'lucide-react';

const useCases = [
  {
    icon: Monitor,
    title: 'ICU监测',
    description: '为重症患者提供实时呼吸监测，即时异常警报和临床决策支持。',
    stats: [
      { value: '50%', label: '更快响应' },
      { value: '30%', label: '减少误报' },
    ],
  },
  {
    icon: Wifi,
    title: '远程健康监测',
    description: '为居家慢性病患者提供连续呼吸追踪，实现主动护理和早期干预。',
    stats: [
      { value: '24/7', label: '全天候监测' },
      { value: '90%', label: '患者满意度' },
    ],
  },
  {
    icon: Cpu,
    title: '智能医疗设备',
    description: '为现有呼吸设备和可穿戴设备添加智能，实现无缝集成和实时分析。',
    stats: [
      { value: '100+', label: '设备类型' },
      { value: '&lt;100ms', label: '响应延迟' },
    ],
  },
];

export function UseCases() {
  return (
    <section id="usecases" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-text-primary leading-tight mb-4">
            医疗行业信赖之选
          </h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto">
            从ICU到家庭护理
          </p>
        </ScrollReveal>

        {/* Use case cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <ScrollReveal key={useCase.title} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300">
                    <CardContent className="p-6">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-soft-teal flex items-center justify-center mb-5">
                        <Icon size={24} className="text-accent-teal" strokeWidth={1.5} />
                      </div>

                      {/* Title and description */}
                      <h3 className="text-lg font-semibold text-text-primary mb-3">
                        {useCase.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed mb-6">
                        {useCase.description}
                      </p>

                      {/* Stats */}
                      <div className="flex gap-6 pt-4 border-t border-gray-100">
                        {useCase.stats.map((stat) => (
                          <div key={stat.label}>
                            <p 
                              className="text-lg font-bold text-accent-teal"
                              dangerouslySetInnerHTML={{ __html: stat.value }}
                            />
                            <p className="text-xs text-text-secondary">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
