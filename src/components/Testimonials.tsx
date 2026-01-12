import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
<div className="flex items-center justify-between mb-10">
  {/* Heading */}
  <h2 className="text-2xl md:text-3xl font-semibold text-[#090F4E]">
    What people are saying about LeadCRM
  </h2>

  {/* Arrow Buttons */}
  <div className="flex gap-3">
    {/* Left */}
    <button
      // onClick={prev}
      className="w-[46px] h-[46px] rounded-full border border-[#090F4E] flex items-center justify-center hover:bg-[#0b1370] transition"
      aria-label="Previous"
    >
      <svg
        width="12"
        height="7"
        viewBox="0 0 12 7"
        className="fill-black rotate-90"
      >
        <path d="M6 7L0 0h12L6 7z" />
      </svg>
    </button>

    {/* Right */}
    <button
      // onClick={next}
      className="w-[46px] h-[46px] rounded-full bg-[#090F4E] flex items-center justify-center hover:bg-[#0b1370] transition"
      aria-label="Next"
    >
      <svg
        width="12"
        height="7"
        viewBox="0 0 12 7"
        className="fill-white -rotate-90"
      >
        <path d="M6 7L0 0h12L6 7z" />
      </svg>
    </button>
  </div>
</div>


      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <TestimonialCard
          text="Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive."
          name="Lillian Williams"
          avatar="https://i.pravatar.cc/100?img=12"
        />

        <TestimonialCard
          text="My experience with LeadCRM has been excellent. It has streamlined my workflow and improved lead tracking."
          name="David Fincher"
          avatar="https://i.pravatar.cc/100?img=15"
        />

        <TestimonialCard
          text="LeadCRM has helped our team stay organized and efficient. Highly recommended!"
          name="Michael"
          avatar="https://i.pravatar.cc/100?img=18"
        />
      </div>
    </section>
  );
}
