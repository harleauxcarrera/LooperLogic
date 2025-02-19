import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Megaphone, FolderKanban, Users, Bot, Building2, FileText } from 'lucide-react';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description,
  index 
}: { 
  icon: typeof Megaphone;
  title: string; 
  description: string;
  index: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="p-6 border border-white/10 rounded-lg bg-black/50 backdrop-blur-sm hover:bg-white/5 transition-all duration-300 group"
    >
      <div className="mb-4">
        <Icon className="w-8 h-8 text-[#7FE7D9]" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: Megaphone,
      title: "Growth Automation",
      description: "Deploy intelligent outreach systems that scale your lead generation and marketing efforts while you focus on closing deals."
    },
    {
      icon: FolderKanban,
      title: "Project Systems",
      description: "Implement enterprise-grade project management solutions that streamline workflows and boost team productivity."
    },
    {
      icon: Users,
      title: "Talent Acquisition",
      description: "Leverage AI-powered recruitment automation to identify, evaluate, and engage top candidates efficiently."
    },
    {
      icon: Bot,
      title: "AI Operations",
      description: "Automate core business processes with cutting-edge AI, reducing operational costs while maintaining quality."
    },
    {
      icon: Building2,
      title: "CRM Architecture",
      description: "Build scalable sales systems that track, nurture, and convert leads with the sophistication of enterprise solutions."
    },
    {
      icon: FileText,
      title: "Process Design",
      description: "Get expert guidance on operational strategy and documented procedures that set you up for sustainable growth."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-sm font-semibold text-[#7FE7D9] tracking-wide uppercase mb-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            SERVICES
          </motion.h2>
          <motion.h3 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            What our clients achieve
          </motion.h3>
          <motion.p 
            className="text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Transform your business with enterprise-grade automation solutions that deliver measurable results and sustainable growth.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;