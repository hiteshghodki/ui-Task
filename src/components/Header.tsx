import React, { useState } from "react";

const NavItem = ({
  label,
  hasDropdown,
}: {
  label: string;
  hasDropdown?: boolean;
}) => (
  <div className="flex items-center gap-2 cursor-pointer font-semibold text-[#222] text-[16px] xl:text-[18px] leading-7">
    {label}
    {hasDropdown && (
      <svg width="14" height="10" viewBox="0 0 17 11" fill="none">
        <path
          d="M1 1L8.5 9L16 1"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )}
  </div>
);

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-white z-50">
      <div
        className="
          mx-auto flex items-center justify-between
          px-4 md:px-6 xl:px-[40px]
          h-[64px]
          max-w-[1440px]
        "
      >
        {/* Logo */}
        <div className="w-[160px] xl:w-[208.57px] flex items-center">
          <span className="text-[22px] xl:text-[24px] font-bold text-[#009BD6]">
            Lead<span className="text-[#01B3D9]">CRM</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 xl:gap-[59px]">
          <nav className="flex items-center gap-6 xl:gap-[43px]">
            <NavItem label="Product" hasDropdown />
            <NavItem label="Pricing" />
            <NavItem label="Resources" hasDropdown />
            <NavItem label="Company" hasDropdown />
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              className="
                h-[48px] xl:h-[52px]
                px-6 xl:w-[215px]
                rounded-[10px]
                bg-[#2D96BC]
                text-white font-semibold text-[15px] xl:text-[16px]
              "
            >
              Get Your Free Account
            </button>

            <button
              className="
                h-[48px] xl:h-[52px]
                px-4 xl:w-[130px]
                rounded-[10px]
                border border-[#2D96BC]
                text-[#2D96BC]
                font-semibold text-[15px] xl:text-[16px]
                flex items-center justify-center gap-2
              "
            >
              Login
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center"
        >
          <svg width="28" height="28" fill="none">
            <path
              d="M4 7H24M4 14H24M4 21H24"
              stroke="#222"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-6 space-y-6">
          <NavItem label="Product" hasDropdown />
          <NavItem label="Pricing" />
          <NavItem label="Resources" hasDropdown />
          <NavItem label="Company" hasDropdown />

          <div className="flex flex-col gap-3 pt-4">
            <button className="h-[48px] rounded-[10px] bg-[#2D96BC] text-white font-semibold">
              Get Your Free Account
            </button>
            <button className="h-[48px] rounded-[10px] border border-[#2D96BC] text-[#2D96BC] font-semibold">
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
