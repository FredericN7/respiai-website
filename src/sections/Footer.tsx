import { motion } from 'framer-motion';

const footerLinks = {
  产品: ['技术架构', '应用场景', '使用文档'],
  资源: ['API文档', '案例研究'],
};

export function Footer() {
  return (
    <footer className="bg-text-primary pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent-teal/20 border border-accent-teal flex items-center justify-center">
                <span className="text-accent-teal font-bold text-sm">R</span>
              </div>
              <span className="font-semibold text-white">RespiAI</span>
            </a>
            <p className="text-sm text-white/60 leading-relaxed">
              零镜（成都）科技有限责任公司<br />
              专业睡眠呼吸监测设备研发
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                      whileHover={{ x: 2 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">
              Copyright © 2026 Lingjing (Chengdu) Technology Co., LTD. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-white/40 hover:text-white/60 transition-colors">
                使用条款
              </a>
              <a href="#" className="text-sm text-white/40 hover:text-white/60 transition-colors">
                隐私政策
              </a>
              <a href="#" className="text-sm text-white/40 hover:text-white/60 transition-colors">
                粤ICP备
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
