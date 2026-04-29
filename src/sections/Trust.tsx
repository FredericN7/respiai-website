import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { Shield, CheckCircle, Award } from 'lucide-react';

const metrics = [
  { value: 98.21, prefix: '', suffix: '%', label: '异常检测灵敏度' },
  { value: 93, prefix: '', suffix: '%', label: "Cohen's Kappa" },
  { value: 6000, prefix: '', suffix: '+', label: '真实用户数据' },
];

const certifications = [
  { icon: Shield, label: '医疗器械注册证' },
  { icon: CheckCircle, label: '华西医院临床验证' },
  { icon: Award, label: '软件著作权' },
];

const partners = [
  '四川大学华西医院',
  '睡眠医学中心',
  '临床验证机构',
  '呼吸障碍专科',
  '专家评审团队',
  '第三方检测机构',
];

export function Trust() {
  return (
    <section id="trust" className="py-24 bg-gradient-reverse">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-text-primary leading-tight mb-4">
            为临床卓越而生
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Metrics */}
          <div className="space-y-8">
            <ScrollReveal>
              <div className="grid grid-cols-3 gap-4">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    className="text-center p-4 bg-white rounded-xl shadow-card border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-accent-teal mb-1">
                      <AnimatedCounter
                        value={metric.value}
                        prefix={metric.prefix}
                        suffix={metric.suffix}
                      />
                    </div>
                    <p className="text-xs text-text-secondary">{metric.label}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            {/* Certifications */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-3 justify-center">
                {certifications.map((cert) => {
                  const Icon = cert.icon;
                  return (
                    <div
                      key={cert.label}
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-100 shadow-sm"
                    >
                      <Icon size={16} className="text-accent-green" />
                      <span className="text-sm font-medium text-text-primary">
                        {cert.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

          {/* Right column - Partners */}
          <ScrollReveal delay={0.3} direction="left">
            <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-6 text-center">
                权威机构认证
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {partners.map((partner, index) => (
                  <motion.div
                    key={partner}
                    className="flex items-center justify-center p-4 bg-gray-50 rounded-xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ backgroundColor: '#E0F7F4' }}
                  >
                    <span className="text-sm font-medium text-text-secondary">
                      {partner}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
