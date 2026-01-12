import React from "react";

const steps = [
  {
    step: "1",
    title: "Install the Extension",
    description:
      "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.",
    image: "/work1.png",
  },
  {
    step: "2",
    title: "Browse LinkedIn",
    description:
      "Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.",
    image: "/work2.png",
  },
  {
    step: "3",
    title: "Get Enriched Data",
    description:
      "Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.",
    image: "/work3.png",
  },
  {
    step: "4",
    title: "Sync to CRM Instantly",
    description:
      "Prospect data syncs to your CRM instantly with history, tracking, and AI-powered insights.",
    image: "/work4.png",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="w-full bg-[#EAEFFA] rounded-2xl px-6 py-12 md:px-12">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#090F4E]">
          How it Works
        </h2>
        <p className="mt-2 text-gray-600">
          From setup to success in <span className="font-semibold">4 simple steps</span>
        </p>
      </div>

      {/* Steps */}
      <div className="relative">
        {/* Connector Line (desktop only) */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-[#2D96BC]/30" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center"
            >
              {/* Step Number */}
              <div className="text-5xl font-bold text-[#2D96BC] mb-4">
                {/* {item.step} */}
                <img src={`${item.step}.png`} alt="" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#090F4E] mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4">
                {item.description}
              </p>

              {/* Image */}
              <div className="w-full mt-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-12">
        <button className="flex items-center gap-2 bg-lime-400 hover:bg-lime-500 text-black font-medium px-6 py-3 rounded-lg transition">
          Try LeadCRM Now
          <span className="text-xl">→</span>
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;
