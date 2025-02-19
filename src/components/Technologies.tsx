import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, Database, Globe, FileText,
  Mail, Calendar, Users, ShoppingCart,
  Cloud, Bot, Briefcase, CreditCard,
  FileSpreadsheet, Phone, Building2, Workflow
} from 'lucide-react';

const Technologies: React.FC = () => {
  const categories = [
    {
      icon: MessageSquare,
      title: "Communication",
      color: "#4F46E5",
      tools: [
        { src: "https://assets.make.com/img/make-favicon.ico", name: "Make.com" },
        { src: "https://www.slack.com/favicon.ico", name: "Slack" },
        { src: "https://www.zendesk.com/favicon.ico", name: "Zendesk" },
        { src: "https://www.intercom.com/favicon.ico", name: "Intercom" }
      ]
    },
    {
      icon: Database,
      title: "Data & Analytics",
      color: "#10B981",
      tools: [
        { src: "https://airtable.com/favicon.ico", name: "Airtable" },
        { src: "https://www.notion.so/favicon.ico", name: "Notion" },
        { src: "https://www.mongodb.com/favicon.ico", name: "MongoDB" },
        { src: "https://www.snowflake.com/favicon.ico", name: "Snowflake" }
      ]
    },
    {
      icon: Mail,
      title: "Email & Marketing",
      color: "#F59E0B",
      tools: [
        { src: "https://www.mailchimp.com/favicon.ico", name: "Mailchimp" },
        { src: "https://www.hubspot.com/favicon.ico", name: "HubSpot" },
        { src: "https://www.sendgrid.com/favicon.ico", name: "SendGrid" },
        { src: "https://www.activecampaign.com/favicon.ico", name: "ActiveCampaign" }
      ]
    },
    {
      icon: Calendar,
      title: "Scheduling",
      color: "#EC4899",
      tools: [
        { src: "https://calendly.com/favicon.ico", name: "Calendly" },
        { src: "https://acuityscheduling.com/favicon.ico", name: "Acuity" },
        { src: "https://www.google.com/calendar/favicon.ico", name: "Google Calendar" },
        { src: "https://www.microsoft.com/favicon.ico", name: "Microsoft Bookings" }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      color: "#0EA5E9",
      tools: [
        { src: "https://aws.amazon.com/favicon.ico", name: "AWS" },
        { src: "https://www.gstatic.com/devrel-devsite/prod/v2f6fb68338062e7c16672db62c4ab042dcb9bfbacf2fa51b6959426b203a4d8a/cloud/images/favicon.png", name: "Google Cloud" },
        { src: "https://azure.microsoft.com/favicon.ico", name: "Azure" },
        { src: "https://www.digitalocean.com/favicon.ico", name: "DigitalOcean" }
      ]
    },
    {
      icon: Bot,
      title: "AI & ML",
      color: "#8B5CF6",
      tools: [
        { src: "https://openai.com/favicon.ico", name: "OpenAI" },
        { src: "https://www.anthropic.com/favicon.ico", name: "Claude" },
        { src: "https://huggingface.co/favicon.ico", name: "Hugging Face" },
        { src: "https://www.tensorflow.org/favicon.ico", name: "TensorFlow" }
      ]
    },
    {
      icon: Briefcase,
      title: "CRM",
      color: "#14B8A6",
      tools: [
        { src: "https://www.salesforce.com/favicon.ico", name: "Salesforce" },
        { src: "https://www.zoho.com/favicon.ico", name: "Zoho" },
        { src: "https://www.pipedrive.com/favicon.ico", name: "Pipedrive" },
        { src: "https://www.freshworks.com/favicon.ico", name: "Freshworks" }
      ]
    },
    {
      icon: FileSpreadsheet,
      title: "Productivity",
      color: "#6366F1",
      tools: [
        { src: "https://www.google.com/favicon.ico", name: "Google Workspace" },
        { src: "https://www.microsoft.com/favicon.ico", name: "Microsoft 365" },
        { src: "https://www.dropbox.com/favicon.ico", name: "Dropbox" },
        { src: "https://www.box.com/favicon.ico", name: "Box" }
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-12">Our Toolkit</h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              className="p-4 border border-white/10 rounded-lg bg-black/50 backdrop-blur-sm hover:bg-white/5 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <category.icon className="w-5 h-5" style={{ color: category.color }} />
                <h3 className="text-sm font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={toolIndex}
                    whileHover={{ scale: 1.1 }}
                    className="w-6 h-6 rounded-full bg-white/10 p-1 overflow-hidden"
                    title={tool.name}
                  >
                    <img
                      src={tool.src}
                      alt={tool.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/32";
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;