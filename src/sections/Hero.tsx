import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { DataFlow } from '@/components/DataFlow';
import { Shield } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen pt-[72px] bg-bg-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-accent-teal/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-200px)]">
          {/* Left column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge 
                variant="secondary" 
                className="bg-soft-teal text-text-primary border-0 px-3 py-1 text-xs font-medium"
              >
                RespiAI家庭健康智能体
              </Badge>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-text-primary leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              将呼吸数据转化为{' '}
              <span className="text-gradient">临床决策</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg text-text-secondary leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              从原始信号 → 基础模型 → 承担责任的临床AI智能体
            </motion.p>

            {/* Trust badge */}
            <motion.div
              className="flex items-center gap-3 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-100 shadow-sm">
                <Shield size={16} className="text-accent-green" />
                <span className="text-xs text-text-secondary">
                  Respi专为临床级环境打造
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right column - Data Flow Visualization */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-6 lg:p-8">
              <DataFlow />
            </div>

            {/* Floating stats cards */}
            <motion.div
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-card border border-gray-100 p-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-accent-green/20 flex items-center justify-center">
                  <span className="text-accent-green text-xs font-bold">98%</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-text-primary">灵敏度</p>
                  <p className="text-[10px] text-text-secondary">检测准确率</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-xl shadow-card border border-gray-100 p-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-accent-blue/20 flex items-center justify-center">
                  <span className="text-accent-blue text-xs font-bold">&lt;3分</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-text-primary">报告生成</p>
                  <p className="text-[10px] text-text-secondary">快速出结果</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
