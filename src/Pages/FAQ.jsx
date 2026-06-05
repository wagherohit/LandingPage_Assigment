import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur",
      answer:
        "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur",
      answer:
        "Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  return (
    <section className="py-20  bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="FAQ"
              className="w-full h-[450px] object-cover rounded-lg"
            />
          </div>

          {/* Right FAQ */}
          <div id="faq">
            <h2 className="text-4xl font-bold mb-8">
              Frequently asked questions
            </h2>

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b py-4"
              >
                <button
                  onClick={() => setOpen(open === index ? -1 : index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="font-medium">
                    {faq.question}
                  </span>

                  {open === index ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </button>

                {open === index && (
                  <p className="mt-3 text-gray-500">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}