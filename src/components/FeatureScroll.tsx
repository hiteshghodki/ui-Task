import React from "react";

const features = [
  {
    icon: "/adobe.png",
    text: "Access to 700M+ Contacts",
    muted: true,
  },
  {
    icon: "/cursor.png",
    text: "One click push to CRM",
    bold: true,
  },
  {
    icon: "/mapping.png",
    text: "Custom Field Mapping",
    bold: true,
  },
  {
    icon: "/waterfall.png",
    text: "Advanced Waterfall Enrichment",
    muted: true,
  },
  {
    icon: "/icons/email.png",
    text: "Instant Email Finder",
    muted: true,
  },
];

const FeatureScroll: React.FC = () => {
  return (
    <div
      className="
        relative
        w-full
        overflow-hidden
        mt-[120px]
        xl:mt-[150px]
      "
    >
      {/* Viewport */}
      <div className="mx-auto max-w-[1288px] overflow-hidden">
        {/* Track */}
        <div
          className="
            flex
            w-max
            animate-marquee
            hover:[animation-play-state:paused]
          "
        >
          {[...features, ...features].map((item, i) => (
            <div
              key={i}
              className="
                flex items-center
                gap-[10px]
                px-[30px]
                h-[58px]
                shrink-0
              "
            >
              <img
                src={item.icon}
                alt=""
                className="w-[40px] h-[40px] object-contain"
              />
              <span
                className={`
                  text-[18px]
                  leading-[28px]
                  font-['Exo_2']
                  ${item.bold ? "font-semibold text-[#090F4E]" : ""}
                  ${item.muted ? "font-normal text-[#6C6C6C]" : ""}
                `}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
};

export default FeatureScroll;
