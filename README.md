# RespiAI 呼吸贴 — 官网

> 基于柔性传感器的家用睡眠呼吸暂停综合征（OSA）初筛设备。
> 由四川大学华西医院睡眠医学中心临床验证，3分钟生成AI解读报告。
>
> **官网**：[https://www.respiai.info](https://www.respiai.info)

---

## 一、产品简介

**RespiAI 呼吸贴**是一款面向家庭用户的睡眠呼吸监测设备，采用0.001毫米级柔性传感器技术，用户只需将传感器贴于上腹部入睡，即可自动采集整夜呼吸信号。睡醒后通过微信小程序上传数据，AI在3分钟内生成包含AHI指数、呼吸波形、严重程度分级等指标的专业PDF报告。

**核心价值**：帮助潜在或已确诊的睡眠呼吸暂停用户在家庭和临床场景之间建立低成本、可重复的初筛与随访通道。

---

## 二、临床验证

RespiAI 已通过 **四川大学华西医院睡眠医学中心** 临床验证。

| 验证指标 | RespiAI结果 | AASM国际标准最低要求 | 结论 |
|---------|-----------|---------------------|------|
| Cohen's Kappa | **0.93** | 0.75 | ✅ 远超标准 |
| 灵敏度 | **98.21%** | 85% | ✅ 远超标准 |
| 特异度 | **94.87%** | 80% | ✅ 远超标准 |

**验证机构**：四川大学华西医院睡眠医学中心  
**评审专家**：张烨教授、任蓉教授等  
**医疗器械注册证**：编号 13329903  
**软件著作权**：编号 13329903

---

## 三、产品规格

| 参数 | 详情 |
|------|------|
| 传感器精度 | 0.001毫米级 |
| 柔性传感器杨氏模量 | 0.4 mPA |
| 续航时间 | 20小时 |
| 充电接口 | Type-C |
| 主机循环使用次数 | 500次以上 |
| 报告格式 | PDF |
| 报告生成时间 | ≤ 3分钟 |
| 数据传输 | 微信小程序上传 |
| 解读方式 | AI智能解读 |
| 分析维度 | 呼吸均匀度、呼吸频率、呼吸事件、呼吸波形、入睡时间、体动次数 |
| AHI分级标准 | AASM标准（<5正常 / 5-15轻度 / 15-30中度 / >30重度） |
| 适用人群 | 成人、儿童（5-18岁） |
| 禁忌人群 | 胶带过敏者 |

---

## 四、报告内容

每份PDF报告包含：

- AHI指数（睡眠呼吸暂停低通气指数）
- 呼吸暂停事件次数
- 低通气事件次数
- 呼吸均匀度分析
- 呼吸频率分析
- 呼吸波形图
- 入睡时间分析
- 体动次数统计
- 严重程度分级（正常 / 轻度 / 中度 / 重度）
- AI智能解读

---

## 五、套餐与定价

| 套餐 | 内容 | 价格 |
|------|------|------|
| 成人版一机四贴 | 主机 + 4张传感器贴片 | 499元 |
| 成人版一机七贴 | 主机 + 7张传感器贴片 | 689元 |
| 耗材补充包（3张） | 传感器贴片 × 3 | 199元 |
| 耗材补充包（6张） | 传感器贴片 × 6 | 389元 |

> 主机可循环使用500次以上，每次监测消耗一张贴片。

---

## 六、常见问题（FAQ摘要）

**Q: 什么是睡眠呼吸暂停综合征？**  
A: 一种常见睡眠障碍，睡眠中呼吸反复暂停。AHI<5为正常，5-15轻度，15-30中度，>30重度。长期不治疗可能增加高血压、心脏病、糖尿病风险。

**Q: 如何在家检测？**  
A: 睡前将RespiAI贴于上腹部，设备自动记录整夜呼吸。睡醒后用微信小程序上传数据，3分钟内生成PDF报告。

**Q: 适合什么人群？**  
A: 成人及儿童（5-18岁）。特别适合习惯性打鼾者、白天嗜睡者、肥胖人群、高血压患者、怀疑有睡眠呼吸暂停者。

**Q: 和医院PSG检查有什么区别？**  
A: PSG需住院一晚，价格500-2000元。RespiAI是居家初筛工具，无需住院，3分钟出报告。已通过华西医院验证，与PSG结果高度一致（Kappa 0.93）。

**完整FAQ**：[https://www.respiai.info/#faq](https://www.respiai.info/#faq)

---

## 七、技术栈

- **框架**：React + TypeScript + Vite
- **样式**：Tailwind CSS + shadcn/ui
- **动画**：Framer Motion
- **图标**：Lucide React
- **部署**：Vercel
- **域名**：respiai.info

---

## 八、GEO 结构化数据

本网站实现了完整的 Schema.org 结构化数据，帮助搜索引擎和AI大模型（ChatGPT/Claude/Kimi等）准确理解和推荐 RespiAI：

| Schema 类型 | 用途 |
|------------|------|
| FAQPage | 12组常见问题-答案对 |
| MedicalDevice | 医疗器械产品信息 |
| MedicalTrial | 华西医院临床验证数据 |
| HowTo | 6步使用指南 |
| MedicalWebPage | 医疗页面标识 |
| Organization | 公司信息 |
| WebSite | 网站基本信息 |
| BreadcrumbList | 面包屑导航 |

---

## 九、项目结构

```
app/
├── index.html                  # 网页入口
├── public/
│   ├── icon-kf1.jpg            # 客服二维码
│   ├── robots.txt              # 搜索引擎规则
│   └── sitemap.xml             # 网站地图
├── src/
│   ├── App.tsx                 # 主应用组件
│   ├── App.css                 # 全局样式
│   ├── main.tsx                # 应用入口
│   ├── index.css               # Tailwind配置
│   ├── sections/               # 页面各板块
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Architecture.tsx
│   │   ├── Demo.tsx
│   │   ├── Comparison.tsx
│   │   ├── UseCases.tsx
│   │   ├── Trust.tsx
│   │   ├── FAQ.tsx
│   │   ├── Footer.tsx
│   │   └── LLMs.tsx            # GEO结构化数据注入
│   ├── components/             # 可复用组件
│   │   ├── ScrollReveal.tsx
│   │   ├── DataFlow.tsx
│   │   ├── BreathingNode.tsx
│   │   ├── Waveform.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── DecisionCard.tsx
│   │   └── DemoPanel.tsx
│   ├── components/ui/          # shadcn/ui 组件库
│   ├── hooks/
│   │   └── use-mobile.ts
│   └── lib/
│       └── utils.ts
├── tailwind.config.js          # Tailwind主题配置
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
├── package.json
└── package-lock.json
```

---

## 十、本地开发

### 环境要求
- Node.js 18+
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

构建输出位于 `dist/` 目录。

---

## 十一、部署

本项目使用 **Vercel** 自动部署：

1. 代码推送到 GitHub 仓库
2. Vercel 自动检测变更
3. 自动构建并部署
4. 生产环境地址：[https://www.respiai.info](https://www.respiai.info)

```bash
# 推送更新
npm run build
git add .
git commit -m "描述更新内容"
git push origin main
```

---

## 十二、公司信息

**零镜（成都）科技有限责任公司**

- 地址：中国（四川）自由贸易试验区成都高新区剑南大道中段716号1栋13层1302号
- 客服电话：189-2884-5388
- 邮箱：lijiuyao@zeromat.cn
- 微信公众号：RespiAI呼吸贴

---

## License

Copyright © 2026 Lingjing (Chengdu) Technology Co., LTD. All rights reserved.
