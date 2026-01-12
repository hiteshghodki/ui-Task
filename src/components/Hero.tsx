import React from "react";

const HeroContent: React.FC = () => {
  return (
    <div
      className="relative z-10 flex justify-center"
      style={{ backgroundImage: "url('/herobg.png')" }}
    >
      <div
        className="
          w-full
          max-w-[920px]
          px-4
          py-[60px]
          md:pt-[140px]
          xl:pt-[160px]
          text-center
        "
      >
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 rounded-full border border-[#E5ECF5] bg-white px-4 py-2 text-sm text-[#444] shadow-sm">
            <span className="text-blue-500">
              <img src="/rocket.png" alt="" />
            </span>
            <span>Thousands of Professionals using LeadCRM</span>
          </div>
        </div>

        {/* Heading */}
        <h1
          className="
            font-bold
            text-[#111]
            text-[32px]
            leading-[1.2]
            md:text-[42px]
            xl:text-[48px]
          "
        >
          LinkedIn CRM Integration
          <br />
          Capture, Sync and Enrich in{" "}
          <span className="relative inline-block text-[#1A73E8]">
            Both Ways
            <span className="absolute left-0 bottom-[2px] h-[6px] w-full bg-[#FFD54F] -z-10" />
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="
            mt-5
            text-[#444]
            text-[15px]
            md:text-[16px]
            leading-relaxed
            max-w-[720px]
            mx-auto
          "
        >
          Automatically sync LinkedIn prospects to your CRM and overlay existing
          CRM contacts on LinkedIn profiles. Complete bi-directional integration
          with HubSpot, Salesforce, and Pipedrive.
        </p>

        {/* Works with */}
        <div className="mt-6 flex flex-wrap justify-center gap-3 items-center">
          <div className="flex items-center gap-8 rounded-[20px] p-5 bg-[linear-gradient(90.37deg,_#5ED3FF_-12.35%,_#6EC6FE_0.67%,_#EB65F4_100.24%,_#FD58F2_114.28%)]">
            <span className="text-[22px] font-medium text-[#666]">
              Works with
            </span>
            <div className="flex gap-2">
              <div className="h-8 w-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
                <img src="/hero/icon1.png" alt="" />
              </div>
              <div className="h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center text-xs font-bold">
                <img src="/hero/icon2.png" alt="" />
              </div>
              <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">
                <img src="/hero/icon3.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Ratings */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <img src="/Border.png" alt="" />
            ⭐⭐⭐⭐⭐ <span className="text-[#555]">5/5</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <img className="size-15" src="/store.png" alt="" />⭐⭐⭐⭐⭐
            </div>
            <span className="text-[#555]">5/5</span>
          </div>
        </div>

        {/* CTA Row */}
        <div
          className="
            mt-8
            flex
            flex-col
            sm:flex-row
            justify-center
            items-center
            gap-4
          "
        >
          {/* Chrome Store */}
          <div className="flex items-center gap-2 rounded-lg bg-[#2B2B2B] px-4 py-2 text-white text-sm">
            <div>
              <div>Available in</div>
              <span className="font-semibold">Chrome Web Store</span>
            </div>
            <img src="/Border.png" className="size-6" alt="" />
          </div>

          {/* CTA */}
          <button
            className="
              rounded-lg
              bg-[#B6F46A]
              px-6
              py-3
              font-semibold
              text-[#1B3B1A]
              hover:brightness-95
              transition
            "
          >
            Get a Free Trial Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
