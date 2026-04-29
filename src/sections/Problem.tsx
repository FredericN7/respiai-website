import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Database, Waves, ShieldAlert } from 'lucide-react';

const problems = [
  {
    icon: Database,
    title: '只有数据，没有结果',
    description: '有设备收集心跳、血氧、体动、鼾声等睡眠信号，但是没有设备能在出问题时告诉我。我今年的平均深睡时间比去年少了1小时，这意味着什么？',
  },
  {
    icon: Waves,
    title: '未来焦虑',
    description: '孩子目前睡眠并不稳定，很担心孩子未来的发育受到影响。',
  },
  {
    icon: ShieldAlert,
    title: '不确定是否需要就医',
    description: '老人、孩子显出轻微的呼吸疾病症状，不确定是否会恶化，也不确定是否需要送医。',
  },
];

export function Problem() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-text-primary leading-tight max-w-2xl mx-auto">
            呼吸数据无处不在，{' '}
            <span className="text-text-secondary">但临床决策却难以获得。</span>
          </h2>
        </ScrollReveal>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <ScrollReveal key={problem.title} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full border-gray-100 shadow-card hover:shadow-card-hover transition-shadow duration-300">
                    <CardContent className="p-6">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-soft-teal flex items-center justify-center mb-5">
                        <Icon size={24} className="text-accent-teal" strokeWidth={1.5} />
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-semibold text-text-primary mb-3">
                        {problem.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {problem.description}
                      </p>
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
