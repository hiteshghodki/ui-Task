
function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: (string | { label: string; badge: string })[];
}) {
  return (
    <div>
      <h3 className="text-[#090F4E] font-bold text-lg mb-6">{title}</h3>
      <ul className="space-y-3 text-sm">
        {items.map((item, i) =>
          typeof item === "string" ? (
            <li key={i}>{item}</li>
          ) : (
            <li key={i} className="flex items-center gap-2">
              {item.label}
              <span className="text-[10px] px-2 py-[2px] rounded-full bg-[linear-gradient(150deg,#D8FFDD,#BDFFC6)] border border-white text-[#002A06]">
                {item.badge}
              </span>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

function Icon({url} : {url:string}) {
  return (
    <img src={url} className="w-[25px] h-[25px] rounded-full" />
  );
}


export default function Footer() {
const social = [
    {
    id:1, image:"/fb.png",
},
    {
    id:2, image:"/insta.png",
},
    {
    id:3, image:"/linkedin.png",
},
    {
    id:4, image:"/x.png",
},
]

  return (
    <footer className="bg-[linear-gradient(277.75deg,rgba(1,178,216,0.22)_0%,rgba(1,178,216,0.07)_77%)]">
      <div className="max-w-[1400px] mx-auto px-6 py-14">
        {/* Top Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo + About */}
          <div>
            <img
              src="/logo.png"
              alt="LeadCRM"
              className="w-[200px]"
            />
            <p className="mt-6 text-sm text-black max-w-[260px]">
              LeadCRM is LinkedIn integration tool for your CRM.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {social.map((item, i) => (
                <div
                  key={i}
                  className="w-[42px] h-[42px] rounded-full bg-[#01B2D8] flex items-center justify-center"
                >
                  <img src={item.image} className="w-[21px] h-[21px] rounded-sm" />
                </div>
              ))}
            </div>
          </div>

          {/* Integrations */}
          <FooterColumn
            title="Integrations"
            items={[
              "HubSpot",
              "Salesforce",
              "Pipedrive",
              { label: "Close.io", badge: "Coming Soon" },
              { label: "Insightly", badge: "Coming Soon" },
            ]}
          />

          {/* Alternative */}
          <FooterColumn
            title="Alternative"
            items={["Surfe VS LeadCRM", "Linkmatch Alternative"]}
          />

          {/* Legal */}
          <FooterColumn
            title="Legal"
            items={["Privacy Policy", "Terms of Use"]}
          />

          {/* Contact */}
          <div>
            <h3 className="text-[#090F4E] font-bold text-lg mb-6">
              Contact Us
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Icon url={"/support.png"} />
                support@leadcrm.io
              </li>
              <li className="flex items-center gap-3">
                <Icon url={"/contact.png"} />
                +1 231-538-7466
              </li>
              <li className="flex items-center gap-3">
                <Icon url={"/help.png"} />
                Help Center
              </li>
            </ul>

            {/* Chrome Badge */}
            <div className="mt-8 bg-[#242424] text-white rounded-[15px] p-4 flex items-center gap-4 max-w-[260px]">
              <div className="relative">
                <div className="w-[30px] h-[30px] rounded-full border-[5px] border-white" />
                <img
                  src="/favicon.png"
                  className="absolute inset-0 m-auto w-5 h-5"
                />
              </div>
              <div>
                <p className="text-sm">Available in</p>
                <p className="font-medium">Chrome</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[rgba(141,141,141,0.58)] mt-12 pt-6 text-center">
          <p className="text-xs text-[#54595F] mb-4">
            Disclaimer : LeadCRM is not endorsed or certified by LinkedIn.
            All LinkedIn™ logos and trademarks are property of LinkedIn.
          </p>

          <p className="text-sm text-[#7A7A7A]">
            Copyright © 2025 LeadCRM. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
