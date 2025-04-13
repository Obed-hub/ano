import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is StartupWifi?",
    answer: "StartupWifi is a platform that helps early-stage startups connect with their ideal customers through targeted landing pages and customer acquisition strategies."
  },
  {
    question: "How does the pricing work?",
    answer: "We offer three tiers: Starter ($19.99/month), Growth ($29.99/month), and Scale ($49.99/month). Each tier comes with different features and capabilities to match your startup's needs."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees."
  },
  {
    question: "Do you offer custom solutions?",
    answer: "Yes, we offer custom solutions for larger teams and enterprises. Contact us to discuss your specific needs and we'll create a tailored package for you."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide email support for all plans, with priority support for Growth and Scale plans. We also offer strategy calls for Growth and Scale customers."
  },
  {
    question: "How quickly can I get started?",
    answer: "You can get started immediately after signing up. Our platform is designed to be intuitive and easy to use, with templates and guides to help you create your landing page quickly."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about StartupWifi and how we can help your startup grow.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden bg-card"
            >
              <button
                className="w-full p-4 text-left flex items-center justify-between hover:bg-accent transition-colors"
                onClick={() => toggleItem(index)}
              >
                <span className="font-medium">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4"
                  >
                    <p className="text-muted-foreground">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 