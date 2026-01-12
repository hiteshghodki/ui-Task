

export default function LinkedInSalesSolutions() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#090F4E]">
          Complete LinkedIn Sales Solutions
        </h2>
        <p className="text-[#6B7280] mt-3">
          Everything you need for professional LinkedIn prospecting
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm font-medium">
        <span className="text-[#090F4E] border-b-2 border-[#090F4E] pb-2">
          CRM Data Enrichment
        </span>
        <span className="text-[#6B7280]">CRM Data Sync</span>
        <span className="text-[#6B7280]">Bulk Export & Enrichment</span>
        <span className="text-[#6B7280]">AI Productivity</span>
      </div>

      <p className="text-[#374151] mb-4">
        It's hard to find the accurate contact data for every prospects by{" "}
        <span className="text-red-500 font-medium">Incomplete Data</span>
      </p>
      {/* Content */}
      <div className="grid gap-8 lg:grid-cols-2 items-start">
        {/* LEFT – Rectangle 41541 */}
        <div className="">
          <img src="/sales/left.png" alt="" />
        </div>

        {/* RIGHT – Waterfall Enrichment */}
        <div className="">
          <img src="/sales/right.png" alt="" />
        </div>
      </div>
    </section>
  );
}
