import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What is a smartphone clinic?",
      answer: "A smartphone clinic is a service center that specializes in repairing and maintaining smartphones.",
    },
    {
      question: "How long does a typical repair take?",
      answer: "Most repairs take between 30 minutes to 1 hour, depending on the complexity of the issue.",
    },
    {
      question: "Do you offer warranty for repairs?",
      answer: "Yes, we offer a 30-day warranty on all repairs for parts and service quality.",
    },
    {
      question: "Can you repair water-damaged phones?",
      answer: "Yes, we can attempt to fix water-damaged phones. However, the success of the repair depends on the extent of the damage.",
    },
  ];

  const toggleFAQ = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-gray-700">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
