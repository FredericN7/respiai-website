import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: '什么是睡眠呼吸暂停综合征？',
    answer: '睡眠呼吸暂停综合征（OSA）是一种常见的睡眠障碍，患者在睡眠过程中呼吸反复暂停，导致睡眠质量下降和白天嗜睡。主要症状包括打鼾、夜间憋醒、晨起头痛、白天嗜睡等。根据AASM标准，AHI指数<5为正常，5-15为轻度，15-30为中度，>30为重度。长期不治疗可能增加高血压、心脏病、糖尿病等风险。',
  },
  {
    question: '睡眠呼吸暂停综合征的患者人群有哪些？',
    answer: '儿童、肥胖者、吸烟者、有饮酒习惯者、鼻炎患者等。其中最容易受影响的人群是儿童，睡眠呼吸暂停会严重影响婴幼儿身体以及大脑的氧气摄入和发育过程。',
  },
  {
    question: '如何在家检测睡眠呼吸暂停？',
    answer: '使用RespiAI呼吸贴可以在家进行睡眠呼吸暂停初筛。只需在睡前将柔性传感器贴于胸前，设备会自动记录整夜的呼吸信号。睡醒后通过微信小程序上传数据，3分钟内即可生成包含AHI指数、呼吸事件、呼吸波形等详细指标的PDF报告。RespiAI已通过四川大学华西医院临床验证，Cohen\'s Kappa达0.93，灵敏度98.21%。',
  },
  {
    question: 'RespiAI呼吸贴是如何工作的？',
    answer: 'RespiAI呼吸贴采用柔性传感器技术，通过0.001毫米级精度的传感器采集胸腹部的微小位移变化，转化为呼吸信号。设备续航20小时，通过Type-C充电，主机可循环使用500次以上。采集的数据包括呼吸均匀度、呼吸频率、呼吸事件、呼吸波形、入睡时间和体动次数。数据通过微信小程序上传后，由AI模型进行分析，生成专业报告。',
  },
  {
    question: 'RespiAI的临床验证数据如何？',
    answer: 'RespiAI呼吸贴已通过四川大学华西医院睡眠医学中心的临床验证。验证结果：Cohen\'s Kappa值为0.93（AASM最低要求0.75），灵敏度为98.21%（AASM最低要求85%），特异度为94.87%（AASM最低要求80%）。所有指标均远超AASM国际标准要求。临床验证由华西医院睡眠呼吸障碍专科张烨教授、任蓉教授等专家评审确认。',
  },
  {
    question: 'RespiAI呼吸贴适合什么人群？',
    answer: 'RespiAI呼吸贴适用于成人和儿童（5-18岁）。特别适合以下人群：习惯性打鼾者、白天嗜睡者、肥胖人群、高血压患者、怀疑有睡眠呼吸暂停者、需要进行睡眠呼吸监测随访的患者。禁忌人群：胶带过敏者。儿童版专用于5-18岁青少年的睡眠呼吸监测。',
  },
  {
    question: 'RespiAI的核心价值是什么？',
    answer: '提前为儿童（5-18岁）发现潜在的呼吸暂停问题并进行医学诊断，在身体和大脑发育受到不可逆的影响之前让家长明确了解孩子的睡眠呼吸问题。',
  },
  {
    question: 'RespiAI和医院PSG检查有什么区别？',
    answer: 'PSG（多导睡眠图）是医院的标准检查，需要住院一晚，连接多种电极，价格较高（通常500-2000元）。RespiAI呼吸贴是居家初筛工具，无需住院，使用简便，价格更亲民（86元起），3分钟出报告。RespiAI已通过华西医院临床验证，与PSG结果高度一致（Kappa 0.93）。',
  },
  {
    question: '如何使用RespiAI呼吸贴？',
    answer: '使用步骤：1. 睡前将RespiAI呼吸贴贴于上腹部；2. 确保设备开机，正常记录呼吸信号；3. 正常入睡，设备会自动监测整夜呼吸；4. 睡醒后通过微信小程序上传数据；5. 等待不超过3分钟，AI自动生成PDF报告；6. 可在小程序中查看报告，或联系客服获取解读。每次监测消耗一张呼吸贴贴片。',
  },
  {
    question: 'RespiAI的报告包含哪些内容？',
    answer: 'RespiAI的PDF报告包含：AHI指数（睡眠呼吸暂停低通气指数）、呼吸暂停事件次数、低通气事件次数、呼吸均匀度分析、呼吸频率分析、呼吸波形图、入睡时间分析、体动次数统计、严重程度分级（正常/轻度/中度/重度，基于AASM标准）。报告由AI智能解读，可联系客服获取人工深度解读。',
  },
  {
    question: '睡眠呼吸暂停不治疗有什么危害？',
    answer: '睡眠呼吸暂停如果不及时治疗，可能导致：1. 心血管疾病风险增加（高血压、心律失常、冠心病）；2. 代谢紊乱（糖尿病风险增加）；3. 认知功能下降（记忆力减退、注意力不集中）；4. 白天嗜睡导致交通事故风险增加；5. 生活质量下降。建议有打鼾、白天嗜睡等症状的人群尽早进行筛查。RespiAI呼吸贴提供便捷的居家初筛方案。',
  },
  {
    question: 'RespiAI呼吸贴的价格是多少？',
    answer: 'RespiAI提供多种套餐：一机四贴499元、一机七贴689元；呼吸贴耗材补充包三张呼吸贴199元，六张呼吸贴389元。每次监测消耗一张贴片。',
  },
];

function FAQAccordionItem({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-card hover:shadow-card-hover transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <button
        className="w-full flex items-center justify-between p-5 text-left gap-4"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-soft-teal flex items-center justify-center flex-shrink-0">
            <HelpCircle size={16} className="text-accent-teal" />
          </div>
          <span className="font-medium text-text-primary text-sm sm:text-base">
            {item.question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={20} className="text-text-secondary" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0">
              <div className="pl-11 border-t border-gray-50 pt-4">
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-gradient-soft">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-soft-teal rounded-full mb-4">
            <HelpCircle size={14} className="text-accent-teal" />
            <span className="text-xs font-medium text-text-primary">常见问题</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-text-primary leading-tight mb-4">
            关于RespiAI呼吸贴
          </h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto">
            睡眠呼吸监测的常见问题解答，帮助您了解睡眠呼吸健康
          </p>
        </ScrollReveal>

        {/* FAQ list */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQAccordionItem key={index} item={faq} index={index} />
          ))}
        </div>

        {/* Bottom note */}
        <ScrollReveal delay={0.3} className="mt-10">
          <div className="bg-white rounded-xl border border-gray-100 shadow-card p-6 text-center">
            <p className="text-sm text-text-secondary mb-2">
              还有其他问题？
            </p>
            <p className="text-sm text-text-primary">
              联系客服微信
              <span className="font-semibold text-accent-teal mx-1">RespiAI呼吸贴</span>
              或拨打
              <span className="font-semibold text-accent-teal mx-1">189-2884-5388</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
