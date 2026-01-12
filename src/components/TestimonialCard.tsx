import React from "react";

type Props = {
  text: string;
  name: string;
  avatar: string;
};

const TestimonialCard: React.FC<Props> = ({ text, name, avatar }) => {
  return (
    <div className="bg-[#F9F0F8] border border-[rgba(238,239,255,0.99)] rounded-[20px] p-6 flex flex-col justify-between h-full max-w-[420px]">
      
      {/* Review Text */}
      <p className="font-semibold text-[16px] leading-[26px] text-[#2C2C2C]">
        {text}
      </p>

      {/* Rating */}
      <div className="flex items-center gap-2 mt-6">
        <div className="flex items-center justify-center w-[30px] h-[30px] bg-white shadow-[0px_4px_34px_rgba(173,173,173,0.1)] rounded-[6.67px]">
          <img
            src="/capterra.png"
            alt="Capterra"
            className="w-5 h-5"
          />
        </div>

        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="#090F4E"
            >
              <path d="M10 1.5l2.7 5.4 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L1.3 7.8l6-.9L10 1.5z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[rgba(122,122,122,0.31)] my-6" />

      {/* User */}
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="w-[44px] h-[44px] rounded-full"
        />

        <div>
          <p className="font-semibold text-[20px] leading-[20px] text-[#090F4E]">
            {name}
          </p>
          <p className="text-[14px] leading-[14px] text-[#696969] mt-1">
            On Capterra
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
