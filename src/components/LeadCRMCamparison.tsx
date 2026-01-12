import React from "react";

const NegativeItem = ({
  title,
  badge,
  description,
}: {
  title: string;
  badge: string;
  description: string;
}) => (
  <div className="flex gap-4">
    <span className="mt-1 text-red-500 text-xl">✕</span>
    <div>
      <div className="flex items-center gap-2">
        <p className="font-semibold text-gray-900">{title}</p>
        <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs text-red-500">
          {badge}
        </span>
      </div>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const PositiveItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex gap-4">
    <span className="mt-1 text-green-600 text-xl">✓</span>
    <div>
      <p className="font-semibold text-gray-900">{title}</p>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const LeadCRMComparison = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <h2 className="mb-16 text-center text-4xl font-semibold text-[#090F4E]">
          Every LinkedIn Prospector faces these daily challenges
        </h2>

        {/* Comparison */}
        <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* WITHOUT */}
          <div className="rounded-2xl bg-[#FFF3F4] p-10">
            <div className="mb-6 rounded-xl bg-white p-4 shadow">
              <img
                src="/comparison/image1.png"
                alt=""
                className="w-full"
              />
            </div>

            <h3 className="mb-8 text-lg font-semibold text-red-500">
              Without LeadCRM
            </h3>

            <div className="space-y-6">
              <NegativeItem
                title="Manual Data Entry"
                badge="3+ Hours wasted daily"
                description="Copying LinkedIn contacts to CRM manually and losing conversation history."
              />
              <NegativeItem
                title="Incomplete Data"
                badge="60% data incomplete"
                description="Most LinkedIn profiles missing verified emails and phone numbers."
              />
              <NegativeItem
                title="No CRM Visibility"
                badge="Zero context available"
                description="Can’t see existing CRM contacts while browsing LinkedIn."
              />
              <NegativeItem
                title="Limited Productivity"
                badge="No smart assistance"
                description="Manually writing messages with no AI support."
              />
            </div>
          </div>

          {/* VS */}
          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-500 shadow">
              VS
            </span>
          </div>

          {/* WITH */}
          <div className="rounded-2xl bg-white p-10 shadow-xl ring-1 ring-gray-100">
            <div className="mb-6 rounded-xl bg-gray-50 p-4">
              <img
                src="/comparison/image2.png"
                alt=""
                className="w-full"
              />
            </div>

            <div className="mb-6 flex items-center gap-3">
              <h3 className="text-lg font-semibold text-green-600">
                With LeadCRM
              </h3>
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                4+ Hours/day Saved
              </span>
            </div>

            <div className="space-y-6">
              <PositiveItem
                title="Complete Bi-Directional Sync"
                description="Automatically sync contacts, messages, and notes between LinkedIn and your CRM."
              />
              <PositiveItem
                title="700M+ Contacts + Enrichment"
                description="Get verified emails and phone numbers from a global database."
              />
              <PositiveItem
                title="CRM Overlay on LinkedIn"
                description="View full CRM insights directly on LinkedIn profiles."
              />
              <PositiveItem
                title="AI Responses + Templates"
                description="Save time with AI replies, templates, and bulk exports."
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center max-md:flex-col items-center gap-6">
          <button className="rounded-xl bg-lime-400 px-10 py-4 text-lg font-semibold text-black shadow hover:bg-lime-300 transition">
            Start Using LeadCRM Now
          </button>
          <img src="/save40.png" alt="" className="w-64" />
        </div>
      </div>
    </section>
  );
};

export default LeadCRMComparison;
