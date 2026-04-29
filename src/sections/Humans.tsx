import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, MessageCircle, Award, Users, Building2, Stethoscope } from 'lucide-react';

const founders = [
  { name: '王充', role: '联合创始人' },
  { name: '杨灿灿', role: '联合创始人' },
  { name: '李久尧', role: '联合创始人' },
];

const clinicalExperts = [
  {
    name: '张烨',
    title: '四川大学华西医院 睡眠呼吸障碍专科 三级专家',
    credentials: '教授、博士生导师、临床医学博士、睡眠医学博士后',
    achievements: '主持国家自然科学基金2项、脑计划子课题1项，发表SCI论文29篇',
    awards: '2015年四川省医学科技奖一等奖，2016年四川省医学科技奖青年一等奖',
  },
  {
    name: '任蓉',
    title: '四川大学华西医院 睡眠呼吸障碍专科 三级专家',
    credentials: '第一及通讯作者发表SCI论文30余篇，参编专著4部',
    achievements: '主持国家自然科学基金2项，国家科技部脑科学重大项目子课题1项',
    awards: '2019年中国科协青年人才托举工程，2017年澳洲睡眠研究会青年学者奖',
  },
];

const certifications = [
  { name: '中华人民共和国医疗器械注册证', number: '13329903' },
  { name: '软件著作权', number: '13329903' },
];

export function Humans() {
  return (
    <section id="about" className="py-24 bg-bg-primary">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-text-primary leading-tight mb-4">
            关于 RespiAI
          </h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto">
            由零镜科技研发，华西医院临床验证的专业睡眠呼吸监测设备
          </p>
        </ScrollReveal>

        {/* Company Info */}
        <ScrollReveal className="mb-16">
          <Card className="border-gray-100 shadow-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-soft-teal flex items-center justify-center">
                  <Building2 size={20} className="text-accent-teal" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary">公司信息</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-text-secondary mb-1">公司全称</p>
                  <p className="font-medium text-text-primary">零镜（成都）科技有限责任公司</p>
                  <p className="text-sm text-text-secondary">Lingjing (Chengdu) Technology Co., LTD</p>
                </div>
                <div>
                  <p className="text-sm text-text-secondary mb-1">成立时间</p>
                  <p className="font-medium text-text-primary">2023年</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-text-secondary mb-1">总部地址</p>
                  <p className="font-medium text-text-primary">
                    中国（四川）自由贸易试验区成都高新区剑南大道中段716号1栋13层1302号
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Founding Team */}
        <ScrollReveal className="mb-16" delay={0.1}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-soft-teal flex items-center justify-center">
              <Users size={20} className="text-accent-teal" />
            </div>
            <h3 className="text-xl font-semibold text-text-primary">创始团队</h3>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-4">
            {founders.map((founder) => (
              <motion.div
                key={founder.name}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-gray-100 shadow-card hover:shadow-card-hover transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-teal to-accent-blue mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">
                        {founder.name[0]}
                      </span>
                    </div>
                    <h4 className="font-semibold text-text-primary mb-1">{founder.name}</h4>
                    <p className="text-sm text-text-secondary">{founder.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Clinical Validation */}
        <ScrollReveal className="mb-16" delay={0.2}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-soft-teal flex items-center justify-center">
              <Stethoscope size={20} className="text-accent-teal" />
            </div>
            <h3 className="text-xl font-semibold text-text-primary">临床验证机构</h3>
          </div>
          
          <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                <span className="text-red-600 font-bold text-lg">华西</span>
              </div>
              <div>
                <h4 className="font-semibold text-text-primary">四川大学华西医院睡眠医学中心</h4>
                <p className="text-sm text-text-secondary">中国顶级睡眠医学研究机构</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {clinicalExperts.map((expert) => (
              <Card key={expert.name} className="border-gray-100 shadow-card">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-text-primary mb-2">{expert.name}</h4>
                  <p className="text-sm text-accent-teal mb-3">{expert.title}</p>
                  <p className="text-sm text-text-secondary mb-2">{expert.credentials}</p>
                  <p className="text-sm text-text-secondary mb-2">{expert.achievements}</p>
                  <p className="text-xs text-text-secondary/70">{expert.awards}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        {/* Certifications */}
        <ScrollReveal className="mb-16" delay={0.3}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-soft-teal flex items-center justify-center">
              <Award size={20} className="text-accent-teal" />
            </div>
            <h3 className="text-xl font-semibold text-text-primary">资质认证</h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl border border-gray-100 shadow-sm"
              >
                <Award size={18} className="text-accent-green" />
                <div>
                  <p className="text-sm font-medium text-text-primary">{cert.name}</p>
                  <p className="text-xs text-text-secondary">编号：{cert.number}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Contact */}
        <ScrollReveal delay={0.4}>
          <Card className="border-gray-100 shadow-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-soft-teal flex items-center justify-center">
                  <MessageCircle size={20} className="text-accent-teal" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary">联系我们</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-accent-teal" />
                    <div>
                      <p className="text-sm text-text-secondary">客服电话</p>
                      <p className="font-medium text-text-primary">189-2884-5388</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-accent-teal" />
                    <div>
                      <p className="text-sm text-text-secondary">电子邮箱</p>
                      <p className="font-medium text-text-primary">lijiuyao@zeromat.cn</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-accent-teal" />
                    <div>
                      <p className="text-sm text-text-secondary">公司地址</p>
                      <p className="font-medium text-text-primary">成都市高新区</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <p className="text-sm text-text-secondary mb-3">微信公众号：RespiAI呼吸贴</p>
                  <div className="w-40 h-40 bg-white rounded-xl shadow-sm border border-gray-100 p-2">
                    <img
                      src="/icon-kf1.jpg"
                      alt="RespiAI客服微信二维码"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-text-secondary mt-2">扫码添加客服微信</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
