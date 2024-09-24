import QuestionIcon from '@/assets/icons/question.svg?react';
import { FAQS } from '@/lib/constants';

const FAQSection = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
      <h2 className="mb-8 text-4xl font-extrabold tracking-tight">
        Frequently asked questions
      </h2>
      <div className="grid gap-10 border-t border-gray-200 pt-8 text-left md:grid-cols-2">
        {FAQS.map((faq) => (
          <div key={faq.question} className="space-y-4">
            <h3 className="flex items-center text-lg font-medium">
              <QuestionIcon className="mr-2 h-5 w-5" />
              {faq.question}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
