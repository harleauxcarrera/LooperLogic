import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PopupButton } from '@typeform/embed-react';
import { useStripe } from '../../hooks/useStripe';

const PricingSection: React.FC = () => {
  const { redirectToCheckout } = useStripe();
  const [isLoading, setIsLoading] = useState<string | null>(null);

  const handleSubscribe = async (priceId: string) => {
    try {
      setIsLoading(priceId);
      await redirectToCheckout(priceId);
    } catch (error) {
      console.error('Subscription error:', error);
      alert('Failed to process subscription. Please try again.');
    } finally {
      setIsLoading(null);
    }
  };

  const plans = [
    {
      title: "Standard",
      price: "3,900",
      period: "month",
      subtitle: "Billed monthly",
      buttonText: "Get started",
      buttonStyle: "border",
      priceId: "price_1QvrFuRDoML1xyXm2CK1ZhW0",
      features: [
        "Unlimited requests",
        "Unlimited users",
        "Pause or cancel anytime"
      ]
    },
    {
      title: "Quarterly",
      price: "2,900",
      period: "month",
      subtitle: "Commit to 3 months",
      buttonText: "Sign up now →",
      buttonStyle: "gradient",
      popular: true,
      priceId: "price_1QvrMTRDoML1xyXm6p9CZ8Zl",
      features: [
        "Unlimited requests",
        "Unlimited users",
        "Pause or cancel anytime"
      ]
    },
    {
      title: "Ad-hoc",
      price: "Custom",
      period: "",
      subtitle: "For one-off needs, contact sales",
      buttonText: "Contact sales",
      buttonStyle: "border",
      features: [
        "Documentation with every project",
        "45-minute project consultation",
        "Discounted subscription transition"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#0A192F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="inline-block px-4 py-2 bg-[#112240] text-[#BD34FE] rounded-full text-sm font-medium mb-4">
            PRICING
          </span>
          <h2 className="text-4xl font-bold">
            Your investment
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-lg border ${
                plan.popular 
                  ? 'border-[#BD34FE] bg-[#112240] relative' 
                  : 'border-white/10 bg-black/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-[#112240] text-white px-4 py-1 rounded-full text-sm">
                    POPULAR
                  </span>
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-6">{plan.title}</h3>
                <div className="flex items-baseline gap-1">
                  {plan.price === 'Custom' ? (
                    <span className="text-4xl font-bold">Custom</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold">${plan.price}</span>
                      {plan.period && <span className="text-gray-400">/{plan.period}</span>}
                    </>
                  )}
                </div>
                <p className="text-gray-400 mt-2">{plan.subtitle}</p>
              </div>

              {plan.title === 'Ad-hoc' ? (
                <PopupButton
                  id="xwYUAXbV"
                  size={80}
                  hideHeaders
                  hideFooter
                  className={`w-full py-3 px-6 rounded-lg font-medium mb-8 transition-all ${
                    plan.buttonStyle === 'gradient'
                      ? 'bg-gradient-to-r from-[#7FE7D9] to-[#7FE7D9] hover:opacity-90 text-[#0A192F]'
                      : 'border border-white/20 hover:bg-white/5'
                  }`}
                >
                  {plan.buttonText}
                </PopupButton>
              ) : (
                <button
                  onClick={() => handleSubscribe(plan.priceId)}
                  disabled={isLoading === plan.priceId}
                  className={`w-full py-3 px-6 rounded-lg font-medium mb-8 transition-all ${
                    plan.buttonStyle === 'gradient'
                      ? 'bg-gradient-to-r from-[#7FE7D9] to-[#7FE7D9] hover:opacity-90 text-[#0A192F]'
                      : 'border border-white/20 hover:bg-white/5'
                  } ${isLoading === plan.priceId ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isLoading === plan.priceId ? 'Processing...' : plan.buttonText}
                </button>
              )}

              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#7FE7D9]" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;