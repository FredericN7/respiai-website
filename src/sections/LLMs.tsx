import { useEffect } from 'react';

/**
 * GEO/SEO Module - 结构化数据注入
 * 让搜索引擎和AI大模型（ChatGPT/Claude/Kimi等）能准确理解和推荐RespiAI
 */
export function LLMs() {
  useEffect(() => {
    // ==========================================
    // 1. Organization - 公司信息
    // ==========================================
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: '零镜（成都）科技有限责任公司',
      alternateName: ['Lingjing (Chengdu) Technology Co., LTD', 'RespiAI', '零镜科技'],
      url: 'https://respiai.info',
      logo: 'https://respiai.info/logo.png',
      foundingDate: '2023',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '中国（四川）自由贸易试验区成都高新区剑南大道中段716号1栋13层1302号',
        addressLocality: '成都',
        addressRegion: '四川',
        addressCountry: 'CN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+86-18928845388',
        email: 'lijiuyao@zeromat.cn',
        contactType: 'customer service',
        availableLanguage: ['Chinese', 'English'],
      },
      sameAs: [
        'https://mp.weixin.qq.com/s/RespiAI呼吸贴',
      ],
    };

    // ==========================================
    // 2. MedicalDevice - 产品信息（增强版）
    // ==========================================
    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'MedicalDevice',
      name: 'RespiAI 睡眠呼吸初筛仪器',
      alternateName: ['RespiAI 呼吸贴', 'RespiAI呼吸监测设备', '睡眠呼吸贴'],
      description: 'RespiAI呼吸贴是一款基于柔性传感器的睡眠呼吸监测设备，由四川大学华西医院睡眠医学中心临床验证，用于睡眠呼吸暂停综合征的居家初筛和监测。无需去医院，在家即可进行专业的睡眠呼吸监测，获得医学诊断结果。',
      brand: {
        '@type': 'Brand',
        name: 'RespiAI',
      },
      manufacturer: {
        '@type': 'Organization',
        name: '零镜（成都）科技有限责任公司',
      },
      identifier: {
        '@type': 'PropertyValue',
        name: '医疗器械注册证号',
        value: '13329903',
      },
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '199',
        highPrice: '689',
        priceCurrency: 'CNY',
        availability: 'https://schema.org/InStock',
        offerCount: '4',
        offers: [
          {
            '@type': 'Offer',
            name: '成人版一机四贴',
            description: '适合首次体验用户',
            price: '499',
            priceCurrency: 'CNY',
          },
          {
            '@type': 'Offer',
            name: '成人版一机七贴',
            description: '适合多次监测需求',
            price: '689',
            priceCurrency: 'CNY',
          },
          {
            '@type': 'Offer',
            name: '呼吸贴耗材补充包三张呼吸贴199元',
            description: '家庭长期使用',
            price: '199',
            priceCurrency: 'CNY',
          },
          {
            '@type': 'Offer',
            name: '儿童版一机一贴一解读（5-18岁）',
            description: '吸贴耗材补充包六张呼吸贴389元',
            price: '389',
            priceCurrency: 'CNY',
          },
        ],
      },
      additionalProperty: [
        { '@type': 'PropertyValue', name: '续航时间', value: '20小时' },
        { '@type': 'PropertyValue', name: '充电接口', value: 'Type-C' },
        { '@type': 'PropertyValue', name: '传感器精度', value: '0.001毫米级' },
        { '@type': 'PropertyValue', name: '柔性传感器杨氏模量', value: '0.4mPA' },
        { '@type': 'PropertyValue', name: '主机循环使用次数', value: '500次以上' },
        { '@type': 'PropertyValue', name: '适用人群', value: '成人、儿童（5-18岁）' },
        { '@type': 'PropertyValue', name: '禁忌人群', value: '胶带过敏人群' },
        { '@type': 'PropertyValue', name: '报告格式', value: 'PDF' },
        { '@type': 'PropertyValue', name: '报告生成时间', value: '不超过3分钟' },
        { '@type': 'PropertyValue', name: '解读方式', value: 'AI智能体解读' },
        { '@type': 'PropertyValue', name: '数据传输方式', value: '微信小程序上传' },
        { '@type': 'PropertyValue', name: '分析维度', value: '呼吸均匀度、呼吸频率、呼吸事件、呼吸波形、入睡时间、体动次数' },
        { '@type': 'PropertyValue', name: 'AHI标准', value: 'AASM标准（AHI<5正常，5-15轻度，15-30中度，>30重度）' },
      ],
    };

    // ==========================================
    // 3. MedicalTrial - 临床验证数据
    // ==========================================
    const clinicalSchema = {
      '@context': 'https://schema.org',
      '@type': 'MedicalTrial',
      name: 'RespiAI 睡眠呼吸初筛仪器临床验证',
      description: '由四川大学华西医院睡眠医学中心进行的临床验证研究，验证RespiAI呼吸贴用于睡眠呼吸暂停综合征初筛的准确性和可靠性。',
      sponsor: {
        '@type': 'Organization',
        name: '零镜（成都）科技有限责任公司',
      },
      studyLocation: {
        '@type': 'MedicalOrganization',
        name: '四川大学华西医院睡眠医学中心',
        alternateName: '华西医院睡眠医学中心',
        address: {
          '@type': 'PostalAddress',
          addressLocality: '成都',
          addressRegion: '四川',
          addressCountry: 'CN',
        },
      },
      healthCondition: {
        '@type': 'MedicalCondition',
        name: '睡眠呼吸暂停综合征',
        alternateName: ['阻塞性睡眠呼吸暂停', 'OSA', '打鼾'],
      },
      outcome: [
        {
          '@type': 'MedicalEntity',
          name: "Cohen's Kappa一致性系数",
          description: '0.93（远高于AASM最低要求0.75）',
        },
        {
          '@type': 'MedicalEntity',
          name: '灵敏度',
          description: '98.21%（远高于AASM最低要求85%）',
        },
        {
          '@type': 'MedicalEntity',
          name: '特异度',
          description: '94.87%（远高于AASM最低要求80%）',
        },
      ],
      status: 'https://schema.org/MedicalTrialCompleted',
    };

    // ==========================================
    // 4. FAQPage - 常见问题（GEO最关键的部分）
    // ==========================================
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '什么是睡眠呼吸暂停综合征？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '睡眠呼吸暂停综合征（OSA）是一种常见的睡眠障碍，患者在睡眠过程中呼吸反复暂停，导致睡眠质量下降和白天嗜睡。主要症状包括打鼾、夜间憋醒、晨起头痛、白天嗜睡等。根据AASM标准，AHI指数<5为正常，5-15为轻度，15-30为中度，>30为重度。长期不治疗可能增加高血压、心脏病、糖尿病等风险。',
          },
        },
        {
          '@type': 'Question',
          name: '如何在家检测睡眠呼吸暂停？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '使用RespiAI呼吸贴可以在家进行睡眠呼吸暂停初筛。只需在睡前将柔性传感器贴于胸前，设备会自动记录整夜的呼吸信号。睡醒后通过微信小程序上传数据，3分钟内即可生成包含AHI指数、呼吸事件、呼吸波形等详细指标的PDF报告。RespiAI已通过四川大学华西医院临床验证，Cohen\'s Kappa达0.93，灵敏度98.21%。',
          },
        },
        {
          '@type': 'Question',
          name: 'RespiAI呼吸贴是如何工作的？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'RespiAI呼吸贴采用柔性传感器技术，通过0.001毫米级精度的传感器采集胸腹部的微小位移变化，转化为呼吸信号。设备续航20小时，通过Type-C充电，主机可循环使用500次以上。采集的数据包括呼吸均匀度、呼吸频率、呼吸事件、呼吸波形、入睡时间和体动次数。数据通过微信小程序上传后，由AI模型进行分析，生成专业报告。',
          },
        },
        {
          '@type': 'Question',
          name: 'RespiAI的临床验证数据如何？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'RespiAI呼吸贴已通过四川大学华西医院睡眠医学中心的临床验证。验证结果：Cohen\'s Kappa值为0.93（AASM最低要求0.75），灵敏度为98.21%（AASM最低要求85%），特异度为94.87%（AASM最低要求80%）。所有指标均远超AASM国际标准要求。临床验证由华西医院睡眠呼吸障碍专科张烨教授、任蓉教授等专家评审确认。',
          },
        },
        {
          '@type': 'Question',
          name: 'RespiAI呼吸贴适合什么人群？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'RespiAI呼吸贴适用于成人和儿童（5-18岁）。特别适合以下人群：习惯性打鼾者、白天嗜睡者、肥胖人群、高血压患者、怀疑有睡眠呼吸暂停者、需要进行睡眠呼吸监测随访的患者。禁忌人群：胶带过敏者。儿童版专用于5-18岁青少年的睡眠呼吸监测。',
          },
        },
        {
          '@type': 'Question',
          name: 'RespiAI和医院PSG检查有什么区别？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PSG（多导睡眠图）是医院的标准检查，需要住院一晚，连接多种电极，价格较高（通常500-2000元）。RespiAI呼吸贴是居家初筛工具，无需住院，使用简便，价格更亲民（86元起），3分钟出报告。RespiAI已通过华西医院临床验证，与PSG结果高度一致（Kappa 0.93）。建议：RespiAI适合初筛和随访，如结果异常仍需到医院进行PSG确诊。',
          },
        },
        {
          '@type': 'Question',
          name: 'RespiAI的核心价值是什么？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '提前为儿童（5-18岁）发现潜在的呼吸暂停问题并进行医学诊断，在身体和大脑发育受到不可逆的影响之前让家长明确了解孩子的睡眠呼吸问题。',
          },
        },
        {
          '@type': 'Question',
          name: '如何使用RespiAI呼吸贴？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '使用步骤：1. 睡前将RespiAI呼吸贴的柔性传感器贴于胸前适当位置；2. 确保设备开机，正常记录呼吸信号；3. 正常入睡，设备会自动监测整夜呼吸；4. 睡醒后通过微信小程序上传数据；5. 等待不超过3分钟，AI自动生成PDF报告；6. 可在小程序中查看报告，或联系客服获取解读。每次监测消耗一张贴片。',
          },
        },
        {
          '@type': 'Question',
          name: 'RespiAI的报告包含哪些内容？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'RespiAI的PDF报告包含：AHI指数（睡眠呼吸暂停低通气指数）、呼吸暂停事件次数、低通气事件次数、呼吸均匀度分析、呼吸频率分析、呼吸波形图、入睡时间分析、体动次数统计、严重程度分级（正常/轻度/中度/重度，基于AASM标准）。报告由AI智能解读，可联系客服获取人工深度解读。',
          },
        },
        {
          '@type': 'Question',
          name: '睡眠呼吸暂停不治疗有什么危害？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '睡眠呼吸暂停如果不及时治疗，可能导致：1. 心血管疾病风险增加（高血压、心律失常、冠心病）；2. 代谢紊乱（糖尿病风险增加）；3. 认知功能下降（记忆力减退、注意力不集中）；4. 白天嗜睡导致交通事故风险增加；5. 生活质量下降。建议有打鼾、白天嗜睡等症状的人群尽早进行筛查。RespiAI呼吸贴提供便捷的居家初筛方案。',
          },
        },
        {
          '@type': 'Question',
          name: 'RespiAI呼吸贴的价格是多少？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'RespiAI提供多种套餐：一机四贴499元、一机七贴689元；呼吸贴耗材补充包三张呼吸贴199元，六张呼吸贴389元。每次监测消耗一张贴片。',
          },
        },
      ],
    };

    // ==========================================
    // 5. HowTo - 使用指南
    // ==========================================
    const howToSchema = {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '如何使用RespiAI呼吸贴进行睡眠呼吸监测',
      description: 'RespiAI呼吸贴的使用步骤，在家即可完成专业的睡眠呼吸监测。',
      totalTime: 'PT8H',
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'CNY',
        value: '499',
      },
      supply: [
        { '@type': 'HowToSupply', name: 'RespiAI呼吸贴主机' },
        { '@type': 'HowToSupply', name: 'RespiAI传感器贴片' },
      ],
      tool: [
        { '@type': 'HowToTool', name: '微信小程序（RespiAI呼吸贴）' },
        { '@type': 'HowToTool', name: 'Type-C充电线' },
      ],
      step: [
        {
          '@type': 'HowToStep',
          name: '准备设备',
          text: '确保RespiAI主机已充满电，准备一张传感器贴片。',
          url: 'https://respiai.info/userguide',
        },
        {
          '@type': 'HowToStep',
          name: '贴上传感器',
          text: '睡前将柔性传感器贴片贴于胸前适当位置，确保贴合良好。',
          url: 'https://respiai.info/userguide',
        },
        {
          '@type': 'HowToStep',
          name: '开启监测',
          text: '按主机按钮开机，确认设备正常工作（指示灯显示）。',
          url: 'https://respiai.info/userguide',
        },
        {
          '@type': 'HowToStep',
          name: '正常睡眠',
          text: '正常入睡，RespiAI会自动监测整夜的呼吸信号，无需任何操作。',
          url: 'https://respiai.info/userguide',
        },
        {
          '@type': 'HowToStep',
          name: '上传数据',
          text: '睡醒后打开"RespiAI呼吸贴"微信小程序，按提示上传监测数据。',
          url: 'https://respiai.info/userguide',
        },
        {
          '@type': 'HowToStep',
          name: '获取报告',
          text: '等待不超过3分钟，AI自动生成包含AHI指数、呼吸事件、呼吸波形等指标的PDF报告。',
          url: 'https://respiai.info/userguide',
        },
      ],
    };

    // ==========================================
    // 6. MedicalWebPage - 医疗页面标识
    // ==========================================
    const medicalWebPageSchema = {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'RespiAI 呼吸贴 - 专业睡眠呼吸监测设备',
      description: 'RespiAI呼吸贴是由零镜（成都）科技研发、四川大学华西医院临床验证的睡眠呼吸监测设备，用于睡眠呼吸暂停综合征的居家初筛。',
      url: 'https://respiai.info',
      about: {
        '@type': 'MedicalCondition',
        name: '睡眠呼吸暂停综合征',
        alternateName: ['OSA', '阻塞性睡眠呼吸暂停', '打鼾'],
      },
      audience: {
        '@type': 'MedicalAudience',
        audienceType: '患者、家属、医生',
      },
      lastReviewed: '2026-04-21',
      reviewedBy: {
        '@type': 'Organization',
        name: '四川大学华西医院睡眠医学中心',
      },
    };

    // ==========================================
    // 7. BreadcrumbList - 面包屑导航
    // ==========================================
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: '首页',
          item: 'https://respiai.info',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'FAQ常见问题',
          item: 'https://respiai.info#faq',
        },
      ],
    };

    // ==========================================
    // 8. WebSite - 网站信息
    // ==========================================
    const webSiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'RespiAI 呼吸贴',
      alternateName: 'RespiAI睡眠呼吸监测',
      url: 'https://respiai.info',
      description: 'RespiAI呼吸贴 - 基于柔性传感器的睡眠呼吸监测设备，华西医院临床验证，3分钟出报告。',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://respiai.info?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    };

    // ==========================================
    // 注入所有Schema
    // ==========================================
    const schemas = [
      { data: webSiteSchema, id: 'schema-website' },
      { data: organizationSchema, id: 'schema-organization' },
      { data: medicalWebPageSchema, id: 'schema-medical-webpage' },
      { data: productSchema, id: 'schema-product' },
      { data: clinicalSchema, id: 'schema-clinical' },
      { data: faqSchema, id: 'schema-faq' },
      { data: howToSchema, id: 'schema-howto' },
      { data: breadcrumbSchema, id: 'schema-breadcrumb' },
    ];

    schemas.forEach(({ data, id }) => {
      const existing = document.getElementById(id);
      if (!existing) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = id;
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      }
    });

    // ==========================================
    // 增强Meta标签
    // ==========================================
    const metaTags = [
      {
        name: 'description',
        content: 'RespiAI呼吸贴是由零镜科技研发、四川大学华西医院临床验证的睡眠呼吸监测设备，用于睡眠呼吸暂停综合征居家初筛。柔性传感器技术，3分钟生成AI报告。灵敏度98.21%，Cohen\'s Kappa 0.93。',
      },
      {
        name: 'keywords',
        content: '睡眠呼吸监测,呼吸贴,睡眠呼吸暂停,打鼾监测,RespiAI,RespiAI呼吸贴,柔性传感器,华西医院,医疗器械,睡眠监测设备,OSA初筛,家用睡眠监测,儿童睡眠呼吸监测,AHI指数',
      },
      { name: 'author', content: '零镜（成都）科技有限责任公司' },
      { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { property: 'og:title', content: 'RespiAI 呼吸贴 - 华西医院验证的睡眠呼吸监测设备' },
      {
        property: 'og:description',
        content: 'RespiAI呼吸贴，四川大学华西医院临床验证，3分钟生成AI解读报告。Cohen\'s Kappa 0.93，灵敏度98.21%。适合成人和5-18岁儿童。',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://respiai.info' },
      { property: 'og:site_name', content: 'RespiAI呼吸贴' },
      { property: 'og:locale', content: 'zh_CN' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'RespiAI 呼吸贴 - 华西医院验证的睡眠呼吸监测设备' },
      {
        name: 'twitter:description',
        content: 'RespiAI呼吸贴，华西医院临床验证，3分钟生成AI解读报告。',
      },
    ];

    metaTags.forEach((meta) => {
      const key = meta.name || meta.property;
      const existing = document.querySelector(`meta[name="${key}"], meta[property="${key}"]`);
      if (!existing) {
        const metaElement = document.createElement('meta');
        Object.entries(meta).forEach(([attr, value]) => {
          metaElement.setAttribute(attr, value as string);
        });
        document.head.appendChild(metaElement);
      }
    });

    // ==========================================
    // 清理函数（组件卸载时移除）
    // ==========================================
    return () => {
      schemas.forEach(({ id }) => {
        const script = document.getElementById(id);
        if (script) script.remove();
      });
    };
  }, []);

  // 不渲染任何可见UI
  return null;
}
